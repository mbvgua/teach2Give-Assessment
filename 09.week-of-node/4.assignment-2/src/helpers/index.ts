import Joi from 'joi'

export const registerSchema = Joi.object({
    name:Joi.string().required(),
    // email:Joi.string().required().email().messages{-> find out later}
    password:Joi.string().required(),
    // email:Joi.string().required().email().pattern(
        // new RegExp('/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/')
        // new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$')
    // )
    email:Joi.string().required().email()

})