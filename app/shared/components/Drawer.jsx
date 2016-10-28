var React = require('react');
var Logo = require('Logo');

var Drawer = React.createClass({
	firstTab: null,
	lastTab: null,
	componentDidMount: function() {
		this.setKeyboardFocusTrap();
		this.setKeydownHandler();
	},
	setKeyboardFocusTrap: function() {
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
	  	this.firstTab = focusableElements[0];
	  	this.lastTab = focusableElements[focusableElements.length - 1];
	  }
	},
	setKeydownHandler: function() {
		document.addEventListener('keydown', this.keydownHandler);
	},
	keydownHandler: function(e) {
		var drawer = this.refs.drawer;
		var TAB_KEY = 9;
		var ESC_KEY = 27;
		if (drawer.hasAttribute('opened')) {
			console.log(e.keyCode);
			if (e.keyCode === TAB_KEY) {
				if (e.shiftKey) {
					console.log('Shift key pressed');
					console.log(e.target);
					if (this.firstTab && e.target === this.firstTab) {
						console.log('Focused on lastTab');
						e.preventDefault();
						this.lastTab.focus();
					}
				}
				else {
					console.log('Normal tab pressed');
					console.log(e.target);
					if (this.lastTab && e.target === this.lastTab) {
						console.log('Focused on firstTab');
						e.preventDefault();
						this.firstTab.focus();
					}
				}
			}
			else if (e.keyCode === ESC_KEY) {
				e.preventDefault();
				console.log('ESC_KEY pressed');
				this.toggle();
			}
		}
	},
	toggle: function() {
		this.props.onToggle();
	},
	render: function() {
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