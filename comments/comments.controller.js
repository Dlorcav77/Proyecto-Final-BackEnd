import { handleErrors } from "../db/errors.js";
import { commentsModel } from "./comments.model.js";

const getAll = async(req,res) => {
    try {
        const result = await commentsModel.findAll();
        return res.status(200).json({ok:true , result})
    } catch (error) {
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const getOne = async(req,res) => {
    const {id} = req.params;

    try {
        const result = await commentsModel.findOne(id);
        return res.status(200).json({ok:true , result})
    } catch (error) {
        console.log(error)
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const create = async(req,res) => {
    const {id_user, id_classes, comment, date } = req.body;

    try {
        const result = await commentsModel.create({id_user, id_classes, comment, date});
        return res.status(201).json({ok:true, result});
    } catch (error) {
        console.log(error)
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    const {id_user, id_classes, comment, date} = req.body;
    try {
        const result = await commentsModel.update(id, {id_user, id_classes, comment, date});
        return res.status(200).json({ok:true, result});
    } catch (error) {
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const remove = async(req,res) => {
    const {id} = req.params;
    try {
        const result = await commentsModel.remove(id);
        return res.status(200).json({ok:true, result});
    } catch (error) {
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

export const commentsController = {
    getAll,
    getOne,
    create,
    update,
    remove,
};