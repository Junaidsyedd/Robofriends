import React, {Component} from 'react';
import CardList from '../Components/CardList';
import { robots } from '../Components/robots';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll'; 
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css';


class App extends Component {
	constructor(){
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}
	render(){
			const { robots, searchfield} = this.state;
			const filteredRobots = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return (
			<div className='tc'>
				<h1>Robofriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<ErrorBoundry>
						<CardList robots={filteredRobots}/>
					</ErrorBoundry>
				</Scroll>
			</div>
		);
	}	
}



export default App;