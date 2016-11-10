var React = require('react');
var {connect} = require('react-redux');
var {Link} = require('react-router');
var MyAPI = require('MyAPI');

var TestComponent = React.createClass({
	render() {
		console.log('Test Props', this.props);
		var projectUrl = this.props.params.project;
		var project = MyAPI.filteredProjects({
			projects: this.props.projects,
			projectPage: projectUrl
		});
		console.log('All projects', this.props.projects);
		console.log('Current Project', project);
		return (
			<div>
				<h1 style={{paddingTop: '64px'}}>This is a test. Remain calm.</h1>
				<Link to="/projects">To the Main Page!</Link>
				<Link to="/projects/test/test_project">To the Project Page!</Link>
				<a href="/">To the Home Page!</a>
				<p>Params: {this.props.params.project}</p>
			</div>
		);
	}
});

module.exports = connect((state) => {
	return state;
})(TestComponent);