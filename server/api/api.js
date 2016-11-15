let express = require('express');
let fs = require('fs');
let {mongoose} = require('../db/mongoose');
let {Project} = require('../models/project');
let {BlogPost} = require('../models/blogPost');

let api = express.Router();

api.get('/api/all', (req, res) => {
	fs.readFile(process.cwd() + '/server/data/data.json', 'utf8', (err, obj) => {
		if (err) {
			console.log(err);
			return res.send(err);
		}
		return res.send(JSON.parse(obj));
	});
});

api.get('/api/posts', (req, res) => {
	fs.readFile(process.cwd() + '/server/data/data.json', 'utf8', (err, obj) => {
		if (err) {
			console.log(err);
			return res.send(err);
		}
		return res.send(JSON.parse(obj).blogPosts);
	});
});

api.get('/api/projects', (req, res) => {
	// fs.readFile(process.cwd() + '/server/data/data.json', 'utf8', (err, obj) => {
	// 	if (err) {
	// 		console.log(err);
	// 		return res.send(err);
	// 	}
	// 	return res.send(JSON.parse(obj).projects);
	// });
	Project.find().then((projects) => {
		res.send(projects);
	}, (err) => {
		res.status(404).send(err);
	});
});

api.get('/api/latest-post', (req, res) => {
	BlogPost.find().then((posts) => {
		res.send(posts[0]);
	}, (err) => {
		res.status(400).send(err);
	});
});

module.exports = () => {
	return api;
};