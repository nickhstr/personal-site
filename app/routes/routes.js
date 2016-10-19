let express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
	res.render('home.hbs');
});

router.get('/about', (req, res) => {
	res.render('about.hbs');
});

router.get('/projects', (req, res) => {
	res.render('projects.hbs');
});

router.get('/blog', (req, res) => {
	res.render('blog.hbs');
});

module.exports = () => {
	return router;
};