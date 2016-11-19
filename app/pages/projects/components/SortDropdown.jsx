var React = require('react');
var actions = require('actions');
var {connect} = require('react-redux');

var SortDropdown = React.createClass({
	updateSelectedOption() {
		var sort = this.refs.options.value;
		this.props.dispatch(actions.setSort(sort));
	},
	render() {
		var {sort} = this.props;
		return (
			<div className="sort-dropdown">
				<select className="dropdown" ref="options" onChange={this.updateSelectedOption} value={sort}>
					{this.props.children}
				</select>
			</div>
		);
	}
});

module.exports = connect((state) => {
	return {
		sort: state.sort
	};
})(SortDropdown);