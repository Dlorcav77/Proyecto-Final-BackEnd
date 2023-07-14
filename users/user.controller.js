import { handleErrors } from "../db/errors.js";
import { userModel } from "./user.model.js";

const getAll = async(req,res) => {
    try {
        const result = await userModel.findAll();
        return res.status(200).json({ok:true , result})
    } catch (error) {
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const getOne = async(req,res) => {
    const {id} = req.params;

    try {
        const result = await userModel.findOne(id);
        return res.status(200).json({ok:true , result})
    } catch (error) {
        console.log(error)
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const create = async(req,res) => {
    const {name, lastName, email, password} = req.body;

    try {
        const result = await userModel.create({name, lastName, email, password});
        return res.status(201).json({ok:true, result});
    } catch (error) {
        console.log(error)
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    const {name, lastName, email, password} = req.body;
    try {
        const result = await userModel.update(id, {name, lastName, email, password});
        return res.status(200).json({ok:true, result});
    } catch (error) {
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const remove = async(req,res) => {
    const {id} = req.params;
    try {
        const result = await userModel.remove(id);
        return res.status(200).json({ok:true, result});
    } catch (error) {
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

export const userController = {
    getAll,
    getOne,
    create,
    update,
    remove,
};