import React from 'react';

class Playtime extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        treats: []
      }
  
      this.play = this.play.bind(this)
    }
  
    play(what) {
      this.state.treats.push(what)
      this.setState({
        treats: this.state.treats
      })
    }
  
    render() {
  
      let lastTreat = this.state.treats[this.state.treats.length - 1]
      
      return (
        <div>
          <ul>
            {
              this.state.treats.map((item, index) =>
                <li key={index}>{item}</li>
              )
            }
          </ul>
  
          <button onClick={ () => this.play("stroke") }>stroke lovingly</button>
          
          <button onClick={ () => this.play("play ball") }>play ball</button>
          
          <button onClick={ () => this.play("give orange") }>give orange</button>
          
          <br />
          { (lastTreat === "give orange") ? <h1>ORANGES!!!!!!!</h1> : "" }
        </div>
      )
    }
  }
  
  export default Playtime;