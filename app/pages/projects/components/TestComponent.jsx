var React = require('react');
var {connect} = require('react-redux');
var {Link} = require('react-router');
var MyAPI = require('MyAPI');

var TestComponent = React.createClass({
	render() {
		var projectUrl = this.props.params.project;
		var project = MyAPI.filteredProjects({
			projects: this.props.projects,
			projectPage: projectUrl
		})[0];
		return (
			<main>
				<h1 style={{paddingTop: '64px'}}>{project.name}</h1>
				<p>{project.description}</p>
				<p>{project.program}</p>
			</main>
		);
	}
});

module.exports = connect((state) => {
	return state;
})(TestComponent);