import { handleErrors } from "../db/errors.js";
import { classesModel } from "./classes.model.js";

const getAll = async(req,res) => {
    try {
        const result = await classesModel.findAll();
        return res.status(200).json({ok:true , result})
    } catch (error) {
        console.log(error)
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const getOne = async(req,res) => {
    const {id} = req.params;
    try {
        const result = await classesModel.findOne(id);
        return res.status(200).json({ok:true , result})
    } catch (error) {
        console.log(error)
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const create = async(req,res) => {
    const {subject, name, description, level, schebule, price, img} = req.body;
    const id_user = req.id_user;
    try {
        const result = await classesModel.create({subject, name, description, level, schebule, price, img, id_user});
        return res.status(201).json({ok:true, result});
    } catch (error) {
        console.log(error)
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    const {subject, name, description, level, schebule, price, img, id_user} = req.body;
    try {
        const result = await classesModel.update(id, {subject, name, description, level, schebule, price, img, id_user});
        return res.status(200).json({ok:true, result});
    } catch (error) {
        console.log(error)
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const remove = async(req,res) => {
    const {id} = req.params;
    try {
        const result = await classesModel.remove(id);
        return res.status(200).json({ok:true, result});
    } catch (error) {
        console.log(error)
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

export const classesController = {
    getAll,
    getOne,
    create,
    update,
    remove,
};