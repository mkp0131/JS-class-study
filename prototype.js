function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.sayHello = function() {
	return `hello ${this.name}`;
}

var kim = new Person('kim', 31);
