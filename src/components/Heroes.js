import React, { Component } from 'react';
import Hero  from './Hero'
import { Container, Col,Row } from 'reactstrap';



class Heroes extends Component {
	heroes = ['DRUID', 'HUNTER', 'MAGE', 'PALADIN', 'PRIEST', 'ROGUE', 'SHAMAN', 'WARLOCK', 'WARRIOR'] 
  render() {
	  const filteredResult = this.heroes.map((x,i) => {
		      return i % 3 === 0 ?  this.heroes.slice(i, i+3) : null;
		  }).filter(x => x != null);
		
	  return (
	  	<Container>
			<Row className="justify-content-center row bg-dark p-4 text-light rounded shadow">
				<h2 className="text-uppercase font-weight-bold"> Choose a hero </h2>
			</Row>
			<hr/><br/>
		  {
				filteredResult.map((heroRow) => {
		         return (
							 <Row className='row-4'>
							 {heroRow.map((hero) => 
									<Col className='col-4'>
							 			<Hero hero={hero} changeHero={this.props.changeHero}/>
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
export default Heroes;
