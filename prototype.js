

var obj1 = {
	name: 'mkp',
	say: function() {
		return "Say!";
	},
	hello() {
		return "Hello " + this.name;
	},
}

// 객체의 상속
var obj2 = Object.create(obj1);
// obj1.addHello = function() {
// 	return "Add Hello ";
// }
// obj1.hello = function() {
// 	return "modify";
// }
// obj2.name = 'uuu';

var obj3 = {};
obj3.__proto__ = obj1;

// console.log('', obj2);
// console.log('', obj3);
// console.log('', Object.create(obj1) === obj1.__proto__);

// var obj2 = {
// 	name: "lulu",
// }

// var tt = obj1.hello.call(obj2);

// console.log('', tt);

// 생성자 함수를 통한 객체의 상속


function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.sayHello = function() {
	return `hello ${this.name}`;
}

function PersonPlus(name, age, type) {
	Person.call(this, name, age);
	this.type = type;
}
console.log('', PersonPlus.prototype);
PersonPlus.prototype = Object.create(Person.prototype)
// var kim = new PersonPlus('kim', 31, 'human');
console.log('', PersonPlus.prototype);
PersonPlus.prototype.constructor = PersonPlus;
console.log('', PersonPlus.prototype);
console.log('', Person.prototype);

