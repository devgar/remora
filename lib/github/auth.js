
require('../questions/github-auth')()
.then( a => console.log(a))
.catch( b => console.log("Error:", b))
