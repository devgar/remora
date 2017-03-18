
/* Returns a promise
 * Should use .next( answers => ).catch( err => )
 *
 */
module.exports = function( ){
  return require('inquirer').prompt([
    {
      type: 'input', name: 'user',
      message: 'Insert your user'
    },
    {
      type: 'password', name: 'pass',
      message: 'Insert your password'
    }
  ]);
};
