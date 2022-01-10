# 자료형 심화

## <01. 다양한 숫자 표기법>

```jsx
let myNumber = 1e9;  // 지수표기법
let million = 1000000000;

console.log(myNumber);  // 1000000000
console.log(million);   // 1000000000
console.log(myNumber === million);  // true
```

## <02. 숫자형 메소드>

- 자바스크립트에서는 숫자도 객체! ⇒ 다양한 메소드가 있음

```jsx
**// toFixed(0~100)** : 파라미터만큼 소수점 아래의 자릿수를 고정해줌 (반올림/0추가해서) (결과값은 string)
let myNumber = 0.3591;
console.log(myNumber.toFixed(3));  // 0.359
console.log(myNumber.toFixed(7));  // 0.3591000
console.log(typeof myNumber.toFixed(3));  // string

// string이므로 숫자로 쓰고싶으면 Number로 형변환을 해줘야 함!
// 또는 앞에 +를 붙이면 같은 효과!
****console.log(Number(myNumber.toFixed(2)));  // 0.36
console.log(+ myNumber.toFixed(2));        // 0.36

**// toString(2~36)** : 파라미터의 진법으로 숫자를 변환해줌 (결과값은 string)
let myNumber = 255;
console.log(myNumber.toString(2));   // 11111111
console.log(myNumber.toString(8));   // 377

// 숫자에 바로 메소드를 점으로 호출하면 에러! (점을 소수점으로 인식하기 때문)
// 1. 점을 두 개 찍어주거나
console.log(255..toString(2));
// 2. 숫자에 괄호를 씌우거나
console.log((255).toString(2));
// 3. 변수에 담아서 사용하는 방법이 있다.
```

## <03. Math 객체>

```jsx
// 절댓값 (Absolute Number)
// Math.abs(x)
console.log(Math.abs(-10));  // 10

// 최댓값 (Maximum)
// Math.max : 파라미터들 중 가장 큰 값을 리턴
console.log(Math.max(2,-1,4,5,0));  // 5

// 최솟값 (Minimum)
// Math.min : 파라미터들 중 가장 작은 값을 리턴
console.log(Math.max(2,-1,4,5,0));  // -1

// 거듭제곱 (Exponentiation)
// Math.pow(x,y) : x의 y승을 리턴
console.log(Math.pow(2,3));   // 8

// 제곱근 (SquareRoot)
// Math.sqrt(x) : x의 제곱근
console.log(Math.sqrt(9));   // 3

// 반올림 (Round)
// Math.round(x) : x의 반올림된 값 리턴, 
			// 소수점부분이 0.5이상이면 가장 가까운 정숫값으로 올라가고
			// 0.5 미만이면 가장 가까운 정숫값으로 내려감
console.log(Math.round(2.3));   // 2
console.log(Math.round(2.5));   // 3

// 버림과 올림 (Floor and Ceil)
// Math.floor(x) : x의 버림 값 리턴
// Math.ceil(x) : x의 올림 값 리턴
console.log(Math.floor(2.5));   // 2
console.log(Math.ceil(2.5));    // 3

// 난수 (Random)
// Math.random : 0이상 1미만의 값이 랜덤으로 리턴됨
```

## <04. 문자열 심화>

- 자바스크립트에서는 문자열도 객체처럼 다룰 수 있다!

```jsx
let myString = 'Hi codeit';

**/* 문자열 길이 */**
// length 프로퍼티
console.log(myString.length);  // 9

**/* 요소 접근 */**
// 1. 대괄호 표기법
console.log(myString[3]);         // c

// 2. charAt 메소드
console.log(myString.charAt(3));  // c

**/* 요소 탐색 */**
// 1. String.indexOf : 앞부터
console.log(myString.indexOf('i'));      // 1
console.log(myString.indexOf('a'));      // -1  : 없는건 -1

// 2. String.lastIndexOf : 뒤부터
console.log(myString.lastIndexOf('i'));  // 7

**/* 대소문자 변환 */**
// 1. String.toUpperCase() : 대문자로
console.log(myString.toUpperCase());  // HI CODEIT

// 2. String.toLowerCase() : 소문자로
console.log(myString.toLowerCase());  // hi codeit

**/* 양 끝 공백 제거 */**
// String.trim()
let tmp = '    hi    ';
console.log(tmp.trim());   // hi

/* 부분 문자열 접근 */
// String.slice(start, end) : end 직전까지의 범위를 가져옴, end는 포함되지 않는다.
	// 두 번째 파라미터를 생략하면, 시작지점에서 끝까지 가져오고,
	// 파라미터를 모두 생략하면 문자열 전체를 가져옴.
console.log(myString.slice(0,2));  // Hi
console.log(myString.slice(3));    // codeit
console.log(myString.slice());     // Hi codeit
```

