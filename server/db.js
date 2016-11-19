// ADD, EDIT, DELETE COLLECTIONS/DOCUMENTS

let {mongoose} = require('./db/mongoose');
let {Project} = require('./models/project');
let {BlogPost} = require('./models/blogPost');

let postInfo = require('./new-blog-post');

var post = new BlogPost({
	title: postInfo.title,
	teaser: postInfo.teaser,
	content: postInfo.content,
	url: postInfo.url
});

post.save().then((doc) => {
	console.log('Success!', doc);
}, (err) => {
	console.log('Whoops!', err);
});