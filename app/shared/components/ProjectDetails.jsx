var React = require('react');
var {Link} = require('react-router');

var ProjectDetails = React.createClass({
	render() {
		var {name, dateCompleted, summary, projectPage, projectUrl, sourceCode, router} = this.props;
		var formattedDate = new Date(dateCompleted).toLocaleDateString('en-us', {month: 'long', year: 'numeric'});
		return (
			<div className="project-detail">
				<div className="details">
					<h4>{name}</h4>
					<h5>{formattedDate}</h5>
					<p>{summary}</p>
				</div>
				<div className="action flex-start-center">
					{router ? <Link to={projectPage}>Project Page</Link> : <a href={projectPage}>Project Page</a>}
					<a href={projectUrl} target="_blank">Project URL</a>
					<a href={sourceCode} target="_blank">Source Code</a>
				</div>
			</div>
		);
	}
});

module.exports = ProjectDetails;