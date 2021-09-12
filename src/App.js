import React, {Component} from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox'; 
import './App.css';


class App extends Component {
	constructor(){
		super()
		this.state={
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
			const filteredRobots = this.state.robots.filter(robot => {
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
	}

	render() {
	
		return (
			<div className='tc'>
				<h1 className='f1'> Robofriends </h1>
				<SearchBox searchChanage={this.onSearchChange}/>
				<CardList robots={this.state.robots}/>
			</div>
		);
	}
}

export default App;