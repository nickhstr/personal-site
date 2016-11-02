var React = require('react');
var ProjectCard = require('ProjectCard');
var {connect} = require('react-redux');

var FeaturedProjects = React.createClass({
	getInitialState: function() {
		return {
			cardDimensions: {
				margin: '10px'
			}
		};
	},
	render: function() {
		var {projects} = this.props;
		var {width, height, margin} = this.state.cardDimensions;
		var heading = projects.length > 1 ? 'Projects' : 'Project';
		return (
			<section className="featured-projects flex-center">
				<div className="featured-heading">
					<h2>Featured {heading}</h2>
				</div>
				<div className="container">
					<div className="flex-center">
						{projects.map(function(project) {
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

module.exports = connect((state) => {
	return {
		projects: state.projects
	};
})(FeaturedProjects);