var React = require('react');
var {connect} = require('react-redux');
var MyAPI = require('MyAPI');

var LatestBlogPost = React.createClass({
	render() {
		var {blogPosts} = this.props;
		if (blogPosts.length < 1) {
			return null;
		}
		var latestPost = MyAPI.latestBlogPost(blogPosts);
		var {url, title, date, teaser} = latestPost;
		return (
			<div className="latest-post">
				<h2 className="section-heading">Latest Post</h2>
				<a href={url || '/blog'}>
					<h3 className="post-title">{title || 'Some Title'}</h3>
				</a>
				<p className="post-date">{date || new Date()}</p>
				<p className="post-teaser">{teaser || 'Some teaser content'}</p>
				<a className="button" href="/blog">See All Posts</a>
			</div>
		);
	}
});

module.exports = connect((state) => {
	return {
		blogPosts: state.blogPosts
	};
})(LatestBlogPost);