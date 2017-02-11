import React,{Component} from 'react';
import Answer from './answer'

export default class Answers extends Component{
	constructor(props) {
		super(props);
		this.state = {};
		this.state = {answers:this.props.allAnswers};
		console.log(this.state.answers);

	}

	render(){
		const answerList = Object.keys(this.state.answers).map((key,answer)=>{
						return <Answer key={key} answer={this.state.answers[key]}/>
					});
	
		 return (
			<div>
				{answerList}
			</div>

			  )
	}
}