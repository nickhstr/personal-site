var React = require('react');

var FourZeroFour = (props) => {
	var url = window.location.href;
	return (
		<main className="four-zero-four">
			<h3>Oops!</h3>
			<p><em>{url}</em> doesn't exist.</p>
			<h4><a href="/">Let's go back home!</a></h4>
		</main>
	);
}

module.exports = FourZeroFour;