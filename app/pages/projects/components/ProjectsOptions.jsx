var React = require('react');
var actions = require('actions');
var {connect} = require('react-redux');

var ProjectsOptions = React.createClass({
	updateSelectedOption() {
		var sort = this.refs.options.value;
		this.props.dispatch(actions.setSort(sort));
	},
	render() {
		var {sort} = this.props;
		return (
			<div className="projects-options">
				<select className="dropdown" ref="options" onChange={this.updateSelectedOption} value={sort}>
					<option value="">None</option>
					<option value="Date">Date</option>
					<option value="Name">Name</option>
				</select>
			</div>
		);
	}
});

module.exports = connect((state) => {
	return {
		sort: state.sort
	};
})(ProjectsOptions);