var React = require('react');
var Logo = require('Logo');

let firstTab = null;
let lastTab = null;

var Drawer = React.createClass({
	componentDidMount() {
		this.setKeyboardFocusTrap();
		this.setKeydownHandler();
	},
	setKeyboardFocusTrap() {
		var focusableElementsSelector = [
	    'a[href]:not([tabindex="-1"])',
	    'area[href]:not([tabindex="-1"])',
	    'input:not([disabled]):not([tabindex="-1"])',
	    'select:not([disabled]):not([tabindex="-1"])',
	    'textarea:not([disabled]):not([tabindex="-1"])',
	    'button:not([disabled]):not([tabindex="-1"])',
	    'iframe:not([tabindex="-1"])',
	    '[tabindex]:not([tabindex="-1"])',
	    '[contentEditable=true]:not([tabindex="-1"])'
	  ].join(',');
	  var focusableElements = this.refs.drawer.querySelectorAll(focusableElementsSelector);

	  if (focusableElements.length > 0) {
	  	firstTab = focusableElements[0];
	  	lastTab = focusableElements[focusableElements.length - 1];
	  }
	},
	setKeydownHandler() {
		document.addEventListener('keydown', this.keydownHandler);
	},
	keydownHandler(e) {
		var drawer = this.refs.drawer;
		var TAB_KEY = 9;
		var ESC_KEY = 27;
		if (drawer.hasAttribute('opened')) {
			if (e.keyCode === TAB_KEY) {
				if (e.shiftKey) {
					if (firstTab && e.target === firstTab) {
						e.preventDefault();
						lastTab.focus();
					}
				}
				else {
					if (lastTab && e.target === lastTab) {
						e.preventDefault();
						firstTab.focus();
					}
				}
			}
			else if (e.keyCode === ESC_KEY) {
				e.preventDefault();
				this.toggle();
			}
		}
	},
	toggle() {
		this.props.onToggle();
	},
	render() {
		return (
			<div id="drawer" ref="drawer">
				<div className="drawer-overlay" onClick={this.toggle}></div>
				<section className="drawer-content">
					<div className="logo">
						<Logo imgUrl="icons/icon-svg.svg" imgAlt="Logo"></Logo>
					</div>
					<div>
						<ul className="drawer-links">
							<li><a href="/projects" onClick={this.toggle}>Projects</a></li>
							<li><a href="/blog" onClick={this.toggle}>Blog</a></li>
							<li><a href="/about" onClick={this.toggle}>About</a></li>
						</ul>
					</div>
				</section>
			</div>
		);
	}
});

module.exports = Drawer;