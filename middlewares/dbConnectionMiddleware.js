import dbConnection from "../database/dbConnection.js"

const dbConnectionMiddleware = async (req, res, next) => {
    try{
        await dbConnection();
        next();
    }catch(e){
        console.log(e.message);
        res.status(500).send('internal error.');
    }
}

export default dbConnectionMiddleware;