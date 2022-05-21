import { getQuestions } from "../database/actions.js";

export async function getUserData(_req, res) {
    const { user } = res.locals;
    try {
        res.status(200).send(user);
    } catch (e) {
        console.log(e);
        return res.sendStatus(500);
    }
    
}

export async function getTheQuestions(_req, res) {
    try {
        const questions = await getQuestions();
        
        res.status(200).send(questions);
    } catch (e) {
        console.log(e);
        return res.sendStatus(500);
    }
}