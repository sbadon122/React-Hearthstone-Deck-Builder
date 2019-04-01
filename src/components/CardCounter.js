import React, { Component } from 'react';

import {  Card, CardText } from 'reactstrap';


class CardCounter extends Component {
	
		
  render() {
	  return (
				<Card className="text-center m-1 p-2 black-font">
					<CardText>{this.props.deckSize}/30 Cards</CardText>
				</Card>
	  )
	
  }
}



export default CardCounter;
