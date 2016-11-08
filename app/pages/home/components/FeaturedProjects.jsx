var React = require('react');
var ProjectCard = require('ProjectCard');
var {connect} = require('react-redux');
var MyAPI = require('MyAPI');

var FeaturedProjects = React.createClass({
	getInitialState() {
		return {
			cardDimensions: {
				width: '400px',
				margin: '10px'
			}
		};
	},
	render() {
		var {projects, showFeaturedProjects, programFilter} = this.props;
		var filteredProjects = MyAPI.filteredProjects(projects, showFeaturedProjects, programFilter);
		var {width, height, margin} = this.state.cardDimensions;
		var heading = projects.length > 1 ? 'Projects' : 'Project';
		return (
			<section className="featured-projects flex-center">
				<div className="featured-heading">
					<h2 className="section-heading">Featured {heading}</h2>
				</div>
				<div className="container">
					<div className="flex-center">
						{filteredProjects.map(function(project) {
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
		projects: state.projects,
		showFeaturedProjects: state.showFeaturedProjects,
		programFilter: state.programFilter
	};
})(FeaturedProjects);