var React = require('react');
var {Link} = require('react-router');

var ProjectsMain = React.createClass({
	render() {
		return (
			<main>
				<h1 style={{margin: '50px auto'}}>ProjectsMain Component</h1>
				<Link to="/projects/test">To the Test URL!</Link>
			</main>
		);
	}
});

module.exports = ProjectsMain;