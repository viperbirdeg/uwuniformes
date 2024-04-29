const createProduct =
  "INSERT INTO public.productos (pro_nombre, pro_descripcion, pro_precio, pro_stock, pro_color, pro_tela, pro_talla, pro_genero, pro_imagen) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)";

const getAllProducts = "SELECT t.* FROM public.productos t";

const getOneProduct = "SELECT * FROM public.productos WHERE pro_id = $1";

export default {
  createProduct,
  getAllProducts,
  getOneProduct,
};
