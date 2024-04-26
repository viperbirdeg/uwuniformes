const getUsers = 'SELECT * FROM public."Usuario"';
const checkEmailExists =
  'SELECT s FROM "Users_schema"."Users" s WHERE s.usr_email = $1';
const addUser =
  'INSERT INTO "Users_schema"."Users" (usr_username, usr_email, usr_pass) VALUES ($1, $2, $3)';

export default {
  getUsers,
  checkEmailExists,
  addUser,
};

// module.exports = {
//   getUsers,
//   checkEmailExists,
//   addUser,
// };
// export every variable as default