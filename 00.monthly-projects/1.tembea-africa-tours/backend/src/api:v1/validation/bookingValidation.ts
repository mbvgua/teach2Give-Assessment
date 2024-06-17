import Joi from 'joi'

export const bookingSchema = Joi.object({
    user_id:Joi.string().required(),
    tour_id:Joi.string().optional(),
    hotel_id:Joi.string().optional()
})