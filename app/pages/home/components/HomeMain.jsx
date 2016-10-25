var React = require('react');

var HomeMain = React.createClass({
	hidePlaceholder: function() {
		console.log('Big img loaded');
		var placeholder = document.getElementById('placeholder');
		var img = this.refs.img;
		placeholder.classList.add('disappear');
	},
	render: function() {
		return (
			<main className="home-main">
				<div id="placeholder"></div>
				<img ref="img" src="http://localhost:8080/images/sierra-nevada-crop-min.png" alt="image" onLoad={this.hidePlaceholder}/>
				<div id="heroImg"></div>
			</main>
		);
	}
});

module.exports = HomeMain;