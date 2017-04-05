import Backbone from '../../backbone';
const handlebars = require('handlebars');

const search =  handlebars.compile(`
	<h1>Search for houses and flats for sale across the UK</h1>
	<form id="search" class="searchBox">
		<input type="text" name="search">
		<button>Search</button>
	</form>
`);

export default search;
