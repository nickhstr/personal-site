var React = require('react');
var {connect} = require('react-redux');
var {Link} = require('react-router');
var MyAPI = require('MyAPI');
var FourZeroFour = require('FourZeroFour');

var ProjectPage = React.createClass({
	render() {
		var projectUrl = this.props.params.project;
		var project = MyAPI.filteredProjects({
			projects: this.props.projects,
			projectPage: projectUrl
		})[0];

		if (!project) {
			return (
				<FourZeroFour></FourZeroFour>
			);
		}
		return (
			<section className>
				<h1 style={{paddingTop: '64px', margin: '0'}}>{project.name}</h1>
				<p style={{margin: '0'}}>{project.description}</p>
				<p style={{margin: '0'}}>{project.program}</p>
			</section>
		);
	}
});

module.exports = connect((state) => {
	return state;
})(ProjectPage);