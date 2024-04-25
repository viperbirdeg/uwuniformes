import pool from "../database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import queries from "../queries/users.js";

const getUsers = async (req, res) => {
  try {
    const response = await pool.query(queries.getUsers);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Add user function
const AddUser = (req, res) => {
  let { usr_username, usr_email, usr_pass } = req.body;
  console.log(usr_username, usr_email, usr_pass);
  pool.query(queries.checkEmailExists, [usr_email], (error, results) => {
    if (error) throw error;
    if (results.rows.length) {
      res.send("Ese email ya existe.");
    } else {
      bcrypt.genSalt(10, (error, salt) => {
        if (error) throw error;
        bcrypt.hash(usr_pass, salt, (error, hash) => {
          if (error) throw error;
          usr_pass = hash;
          pool.query(
            queries.addUser,
            [usr_username, usr_email, usr_pass],
            (error, results) => {
              if (error) throw error;
              res.status(201).send("Nuevo usuario agregado exitosamente.");
            }
          );
        });
      });
    }
  });
};

module.exports = {
  addUser,
  getUsers,
};
