var React = require('react');
var {connect} = require('react-redux');
var MyAPI = require('MyAPI');
var ProgressiveImg = require('ProgressiveImg');

var ProjectPage = React.createClass({
	render() {
		var projectUrl = this.props.params.project;
		var project = MyAPI.filteredProjects({
			projects: this.props.projects,
			projectPage: projectUrl
		})[0];

		if (!project) {
			return null;
		}
		return (
			<section className="project-page flex-center">
				<div style={{height: window.innerHeight * 0.6}} className="project-img">
					<ProgressiveImg
							imgSrc={project.imgSrc}
							placeholder={project.placeholder}
							imgAlt={project.imgAlt}
							width="100%"
							height="100%"
							borderRadius="2px"></ProgressiveImg>
				</div>
				<div className="project-info">
					<h1>{project.name}</h1>
					<p>{project.description}</p>
					<a className="button" href={project.projectUrl} target="_blank">Project URL</a>
					<a className="button" href={project.sourceCode} target="_blank">Source Code</a>
				</div>
			</section>
		);
	}
});

module.exports = connect((state) => {
	return state;
})(ProjectPage);