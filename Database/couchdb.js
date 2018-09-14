var nano = require('nano')

module.exports = nano(process.env.COUCHDB_URL || 'http://Ho3einAdmin:k1145679@127.0.0.1:5984')