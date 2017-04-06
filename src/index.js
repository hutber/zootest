import search from './templates/search';
import property from './templates/properties';
import errors from './templates/errors';
import get from './utils/get'
import './css/main.scss';

function startZoo (){
 document.addEventListener('DOMContentLoaded', function () {
	 const app = document.getElementById('zooApp');
	 app.innerHTML = search();
	 app.innerHTML = property();
	 const searchForm = document.getElementById('search');
	 searchForm.addEventListener('submit', function (form) {
		 const input = form.currentTarget.getElementsByClassName('searchText')[0];
		 if(input.value.length === 0){
		 	 document.getElementsByClassName('searchError')[0].innerHTML = errors.searchMessages.emptySearch();
		 }else{
			 get('./data.json')
			 .then(function(data){
			 	const propertyData = JSON.parse(data);
			  console.info(propertyData);
			 })
			 .catch(function (err) {
				 console.info(err);
			 });
		 }
		 form.preventDefault();
	 })
 });
}

startZoo();

export default startZoo;
