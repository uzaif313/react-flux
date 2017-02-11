import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Container } from 'reactstrap';


export default class AnswerForm extends Component{
	constructor(props) {
		super(props);
		this.state = {value:''};
    	this._addAnswer = this._addAnswer.bind(this);
    	this._onChangeValue = this._onChangeValue.bind(this);
	}


	_addAnswer(event){
		event.preventDefault();
		this.props.onAddAnswer(this.state.value)
		this.setState({value:""});
	}

	_onChangeValue(event){
		this.setState({value:event.target.value});
	}


	render(){
		return (
			<Container>
			<Form>
        		<FormGroup>
          			<Label for="Answer">Answer</Label>
         			 <Input type="textarea" placeholder="Add Your Answer" onChange={this._onChangeValue} />
        		</FormGroup>
        		<Button color="success" onClick={this._addAnswer}>Add Your Answer Here</Button>
       		</Form>
       		</Container>

		)
	}
}