//- Created by hutber on 06/04/17.  */
const handlebars = require('handlebars');

const searchMessages = {
	emptySearch: handlebars.compile(`<p>Please enter a search term</p>`),
	noResults: handlebars.compile(`<p>No Results Found</p>`),
	randomError: handlebars.compile(`<p>Ekk something went wrong</p>`)
}

export default searchMessages;
