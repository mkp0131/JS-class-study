class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	say() {
		return `Hello ${this.name}`;
	}
}

var park = new Animal('dog', 4);
park.say = function () {
	return "change";
}
console.log('', park.say());


var obj = {
	say: function() {
		return "Say!";
	},
	hello() {
		return "Hello";
	}
}
