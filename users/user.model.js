import { pool } from "../db/conn.js";

const findAll = async () => {
    const { rows } = await pool.query("select * from users");
    return rows;
};

const findOne = async (id) => {
    try {
        const query = "select * from users WHERE id = $1";
        const { rows } = await pool.query(query, [id]);
        return rows[0];

    } catch (error) {
        throw { code: error.code, message: error.message };
    }

};

const findLogin = async (email) => {
    const query = "select * from users WHERE email = $1";
    const { rows } = await pool.query(query, [email]);
    return rows[0];
};

const create = async ({ name, lastName, email, password, img_avatar }) => {
    const query = "INSERT INTO users (name, lastName, email, password, img_avatar)VAlUES($1,$2,$3,$4,$5) RETURNING *";
    const { rows } = await pool.query(query, [name, lastName, email, password, img_avatar]);
    return rows[0];
};

const update = async (id, { name, lastName, email, password }) => {
    const query = "UPDATE users SET name = $1, lastName = $2, email = $3, password = $4  WHERE id = $5 RETURNING *";
    const { rows } = await pool.query(query, [name, lastName, email, password, id]);
    return rows[0];
};

const remove = async (id) => {
    const query = "DELETE FROM users WHERE id = $1 RETURNING *";
    const { rows } = await pool.query(query, [id]);
    return rows[0];
};

export const userModel = {
    findAll,
    findOne,
    findLogin,
    create,
    update,
    remove,
};