import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char'
import './App.css';

class App extends Component {
  // create your state here with an empty string
  state = {
    userInput: ''
  }

// create the change method and setState to reflect the user input.
inputchangeHandler = (event) => {
  this.setState({
    userInput: event.target.value
  });
}

deleteCharHandler = (index) => {
  // get the array of characters.
  const text = this.state.userInput.split('');
  // remove one at the index position.
  text.splice(index, 1);
  // update and set new STATE
  const updatedText = text.join('');
  this.setState({userInput: updatedText});
}

  render() {
// strings are not js arrays. and the map function itterates on an array. in order to convert the string into an array you use the split method which will split the characters into an array of substrings.
  const charList = this.state.userInput.split('').map((letter, index) => {
    return <Char
    character={letter}
    key={index}
    // anon function is used to execute a function everytime char is clicked.  this is just passed to clicked.  it's not executed immediatley.  the "charindex" is passed to the function. this alternate syntax is used to pass a reference. this function will get executed, when clicked property is fired.
    clicked={() => this.deleteCharHandler(index)} />;
  });

    return (
      <div className="App">
      <h1> Hello React </h1>
      <input type="text"
      // this is two way binding...adding an change listener(onChange) and a the current value of our state.
      onChange={this.inputchangeHandler.bind(this)}
      value={this.state.userInput} />
      <p>{this.state.userInput}</p>
      <Validation inputLength={this.state.userInput.length} />
      {charList}
      </div>
    );
  }
}

export default App;
