
const github = new (require('github'))();

module.exports = function(cb){
  require('../questions/github-auth')()
  .then( access =>{
    github.authenticate({
      type: "basic",
      username: access.user,
      password: access.pass
    });
    cb(null, github)
  })
  .catch( err => cb(err));
}
