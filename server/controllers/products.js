import pool from "../database.js";
import queries from "../queries/products.js";
import multer from "multer";


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const createProduct = async (req, res) => {
  upload.single("pro_imagen")(req, res, async (err) => {
    if (err) {
      return res.status(400).json({ error: err.message });
    }

    const {
      pro_nombre,
      pro_descripcion,
      pro_precio,
      pro_stock,
      pro_color,
      pro_tela,
      pro_talla,
      pro_genero,
    } = req.body;

    const pro_imagen = req.file ? req.file.buffer : null;

    const client = await pool.connect();
    try {
      const response = await client.query(queries.createProduct, [
        pro_nombre,
        pro_descripcion,
        pro_precio,
        pro_stock,
        pro_color,
        pro_tela,
        pro_talla,
        pro_genero,
        pro_imagen,
      ]);
      res.status(200).json({ message: "Product added successfully!" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    } finally {
      client.release();
    }
  });
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

export default {
  createProduct,
  getAllProducts,
};
