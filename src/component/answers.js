import React,{Component} from 'react';
import Answer from './answer'
import AnswerDispatcher from '../dispatcher/answer_dispatcher';
export default class Answers extends Component{
	constructor(props) {
		super(props);
		this.state = {};
		this.state = {answers:this.props.allAnswers};
		this._onMarkCorrect = this._onMarkCorrect.bind(this);
	}

	_onMarkCorrect(id){
		AnswerDispatcher.dispatch({
			actionType:"MARK_AS_CORRECT",
			id:id
		});
	}

	render(){
		const answerList = Object.keys(this.state.answers).map((key,answer)=>{
						return <Answer key={key} id={key} onMarkCorrect={this._onMarkCorrect} answer={this.state.answers[key]}/>
					});
	
		 return (
			<div>
				{answerList}
			</div>

			  )
	}
}