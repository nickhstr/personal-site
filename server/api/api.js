let express = require('express');
let fs = require('fs');
let {mongoose} = require('../db/mongoose');
let {Project} = require('../models/project');
let {BlogPost} = require('../models/blogPost');

let api = express.Router();

api.get('/api/posts', (req, res) => {
	// QUERYING LOCAL JSON FILE
	// fs.readFile(process.cwd() + '/server/data/data.json', 'utf8', (err, obj) => {
	// 	if (err) {
	// 		console.log(err);
	// 		return res.send(err);
	// 	}
	// 	return res.send(JSON.parse(obj).blogPosts);
	// });

	// QUERYING MONGODB
	BlogPost.find().then((posts) => {
		return res.type('json').send(posts);
	}, (err) => {
		return res.status(404).send(err);
	});
});

api.get('/api/projects', (req, res) => {
	// QUERYING LOCAL JSON FILE
	// fs.readFile(process.cwd() + '/server/data/data.json', 'utf8', (err, obj) => {
	// 	if (err) {
	// 		console.log(err);
	// 		return res.send(err);
	// 	}
	// 	return res.send(JSON.parse(obj).projects);
	// });

	// QUERYING MONGODB
	Project.find().then((projects) => {
		return res.type('json').send(projects);
	}, (err) => {
		return res.status(404).send(err);
	});
});

// For testing
api.get('/api/latest-post', (req, res) => {
	BlogPost.find().then((posts) => {
		return res.send(posts[0]);
	}, (err) => {
		return res.status(400).send(err);
	});
});

module.exports = () => {
	return api;
};