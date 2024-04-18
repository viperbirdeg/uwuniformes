import pool from "../database.js";
import queries from "../queries/products.js";

const createProduct = async (req, res) => {
  try {
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const precio = req.body.precio;
    const stock = req.body.stock;
    const categoria = req.body.categoria;
    const disponibilidad = req.body.disponibilidad;
    const color = req.body.color;
    const talla = req.body.talla;
    const tela = req.body.tela;
    const genero = req.body.genero;

    const client = await pool.connect();
    const response = await client.query(queries.createProduct, [
      descripcion,
      precio,
      stock,
      nombre,
      disponibilidad,
      color,
      talla,
      tela,
      genero,
    ]);
    res.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  finnal;
};

const getAllProducts = async (req, res) => {
  const client = await pool.connect();
  try {
    const response = await client.query(queries.getAllProducts);
    return response.status(200).json(response.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
  }
};

module.exports = { createProduct, getAllProducts };
