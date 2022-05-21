import { getQuestions } from "../database/actions.js";

const getQuestionsController = async (req, res) => {
    try{
        const questions = await getQuestions();
        res.status(200).send(questions);
    }catch(e){
        console.log(e.message);
        res.status(500).send('internal error.');
    }
}

export default getQuestionsController;