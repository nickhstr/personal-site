var React = require('react');

var LatestBlogPost = React.createClass({
	getInitialState: function() {
		return {
			title: 'A Blog Post',
			date: new Date(),
			content: 'Some blog entry text. Very blog, much stuff. This post contains a lot of very interesting content. You should definitely keep reading.'
		};
	},
	render: function() {
		var {title, date, content} = this.state;
		return (
			<div className="latest-post">
				<p className="latest-banner">LATEST POST</p>
				<h3 className="post-title">
					<a href="/blog">{title}</a>
				</h3>
				<p className="post-date">{date.toDateString()}</p>
				<p className="post-content">{content}</p>
				<a className="button" href="/blog">See All Posts</a>
			</div>
		);
	}
});

module.exports = LatestBlogPost;