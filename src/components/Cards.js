import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import { Container, Col,Row } from 'reactstrap';


class Cards extends Component {
	
		
  render() {
	  const filteredResult = this.props.cards.map((x,i) => {
		      return i % 4 === 0 ?  this.props.cards.slice(i, i+4) : null;
		  }).filter(x => x != null);
			

	  return (
	  	<Container>
		  {
				filteredResult.map((cardRow, index) => {
		         return (
							 <Row key={index}>
							 {cardRow.map((card) => 
									<Col key={card.id}  className='col-3'>
							 			<Card card={card} hideCard={this.props.hideCard} addCardToDeck={this.props.addCardToDeck} deck={this.props.deck} />
									</Col>
							 	)}
							 </Row>
		         )
		  	})
			}
			</Container>
	  )
	
  }
}

Cards.propTypes = {
	cards: PropTypes.array.isRequired
}

export default Cards;
