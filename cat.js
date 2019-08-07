function Cat(){
	console.log('change');
}


Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);	
};