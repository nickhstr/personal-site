var React = require('react');
var {connect} = require('react-redux');
var MyAPI = require('MyAPI');

var BlogPostPage = React.createClass({
	render() {
		var postUrl = this.props.params.post;
		var post = MyAPI.filteredPosts({
			posts: this.props.blogPosts,
			blogPostPage: postUrl
		})[0];

		if (!post) {
			return null;
		}
		return (
			<section className="blog-post-page">
				<article className="blog-post">
					<h1>{post.title}</h1>
					<div className="details">
						<span className="date">{new Date(post.date).toDateString()}</span>
						<span className="category">{post.category}</span>
					</div>
					<div className="content" dangerouslySetInnerHTML={{__html: post.content}}></div>
				</article>
			</section>
		);
	}
});

module.exports = connect((state) => {
	return {
		blogPosts: state.blogPosts
	};
})(BlogPostPage);