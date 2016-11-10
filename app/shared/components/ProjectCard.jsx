var React = require('react');
var Card = require('Card');
var ProjectDetails = require('ProjectDetails');
var {Link} = require('react-router');

var ProjectCard = (props) => {
	var {imgSrc, imgAlt, placeholder, name, summary, projectPage, projectUrl, sourceCode} = props.project;
	var {width, height, margin} = props.cardDimensions;
	var href = projectPage ? ('/projects' + projectPage) : '/projects';
	return (
		<Link to={href} style={{margin: margin}} className="project-card">
			<Card
				width={width}
				height={height}
				imgSrc={imgSrc}
				imgAlt={imgAlt}
				placeholder={placeholder}>
				<ProjectDetails
						name={name}
						summary={summary}
						projectUrl={projectUrl}
						sourceCode={sourceCode}></ProjectDetails>
			</Card>
		</Link>
	);
};

module.exports = ProjectCard;