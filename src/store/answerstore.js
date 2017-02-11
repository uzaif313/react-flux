import EventEmitter from '../eventemiter';
import AnswerDispatcher from '../dispatcher/answer_dispatcher'

// initail state
const data = {
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
			};
//Create new Store with Emitter			
const AnswerStore = new EventEmitter();

AnswerStore.emitChagne = function(){
	this.emit("change");
}

AnswerStore.addChangeListener = function(listener){
	this.on("change",listener)
}

//Get All answer
AnswerStore.getAllAnswers= function(){
	return data;
}


//Add Answer 
AnswerStore.addAnswer = function(answer){
	data[Object.keys(data).length + 1 ] ={
	 	body:answer,
	 	correct:false
	};
	this.emitChagne();
}

//make answer correct
AnswerStore.makeAnswerCorrect = function(id){
	for(var key in data){
		data[key].correct = false;
	}
	data[id].correct = true;
    this.emitChagne();
}



//Register Dispatcher
AnswerDispatcher.register(function(action){
	console.log("Received Action");
	switch(action.actionType){
		case "ADD_ANSWER":{
			console.log("Answer Added");
			AnswerStore.addAnswer(action.newAnswer);
			break;
		}
		
		case "MARK_AS_CORRECT":{
			console.log("Marked Correct");
			AnswerStore.makeAnswerCorrect(action.id);
			break;
		}
	}
});

export default AnswerStore;