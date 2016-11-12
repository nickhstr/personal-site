var React = require('react');
var SearchInput = require('SearchInput');

var PageHeader = React.createClass({
	render() {
		var {title} = this.props;
		return (
			<header className="page-header flex-between-center">
				<h1>{title}</h1>
				<SearchInput page={title.toLowerCase()}></SearchInput>
			</header>
		);
	}
});

module.exports = PageHeader;