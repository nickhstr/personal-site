var mongoose = require('mongoose');

var BlogPost = mongoose.model('BlogPost', {
	title: {
		type: String
	},
	date: {
		type: Date,
		default: Date.now
	},
	teaser: {
		type: String
	},
	content: {
		type: String
	},
	url: {
		type: String
	}
});

module.exports = {BlogPost};