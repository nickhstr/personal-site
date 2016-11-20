var fs = require('fs');

var content = fs.readFileSync(process.cwd() + '/server/new-blog-post/content.html', 'utf8' ,(err, data) => {
	if (err) {
		console.log(err);
		return '';
	}
	return data;
});

module.exports = {
	title: 'Lorem Ipsum',
	teaser: 'Can anyone read Latin anymore?',
	content: content,
	url: '/blog/lorem-ipsum-2',
	category: 'Technology'
};