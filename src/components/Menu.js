import React, { Component } from 'react';
import Search from './Search'
import { Container, Col, Row, Button, ButtonGroup } from 'reactstrap';
import Druid from '../assets/heroes/druid.png'
import Hunter from '../assets/heroes/hunter.png'
import Mage from '../assets/heroes/mage.png'
import Paladin from '../assets/heroes/paladin.png'
import Priest from '../assets/heroes/priest.png'
import Rogue from '../assets/heroes/rogue.png'
import Shaman from '../assets/heroes/shaman.png'
import Warlock from '../assets/heroes/warlock.png'
import Warrior from '../assets/heroes/warrior.png'

class Menu extends Component {
	heroes = {
		druid: Druid,
		hunter: Hunter,
		mage: Mage,
		paladin: Paladin,
		priest: Priest,
		rogue: Rogue,
		shaman: Shaman,
		warlock: Warlock,
		warrior: Warrior
	}
	
  render() {
    return (
      	<Container className="bg-dark rounded shadow text-light">
					<Row>
						<Col xs="1" className=" font-weight-bold animated fadeIn fast" >
								<div className='hero-img--circle-border'>
									<img src={this.heroes[this.props.hero.toLowerCase()]} />
								</div>
						</Col>
						<Col xs="3" className=" font-weight-bold" style={{margin: "auto 0"}}>
								<h2 className="ml-2" ><span className="text-capitalize" style={{fontSize:"1.5em"}} >{this.props.hero.toLowerCase()} Deck</span></h2>
						</Col>
						
						<Col xs={{size: 8}} className="justify-content-right text-right p-2">
							<ButtonGroup>
								<Button className="text-uppercase" color="primary" onClick={this.props.showBarGraph.bind(this, false)}>Browse Cards</Button>
								<Button className="text-uppercase" color="info" onClick={this.props.showBarGraph.bind(this, true)}>Graph</Button>
								<Button className="text-uppercase" color="warning" onClick={this.props.clearDeck.bind(this)}>Clear Deck</Button>
								<Button className="text-uppercase" color="danger" onClick={this.props.reset.bind(this)}>Reset</Button>
			      	</ButtonGroup>
							<Search cards={this.props.cards}  searchDataFound={this.props.searchDataFound}/>
						</Col>
					</Row>
				</Container>
     
    );
  }
}
export default Menu;
