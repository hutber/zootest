import search from './templates/search';
import submitSearchForm from './pages/searchForm'

function startZoo (){
	const app = document.getElementById('zooApp');
	app.innerHTML = search();//Now load in dynamic html

	//look for elements in search container
	const searchForm = document.getElementById('search');
	const properties = app.getElementsByClassName('properties')[0];

	//Add Submit
	searchForm.addEventListener('submit', function (form) {
		submitSearchForm.apply(null, [form, properties]);
		form.preventDefault();
	});
}

//now load up function once dom is ready
document.addEventListener('DOMContentLoaded', function () {
	startZoo();
});

export default startZoo;
