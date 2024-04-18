const createProduct  = 'INSERT INTO public."Productos"(descripcion,precio,stock,nombre,disponibilidad,id_color,id_talla,id_tela,id_genero) values($1,$2,$3,$4,$5,$6,$7,$8,$9)';

const getAllProducts = 'SELECT * FROM public."Productos_vw'; 

const getOneProduct = 'SELECT * FROM public."Productos_vw WHERE id = $1';

module.exports = { createProduct }