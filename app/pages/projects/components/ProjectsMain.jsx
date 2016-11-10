var React = require('react');
var {connect} = require('react-redux');
var {Link} = require('react-router');
var MyAPI = require('MyAPI');
var ProjectCard = require('ProjectCard');

var ProjectsMain = React.createClass({
	render() {
		var {projects, showFeaturedProjects, programFilter} = this.props;
		var filteredProjects = MyAPI.filteredProjects({
			projects: projects,
			featuredOnly: showFeaturedProjects,
			program: programFilter
		});
		return (
			<main>
				<h1 style={{paddingTop: '64px'}}>ProjectsMain Component</h1>
				<Link to="/projects/test">To the Test URL!</Link>
				<section className="flex-center">
					{filteredProjects.map((project) => {
						return (
							<ProjectCard project={project} cardDimensions={{width: '400px', margin: '10px'}}></ProjectCard>
						);
					})}
				</section>
			</main>
		);
	}
});

module.exports = connect((state) => {
	return state;
})(ProjectsMain);