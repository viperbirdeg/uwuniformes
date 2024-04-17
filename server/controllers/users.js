import pool from '../database.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import queries from '../queries/users.js';

const getUsers = async (req, res) => {
    try {
        const response = await pool.query(queries.getUsers);
        res.status(200).json(response.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}