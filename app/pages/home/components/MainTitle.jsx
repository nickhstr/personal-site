var React = require('react');

var MainTitle = React.createClass({
	render: function() {
		return (
			<div className="title">
				<h1>{this.props.primary}</h1>
				<h3>{this.props.secondary}</h3>
			</div>
		);
	}
 });

module.exports = MainTitle;