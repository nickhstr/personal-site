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
					<p>{description[0]}</p>
				</div>
				<div className="action flex-start-center">
					<a href={'/projects' + projectPage}>Project Page</a>
					<a href={projectUrl} target="_blank">Project URL</a>
					<a href={sourceCode} target="_blank">Source Code</a>
				</div>
			</div>
		);
	}
});

module.exports = ProjectDetails;