import search from './templates/search';
import submitSearchForm from './pages/searchForm'
import './css/main.scss';

const app = document.getElementById('zooApp');
let properties = {};

function startZoo (){
	 //Now load in dynamic html
	 app.innerHTML = search();
	 const searchForm = document.getElementById('search');
	 properties = app.getElementsByClassName('properties')[0];

	 searchForm.addEventListener('submit', function (form) { //Add Submit
		 submitSearchForm(form, properties);
		 form.preventDefault();
	 });
}

document.addEventListener('DOMContentLoaded', function () {
	startZoo();
});

export default startZoo;
