var mongoose = require('mongoose');
var {username, password} = require('../config').dbConfig;

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${username}:${password}@ds153637.mlab.com:53637/personal-site`);

module.exports = {mongoose};