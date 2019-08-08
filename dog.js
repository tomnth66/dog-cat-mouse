function Dog(){
	this.name = 'Bob';
	this.stomach = [];
}

Dog.prototype.eat = function(obj) {
	this.stomach.push(obj);
};

module.exports = Dog;