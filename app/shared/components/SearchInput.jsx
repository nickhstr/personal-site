var React = require('react');
var actions = require('actions');
var {connect} = require('react-redux');

var SearchInput = React.createClass({
	updateSearchText() {
		var searchText = this.refs.searchText.value;
		this.props.dispatch(actions.setSearchText(searchText));
	},
	clearSearchText() {
		this.props.dispatch(actions.setSearchText(''));
	},
	render() {
		var {page, searchText} = this.props;
		return (
			<div className="search">
				<input
					type="search"
					ref="searchText"
					className="search-input"
					placeholder={`Search ${page}...`}
					onChange={this.updateSearchText}
					value={searchText}/>
			</div>
		);
	}
});

module.exports = connect((state) => {
	return {
		searchText: state.searchText
	};
})(SearchInput);