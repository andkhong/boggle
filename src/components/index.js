import React, { Component } from 'react';
import './App.css';
import list from './../list.js';
import { rollDices, isTraversable } from './../utils';

import Board from './Board';
import Submit from './Submit';
import List from './List';

export default class App extends Component {
  state = {
    dices: [], // randomed dices containing letters
    base: [], // Default base to reset the dices when user submits score
    history: [], // History of letters picked by client
    word: '', // current selected word
    score: 0, // Current Score
    scoreList: {} // list of submitted words
  }
  componentWillMount(){
    let dices = rollDices(list);
    this.setState({ dices: dices, base: dices });
  }
  render() {
    const { word, dices, scoreList, score } = this.state;
    return (
      <div className="App">
        <img src='http://i.imgur.com/aoHYjPs.png.'/>
        <Board dices={dices} selectLetter={this.selectLetter} />
        <div className="submission">
          <div className="word"> Current Word: {word} </div>
          <Submit submitScore={this.submitScore} />
        </div>
        <List list={scoreList} score={score} />
      </div>
    );
  }
  
  selectLetter = index => {
    const { dices, word, history } = this.state;
    let row = index[0];
    let col = index[1];
    const { letter, selected } = dices[row][col];
    const newDice = [...dices];
    newDice[row] = [...dices[row]];
    newDice[row][col] = { letter: letter, selected: !selected };
    
    if(!word.length) {
      this.setState({
        word: word.concat(letter),
        dices: newDice,
        history: [index]
      });
      return;
    }
    if(selected) {
      let lastRow = history[history.length - 1][0];
      let lastCol = history[history.length - 1][1];
      if(row === lastRow && col === lastCol) {
        this.setState({
          word: word.substring(0, word.length - 1),
          dices: newDice,
          history: [...history.slice(0, history.length - 1)]
        });
      }
      return;
    }
    if(isTraversable(dices, history, index)) {
      this.setState({
        word: word.concat(letter),
        dices: newDice,
        history: [...history, index]
      });
      return;
    }
  }
  
  submitScore = () => {
    const { score, word, base, scoreList } = this.state;
    let wordSize = word.length;
    if(!wordSize) { return; }
    if(wordSize <= 2) this.setState({ word: '', dices: base });
    if(word in scoreList) this.setState({ dices: base });
    
    let newScore = 1;
    if(wordSize >= 8) newScore = 11;
    if(wordSize === 7) newScore = 5;
    if(wordSize === 6) newScore = 4;
    if(wordSize === 5) newScore = 3;
    scoreList[word] = newScore;
    this.setState({ 
      word: '',
      score: score + newScore,
      dices: base,
      scoreList
    });
  }
}
