import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import Fuse from "fuse.js";

class Search extends Component {
	
	onChange = (e) => {
			
			const nested = [{ name: "name", weight: 0.6 }, { name: "text", weight: 0.4 }, { name: "mechanics"}];
	    const threshhold = 0.4
	    // 2 means it is nested
	    var opts = {
	      shouldSort: true,
	      threshold: threshhold,
	      keys: nested
	    };
	    var fuse = new Fuse(this.props.cards, opts);
	    var cardData = fuse.search(e.target.value);
	    this.props.searchDataFound(cardData, e.target.value);
	}
		
  render() {
    	return (
				<InputGroup className="p-2">
	        <Input onChange={this.onChange} placeholder="Search cards" />
				 	<InputGroupAddon addonType="prepend">Search</InputGroupAddon>
	      </InputGroup>
    	);
  }
	
}


export default Search;
