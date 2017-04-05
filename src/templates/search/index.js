//- Created by hutber on 05/04/17.  */
import grid from '../../css/grid.css';
import style from './search.css';

const search =  `
	<h1 class="${grid.grid} ${grid['col-3-5']}">Search for houses and flats for sale across the UK</h1>
	<form id="search" class="${grid.grid} ${grid['col-2-5']} ${style.searchContainer}">
		<input type="text" name="search" class="${grid.grid} ${grid['col-3-5']}">
		<button class="${grid.grid} ${grid['col-2-5']}">Search</button>
	</form>
`;

export default search;
