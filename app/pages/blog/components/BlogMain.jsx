var React = require('react');
var {connect} = require('react-redux');
var MyAPI = require('MyAPI');
var PageHeader = require('PageHeader');
var SortDropdown = require('SortDropdown');
var BlogCard = require('BlogCard');

var BlogMain = React.createClass({
	render() {
		var {blogPosts, searchText, sort} = this.props;
		var filteredPosts = MyAPI.filteredPosts({
			posts: blogPosts,
			searchText,
			sort
		});
		return (
			<div>
				<PageHeader title="Blog">
					<SortDropdown>
						<option value="date">Date</option>
						<option value="title">Title</option>
					</SortDropdown>
				</PageHeader>
				<section className="blog-list">
					{filteredPosts.map((post) => {
						return (
							<BlogCard
									post={post}></BlogCard>
						);
					})}
				</section>
			</div>
		);
	}
});

module.exports = connect((state) => {
	return {
		blogPosts: state.blogPosts,
		searchText: state.searchText,
		sort: state.sort
	};
})(BlogMain);