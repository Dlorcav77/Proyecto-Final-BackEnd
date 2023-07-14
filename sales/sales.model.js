import {pool} from "../db/conn.js";

const findAll = async() => {
    const {rows} = await pool.query("select * from sales");
    return rows;
};

const findOne = async(id) => {
    console.log(id)
    if(!id){
        throw{code:"400"}
    }
    const query  = "select * from sales WHERE id = $1";
    const {rows} = await pool.query(query, [id]);
    return rows[0];
};

const  create = async({id_user, date, total}) =>{
    if(!id_user || !date || !total){
        throw{code:"400"}
    }

    const query = "INSERT INTO sales (id_user, date, total)VAlUES($1,$2,$3) RETURNING *";
    const {rows} = await pool.query(query, [id_user, date, total]);
    return rows[0];
};

const  update = async(id, {id_user, date, total}) =>{
    if(!id_user || !date || !total){
        throw{code:"400"}
    }
    const query = "UPDATE sales SET id_user = $1, date = $2, total = $3 WHERE id = $4 RETURNING *";
    const {rows} = await pool.query(query, [id_user, date, total, id]);
    return rows[0];
};

const  remove = async(id) =>{
    if(!id){
        throw{code:"400"}
    }
    const query = "DELETE FROM sales WHERE id = $1 RETURNING *";
    const {rows} = await pool.query(query, [id]);
    return rows[0];
};

export const salesModel = {
    findAll,
    findOne,
    create,
    update,
    remove,
};