import React, { Component } from 'react';
import { Container, Col,Row, Card, CardTitle} from 'reactstrap';
import Crystal from '../assets/crystal.png';



class Deck extends Component {
	
	getUrlImage = (id) => {
		let url =  'https://art.hearthstonejson.com/v1/render/latest/enUS/256x/' + id + '.png'
		return (
			<img className="tile-preview-image" src={url} />
		)
	
	}
	
	getTiles = () => {
		let url = "https://art.hearthstonejson.com/v1/tiles/"
		return ( this.props.deck.map((tile) => 
				<div>
					<button className="tile-button" onClick={this.props.removeCard.bind(this,tile.id)} onMouseEnter={this.props.previewCard.bind(this,true)} onMouseLeave={this.props.previewCard.bind(this,false)}>
						<div className="bg-light animated border rounded fadeInLeft faster mt-1" style={{padding:"0.01rem"}}>
							<Row className="tile-container shadow x bg-light m-1" key={tile.id}>
									<Col className="col-3 p-0 crystal">
										<div className="text-center crystal-container">
											<img className="img-fluid justify-content-center" src={Crystal} />
											<h3 className='text-light'>{tile.cost}</h3>
										</div>
									</Col>
									<Col className="col-7 tile-column">
										<img className='img-fluid tile' src={[url+tile.id+'.png'].join()} />
									</Col>
									<Col className="col-1 nopadding text-warning card-number font-weight-bold">
										<h3>{tile.numOfCards>1 ? 'x2' : ''}</h3>
									</Col>
							</Row>
						</div>
						
					</button>
					{this.getUrlImage(tile.id)}		
				</div>
			)
		)
	}
  render() {
		
		
	  return (
	  	<Container className='container-fluid pt-4 nopadding animated  fadeIn faster'>
					<Row className="justify-content-center">
						<Card>
							<CardTitle className="m-2">Deck</CardTitle>
						</Card>	
					</Row>
					{this.getTiles()}
					
			</Container>
	  )
	
  }
	
}



export default Deck;
