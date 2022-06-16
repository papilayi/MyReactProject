
import { Component } from 'react';
import './App.css';
import Semilore from './Person/Person'

class App extends Component  { 

  state = {
    persons: [
      { name: 'PHILZ', age: 12 },
      { name: 'ANU', age: 77 },
      { name: 'JOEL', age: 7 },
    ],
    otherState: 'something'
  }

  switchNameHandler = (newName) =>{
    // console.log('it works');
    // this.state.persons[0].name = 'TIMOTHY';
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

  render() {
  return(
    <div className='Apps'>
      <h1>Hi, I am a React Developer</h1>
      <Semilore name = {this.state.persons[0].name} age = {this.state.persons[0].age} ></Semilore>
      <Semilore 
      changed = {this.nameChangedHandler}
      clicked = {()=>this.switchNameHandler('PATH')}
      name = {this.state.persons[1].name} 
      age = {this.state.persons[1].age} />
      <Semilore name = {this.state.persons[2].name} age = {this.state.persons[2].age}/>
      <button onClick = {this.switchNameHandler.bind(this, 'ADUN!!##$$')} >SWITCH NAME</button>
    </div>
  )
}
}

export default App;
 