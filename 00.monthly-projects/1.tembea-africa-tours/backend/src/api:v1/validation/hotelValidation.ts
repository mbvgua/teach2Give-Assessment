import Joi from 'joi'

export const hotelSchema = Joi.object({
    h_name:Joi.string().required(),
    h_image_url:Joi.string().required(),
    h_rating:Joi.number().optional().min(0).max(5),
    h_price:Joi.number().required()
})