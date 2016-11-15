var mongoose = require('mongoose');

var Project = mongoose.model('Project', {
	name: {
		type: String
	},
	summary: {
		type: String
	},
	description: {
		type: String
	},
	imgSrc: {
		type: String
	},
	imgAlt: {
		type: String
	},
	placeholder: {
		type: String
	},
	projectPage: {
		type: String
	},
	projectUrl: {
		type: String
	},
	sourceCode: {
		type: String
	},
	program: {
		type: String
	},
	featured: {
		type: String
	}
});

module.exports = {Project};