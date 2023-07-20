import { pool } from "../db/conn.js";


 const findAll = async () => {
     const { rows } = await pool.query("select * from sales");
     return rows;
 };

// const findOne = async (id) => {
//     const query = "select * from sales WHERE id = $1";
//     const { rows } = await pool.query(query, [id]);
//     return rows[0];
// };

const create = async ({ id_user, date, total }) => {
    const query = "INSERT INTO sales (id_user, date, total)VAlUES($1,$2,$3) RETURNING *";
    const { rows } = await pool.query(query, [id_user, date, total]);
    return rows[0];
};

export const salesModel = {
     findAll,
    // findOne,
    create
};