import Joi from 'joi'

export const tourSchema = Joi.object({
    t_name:Joi.string().required(),
    t_image_url:Joi.string().required(),
    t_rating:Joi.number().optional().min(0).max(5),
    t_price:Joi.number().required()
})