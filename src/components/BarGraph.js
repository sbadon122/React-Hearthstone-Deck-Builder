import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';


class BarGraph extends Component {
	
	
  render() {
		let costCount = [0,0,0,0,0,0,0,0]
		this.props.cards.map((card) => {
			if (card.cost >= 7){
				costCount[7]++
			}
			else {
				costCount[card.cost]++
			}
		}
		)
		let data = {
		  labels: ["0", "1", "2", "3", "4", "5", "6", "7+"],
			datasets: [{
				        label: "Deck Cost",
				        backgroundColor: 'rgb(218,134,88)',
				        borderColor: 'rgb(165,101,67))',
				        data: [costCount[0], costCount[1], costCount[2], costCount[3], costCount[4], costCount[5], costCount[6] , costCount[7]],
			        }]
		}
    return < Bar 
							data={data} 
							width={10}
							height={5}
							
							options={{ maintainAspectRatio: true }}
							/>
		}
	
}

export default BarGraph;
