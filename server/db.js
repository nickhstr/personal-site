let {mongoose} = require('./db/mongoose');
let {Project} = require('./models/project');
let {BlogPost} = require('./models/blogPost');

var post = new BlogPost({
	title: 'Test Post',
	teaser: 'Don\'t be such a tease!',
	content: 'Contet, content, content! It\'s all about the content!',
	url: '/blog/another-test'
});

post.save().then((doc) => {
	console.log('Success!', doc);
}, (err) => {
	console.log('Whoops!', err);
});