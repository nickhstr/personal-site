let express = require('express');
let fs = require('fs');

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

api.get('/api/projects', (req, res) => {
	fs.readFile(process.cwd() + '/server/data/data.json', 'utf8', (err, obj) => {
		if (err) {
			return res.send(err);
		}
		return res.send(JSON.parse(obj).projects);
	});
});

module.exports = () => {
	return api;
};