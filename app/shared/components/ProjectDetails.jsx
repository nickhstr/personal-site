var React = require('react');

var ProjectDetails = React.createClass({
	getDefaultProps: function() {
		return {
			name: 'Project Name',
			description: 'Project description goes here.',
			projectPage: '',
			projectUrl: '',
			sourceCode: ''
		}
	},
	render: function() {
		var {name, description, projectPage, projectUrl, sourceCode} = this.props;
		return (
			<div className="project-detail">
				<div className="details">
					<h4>{name}</h4>
					<p>{description}</p>
				</div>
				<div className="action flex-start-center">
					<a href={'/projects' + projectPage}>Project Page</a>
					<a href={'/projects' + projectUrl}>Project URL</a>
					<a href={'/projects' + sourceCode}>Source Code</a>
				</div>
			</div>
		);
	}
});

module.exports = ProjectDetails;