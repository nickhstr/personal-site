var React = require('react');

var ProjectDetails = React.createClass({
	render: function() {
		var {name} = this.props;
		return (
			<div>
				<h4>{name}</h4>
			</div>
		);
	}
});

module.exports = ProjectDetails;