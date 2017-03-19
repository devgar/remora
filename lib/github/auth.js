
const GitHubApi = require('github');

const github = new GitHubApi();

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
