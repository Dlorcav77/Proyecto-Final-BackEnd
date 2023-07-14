import {pool} from "../db/conn.js";

const findAll = async() => {
    const {rows} = await pool.query("select * from classes");
    return rows;
};

const  create = async({subject, name, description, level, schebule, price, id_user}) =>{
    if(!subject || !name || !description || !level || !schebule || !price || !id_user){
      throw{code:"400"}
    }
    console.log(subject)
    const query = "INSERT INTO classes (subject, name, description, level, schedule, price, id_user)VAlUES($1,$2,$3,$4,$5,$6,$7) RETURNING *";
    const {rows} = await pool.query(query, [subject, name, description, level, schebule, price, id_user]);
    return rows[0];

};

const  update = async(id, {subject, name, description, level, schedule, price, id_user}) =>{
    if(!subject || !name || !description || !level || !schedule || !price || !id_user){
        throw{code:"400"}
    }
    console.log(name)
    const query = "UPDATE classes SET subject = $1, name = $2, description = $3, level = $4, schedule = $5, price = $6, id_user = $7  WHERE id = $8 RETURNING *";
    console.log(query)
    const {rows} = await pool.query(query, [subject, name, description, level, schedule, price, id_user, id]);
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