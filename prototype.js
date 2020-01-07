function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.sayHello = function() {
	return `hello ${this.name}`;
}

var kim = new Person('kim', 31);

var obj1 = {
	say: function() {
		return "Say!";
	},
	hello() {
		return "Hello";
	},
}
var obj2 = {
	lulu: "lulu",
}
obj2 = Object.create(obj1);


console.log('', obj2.hello());