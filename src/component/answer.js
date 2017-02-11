import React from 'react';
import { Card, CardText, Row, Col,Container } from 'reactstrap';

export default (props)=>{
		console.log(props);
	return(
		<Container>
			<Row>
			<Col>
	        <Card block>
	          <CardText>{props.answer.body}</CardText>
	        </Card>
	      </Col>
		</Row>
		</Container>
	)
}