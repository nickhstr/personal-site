// ADD, EDIT, DELETE COLLECTIONS/DOCUMENTS

let {mongoose} = require('./db/mongoose');
let {Project} = require('./models/project');
let {BlogPost} = require('./models/blogPost');

// var post = new BlogPost({
// 	title: 'Title',
// 	teaser: 'teaser',
// 	content: 'content',
// 	url: '/some-url'
// });

// post.save().then((doc) => {
// 	console.log('Success!', doc);
// }, (err) => {
// 	console.log('Whoops!', err);
// });