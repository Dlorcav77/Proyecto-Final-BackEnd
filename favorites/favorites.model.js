import {pool} from "../db/conn.js";

const findAll = async() => {
    const {rows} = await pool.query("select * from favorites");
    return rows;
};

const findOne = async(id) => {
    const query  = "select * from favorites WHERE id = $1";
    const {rows} = await pool.query(query, [id]);
    return rows[0];
};

const  create = async({id_user, id_classes}) =>{
    const query = "INSERT INTO favorites (id_user, id_classes)VAlUES($1,$2) RETURNING *";
    const {rows} = await pool.query(query, [id_user, id_classes]);
    return rows[0];
};

const  remove = async(id) =>{
    const query = "DELETE FROM favorites WHERE id = $1 RETURNING *";
    const {rows} = await pool.query(query, [id]);
    return rows[0];
};

export const favoritesModel = {
    findAll,
    findOne,
    create,
    remove,
};