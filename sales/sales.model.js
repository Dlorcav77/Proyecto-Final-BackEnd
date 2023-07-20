import { pool } from "../db/conn.js";

 const findAll = async () => {
     const { rows } = await pool.query("select * from sales");
     return rows;
 };

const create = async ({ id_user, date, total }) => {
    const query = "INSERT INTO sales (id_user, date, total)VAlUES($1,$2,$3) RETURNING *";
    const { rows } = await pool.query(query, [id_user, date, total]);
    return rows[0];
};

export const salesModel = {
    findAll,
    create
};