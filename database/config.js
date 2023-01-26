const dbuser = encodeURIComponent('admin')
const dbpass = encodeURIComponent('QsTq0xsRBo5kiBe3')
const cluster = 'easycall.yxef9sd.mongodb.net'

const db_uri =
  'mongodb+srv://' +
  dbuser +
  ':' +
  dbpass +
  '@' +
  cluster +
  '/easycall?retryWrites=true&w=majority'

module.exports = db_uri

//nodemon --ext *  js,html,ejs,css,scss ./bin/www
