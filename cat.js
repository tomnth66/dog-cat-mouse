function Cat(name){
	this.name = name;
	console.log('change');
}


Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);	
};

module.exports = Cat;