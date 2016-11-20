var React = require('react');
var {Link} = require('react-router');

var BlogCard = React.createClass({
	render() {
		var {title, date, teaser, content, category, url} = this.props.post;
		return (
			<article className="blog-card">
				<h3><Link to={url}>{title}</Link></h3>
				<div className="details">
					<span className="date">{new Date(date).toDateString()}</span>
					<span className="category">{category}</span>
				</div>
				<div className="content" dangerouslySetInnerHTML={{__html: content}}></div>
				<Link to={url}>Read More</Link>
			</article>
		);
	}
});

module.exports = BlogCard;