class Animal {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	say() {
		return `Hello ${this.name}`;
	}
}

class AnimalPlus extends Animal {
	constructor(name, age, type) {
		super(name, age);
		this.type = type;
	}
	say() {
		return super.say() + ` You are ${this.type}`;
	}
}
var park = new Animal('dog', 4, 'animal');



