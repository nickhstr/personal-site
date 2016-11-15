var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://nickhstr:SolidSnake87@ds153637.mlab.com:53637/personal-site');

module.exports = {mongoose};