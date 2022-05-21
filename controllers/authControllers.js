import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { setUser, getUser, setSession, deleteSession } from "../database/actions.js";

export async function signUp(req, res) {
    const user = req.body;
    try{
        const hash = bcrypt.hashSync(user.password, 10);
        await setUser({...user, password: hash});
        
        const userData = await getUser({email: user.email});
        if (!userData) return res.sendStatus(401);
        
        res.status(202).send("New user created successfully.");

    } catch(e) {
        console.log(e);
        return res.sendStatus(500);
    }
}

export async function signIn(req, res) {
    const user = req.body;

    try {
        const userData = await getUser({email: user.email});

        if (userData && bcrypt.compareSync(user.password, userData.password)) {
            const token = uuid();
            
            await setSession({token, userId: userData._id});
            
            return res.send(token);
        }

        res.status(401).send("Unauthorized! Email or password is incorrect.");

    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

export async function logOut(req, res) {
    const authorization = req.headers.authorization;
    const token = authorization?.replace("Bearer ", "").trim();

    try {
        await deleteSession({token});

        res.sendStatus(200);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}