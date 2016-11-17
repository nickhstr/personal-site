var React = require('react');
var SearchInput = require('SearchInput');

var PageHeader = React.createClass({
	render() {
		var {title} = this.props;
		return (
			<header>
				<div className="page-header flex-between-center">
					<h1>{title}</h1>
					<div className="inputs">
						<div className="options-top">
							{this.props.children}
						</div>
						<SearchInput page={title.toLowerCase()}></SearchInput>
					</div>
				</div>
				<div className="options-bottom flex-center-center">
					{this.props.children}
				</div>
			</header>
		);
	}
});

module.exports = PageHeader;