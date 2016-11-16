// ADD, EDIT, DELETE COLLECTIONS/DOCUMENTS

let {mongoose} = require('./db/mongoose');
let {Project} = require('./models/project');
let {BlogPost} = require('./models/blogPost');

// var post = new BlogPost({
// 	title: 'Yet Another Post!',
// 	teaser: 'Oooooooo this is a good \'un! Read on!',
// 	content: 'This is the best post ever. The greatest in history. Nobody writes better posts than me. Believe me.',
// 	url: './blog/best-ever-test'
// });

// post.save().then((doc) => {
// 	console.log('Success!', doc);
// }, (err) => {
// 	console.log('Whoops!', err);
// });