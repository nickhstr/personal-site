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
		var {url, title, date, teaser, content} = latestPost;
		var formattedDate = new Date(date).toDateString();
		return (
			<div className="latest-post">
				<h2 className="section-heading">Latest Post</h2>
				<a href={url}>
					<h3 className="post-title">{title}</h3>
				</a>
				<p className="post-date">{formattedDate}</p>
				<p className="post-teaser">{teaser}<a href={url}>Read More...</a></p>
				<div dangerouslySetInnerHTML={{__html: content}}></div>
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