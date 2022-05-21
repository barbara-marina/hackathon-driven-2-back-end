import { getUser, getSession } from "../database/actions.js";

export default async function validateToken(req, res, next) {
    const authorization = req.headers.authorization;
    const token = authorization?.replace("Bearer ", "").trim();

    if (!token) return res.status(401).send("Token not received.");

    try {
        const session = await getSession({token});
        if (!session) return res.status(401).send("This session does not exist.");

        const user = await getUser({_id: session.userId});
        if (!user) return res.status(401).send("This user does not exist");
        
        delete user.password;

        res.locals.user = user;
    } catch(e) {
        console.log(e);
        return res.sendStatus(500);
    }

    next();
}