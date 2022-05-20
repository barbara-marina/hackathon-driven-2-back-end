import joi from "joi";

const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().alphanum().min(8).regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/).required()
});

export default signInSchema;