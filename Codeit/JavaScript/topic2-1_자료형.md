# 자료형

## <01. 숫자형>

```jsx
// 덧셈
console.log(1 + 8);

// 뺄셈
console.log(6 - 7);

// 곱셈
console.log(2 * 2);

// 나눗셈
console.log(5 / 2);

// 나머지
console.log(7 % 3);

// 거듭제곱
console.log(2 ** 3);

console.log(2 + 3 * 2);   // 2 + (3 * 2)  -> 일반적인 계산순서, 우선순위를 따름
```

## <02. 문자열 기본>

- 문자열 : 우리가 사용하는 글자들을 값으로 표현할 때 쓰는 자료형
- 자바스크립트에서 따옴표로 싸여있는 것들은 모두 문자열 (작은 따옴표('), 큰 따옴표(") 모두 가능)
    - 단 반드시 양끝에 같은 따옴표로 감싸줘야함

```jsx
// 문자열
'하하하'
"하하하"

console.log('하하하');     // 하하하
```

## <03. 문자열 활용>

```jsx
console.log('I'm Iron man');      // systax error
																	// I 만 문자열이 됨

console.log("I'm Iron man");      // 문자열 양끝을 감싸는 따옴표를 큰따옴표(")로 바꿔줌

console.log("He said "I'm Iron man"");   // ERROR
	// 한 문자열에 두 종류의 따옴표가 모두 사용되는 경우

console.log("He said \"I'm Iron man\""); 		
	// 문자열 안에서 양 끝을 감싸는 것과 같은 따옴표과 사용된다면	
	// 안쪽에 있는 따옴표 앞에 역슬래시(\)를 붙여주면 문자로 취급		
	// 하지만 가독성이 좋지 않음
															
console.log(`He said \"I'm Iron man\"`);
	// 가독성을 높이기 위해 문자열 양 끝에 따옴표가 아닌 백틱(`)을 사용
```

- 문자열 연산

    ```jsx
    console.log('Hello' + 'Codeit');    // HelloCodeit
    console.log('3' + '5');             // 35
    ```

    - 더하기 기호가 문자열 연결로 동작

## <04. 불대수>

- 불 대수 : 일상적인 논리를 수학적으로 표현한 것
    - 일반적인 수학에서 값으로 숫자를 사용하는 것과 달리 불 대수에서는 진리값을 사용
        - 진리값 : 어떤 명제가 참인지 거짓인지 나타내는 값. True, False 두가지 뿐
    - 일반적인 수학에서의 연산은 +, - , / , * 인데, 불 대수에서는 기본적으로 AND, OR, NOT 세 가지 연산이 있음
- 명제 : 참, 거짓이 확실한 문장
    - 대한민국의 수도는 서울이다.     ⇒ 참인 명제
    - 2는 1보다 작다.                        ⇒ 거짓인 명제
    - 한국의 수도는 어디입니까?       ⇒ 명제가 아님
    - 짜장면보다 짬뽕이 맛있다.        ⇒ 명제가 아님 (명확하게 참, 거짓을 판단할 수 없는 주관적인 문장)
- AND 연산 : x, y 가 모두 참일 때만 x AND y가 참 (둘 중 하나라도 거짓이면 거짓)
- OR 연산 : x,y 중 하나라도 참이면 x OR y도 참 (둘 중 하나라도 참이면 참)
- NOT 연산 : 반대로 뒤집어줌. 참이면 거짓, 거짓이면 참으로 만들어줌

## <05. 불린형>

- 불린 (Boolean) : 참과 거짓을 표현하는 자료형

    ```jsx
    console.log(2 > 1);     // true
    console.log(2 < 1);     // false
    console.log(3 >= 2);    // true
    console.log(3 <= 3);    // true
    console.log(3 === 3);   // true
    console.log(3 !== 3);   // false

    console.log('Codeit' === 'Codeit');    // true
    console.log('Codeit' !== 'Codeeat');   // true
    ```

- AND 연산자 : &&

    ```jsx
    console.log(true && true);    // true
    console.log(true && false);   // false
    console.log(false && true);   // false
    console.log(false && false);  // false
    ```

- OR 연산자 : ||

    ```jsx
    console.log(true || true);    // true
    console.log(true || false);   // true
    console.log(false || true);   // true
    console.log(false || false);  // false
    ```

- NOT 연산자 : !

    ```jsx
    console.log(!true);     // false
    console.log(!false);    // true
    console.log(!!true);    // true
    console.log(!!false);   // false
    ```

## <06. typeof 연산자>

- typeof 값 : 값에 해당하는 자료형을 문자열 형태로 반환

    ```jsx
    console.log(typeof 101);        // number
    console.log(typeof 'Codeit');   // string
    console.log(typeof true);       // boolean

    console.log(typeof 1);     // number
    console.log(typeof 1.0);   // number
    console.log(typeof '1');   // string
    console.log(typeof "1");   // string
    console.log(typeof `1`);   // string

    let name = 'Codeit';
    function sayHello() {
    	console.log('Hello');
    };

    console.log(typeof name);      // string
    console.log(typeof sayHello);  // function

    console.log(typeof 'Hello' + 'Codeit');   // stringCodeit
    	// typeof는 일반적인 연산보다 우선순위가 높기 때문에 더하기 연산보다 typeof가 먼저 실행됨
    	// (typeof 'Hello') + 'Codeit' => 'string' + 'Codeit'

    console.log(typeof ('Hello' + 'Codeit'))  // 이렇게 사용해야 함

    console.log(typeof 8-3);   // NaN (Not a Number : 숫자가 아닌 값)
    	// 마찬가지로 typeof가 먼저 실행됨
    	// (typeof 8) - 3 => 'number' - 3 (문자열과 숫자를 연산했으므로 NaN)

    console.log(typeof (8-3))  // 이렇게 사용해야 함											
    ```

    - typeof 연산자도 연산자이므로, 다른 연산자와 함께 사용할 때는 우선순위를 고려해야 함

## <07. 연산자 우선순위>

[연산자 우선순위](https://www.notion.so/27d1c994fff64f6aa3fa520b8542321f)

## <08. 형변환>

```jsx
// String, Number, Boolean
console.log(Number('10') + Number('5));   // 15
console.log(String(10) + String(5));      // 105

/* String */
// 숫자 -> 문자
let x = 123;
console.log(x);  // 123
console.log(String(x));  // 123
console.log(typeof x);  // number
console.log(typeof String(x));  // string

// 불린-> 문자
let y = true;
console.log(y);  // true
console.log(String(y));  // true
console.log(typeof y);   // boolean
console.log(typeof String(y));  // string

/* Number */
// 문자 -> 숫자
let x = '문자';
console.log(x);  // 문자
console.log(Number(x));  // 숫자가 아닌 값을 숫자로 변환하면 NaN
console.log(typeof x);  //string
console.log(typeof Number(x));  // number

let x = '123';
console.log(x);  // 123
console.log(Number(x));  // 123
console.log(typeof x);  //string
console.log(typeof Number(x));  // number

// 불린 -> 숫자  (0, 1로 바뀜)
let y = true;
console.log(y);  // true
console.log(Number(y));  // 1
console.log(typeof y);   // boolean
console.log(typeof Number(y));  // number

/* Boolean */
// 문자 -> 불린
let x = '문자';
console.log(x);  // 문자
console.log(Boolean(x));  // true
console.log(typeof x);  //string
console.log(typeof Boolean(x));  // boolean

let x = '';
console.log(x);  // 
console.log(Boolean(x));  // false
console.log(typeof x);  //string
console.log(typeof Boolean(x));  // boolean

// 숫자 -> 불린
let y = 123;
console.log(y);  // 123
console.log(Boolean(y));  // true
console.log(typeof y);   // number
console.log(typeof Boolean(y));  // boolean

let y = 0;
console.log(y);  // 0
console.log(Boolean(y));  // false
console.log(typeof y);   // number
console.log(typeof Boolean(y));  // boolean

let y = NaN;
console.log(y);  // NaN
console.log(Boolean(y));  // false
console.log(typeof y);   // number
console.log(typeof Boolean(y));  // boolean
```

- Boolean으로 형변환 했을 때 대부분의 경우 true가 나오는데,
    - '', 0, NaN은 false  ⇒ 이 들을 falsy라고 함

```jsx
console.log('4' - true);  // 3
	// 일정한 규칙에 따라 자동 형변환 후 계산된 것!

/* 산술연산 (+, -, *, /, %, **) -> 연산되는 값들을 숫자로 바꿔서 연산
     하지만 자바스크립트에서 + 연산자는 숫자를 더하는 기능보다 문자열을 연결하는 기능이 더 강하므로
     + 연산자에서 순서에 상관없이 문자열이 있다면 나머지를 문자열로 바꿔서 연결해줌. */
console.log(4 + '2');      // 42
console.log(4 + 2);        // 6
console.log(4 - true);     // 3
console.log(4 * false);    // 0
console.log(4 / '2');      // 2
console.log('4' ** true);  // 4
console.log(4 % 'two');    // NaN  -> NaN은 어떤 값과 연산해도 NaN이 나온다.

/* 관계비교 연산 (<, <=, >=, >) 
		특별한 경우를 제외하면 산술연산자처럼 두 값을 모두 숫자형으로 바꿔서 계산 */
console.log('two' > 4);   // false -> 두 값을 비교할 수 없는 경우에도 false

/* 같음 비교 연산 (===, !==, ==, !=)
		=== / !== : 일치 / 불일치
    == / != : 동등 / 부등       */
console.log(1 === '1');  // false -> 형변환이 일어나지 않음
console.log(1 === true); // false
console.log(1 == '1');   // true -> 숫자 형태로 형변환이 일어남
console.log(1 == true);  // true

// == 을 사용하면 예상치 못한 형변환이 일어날 수 있으므로, 값을 비교하는 것이 목적이라면 === 을 사용하자
```

## <09. 템플릿 문자열>

- template : 일정한 틀, 형식
- template string (템플릿 문자열) : 특별한 형식을 가진 문자열

```jsx
let year = 2018;
let month = 3;
let day = 11;

console.log('생년월일은 ' + year + '년 ' + month + ' 월' + day + '일 입니다.');
console.log(`생년월일은 ${year}년 ${month}월 ${day}일 입니다.`);
// 위 두 코드는 같은 결과
// 아래쪽이 더 가독성이 좋고, 작성이 쉬움
```

## <10. null과 undefined>

- 둘 다 '값이 없다'는 의미를 가진 자료형
- null : 값이 없다는 것을 **의도적**으로 표현할 때 사용하는 값
- undefined : 코드를 실행할 때 값이 없다는 것을 확인하는 값
    - 선언한 다음 값을 할당하지 않은 것
    - 처음부터 아무것도 없었다!

```jsx
let codeit;
console.log(codeit);  // undefined -> 자바스크립트에서는 값이 주어지지 않은 값은 
																		// 기본적으로 undefined 값을 가지고 있음

codeit = null;
console.log(codeit);  // null

console.log(null == undefined);  // true -> 비슷한 의미이므로
console.log(null === undefined); // false -> 서로 다른 자료형 이므로

codeit = undefined;
console.log(codeit);  // 이렇게 사용하는 것도 문제는 없다. 
										 // 하지만 의미상으로 이런 경우 null을 사용하는 것이 바람직함.
```