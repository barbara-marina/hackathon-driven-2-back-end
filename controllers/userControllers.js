import { v4 as uuid } from "uuid";
import { setUser, getUser, setSession, deleteSession } from "../database/actions.js";

export async function getUserData(req, res) {
    const { user } = res.locals;
    res.status(200).send(user);
}