var mongoose = require('mongoose');

var BlogPost = mongoose.model('BlogPost', {
	title: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	teaser: {
		type: String
	},
	content: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	},
	category: {
		type: String,
		required: true
	}
});

module.exports = {BlogPost};