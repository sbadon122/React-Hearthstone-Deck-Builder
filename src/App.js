import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Cards from './components/Cards';
import Deck from './components/Deck';
import Pagination from './components/Pagination'
import CardCounter from './components/CardCounter'
import Menu from './components/Menu'
import Heroes from './components/Heroes'
import BarGraph from './components/BarGraph'
import CardJson from './assets/json/cards.collectible.json'

import './App.scss';

const statics = {
	numberOfCardsShown: 16
}

const initialState = {
	cards : CardJson,
	initialFilteredHeroCards: [],
	cardsShown: CardJson.slice(0,statics.numberOfCardsShown),
	pageCount: CardJson.length/statics.numberOfCardsShown,
	deck : [],
	deckSize: 0,
	showPreviewBackground: false,
	showGraph: false,
	hero: ''
}

class App extends Component {
	
	constructor(props){
		super(props)
		this.state = initialState
	}
	
	hideCard = (id) => {
		this.setState({cards: [...this.state.cards.filter(card  => card.id !== id)]})
	}
	
	handlePageClick = (data) => {
		let selected = data.selected+1;
		let offset2 = Math.ceil(selected * statics.numberOfCardsShown);
		let offset1 = Math.ceil((selected-1) * statics.numberOfCardsShown);
		this.setState({cardsShown: [...CardJson.slice(offset1, offset2)]});
	}
	
	addCardToDeck = (id, cost) => {
		if (this.state.deckSize < 30 ){
			let foundCard = false;
			this.state.deck.map((tile) => {
				if (tile.id === id){
					foundCard = true
					if (tile.numOfCards < 2){
						tile.numOfCards++
						this.setState({deckSize: this.state.deckSize + 1});
					}
				}
			})
			if (!foundCard){
				let newCards = [...this.state.deck, {id: id,numOfCards: 1, cost: cost}];
				this.setState({deck: [...newCards.sort((a,b) => a.cost - b.cost)]})
				this.setState({deckSize: this.state.deckSize + 1});
			}
		}
	}
	
	reset = () => {
		this.setState(initialState)

	}

	clearDeck = () => {
		this.setState({deck: []})
		this.setState({deckSize: 0})
	}
	
	changeHero = (hero) => {
		
		let neturalClassname = 'NEUTRAL'
		let initialFilteredHeroCards = this.state.cards.filter(card  => card.cardClass === hero || card.cardClass === neturalClassname)
		this.setState({cards: initialFilteredHeroCards})
		this.setState({initialFilteredHeroCards: initialFilteredHeroCards})
		this.setState({cardsShown: initialFilteredHeroCards.slice(0,statics.numberOfCardsShown)})
		this.setState({pageCount: initialFilteredHeroCards.length/statics.numberOfCardsShown})
		this.setState({hero: hero})
		
	}
	
	searchDataFound = (cardData, searchValue) => {
		if(cardData.length === 0 && searchValue.length === 0){
			cardData = this.state.initialFilteredHeroCards
		}
		this.setState({cards: cardData})
		this.setState({cardsShown: cardData.slice(0,statics.numberOfCardsShown)})
		this.setState({pageCount: cardData.length/statics.numberOfCardsShown})
	}
	
	removeCard = (id) => {
		if (this.state.deckSize > 0 ){
			this.state.deck.map((tile) => {
				if (tile.id === id){
					if (tile.numOfCards === 2){
						tile.numOfCards--;
						this.setState({deckSize: this.state.deckSize - 1});
					}
					else {
						let newCards = [...this.state.deck.filter(card => card.id !== id)];
						this.setState({deck: [...newCards.sort((a,b) => a.cost - b.cost)]})
						this.setState({deckSize: this.state.deckSize - 1});
						this.setState({showPreviewBackground: false})
					}
				}
			})
		}
	}
	
	previewCard = (showPreviewBackground) =>{ 
		this.setState({showPreviewBackground: showPreviewBackground})
	}
	
	mainScreen = () => {
		if(this.state.showGraph){
			return (
				<BarGraph cards={this.state.deck} />
			)
		}
		else {
			return (
				<Cards cards={this.state.cardsShown}  hideCard={this.hideCard} addCardToDeck={this.addCardToDeck} deck={this.state.deck}/>
			)
		}
	}
	
	showBarGraph = (showBarGraph) => {
		this.setState({showGraph: showBarGraph })
	}

  render() {
		if (!this.state.hero) {
			return (
	      <div className="App">
					<Container  className='deckbuilder-container justify-content-center bg-light rounded shadow-lg p-4 mt-4'>
						<Heroes changeHero={this.changeHero}  />
					</Container>
				</div>
			)
		}
		else {
	    return (
	      <div className="App">
					<Container  className='deckbuilder-container justify-content-center bg-light rounded shadow-lg p-4 mt-4'>
							<Row>
								<Col className={this.state.showPreviewBackground ? 'cards-container  cards-container--preview col-10' : 'cards-container col-10'}>
									<Menu hero={this.state.hero} reset={this.reset} clearDeck={this.clearDeck} cards={this.state.initialFilteredHeroCards} searchDataFound={this.searchDataFound} showBarGraph={this.showBarGraph}/>
									<hr className="mt-0"/>
									<hr/>
										{this.mainScreen()}
									<hr/>
									<div className="preview-background"></div>
								</Col>
								<Col className='deck-container col-2 rounded bg-dark shadow-lg'>
									<Deck  deck={this.state.deck} removeCard={this.removeCard} previewCard={this.previewCard}/>
								</Col>
							</Row>
							<Row>
								<Col className='pagination-container col-10 '>
									<Pagination handlePageClick={this.handlePageClick}  pageCount={this.state.pageCount}/>
								</Col>
								<Col className='col-2'>
									<CardCounter deckSize={this.state.deckSize} />
								</Col>
							</Row>
					</Container> 
	      </div>
	    );
		}
  }
}




export default App;
