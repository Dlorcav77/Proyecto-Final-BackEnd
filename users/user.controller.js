import bcript from "bcryptjs"

import { handleErrors } from "../db/errors.js";
import { userModel } from "./user.model.js";

const getAll = async(req,res) => {
    try {
        const result = await userModel.findAll();
        const newResult = result.map((item) => {
            const { password, ...rest } = item;
            return rest;
        });
        return res.status(200).json({ok:true , result: newResult})
    } catch (error) {
        console.log(error)
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const getOne = async(req,res) => {
    const {id} = req.params;

    try {
        const result = await userModel.findOne(id);
        const { password: _, ...newResult } = result;
        return res.status(200).json({ok:true , result: newResult})
    } catch (error) {
        console.log(error)
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const create = async(req,res) => {
    const {name, lastName, email, password} = req.body;

    try {
        const result = await userModel.create({name, lastName, email, password: bcript.hashSync(password, 10),});
        const { password: _, ...newResult } = result;
        return res.status(201).json({ok:true, result: newResult});
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
        const { password: _, ...newResult } = result;
        return res.status(200).json({ok:true, result: newResult});
    } catch (error) {
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const remove = async(req,res) => {
    const {id} = req.params;
    try {
        const result = await userModel.remove(id);
        const { password: _, ...newResult } = result;
        return res.status(200).json({ok:true, result: newResult});
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