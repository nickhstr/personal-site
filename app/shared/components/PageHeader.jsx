var React = require('react');
import * as actions from 'actions';
var {connect} = require('react-redux');

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
				<input
						ref="searchText"
						className="search-input"
						type="text"
						placeholder="Search projects..."
						onChange={updateSearchText}
						value={searchText}/>
			</header>
		);
	}
});

module.exports = connect((state) => {
	return {
		searchText: state.searchText
	}
})(PageHeader);