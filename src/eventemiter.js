export default function EventEmitter(){
	this._events = {};
}

EventEmitter.prototype.on = function(type,listener){
 this._events[type] = this._events[type] || []
 this._events[type].push(listener);
}

EventEmitter.prototype.emit = function(type){
	
	if(this._events[type]){
		this._events[type].forEach(function(listener){
		 listener();
		});
	}

}