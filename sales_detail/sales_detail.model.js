import { pool } from "../db/conn.js";

// const findAll = async () => {
//     const { rows } = await pool.query("select * from sales_detail");
//     return rows;
// };

// const findOne = async (id) => {
//     const query = "select * from sales_detail WHERE id = $1";
//     const { rows } = await pool.query(query, [id]);
//     return rows[0];
// };

const create = async ({ id_classes, id_sales, amount, price }) => {
    const query = "INSERT INTO sales_detail (id_classes, id_sales, amount, price)VAlUES($1,$2,$3,$4) RETURNING *";
    const { rows } = await pool.query(query, [id_classes, id_sales, amount, price]);
    return rows[0];
};

export const sales_detailModel = {
    // findAll,
    // findOne,
    create
};