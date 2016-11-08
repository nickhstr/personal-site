var React = require('react');

var ProjectDetails = React.createClass({
	getDefaultProps() {
		return {
			name: 'Project Name',
			summary: 'Project description goes here.',
			projectPage: '',
			projectUrl: '',
			sourceCode: ''
		}
	},
	render() {
		var {name, summary, projectPage, projectUrl, sourceCode} = this.props;
		return (
			<div className="project-detail">
				<div className="details">
					<h4>{name}</h4>
					<p dangerouslySetInnerHTML={{__html: summary}}></p>
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