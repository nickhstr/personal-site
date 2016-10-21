const express = require('express');
const hbs = require('hbs');

const routes = require('./app/routes/routes');

const PORT = process.env.PORT || 8080;

let app = express();

hbs.registerPartials(__dirname + '/app/partials');
app.set('view engine', 'hbs');
app.set('views', __dirname + '/public');

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});

app.use(express.static(__dirname + '/public'));

app.use('/', routes());

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});