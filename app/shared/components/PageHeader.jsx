var React = require('react');
var actions = require('actions');
var {connect} = require('react-redux');
var SearchInput = require('SearchInput');

var PageHeader = React.createClass({
	render() {
		var {title, searchText, dispatch} = this.props;
		var updateSearchText = () => {
			var searchText = this.refs.searchText.value;
			dispatch(actions.setSearchText(searchText));
		}
		return (
			<header className="page-header flex-between-center">
				<h1>{title}</h1>
				<SearchInput page={title.toLowerCase()}></SearchInput>
			</header>
		);
	}
});

module.exports = PageHeader;