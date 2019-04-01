import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Druid from '../assets/heroes/druid.png'
import Hunter from '../assets/heroes/hunter.png'
import Mage from '../assets/heroes/mage.png'
import Paladin from '../assets/heroes/paladin.png'
import Priest from '../assets/heroes/priest.png'
import Rogue from '../assets/heroes/rogue.png'
import Shaman from '../assets/heroes/shaman.png'
import Warlock from '../assets/heroes/warlock.png'
import Warrior from '../assets/heroes/warrior.png'

class Hero extends Component {
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
				<Button className="animated fadeIn fast bg-light shadow" onClick={this.props.changeHero.bind(this, this.props.hero)}>
					<img src={this.heroes[this.props.hero.toLowerCase()]} className='img-fluid' />
				</Button>
    	);
  }
	
}


export default Hero;
