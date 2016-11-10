var React = require('react');
var {Link} = require('react-router');

var ProjectDetails = React.createClass({
	render() {
		var {name, summary, projectPage, projectUrl, sourceCode} = this.props;
		return (
			<div className="project-detail">
				<div className="details">
					<h4>{name}</h4>
					<p dangerouslySetInnerHTML={{__html: summary}}></p>
				</div>
				<div className="action flex-start-center">
					<Link to={projectPage}>Project Page</Link>
					<a href={projectUrl} target="_blank">Project URL</a>
					<a href={sourceCode} target="_blank">Source Code</a>
				</div>
			</div>
		);
	}
});

module.exports = ProjectDetails;