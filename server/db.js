let {mongoose} = require('./db/mongoose');
let {Project} = require('./models/project');
let {BlogPost} = require('./models/blogPost');

// var project = new Project({
// 	name: "Website Performance Optimization",
// 	summary: "High performance load time and animations.",
// 	description: "Refactored a preexisting website to increase its PageSpeed score to 90 or above and run at 60 frames per second.\nThe site now has a PageSpeed score of 95 for mobile and 96 for desktop, and \"Cam's Pizzeria\" runs at 60 frames per second.",
// 	imgSrc: "/images/performance-half.png",
// 	imgAlt: "Website Performance Optimization site screenshot.",
// 	placeholder: "data:image/png;base64,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",
// 	projectPage: "/website-performance-optimization",
// 	projectUrl: "http://nickhstr.github.io/frontend-nanodegree-mobile-portfolio/",
// 	sourceCode: "https://github.com/nickhstr/frontend-nanodegree-mobile-portfolio",
// 	program: "Udacity",
// 	featured: false,
// 	dateCompleted: new Date(2016, 2, 15)
// });

// project.save().then((doc) => {
// 	console.log('Success!', doc);
// }, (err) => {
// 	console.log('Whoops!', err);
// });
