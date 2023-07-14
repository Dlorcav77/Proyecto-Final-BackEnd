import {pool} from "../db/conn.js";

const findAll = async() => {
    const {rows} = await pool.query("select * from sales_detail");
    return rows;
};

const findOne = async(id) => {
    console.log(id)
    if(!id){
        throw{code:"400"}
    }
    const query  = "select * from sales_detail WHERE id = $1";
    const {rows} = await pool.query(query, [id]);
    return rows[0];
};

const  create = async({id_classes, id_sales, amount, price}) =>{
    if(!id_classes || !id_sales || !amount || !price){
        throw{code:"400"}
    }

    const query = "INSERT INTO sales_detail (id_classes, id_sales, amount, price)VAlUES($1,$2,$3,$4) RETURNING *";
    const {rows} = await pool.query(query, [id_classes, id_sales, amount, price]);
    return rows[0];
};

const  update = async(id, {id_classes, id_sales, amount, price}) =>{
    if(!id_classes || !id_sales || !amount || !price){
        throw{code:"400"}
    }
    const query = "UPDATE sales_detail SET id_classes = $1, id_sales = $2, amount = $3, price = $4 WHERE id = $5 RETURNING *";
    const {rows} = await pool.query(query, [id_classes, id_sales, amount, price, id]);
    return rows[0];
};

const  remove = async(id) =>{
    if(!id){
        throw{code:"400"}
    }
    const query = "DELETE FROM sales_detail WHERE id = $1 RETURNING *";
    const {rows} = await pool.query(query, [id]);
    return rows[0];
};

export const sales_detailModel = {
    findAll,
    findOne,
    create,
    update,
    remove,
};