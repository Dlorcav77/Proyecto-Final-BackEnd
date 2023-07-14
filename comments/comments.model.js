import {pool} from "../db/conn.js";

const findAll = async() => {
    const {rows} = await pool.query("select * from comments");
    return rows;
};

const findOne = async(id) => {
    console.log(id)
    if(!id){
        throw{code:"400"}
    }
    const query  = "select * from comments WHERE id = $1";
    const {rows} = await pool.query(query, [id]);
    return rows[0];
};

const  create = async({id_user, id_classes, comment, date}) =>{
    if(!id_user || !id_classes || !comment || !date){
        throw{code:"400"}
    }

    const query = "INSERT INTO comments (id_user, id_classes, comment, date)VAlUES($1,$2,$3,$4) RETURNING *";
    const {rows} = await pool.query(query, [id_user, id_classes, comment, date]);
    return rows[0];
};

const  update = async(id, {id_user, id_classes, comment, date}) =>{
    if(!id_user || !id_classes || !comment || !date || !id){
        throw{code:"400"}
    }
    const query = "UPDATE comments SET id_user = $1, id_classes = $2, comment = $3, date = $4 WHERE id = $5 RETURNING *";
    const {rows} = await pool.query(query, [id_user, id_classes, comment, date, id]);
    return rows[0];
};

const  remove = async(id) =>{
    if(!id){
        throw{code:"400"}
    }
    const query = "DELETE FROM comments WHERE id = $1 RETURNING *";
    const {rows} = await pool.query(query, [id]);
    return rows[0];
};

export const commentsModel = {
    findAll,
    findOne,
    create,
    update,
    remove,
};