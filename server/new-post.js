// Add a new blog post

let {mongoose} = require('./db/mongoose');
let {BlogPost} = require('./models/blogPost');

// Get the new post's info
let postInfo = require('./new-blog-post');

// Pass it through the model
var post = new BlogPost({
	title: postInfo.title,
	teaser: postInfo.teaser,
	content: postInfo.content,
	url: postInfo.url
});

// Save to DB and close connection
post.save().then((doc) => {
	console.log('Success!', doc);
	mongoose.connection.close();
}, (err) => {
	console.log('Whoops!', err);
	mongoose.connection.close();
});