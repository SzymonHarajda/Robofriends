import React, {Component} from "react";
import CardList from "../components/CardList";
import SerchBox from "../components/SerchBox"
import Scroll from '../components/Scroll';
import './App.css';
//import { robots } from "./robots";

//class was crated to do comnicatin with chaildas as a parent we seting de value of serchfilda as a robots name by filtering letters 
class App extends Component {
    constructor(){
        super();
        //state is whats changes in the app
        this.state={
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.cypress.io/users')
        .then(response=>response.json())
        .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event)=>{
        this.setState({searchfield: event.target.value});
    }
    render (){
        const{robots,searchfield}= this.state;
        const filteredRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return !robots.length ? 
         <h1>Loading</h1>:
        (
            <div className="tc ">
                <h1 className="f1">RoboFriends</h1>
                <SerchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll> 
            </div>
        );
    }
}

export default App;