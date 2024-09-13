import React, { Component } from 'react'

export default class FavColorClass extends Component {
    constructor(){
        super();
        this.state = {color:"Red"};
    }
  render() {
    return (
      <div>
        <h1 style={{color:this.state.color}}>My Car Color is: {this.state.color}</h1>
        <button onClick={() => {this.setState({color:"Blue"})}}>Change Color</button>
      </div>
    )
  }
}
