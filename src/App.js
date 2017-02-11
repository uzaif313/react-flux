import React, { Component } from 'react';
import './App.css';
import { Button } from 'reactstrap';
import Header from './component/header';
import Question from './component/question';
import Answers from './component/answers';
import AnswerForm from './component/addAnswerForm';
import AnswerDispatcher from './dispatcher/answer_dispatcher';
import EventEmitter from './eventemiter';
import AnswerStore from './store/answerstore';
class App extends Component {
  
  constructor(props) {
  	super(props);
  	this.state = {};
  	this.state = {
  		            allAnswers:AnswerStore.getAllAnswers()
       	        };
    this._onAddAnswer = this._onAddAnswer.bind(this);
    this._onChange = this._onChange.bind(this);
  }

  _onAddAnswer(answerText){
    AnswerDispatcher.dispatch({
      actionType:"ADD_ANSWER",
      newAnswer:answerText
    });
  }

  _onChange(){
    this.setState({allAnswers:AnswerStore.getAllAnswers()});
  }

  componentDidMount() {
    AnswerStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    AnswerStore.removeListener(this._onChange);
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Question/>
        <Answers allAnswers={this.state.allAnswers}/>
        <hr />
        <AnswerForm onAddAnswer={this._onAddAnswer}/>
      </div>
    );
  }
}

let custmEvent = new EventEmitter();

custmEvent.on("load",function(){
	console.log("Some data loadd");
});


// AnswerDispatcher.register(function(action){
// 	console.log("Received Action");
// 	console.log(action);
// });

export default App;