## <05. 문자열과 배열>

```jsx
**/* 비슷한 점 */**
// 1. 둘 모두 length 프로퍼티를 가지고 있음
// 2. 대괄호 표기법으로 각 요소에 접근 가능
// 3. 이외에도 많은 메소드들이 동일하게 사용됨
// 4. 둘 다 for..of문을 사용할 수 있음

let name = 'Siun';

for (let str of name) {
	console.log(str);
}
/*
S
i
u
n
*/

**/* 다른 점 */**
let name = 'siun';
let arrName = ['s','i','u','n'];

// 1. 자료형이 다름
console.log(typeof name);     // string
console.log(typeof arrName);  // object

// 2. 동등비교 결과가 false
console.log(name === arrName);   // false
console.log(name == arrName);    // false

// 3. 배열은 'mutalbe(바뀔 수 있는)' 자료형 이지만 문자열은 'immutable(바뀔 수 없는)' 자료형.
// 배열은 mutalbe
arrName[0] = 'b';
console.log(arrName);   // biun

//문자열은 immutable
name[0] = 'b';
console.log(name);      // siun

// 배열은 요소에 접근해서 할당연산자를 통해 요소 수정이 가능하지만
// 문자열은 한 번 할당된 값을 수정할 수 없음. 만약 변수에 할당된 문자열을 수정하고 싶다면,
// 일부를 바꾸는게 아니라 새로운 문자열을 지졍해야 함

// + 문자열 메소드들은 리턴값을 활용하고 본래 문자열을 수정하지는 않음
// + splice 같은 메소드는 문자열에 사용될 수 없다!
```

## <06. 기본형과 참조형>

- 기본형 (Primitive Type)
    - 변수에 값이 그대로 할당됨
    - Number
    - String
    - Boolean
    - Null
    - Undefined
- 참조형 (Reference Type)
    - 변수에는 객체 값이 아니라 객체의 참조값(주소값)이 저장됨
    - 변수 값을 다른 변수에 할당하면 객체의 참조값이 복사되기 때문에 결국은 같은 객체를 가리키고 있는 것
        - 따라서 하나를 수정하면 다른 것도 수정됨!
    - Object (객체, 배열)

## <07. 참조형 복사하기>

```jsx
**/* 배열의 경우, slice를 이용해 copy할 수 있다. */**
// before
let numbers1 = [1,2,3];
let numbers2 = numbers2;
numbers2.push(4);
console.log(numbers1);   // (4) [1,2,3,4]
console.log(numbers2);   // (4) [1,2,3,4]

// after
let numbers1 = [1,2,3];
**let numbers2 = numbers2.slice();**
numbers2.push(4);
console.log(numbers1);   // (3) [1,2,3]
console.log(numbers2);   // (4) [1,2,3,4]

**/* 객체의 경우 */**
// before
let course1 = {
	title: 'basic of python',
	language: 'Python'
};
let course2 = course1;
course2.title = 'algorithm';
console.log(course1);  // {title: "algorithm", language: "Python"}
console.log(course2);  // {title: "alogrithm", language: "Python"}

// 1. Object.assign()
let course1 = {
	title: 'basic of python',
	language: 'Python'
};
**let course2 =** **Object.assign({},course1);**
course2.title = 'algorithm';
console.log(course1);  // {title: "basic of python", language: "Python"}
console.log(course2);  // {title: "alogrithm", language: "Python"}

// 2. for..in
// for..in 부분을 함수로 만들면 객체 복사가 필요할 때 사용가능!
let course1 = {
	title: 'basic of python',
	language: 'Python'
};
let course2 = {};
**for(let key in course1){
	course2[key] = course1[key]'
}**
course2.title = 'algorithm';
console.log(course1);  // {title: "basic of python", language: "Python"}
console.log(course2);  // {title: "alogrithm", language: "Python"}

// 객체 안에 객체가 또 있다면 복사할 때 그 안에서 주소값이 복사되기 때문에 예상치 못한 결과가 나올 수 있음
```

## <08. 변수와 상수>

- let으로 선언한 변수는 재할당이 가능하므로 계속해서 값을 바꿀 수 있음
- const로 선언한 변수는 재할당이 불가능하므로 값을 바꿀 수 없음 (재할당시 에러 발생)
- const로 변수를 선언하자
    - 검색창에 사용자가 어떤 키워드를 넣느냐에 따라 결과가 달라짐 (변수)
    - 하지만 사용자가 일단 키워드를 입력하고 나면 그 결과를 찾는 과정에서 키워드가 바뀔 일은 없음 (const)
- 객체를 상수로 선언했을 때, 객체 자체가 상수인 것이 아니라 주소값이 상수인것, 객체의 프로퍼티 값은 바꿀 수는 있다.