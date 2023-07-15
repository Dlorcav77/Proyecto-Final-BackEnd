import {pool} from "../db/conn.js";

const findAll = async() => {
    const {rows} = await pool.query("select * from ratings");
    return rows;
};

const findOne = async(id) => {
    const query  = "select * from ratings WHERE id = $1";
    const {rows} = await pool.query(query, [id]);
    return rows[0];
};

const  create = async({id_user, id_classes, rating, date}) =>{
    const query = "INSERT INTO ratings (id_user, id_classes, rating, date)VAlUES($1,$2,$3,$4) RETURNING *";
    const {rows} = await pool.query(query, [id_user, id_classes, rating, date]);
    return rows[0];
};

const  update = async(id, {id_user, id_classes, rating, date}) =>{
    const query = "UPDATE ratings SET id_user = $1, id_classes = $2, rating = $3, date = $4 WHERE id = $5 RETURNING *";
    const {rows} = await pool.query(query, [id_user, id_classes, rating, date, id]);
    return rows[0];
};

const  remove = async(id) =>{
    const query = "DELETE FROM ratings WHERE id = $1 RETURNING *";
    const {rows} = await pool.query(query, [id]);
    return rows[0];
};

export const ratingsModel = {
    findAll,
    findOne,
    create,
    update,
    remove,
};