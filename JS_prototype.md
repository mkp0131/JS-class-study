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
1. 같은 생성자 함수로 만들어진 객체들은 모두 <b>prototype</b> 이라는 객체를 공유한다.
2. prototype 에 <b>공통적</b>으로 사용할 method 를 넣어 사용한다.
```javascript
Person.prototype.sayHello = function () {
	return this.name + '님은 ' + this.age + '세 입니다.';
}
```

### 프로토타입링크(__proto__)
1. 프로토타입링크(__proto__)는 생성자의 prototype 을 참조하고 있다.
2. Person.prototype.constructor === Person
3. Person.prototype === (Person생성자로 만들어진 객체).__proto__
4. (Person생성자로 만들어진 객체).__proto__.constructor === Person
