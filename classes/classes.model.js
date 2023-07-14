import {pool} from "../db/conn.js";

const findAll = async() => {
    const {rows} = await pool.query("select * from classes");
    return rows;
};

const  create = async({subject, name, description, level, schebule, price, img, id_user}) =>{
    if(!subject || !name || !description || !level || !schebule || !price || !img || !id_user){
        throw{code:"400"}
    }
    console.log(subject)
    const query = "INSERT INTO classes (subject, name, description, level, schedule, price, img, id_user)VAlUES($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *";
    const {rows} = await pool.query(query, [subject, name, description, level, schebule, price, img, id_user]);
    return rows[0];

};

const  update = async(id, {subject, name, description, level, schebule, price, img, id_user}) =>{
    if(!subject || !name || !description || !level || !schebule || !price || !img || !id_user){
        throw{code:"400"}
    }
    const query = "UPDATE classes SET subject = $1, name = $2, description = $3, level = $4, schedule = $5, price = $6, img = $7, id_user = $8  WHERE id = $9 RETURNING *";
    const {rows} = await pool.query(query, [subject, name, description, level, schebule, price, img, id_user, id]);
    return rows[0];
};

const  remove = async(id) =>{
    if(!id){
        throw{code:"400"}
    }
    const query = "DELETE FROM classes WHERE id = $1 RETURNING *";
    const {rows} = await pool.query(query, [id]);
    return rows[0];
};

export const classesModel = {
    findAll,
    create,
    update,
    remove,
};