import React from 'react';
import Playtime from './Playtime'

class Dog extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hungry: "yes",
        }
        this.feed = this.feed.bind(this)
    }
    
    feed() {
        this.setState({
            hungry: "no"
        })
    }

    render() {
        return (
            <div>
                <div>My name is {this.props.name}</div>
                <div>I am {this.props.colour}</div>
                Hungry: {this.state.hungry}
                <br />
                <button onClick={this.feed}>Feed</button>
                <hr />
            </div>                
        );
    }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Dogs!</h2>
        <Dog name="Kira" colour="brown and white"/>
        <Dog name="Tez" colour="gray" />
        <h2>Play with the dogs!</h2>
        <Playtime />       
        <div>
          <App />
          <br /><hr /><br />
          <div>Note: This example shows you how to use</div>    
          <ul>
            <li>state</li>
            <li>props</li>
            <li>lists and keys</li>
            <li>conditional rendering</li>
          </ul>
        </div>   
      </div>
    )
  }
}

export default App;
