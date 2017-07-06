
module.exports = function(ops){
  // ==OPS==
  // name: // required
  // homepage: '' // optional
  // has_issues: true // optional
  // has_wiki: true // optional
  // has_downloads: true // optional
  // description: '' // optional
  // auto_init: false // make an initial commit // optional
  // gitignore_template: $languaje // optional // ignored if no auto_init
  // license_template: $license // optional // ignored if no auto_init
  let obj = {};

  if(!ops.name) return console.error("Repo name is required");
  obj.name = ops.name;
  obj.description = ops.description;
  obj.homepage = ops.url || undefined;
  require('./auth')( (err, github) => {
    if(err) return console.error(err);
    github.repos.create( obj, function(err, res){
      if(err) return console.error(err);
      console.log(err || obj.name + ' Created')
    });
  });

}
