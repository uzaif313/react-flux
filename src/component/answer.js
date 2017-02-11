import React,{Component} from 'react';
import { Card, CardText, Row, Col,Container,Button } from 'reactstrap';

export default class Answer extends Component{
	
	constructor(props) {
		super(props);
		this.onMarkCorrect = this.onMarkCorrect.bind(this);
	}

	onMarkCorrect(){
		this.props.onMarkCorrect(this.props.id);
	}

	render(){
		return(
			<Container>
				<Row>
					<Col>
				        <Card block>
					      <CardText>{this.props.answer.body}</CardText>
				          {
				          this.props.answer.correct ? "" : 
					          <Button color="info" onClick={this.onMarkCorrect}>
					         	 Mark As Correct
					          </Button>
					      }
					    </Card>
				    </Col>
				</Row>
			</Container>
		)
	}

}