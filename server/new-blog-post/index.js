var fs = require('fs');

var content = fs.readFileSync(process.cwd() + '/server/new-blog-post/content.html', 'utf8' ,(err, data) => {
	if (err) {
		console.log(err);
		return '';
	}
	return data;
});

module.exports = {
	title: 'And Another!',
	teaser: 'Are we having fun yet?',
	content: content,
	url: '/blog/another-post'
};