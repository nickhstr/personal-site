var React = require('react');
var Card = require('Card');
var ProjectDetails = require('ProjectDetails');

var ProjectCard = (props) => {
	var {imgSrc, imgAlt, placeholder, name, summary, projectPage, projectUrl, sourceCode} = props.project;
	var {width, height, margin} = props.cardDimensions;
	var href = projectPage ? ('/projects' + projectPage) : '/projects';

	return (
		<div style={{margin: margin}} className="project-card">
			<Card
				width={width}
				height={height}
				imgSrc={imgSrc}
				imgAlt={imgAlt}
				placeholder={placeholder}>
				<ProjectDetails
						name={name}
						summary={summary}
						projectPage={href}
						projectUrl={projectUrl}
						sourceCode={sourceCode}
						router={props.router}></ProjectDetails>
			</Card>
		</div>
	);
};

module.exports = ProjectCard;