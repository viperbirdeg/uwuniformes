const getUsers = 'SELECT * FROM public."Usuario"';
const checkEmailExists =
  'SELECT s FROM "Users_schema"."Users" s WHERE s.usr_email = $1';
const addUser =
  'INSERT INTO "Users_schema"."Users" (usr_username, usr_email, usr_pass) VALUES ($1, $2, $3)';

module.exports = {
  getUsers,
  checkEmailExists,
  addUser,
};
// Path: server/queries/users.js
