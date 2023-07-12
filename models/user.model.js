import {pool} from "../db/conn.js";

const findAll = async() => {
    const {rows} = await pool.query("selectr * from posts");
    return rows;
};

const  create = async({titulo, img, descripcion, likes}) =>{
    if(!titulo || !img || !descripcion || !likes){
        throw{code:"400"}
    }

    const query = "INSERT INTO posts (titulo, img, descripcion, likes)VAlUES($1,$2,$3,$4) RETURNING *";
    const {rows} = await pool.query(query, [titulo, img, descripcion, likes]);
    return rows[0];
};

const  update = async(id, {titulo, img, descripcion, likes}) =>{
    if(!titulo || !img || !descripcion || !likes || !id){
        throw{code:"400"}
    }
    const query = "UPDATE posts SET titulo = $1, img = $2, descripcion = $3, likes = $4  WHERE id = $5 RETURNING *";
    const {rows} = await pool.query(query, [titulo, img, descripcion, likes, id]);
    return rows[0];
};

const  remove = async(id) =>{
    if(!id){
        throw{code:"400"}
    }
    const query = "DELETE FROM posts WHERE id = $1 RETURNING *";
    const {rows} = await pool.query(query, [id]);
    return rows[0];
};

export const userModel = {
    findAll,
    create,
    update,
    remove,
};