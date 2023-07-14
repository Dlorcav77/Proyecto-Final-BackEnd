import {pool} from "../db/conn.js";

const findAll = async() => {
    const {rows} = await pool.query("select * from favorites");
    return rows;
};

const findOne = async(id) => {
    console.log(id)
    if(!id){
        throw{code:"400"}
    }
    const query  = "select * from favorites WHERE id = $1";
    const {rows} = await pool.query(query, [id]);
    return rows[0];
};

const  create = async({id_user, id_classes}) =>{
    if(!id_user || !id_classes){
        throw{code:"400"}
    }

    const query = "INSERT INTO favorites (id_user, id_classes)VAlUES($1,$2) RETURNING *";
    const {rows} = await pool.query(query, [id_user, id_classes]);
    return rows[0];
};

const  update = async(id, {id_user, id_classes}) =>{
    if(!id_user || !id_classes || !id){
        throw{code:"400"}
    }
    const query = "UPDATE favorites SET id_user = $1, id_classes = $2 WHERE id = $3 RETURNING *";
    const {rows} = await pool.query(query, [id_user, id_classes, id]);
    return rows[0];
};

const  remove = async(id) =>{
    if(!id){
        throw{code:"400"}
    }
    const query = "DELETE FROM favorites WHERE id = $1 RETURNING *";
    const {rows} = await pool.query(query, [id]);
    return rows[0];
};

export const favoritesModel = {
    findAll,
    findOne,
    create,
    update,
    remove,
};