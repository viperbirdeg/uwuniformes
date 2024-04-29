const getUsers = 'SELECT * FROM public."Usuario"';
const checkEmailExists =
  'SELECT s FROM public."Usuario" s WHERE s.correo = $1';
const addUser =
  'INSERT INTO public."Usuario" (nombre, correo, password) VALUES ($1, $2, $3)';

export default {
  getUsers,
  checkEmailExists,
  addUser,
};