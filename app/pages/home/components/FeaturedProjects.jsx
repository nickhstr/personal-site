var React = require('react');
var ProjectCard = require('ProjectCard');

var FeaturedProjects = React.createClass({
	getInitialState: function() {
		return {
			projects: [
				{
					name: 'First Project',
					description: 'A pretty awesome project.',
					imgSrc: 'images/sierra-nevada-1920.svg',
					imgAlt: 'Sierra Nevada mountain range.',
					placeholder: null,
					width: '400px',
					height: '300px',
					projectPage: '',
					projectUrl: '',
					sourceCode: ''
				},
				{
					name: 'First Project',
					description: 'A pretty awesome project.',
					imgSrc: 'images/sierra-nevada-1920.svg',
					imgAlt: 'Sierra Nevada mountain range.',
					placeholder: null,
					width: '400px',
					height: '300px',
					projectPage: '',
					projectUrl: '',
					sourceCode: ''
				},
				{
					name: 'First Project',
					description: 'A pretty awesome project.',
					imgSrc: 'images/sierra-nevada-1920.svg',
					imgAlt: 'Sierra Nevada mountain range.',
					placeholder: null,
					width: '400px',
					height: '300px',
					projectPage: '',
					projectUrl: '',
					sourceCode: ''
				},
				{
					name: 'First Project',
					description: 'A pretty awesome project.',
					imgSrc: 'images/sierra-nevada-1920.svg',
					imgAlt: 'Sierra Nevada mountain range.',
					placeholder: null,
					width: '400px',
					height: '300px',
					projectPage: '',
					projectUrl: '',
					sourceCode: ''
				}
			],
			cardDimensions: {
				width: '400px',
				margin: '10px'
			}
		};
	},
	render: function() {
		var {width, height, margin} = this.state.cardDimensions;
		var heading = this.state.projects.length > 1 ? 'Projects' : 'Project';
		return (
			<section className="featured-projects flex-center">
				<div className="featured-heading">
					<h2>Featured {heading}</h2>
				</div>
				<div className="container">
					<div className="flex-center">
						{this.state.projects.map(function(project) {
							return (
								<ProjectCard project={project} cardDimensions={{width, height, margin}}></ProjectCard>
							);
						})}
					</div>
				</div>
				<div className="link-section">
					<a className="button" href="/projects">View All Projects</a>
				</div>
			</section>
		);
	}
});

module.exports = FeaturedProjects;