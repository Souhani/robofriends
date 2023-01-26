import React, { Component } from 'react';
import Cardlist from'../components/Cardlist';
import SearchBox from '../components/SearchBox';
import './App.css';
import  Scroll from '../components/Scroll';


class App extends Component {

    constructor() {
        
        super() 
        this.state = {
             robots: [],
             searchfield: ''
        }   

}

   
componentDidMount() {

	fetch('https://jsonplaceholder.typicode.com/users')
	.then(response => response.json())
	.then(users => {this.setState({robots: users})})
}
  
SearchChange = (event) => {

this.setState({searchfield: event.target.value})
}


    
    render(){
        const {robots, searchfield} = this.state;
    	const SearchedRobots= robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    	})

    	 return !robots.length ?

    		 <h1>Loading</h1> :
   
		 (
	           <div className='tc'> 
	            <h1 className= 'f1'>RoboFriends</h1>
	            <SearchBox onSearch= {this.SearchChange} />
	            <Scroll>
		           <Cardlist robots = {SearchedRobots} />
		        </Scroll>
	           </div>
			);
    }
    
    }


export default App;