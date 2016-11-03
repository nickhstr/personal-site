var React = require('react');
var {connect} = require('react-redux');

var LatestBlogPost = React.createClass({
	render: function() {
		var {title, date, content, url} = this.props;
		return (
			<div className="latest-post">
				<p className="latest-banner">LATEST POST</p>
				<h3 className="post-title">
					<a href={url}>{title}</a>
				</h3>
				<p className="post-date">{date}</p>
				<p className="post-content">{content}</p>
				<a className="button" href="/blog">See All Posts</a>
			</div>
		);
	}
});

module.exports = connect((state) => {
	return {
		title: state.latestPost.title,
		date: state.latestPost.date,
		content: state.latestPost.content,
		url: state.latestPost.url
	};
})(LatestBlogPost);