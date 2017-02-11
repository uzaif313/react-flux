import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Header from './component/header';
import Question from './component/question';
import Answers from './component/answers';
import AnswerForm from './component/addAnswerForm';
import AnswerDispatcher from './dispatcher/answer_dispatcher'

class App extends Component {
  
  constructor(props) {
  	super(props);
  	this.state = {};
  	this.state = {
  		allAnswers:{
  			"1":{
  				body:"What is questin 1?",
  				correct:false
  			},
  			"2":{
  				body:"What is questin 2?",
  				correct:false
  			},
  			"3":{
  				body:"What is questin 3?",
  				correct:false
  			}
  		}
  	};
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Question/>
        <Answers allAnswers={this.state.allAnswers}/>
        <hr />
        <AnswerForm/>
      </div>
    );
  }
}

export default App;
