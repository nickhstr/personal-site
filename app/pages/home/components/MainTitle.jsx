var React = require('react');

var MainTitle = (props) => {
	return (
		<div className="title">
			<h1>{props.primary}</h1>
			<h3>{props.secondary}</h3>
		</div>
	);
 };

module.exports = MainTitle;