import Joi from "joi"

const createSchema = Joi.object({
    id_user   : Joi.number().integer().min(1).required(),
    id_classes: Joi.number().integer().min(1).required(),
    comment   : Joi.string().trim().min(3).max(100).required(),
    date      : Joi.date().required()
})

export const validateComments = (req, res, next) => {
    const {error} = createSchema.validate(req.body);
    if(error){
        return res.status(400).json({error: error.message})
    }

    next()

}