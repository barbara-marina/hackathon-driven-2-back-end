// import { getQuestions } from "../database/actions.js";

export async function getUserData(_req, res) {
    const { user } = res.locals;
    res.status(200).send(user);
}