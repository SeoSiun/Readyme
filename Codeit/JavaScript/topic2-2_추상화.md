# 추상화

## <01. 할당연산자>

- 할당연산자 (Assinment operator) (=) : 오른쪽에 있는 피연산자를 왼쪽에 있는 피연산자에 할당한다.

```jsx
x = x-2;  // 할당연산자의 오른쪽부터 연산한 뒤 그 결과를 왼쪽에 할당.
```

## <02. 함수의 실행순서>

- 기본적으로 코드는 위에서부터 아래로, 왼쪽에서 오른쪽으로 읽으면서 각 줄이 해야하는 역할이 끝나면 다음줄을 읽는 방식으로 실행됨

## <03. return문 제대로 이해하기>

- 결과값을 돌려주는 역할
- 함수의 실행을 종료하는 역할

```jsx
function square(x) {
	console.log('return 전');
	return x*x;
	console.log('return 후');   // 실행되지 않음. 아무의미 없다. => Dead Code
};

console.log('함수 호출 전');
console.log(square(3));
console.log('함수 호출 후');

/*
함수 호출 전
return 전
9
함수 호출 후
*/
```

## <04. return과 console.log의 차이>

```jsx
function printSquare(x) {
	console.log(x * x);
}

function getSquare(x) {
	return x * x;
}

printSquare(3);  // 9

getSquare(3);    // 아무것도 출력되지 않음

console.log(getSquare(3));    // 9

console.log(printSquare(3));  // undefined (return값을 따로 명시하지 않으면 undefined 리턴)
```

## <05. 옵셔널 파라미터>

```jsx
function sayHello(name) {
	console.log(`안녕하세요 ${name}님!`);
}

sayHello();  // 안녕하세요 undefined님!  -> 파라미터 값을 넘겨주지 않으면 undefined!
```

- 파라미터에 값을 넘겨주지 않았을 때 기본값이 설정되도록 할 수 있음.

    → 파라미터 값을 전달해도 되고 생략해도 됨 → 선택적으로 전달 받음 ⇒ 옵셔널 파라미터!

```jsx
function introduce(name, age, nationality = '한국') {  // nationality처럼 미리 값을 할당한 것 : 옵셔널 파라미터
	console.log(`제 이름은 ${name}입니다.`);
	console.log(`나이는 ${age}살 이고,`);
	console.log(`국적은 ${nationality}입니다.`);
};

introduce('코드잇', 4, '미국');  // 값을 모두 전달한 경우
		/* 제 이름은 코드잇입니다.
				나이는 4살 이고,
				국적은 미국입니다.  */
introduce('코드잇',4);  // 파라미터 값을 생략한 경우
		/* 제 이름은 코드잇입니다.
				나이는 4살 이고,
				국적은 한국입니다.  */

// 옵셔널 파라미터를 중간에 넣는 경우
function introduce(name, nationality = '한국', age) {  
	console.log(`제 이름은 ${name}입니다.`);
	console.log(`나이는 ${age}살 이고,`);
	console.log(`국적은 ${nationality}입니다.`);
};

introduce('코드잇', 4);
		/* 제 이름은 코드잇입니다.
				나이는 undefined살 이고,
				국적은 4입니다.  */

// => 옵셔널 파라미터를 생성할 때는 반드시 가장 뒤쪽에 만들어야 한다.
```

## <06. 변수의 Scope>

```jsx
let y = 2;

function myFunction() {
	let x = 3;
	let y = 5; 
	console.log(x);
	console.log(y);  // 5
		// 블록문 내부에서 변수를 사용할 때는, 먼저 로컬 변수가 있는지 확인하고 없다면 글로벌 변수를 확인함! 
}

myFunction();  // 3
console.log(x);  // ERROR
console.log(y);  // 2
	// 로컬 변수 y가 아닌 글로벌 변수 y값을 사용!
```

- 블록({})문 내에서 선언된 변수는 local 변수, 그 블록문 내에서만 유효함.
- 블록문 밖에 선언된 변수는 global 변수, 어디에서든 사용가능

## <07. 상수>

- 상수 (constant) : 절대 변하지 않고 항상 일정한 값
    - const 키워드를 통해 선언할 수 있다.

```jsx
let pi = 3.14  // 원주율
let radius;    // 반지름

function caculateArea() {
	return pi * radius * radius;
}

function printArea(){
	return `반지름이 ${radius}일 때, 원의 넓이는 ${calculateArea()}`;

radius = 4;
console.log(printArea());   // 반지름이 4일 때, 원의 넓이는 50.24

radius = 7;
console.log(printArea());   // 반지름이 7일 때, 원의 넓이는 153.86

radius = 8;
console.log(printArea());   // 반지름이 8일 때, 원의 넓이는 200.96

// radius 값은 바뀌지만, pi는 고정된 값! => 상수
const PI = 3.14;  // 상수로 선언!
const PI_ERROR;   // ERROR -> 상수는 선언할 때 값을 초기화해줘야 함

// 상수와 변수를 구분하기 위해 상수는 대문자와 언더바(_)로만 이름을 정함
```

- 변수가 비어있다는 것을 나타내기 위해 null값을 사용할 수 있다.
    - 만약 변수의 type이 정해져있지 않다면 null을 사용하면 되지만, 자료형이 정해져있다면, '' 또는 0 등을 할당해줄 수 있음