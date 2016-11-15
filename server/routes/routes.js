let express = require('express');

let router = express.Router();

router.get('/', (req, res) => {
	res.render('index.hbs', {
		pageTitle: 'Home',
		scriptSrc: '/home.js'
	});
});

router.get('/about', (req, res) => {
	res.render('index.hbs', {
		pageTitle: 'About',
		scriptSrc: '/about.js'
	});
});

router.get('/projects', (req, res) => {
	res.render('index.hbs', {
		pageTitle: 'Projects',
		scriptSrc: '/projects.js'
	});
});

router.get('/projects/*', (req, res) => {
	res.render('index.hbs', {
		pageTitle: 'Projects',
		scriptSrc: '/projects.js'
	});
});

router.get('/blog', (req, res) => {
	res.render('index.hbs', {
		pageTitle: 'Blog',
		scriptSrc: '/blog.js'
	});
});

router.get('/*', (req, res) => {
	res.status(404).sendFile(process.cwd() + '/public/404.html');
});

module.exports = () => {
	return router;
};