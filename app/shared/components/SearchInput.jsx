var React = require('react');
var actions = require('actions');
var {connect} = require('react-redux');

var SearchInput = React.createClass({
	render() {
		var {page, searchText, dispatch} = this.props;
		var updateSearchText = () => {
			var searchText = this.refs.searchText.value;
			dispatch(actions.setSearchText(searchText));
		};
		return (
			<input
				ref="searchText"
				className="search-input"
				type="text"
				placeholder={`Search ${page}...`}
				onChange={updateSearchText}
				value={searchText}/>
		);
	}
});

module.exports = connect((state) => {
	return {
		searchText: state.searchText
	};
})(SearchInput);