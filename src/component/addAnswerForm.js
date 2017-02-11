import React,{Component} from 'react';
import { Button, Form, FormGroup, Label, Input, FormText,Container } from 'reactstrap';


export default class AnswerForm extends Component{
	constructor(props) {
		super(props);
		this.state = {};
	}


	render(){
		return (
			<Container>
			<Form>
        		<FormGroup>
          			<Label for="Answer">Answer</Label>
         			 <Input type="textarea" placeholder="Add Your Answer" />
        		</FormGroup>
        		<Button color="success">Add Your Answer Here</Button>
       		</Form>
       		</Container>

		)
	}
}