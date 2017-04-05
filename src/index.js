import search from './templates/search';
import property from './templates/properties';
import Backbone from './backbone';
import './css/main.scss';

const app = document.getElementById('zooApp');

// app.innerHTML = search();
app.innerHTML = property();

// const property = new Backbone(app);
