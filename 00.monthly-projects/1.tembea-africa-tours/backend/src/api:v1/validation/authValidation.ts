import Joi from 'joi'

export const registerSchema = Joi.object({
    u_name:Joi.string().required(),
    // email:Joi.string().required().email().messages{-> find out later}
    u_email:Joi.string().required().email(),
    u_password:Joi.string().required().pattern(
        new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$')
    )

})