const handlebars = require('handlebars');

const property =  handlebars.compile(`
	<div class="searchResults">{{result_count}} results found</div>
	{{#each listing}}
		<article class="propertyitem">
			<div>
		    <img src="{{image_url}}" alt="{{property_type}}">
		    <div class="propertyitem-text"> 
			    <h3><a href="{{details_url}}">{{num_bedrooms}} bed {{property_type}} for sale</a></h3>
			    <div class="propertyitem-price">&#163;{{price}}</div>
			    <div class="propertyitem-info">{{description}}</div>
		    </div> 
			</div>
	    <aside>  
	      <img src="{{agent_logo}}" alt="{{agent_name}}">
	      <div class="agentName">{{agent_name}}</div>
	      <div class="agentAddress">{{agent_address}}{{#if agent_postcode}}, {{agent_postcode}}{{/if}}</div>
	      <div class="agentNumber">{{agent_phone}}</div>     
			</aside>    
		</article>   
  {{/each}}
`);

export default property;
