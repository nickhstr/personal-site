const express = require('express');
const hbs = require('hbs');

const routes = require('./app/routes/routes');

const PORT = process.env.PORT || 8080;

let app = express();

hbs.registerPartials(__dirname + '/app/views/partials');
app.set('view engine', 'hbs');
app.set('views', __dirname + '/app/views');

app.use(express.static(__dirname + '/public'));

app.use('/', routes());

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});