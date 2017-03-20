var React = require('react');
var {connect} = require('react-redux');
var {Link} = require('react-router');
var MyAPI = require('MyAPI');
var ProjectCard = require('ProjectCard');
var PageHeader = require('PageHeader');
var SortDropdown = require('SortDropdown');

var ProjectsMain = React.createClass({
	render() {
        var {
            projects,
            showFeaturedProjects,
            programFilter,
            searchText,
            sort,
            router
        } = this.props;
		var filteredProjects = MyAPI.filteredProjects({
			projects: projects,
			featuredOnly: showFeaturedProjects,
			program: programFilter,
			searchText: searchText,
			sort: sort
		});
		return (
			<div>
				<PageHeader title="Projects">
					<SortDropdown>
						<option value="Date">Date</option>
						<option value="Name">Name</option>
					</SortDropdown>
				</PageHeader>
				<section className="projects-list flex-center">
					{filteredProjects.map((project) => {
						return (
                            <ProjectCard
                                project={project}
                                cardDimensions={{width: '400px', margin: '20px'}}
                                router={router}></ProjectCard>
						);
					})}
				</section>
			</div>
		);
	}
});

module.exports = connect((state) => {
	return state;
})(ProjectsMain);
