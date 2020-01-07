function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.sayHello = function() {
	return `hello ${this.name}`;
}

var kim = new Person('kim', 31);

var obj1 = {
	name: 'mkp',
	say: function() {
		return "Say!";
	},
	hello() {
		return "Hello " + this.name;
	},
}

var obj2 = {
	name: "lulu",
}

var tt = obj1.hello.call(obj2);

console.log('', tt);