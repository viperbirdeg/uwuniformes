import pool from "../database.js";
import bcrypt from "bcrypt";
import queries from "../queries/users.js";

const getUsers = async (req, res) => {
  try {
    console.log('perro');
    const response = await pool.query(queries.getUsers);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const addUser = async (req, res) => {
  let { usu_nombre, usu_email, usu_pass, usu_direccion, usu_telefono } =
    req.body;
  console.log(usu_nombre, usu_email, usu_pass, usu_direccion, usu_telefono);
  try {
    const results = await pool.query(queries.checkEmailExists, [usu_email]);
    if (results.rows.length) {
      res.send("Ese email ya existe.");
    } else {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(usu_pass, salt);
      usu_pass = hash;
      await pool.query(queries.addUser, [usu_nombre, usu_email, usu_pass, usu_direccion, usu_telefono]);
      res.status(201).send("Nuevo usuario agregado exitosamente.");
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default {
  getUsers,
  addUser,
};
