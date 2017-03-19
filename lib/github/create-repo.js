
console.log("create-repo");

require('./auth')( (err, github) => {
  if(err) return console.error(err);
  github.repos.create({
    name: 'remora'
    // homepage: '' // optional
    // has_issues: true // optional
    // has_wiki: true // optional
    // has_downloads: true // optional
    // description: '' // optional
    // auto_init: false // initial commit // optional
    // gitignore_template: $languaje // optional // ignored if no auto_init
    // license_template: $license // optional // ignored if no auto_init
  }, function(err, res){
    if(err) return console.error(err);
    const fs = require('fs');
    fs.writeFile('out.log', res, 'utf8', err => console.log(err || 'OK!'));
  });

});
