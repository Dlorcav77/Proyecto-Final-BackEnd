import { handleErrors } from "../db/errors.js";
import { userModel } from "../models/user.model.js";

const getAll = async(req,res) => {
    try {
        const result = await userModel.findAll();
        return res.status(200).json({ok:true , result})
    } catch (error) {
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};
function validarFormatoEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

const create = async(req,res) => {
    const {name, lastName, email, password} = req.body;

    const esValido = validarFormatoEmail(email);
    if (!esValido) {
      return res.status(702).json({ ok: false, result: "El formato del correo electrónico es inválido" });
    }
    try {
        const result = await userModel.create({name, lastName, email, password});
        return res.status(201).json({ok:true, result});
    } catch (error) {
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
    create,
    update,
    remove,
};