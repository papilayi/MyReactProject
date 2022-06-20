
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

  render() {

    let people = null

    if (this.state.showPersons) {
      people =<div>
        <Semilore name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
      <Semilore name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
      <Semilore name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
        </div>
      
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
 