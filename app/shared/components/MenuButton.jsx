var React = require('react');

var MenuButton = React.createClass({
	toggle() {
		this.props.onToggle();
	},
	render() {
		return (
			<button className="menu-button" onClick={this.toggle}>
				<svg width="100%" height="100%" viewBox="0 0 64 64" version="1.1" style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 1.41421}}>
					<g>
						<rect x="8" y="44" width="48" height="6"/>
						<rect x="8" y="29" width="48" height="6"/>
						<rect x="8" y="14" width="48" height="6"/>
					</g>
				</svg>
			</button>
		);
	}
});

module.exports = MenuButton;