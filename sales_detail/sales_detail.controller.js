import { handleErrors } from "../db/errors.js";
import { sales_detailModel } from "./sales_detail.model.js";

const getAll = async(req,res) => {
    try {
        const result = await sales_detailModel.findAll();
        return res.status(200).json({ok:true , result})
    } catch (error) {
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const getOne = async(req,res) => {
    const {id} = req.params;

    try {
        const result = await sales_detailModel.findOne(id);
        return res.status(200).json({ok:true , result})
    } catch (error) {
        console.log(error)
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const create = async(req,res) => {
    const {id_classes, id_sales, amount, price} = req.body;

    try {
        const result = await sales_detailModel.create({id_classes, id_sales, amount, price});
        return res.status(201).json({ok:true, result});
    } catch (error) {
        console.log(error)
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    const {id_classes, id_sales, amount, price} = req.body;
    try {
        const result = await sales_detailModel.update(id, {id_classes, id_sales, amount, price});
        return res.status(200).json({ok:true, result});
    } catch (error) {
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

const remove = async(req,res) => {
    const {id} = req.params;
    try {
        const result = await sales_detailModel.remove(id);
        return res.status(200).json({ok:true, result});
    } catch (error) {
        const {status,message} = handleErrors(error.code);
        return res.status(status).json({ok:false, result:message})
    }
};

export const sales_detailController = {
    getAll,
    getOne,
    create,
    update,
    remove,
};