const express = require('express');
const compression = require('compression');
const hbs = require('hbs');

const api = require('./server/api/api');
const routes = require('./server/routes/routes');
const PORT = process.env.PORT || 8080;

let app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/public');

app.use(compression());

app.use(express.static(__dirname + '/public'));

app.use('/', api());
app.use('/', routes());

app.listen(PORT, () => {
	console.log(`Server started on port ${PORT}`);
});