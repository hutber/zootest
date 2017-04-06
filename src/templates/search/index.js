import Backbone from '../../backbone';
const handlebars = require('handlebars');

const search =  handlebars.compile(`
	<div class="searchTitles">
		<h1 class="searchTitle">Search for houses and flats for sale across the UK</h1>
		<div class="searchNoResults">
	    <h1>No results found</h1>
	    <p>Enter another location and search again.</p>
		</div>
	</div>
	<form id="search" class="searchBox">
		<input type="text" name="search" class="searchText">
		<button>Search</button>
		<span class="searchError"></span>
	</form>
`);

export default search;
