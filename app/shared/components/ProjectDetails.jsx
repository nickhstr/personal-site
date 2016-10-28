var React = require('react');

var ProjectDetails = React.createClass({
	render: function() {
		var {name, description, projectPage, projectUrl, sourceCode} = this.props;
		return (
			<div className="project-detail">
				<div className="details">
					<h4>{name}</h4>
					<p>{description}</p>
				</div>
				<div className="action">
					<a href="/projects">Project Page</a>
					<a href="/projects">Project URL</a>
					<a href="/projects">Source Code</a>
				</div>
			</div>
		);
	}
});

module.exports = ProjectDetails;