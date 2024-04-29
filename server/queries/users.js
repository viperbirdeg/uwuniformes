const getUsers = "SELECT t.* FROM public.usuarios t";
const checkEmailExists =
  "SELECT t.* FROM public.usuarios t WHERE t.usu_email = $1";
const addUser =
  "INSERT INTO public.usuarios (usu_nombre, usu_email, usu_pass, usu_direccion, usu_telefono) VALUES ($1, $2, $3, $4, $5)";

export default {
  getUsers,
  checkEmailExists,
  addUser,
};
