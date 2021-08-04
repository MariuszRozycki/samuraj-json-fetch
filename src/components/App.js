import React, { Component } from 'react';
import './App.css';
import Word from './Word';

class App extends Component {

  state = {
    words: [],
    isLoaded: false
  }

  componentDidMount() {
    setTimeout(this.fetchData, 3000)
  }

  // componentDidUpdate() {
  //   console.log('ComponentDidUpdated');
  //   setTimeout(this.fetchData, 3000)
  // }

  fetchData = () => {
    fetch('data/words.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          words: data.words,
          isLoaded: true
        })
      })
  }

  render() {
    console.log('Render');
    const words = this.state.words.map(word => (

      <Word key={word.id}
        id={word.id}
        en={word.en}
        pl={word.pl} />

    ))
    console.log(words);

    return (
      <div className="App">

        {this.state.isLoaded ? words : 'Loading data'}
      </div>
    );
  }
}

export default App;
