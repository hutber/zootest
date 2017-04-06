const handlebars = require('handlebars');
import PropertyItem from './item'

const propertyItem = PropertyItem();
const property =  handlebars.compile(`
	<div class="searchResults">32 results found</div>
	<article class="propertyitem">
		<div>
	    <img src="http://li.zoocdn.com/bdf8bcee1c3850bb1ce5c6e7fd3013b50b6bf72d_354_255.jpg" alt="House">
	    <div class="propertyitem-text">
		    <h3>2 bed flat for sale</h3>
		    <div class="propertyitem-price">£1800000</div>
		    <div class="propertyitem-info"> Set on the ground floor this large duplex Seven bed two Bath apartment with galleried landing and fully fitted kitchen is offered chain free. Set on the ground floor this large duplex Seven bed two Bath apartment with galleried landing and fully fitted kitchen is offered chain free.</div>
	    </div> 
		</div>
    <aside> 
      <img src="http://st.zoocdn.com/zoopla_static_agent_logo_(326525).png" alt="agent logo">
      <div class="agentName">Anscombe & Ringland</div> 
      <div class="agentAddress">58-60 Totteridge  Lane, Whetstone, London, N20 9QP</div>
      <div class="agentNumber">020 3478 3239</div>     
		</aside>   
	</article>     
`);

export default property;
