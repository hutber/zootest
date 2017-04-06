import property from '../templates/properties';
import errors from '../templates/errors';
import get from '../utils/get'

const loading = document.getElementsByClassName('loading')[0];

const updateSearchResults = function (properties){
	get('./data.json') //grab data
		.then(function(data){
			setTimeout(function () { //add some latency
				loading.classList.remove('loading-on');
				const propertyData = JSON.parse(data);
				properties.innerHTML = property(propertyData);
			}, 300);
		})
		.catch(function (err) {
			console.error(err);
			loading.classList.remove('loading-on');
			document.getElementsByClassName('searchError')[0].innerHTML = errors.searchMessages.randomError(); //Wanted to write an error handler
		});
};

const submitSearchForm = function (form, properties){
	const input = form.currentTarget.getElementsByClassName('searchText')[0];
	while (properties.firstChild) { //restart properties
		properties.removeChild(properties.firstChild);
	};
	if(input.value.length === 0){
		document.getElementsByClassName('searchError')[0].innerHTML = errors.searchMessages.emptySearch();
	}else{
		loading.classList.add('loading-on'); //show loader
		updateSearchResults(properties);
	}
};

export default submitSearchForm;
