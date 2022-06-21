
import { Component } from 'react';
import './App.css';
import Semilore from './Person/Person'

class App extends Component  { 

  state = {
    persons: [
      { name: 'PHILZ', age: 12 },
      { name: 'ANU', age: 77 },
      { name: 'JOL', age: 7 },
    ],
    showPersons = false
  }

  switchNameHandler = (newName) =>{
    this.setState(
    {
      persons: [
        { name: 'TIMOTHY', age: 21  },
        { name: 'adun', age: 3 },
        { name: newName, age: 79 },
      ],
    }
    )
  }
 nameChangedHandler = (event) =>{
  this.setState(
    {
      persons: [
        { name: 'TIMOTHY', age: 21  },
        { name: event.target.value, age: 3 },
        { name: 'ADUN', age: 79 },
      ],
    }
    )
 }

 showPersonsHandler = () =>{
  const doesShow = this.state.showPersons
  this.setState({
    showPersons: !doesShow
  })
 }
 deletePersonHandler = (personIndex) =>{
  const osas = this.state.persons.splice();
  osas.splice(personIndex, 1)
  this.setState({
    osas: osas
  })
 }

  render() {

    let people = null

    if (this.state.showPersons) {
      people =(
        <div>
          {this.state.persons.map((pesin, index) =>{
            return <Semilore
            clicked = {()=>this.deletePersonHandler(index)}
            name = {pesin.name}
            age = {pesin.age}
            />
          })}
        </div>
      )
      
    }
  return(
    <div className='Apps'>
      <h1>Hi, I am a React Developer</h1>
      <button onClick = {this.showPersonsHandler} >SWITCH NAME</button>
    </div>
  )
}
}

export default App;
 