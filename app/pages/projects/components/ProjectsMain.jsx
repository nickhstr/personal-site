var React = require('react');

var ProjectsMain = React.createClass({
	render() {
		return (
			<main>
				<Banner></Banner>
				<ControlPanel></ControlPanel>
				<ProjectsList></ProjectsList>
			</main>
		);
	}
});

module.exports = ProjectsMain;