var React = require('react');

var Logo = (props) => {
	return (
		<img src={props.imgUrl} alt={props.imgAlt}/>
	);
};

module.exports = Logo;