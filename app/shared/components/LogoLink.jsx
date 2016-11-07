var React = require('react');

var LogoLink = (props) => {
	return (
		<div>
			<a className="logo-link" href="/">
				<img src={props.imgUrl} alt={props.imgAlt}/>
				<span>Nick Hester</span>
			</a>
		</div>
	);
}

module.exports = LogoLink;