import { Users, Sessions, Questions } from './models.js';

export const setUser = async (body) => {
    const insertion = await Users.create(body);
    if(insertion){
        return true;
    }
    return false;
}

export const getUser = async (body) => {
    const user = await Users.findOne(body).exec();
    return user; 
}

export const setSession = async (body) => {
    const insertion = await Sessions.create(body);
    if(insertion){
        return true;
    }
    return false;
}

export const getSession = async (token) => {
    const session = await Sessions.findOne(token).exec();
    return session;
}

export const deleteSession = async (identifier) => {
    const unlink = await Sessions.findOneAndDelete(identifier).exec();
    if(unlink){
        return true;
    }
    return false;
}

export const getQuestions = async () => {
    const questions = await Questions.find({}).exec();
    return questions;
}