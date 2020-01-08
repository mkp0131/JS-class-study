# 자바스크립트 프로토타입

## 자바스크립트의 생성자(constructor) 함수
1. 객체(object)를 생성하는 함수
2. 보통함수와는 달리 <b>대문자</b>로 시작
3. <b>new</b> 키워드를 사용해서 호출
```javascript
function Person(name, age) {
	this.name = name;
	this.age = age;
}
var kim = new Person('kim', 31);
```

### 프로토타입(prototype)
1. 같은 생성자 함수로 만들어진 객체들은 모두 <b>prototype</b> 이라는 객체를 공유한다.(일반 객체에는 없음!)
2. prototype 에 <b>공통적</b>으로 사용할 method 를 넣어 사용한다.
```javascript
Person.prototype.sayHello = function () {
	return this.name + '님은 ' + this.age + '세 입니다.';
}
```

### 프로토타입링크(\_\_proto\_\_)
1. 프로토타입링크(\_\_proto\_\_)는 생성자의 prototype 을 참조하고 있다.
2. Person.prototype.constructor === Person
3. Person.prototype === (Person생성자로 만들어진 객체).\_\_proto\_\_
4. (Person생성자로 만들어진 객체).\_\_proto\_\_.constructor === Person
> '자바스크립트 표준은 아니지만, 거의 모든 브라우져들이 호환을 하고 있다.'

## 클래스(class)
1. 자바스크립트의 클래스는 <b>생성자 함수</b>이다.
2. <b>new</b> 키워드를 이용하여 호출한다.
3. constructor 함수가 자동으로 실행되어 object를 생성한다.
4. prototype 에 method 를 넣고싶다면 <b>constructor() {} 밖</b>에 method 를 정의해준다.
```javascript
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
```

### 클래스 상속
1. <b>extends Animal</b> 부모 클래스의 요소를 상속받아 새로운 클래스를 생성
2. 기존 method / constructor 에 새로운 요소를 추가할시 <b>super</b>(부모클래스 생성자) 를 사용.
3. super: **부모생성자.call(this, arguments)** 와 동일
```javascript
class AnimalPlus extends Animal {
	constructor(name, age, type) {
		super(name, age);
		this.type = type;
	}
	say() {
		return super.say() + ` You are ${this.type}`;
	}
}
```

## \_\_proto\_\_ 이용 객체의 상속
1. \_\_proto\_\_ 를 이용하여 <b>부모객체를 지정 상속</b> 받을 수 있다.
2. 현재 객체에 값이 있는지 확인 / 없을 경우, 부모 객체에 값이 있는지 확인한다.
```javascript
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
obj2.\_\_proto\_\_ = obj1;
obj2.hello();
```

### \_\_proto\_\_ 의 대체제
1. <b>Object.create(부모객체)</b>
2. 빈객체를 리턴하고 빈객체의 \_\_proto\_\_ 에 부모객체를 참조한다.  새로운 빈 객체를 생성하고, 빈객체의 \_\_proto\_\_ 에 부모객체를 링크시킨다.
3. 자식 객체의 요소들을 정의해서 넣어주어야 한다.
```javascript
// __proto__
var obj3 = {};
obj3.__proto__ = obj1;

// Object.create()
var obj2 = Object.create(obj1);
obj2.lulu = "lulu";
obj2.soso = function() {
	return "soso";
}
```

## method 의 this(실행주체)를 변경하여 실행 (call, bind, apply)
1. method 의 **this(실행주체)를 변경**하여 실행
2. 다른객체 내부의 method를 실행하는 obj에서 실행 할 수 있다.
```javascript
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
```

## 생성자 함수를 통한 객체의 상속
1. 부모생성자를 call 을 이용하여 자식생성자에서 실행한다.
```javascript
function Person(name, age) {
	this.name = name;
	this.age = age;
}
function PersonPlus(name, age, type) {
	Person.call(this, name, age);
	this.type = type;
}
```
### method 를 상속 받는 방법
#### 1. \_\_proto\_\_ 을 이용한 방법
```javascript
Person.prototype.sayHello = function() {
	return `hello ${this.name}`;
}

PersonPlus.prototype.__proto__ = Person.prototype;
```

#### 1. Object.create() 을 이용한 방법
```javascript
// 자식객체의 prototype 에 Person.prototype 이 __proto__ 로 링크된 객체로 입력
PersonPlus.prototype = Object.create(Person.prototype)
// 기존의 constructor 를 잃어버렸기 때문에 원래 자신의 constructor 를 입력해준다.
PersonPlus.prototype.constructor = PersonPlus;
```

