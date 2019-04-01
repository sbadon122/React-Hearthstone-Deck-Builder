import React, { Component } from 'react';

class Card extends Component {
	
	getStyle = (id) => {
		let foundCard = this.props.deck.filter(card => card.id === id && card.numOfCards === 2)
		if(foundCard.length > 0) {
			return 'card card--disabled'
		}
		else {
			return 'card'
		}
	}
	
  render() {
		const {id, cost} = this.props.card
		let srcUrl = 'https://art.hearthstonejson.com/v1/render/latest/enUS/256x/' + id + '.png'
		let buttonClass = "bg-light shadow mt-2 rounded animated fadeIn fast " + this.getStyle(id)
    	return (
				<button className={buttonClass} onClick={this.props.addCardToDeck.bind(this, id, cost)}  >
					<img src={srcUrl} className='img-fluid shadow ' onError={this.props.hideCard.bind(this, id)}/>
				</button>
    	);
  }
	
}

export default Card;
