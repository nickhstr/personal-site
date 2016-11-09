var React = require('react');
var {Link} = require('react-router');

var TestComponent = (props) => {
	return (
		<div>
			<h1 style={{margin: '50px auto'}}>This is a test. Remain calm.</h1>
			<Link to="/projects">To the Main Page!</Link>
		</div>
	);
};

module.exports = TestComponent;