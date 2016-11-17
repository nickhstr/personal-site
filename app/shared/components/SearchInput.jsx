var React = require('react');
var actions = require('actions');
var {connect} = require('react-redux');

var SearchInput = React.createClass({
	updateSearchText() {
		var searchText = this.refs.searchText.value;
		this.props.dispatch(actions.setSearchText(searchText));
	},
	render() {
		var {page, searchText} = this.props;
		return (
			<input
				ref="searchText"
				className="search-input"
				type="text"
				placeholder={`Search ${page}...`}
				onChange={this.updateSearchText}
				value={searchText}/>
		);
	}
});

module.exports = connect((state) => {
	return {
		searchText: state.searchText
	};
})(SearchInput);