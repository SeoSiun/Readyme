# 객체

## <01. 객체와 프로퍼티>

- 객체 (object) : 여러가지 값을 한 번에 저장하고 싶을 때 사용

```jsx
// 객체는 아래와 같이 만들 수 있다.
{
	key: value,
	key: value
}

// key, value 한 쌍을 속성(property)라고 부름
// key : property name, value : property value

// key는 문자열이므로 원래는 따옴표 안에 쓰는 것이 맞음, 
// 하지만 javascript가 암묵적으로 형변환을 하기 때문에 그냥 생략하고 쓸 수 있다.
// 이때 첫 번째 글자는 반드시 문자, 밑줄(_), 달러 기호($) 중 하나로 시작
			// 띄어쓰기 금지, 하이픈(-) 금지
			// 이 규칙에서 벗어나는 경우에는 반드시 따옴표를 붙여줘야 함

// value에는 어떤 자료형도 들어갈 수 있다. 심지어 객체도 넣어줄 수 있음.

console.log({
	key: value
}); 
// object => 객체
```

## <02. 객체에서 데이터 접근하기>

```jsx
// 객체 (Object)
let codeit = {
	name: 'codeit',
	bornYear: 2021,
	isVeryNice: true,
	'worst Course': null,
	bestCourse: {
		title: 'javascript basic',
		language: 'JavaScript'
	},
};

// 점 표기법 (objectName.propertyName)
// 이 방법으로는 따옴표를 생략할 수 없는 프로퍼티 이름에는 접근할 수 없음 (위에서 'worst Course' 같은)
console.log(condeit.bornYear);     // 2021

// 대괄호 표기법 (objectName['propertyName'])
console.log(codeit['worst' + ' Course']);     // null

let propertyName = 'name';
console.log(codeit[propertyName]);   // codeit

console.log(codeit.bestCourse['title']); // 객체 안의 객체는 이런식으로 사용!

console.log(codeit.hahah);   // undefined  => 정의되지 않은 애에 접근하면 undefined!
```

## <03. 객체 다루기>

```jsx
// 프로퍼티 수정
codeit.name = '코드잇';
console.log(code.name);   // 코드잇

// 프로퍼티 추가
codeit.ceo = '서시언';
console.log(code.ceo);   // 서시언

// 프로퍼티 삭제
delete codeit['worst Course'];
console.log(codeit['worst Course']);  // undefined

// in 연산자 : 프로퍼티의 존재 여부를 알 수 있음
console.log('name' in codeit);          // true
console.log(codeit.name != undefined);  // true
// 만약 실수로 undefined 값을 프로퍼티에 할당한 경우, 
// 존재하는 프로퍼티인데도 아래 경우에서 true가 나올 수 있음
// 따라서 정확하게 프로퍼티 존재 여부를 알기 위해 in 연산자를 사용!
```

## <04. 객체와 메소드>

```jsx
// 메소드 (Method)
let greetings = {
	sayHello: function () {
		console.log('Hello');
	},
	sayHi: function (name) {
		console.log(`Hi ${name}`);
	},
	sayBye: function () {
		console.log('Bye');
	}
}

greetings.sayHello();    // Hello
greetings['sayHello'](); // Hello

greetings.sayHi('siun'); // Hi siun
```

## <05. for...in 반복문>

```jsx
// 객체의 프로퍼티 네임이 변수에 할당되고, 객체의 프로퍼티 수만큼 반복 동작하게 됨
for (변수 in 객체) {
	동작부분
}

let codeit = {
	name: 'codeit',
	bornYear: 2021,
	isVeryNice: true,
	worstCourse: null,
	bestCourse:'javascript basic',
};

/*
name
codeit
bornYear
2021
...
bestCourse
javascript basic
*/
for( let key in codeit) {
	console.log(key);
	console.log(codeit[key]);
}
```

### [for...in 주의사항]

- 숫자형(양수) 프로퍼티 네임

    ```jsx
    let myObject = {
    	300: '정수',
    	1.2: '소수',
    };

    // 실제로 사용될 때는 문자열로 형 변환이 되어 사용됨
    /*
    300의 자료형은 string입니다.
    1.2의 자료형은 string입니다.
    */
    for (let key in myObject) {
    	console.log(`${key}의 자료형은 ${typeof key}입니다.`);
    }

    // 예외적인 파라미터 네임이므로, 접근할 때 대괄호표기법만 가능
    console.log(myObject['300']);   // 정수
    console.log(myObject.300);      // Error!
    ```

- 정수형 프로퍼티 네임
    - 객체는 정수형 프로퍼티 네임을 오름차순으로 먼저 정렬하고, 나머지 프로퍼티들은 추가한 순서대로 정렬하는 특징이 있음
    - 이는 의도치 않은 결과를 가져올 수 있기 때문에 일반적으로 잘 사용되지 않음

    ```jsx
    let myObject = {
    	3: '정수3',
    	name: 'codeit',
    	1: '정수1',
    	birthDay: '2000.08.16',
    	2: '정수2',
    };

    /*
    1
    2
    3
    name
    birthDay
    */
    for let key in myObject){
    	console.log(key);
    }

    /*
    {1: "정수1", 2: "정수2", 3: "정수3", name: "codeit", birthDay: "2000.08.16"}
    */
    console.log(myObject);

    // 프로퍼티 네임에 따옴표를 붙여서 만들더라도 마찬가지로 정렬됨
    let myObject = {
    	'3': '정수3',
    	name: 'codeit',
    	'1': '정수1',
    	birthDay: '2000.08.16',
    	'2': '정수2',
    };
    ```

## <06. Date 객체>

- 내장객체 : console처럼 자바스크립트가 미리 가지고 있는 객체
- 자바스크립트의 거의 모든 것이 다 객체로 이루어져있기 때문에 특별한 기능별로 다양한 내장 객체가 존재
- 자바스크립트에서 날짜는 모두 Date객체를 사용해서 다룸

```jsx
let myDate = new Date();

console.log(myDate);   // myDate를 생성한 순간의 시간을 출력
/*
EX)
Thu May 18 2017 00:00:00 GMT+0900 (대한민국 표준시)
요일  월  일  년도    시간    시간대(어디서 컴퓨터를 사용하느냐에 따라 달라짐)
*/

// Date 객체를 생성할 때 ()안에 특정한 값을 넣어주면 원하는 날짜를 생성할 수 있음
new Date(특정한 값);

// new Date(milliseconds)
// UTC 기준 1970년 1월 1일 0시 0분 0초에서 milliseconds만큼 지난 객체가 만들어짐
let myDate = new Date(1000);  // 1000밀리초 == 1초

// new Date('YYYY-MM-DD')
// 시간을 지정해주지 않으면 자정을 기준으로 생성됨
let myDate = new Date('2021-07-22');

// new Date('YYYY-MM-DDThh:mm:ss')
let myDate = new Date('2021-07-22T15:59:00');

// new Date(YYYY, MM, DD, hh, mm, ss, ms)
// YYYY, MM은 필수, 나머지는 생략 가능
// 생략하면 new Date(YYYY, MM, 1, 0, 0, 0, 0) 으로 처리!
// 이때 month는 0부터 시작 => 1월은 0, 2월은 1, 3월은 3, ...

// Date.getTime()
// Date객체가 1970년 1월 1일 00:00:00 UTC로부터 몇 밀리초 지났는지 계산해줌
// 이 값을 타임스탬프라고 부름

let myDate = new Date(2017, 4, 18, 19, 11, 16);

console.log(myDate.getFullYear());     // 2017
console.log(myDate.getMonth());        // 4
// 여기서 month가 4라는 것은 5월을 의미!
console.log(myDate.getDate());         // 18
console.log(myDate.getDay());          // 4
// Date는 일반적으로 인식하는 일자를 뜻하고, Day는 요일 (일요일부터 0~6까지 있음) -> 4는 목요일
console.log(myDate.getHours());        // 19
console.log(myDate.getMinutes());      // 11
console.log(myDate.getSeconds());      // 16
console.log(myDate.getMillisconds());  // 0

// set 메서드들을 활용하면, 생성된 Date 객체의 정보를 수정할 수 있음
// []로 감싸진 요소들은 선택적인 요소
Date.setFullYear(year,[month],[date]);     
Date.setMonth(month,[date]);       
Date.setDate(date);               
Date.setHours(hour,[min],[sec],[ms]);        
Date.setMinutes(min][sec],[ms]);      
Date.setSeconds(sec,[ms]);      
Date.setMillisconds(ms);  
Date.setTime(milliseconds); // 1970년 1월 1일 00:00:00 UTC로부터 밀리초 이후를 나타내는 날짜를 설정

// 간단하게 시간 정보 알아내기
let myDate = new Date();
// 사용자의 브라우저에 설정된 국가의 표기에 맞춰 날짜, 시간을 보여줌
console.log(myDate.toLocalDateString());  // myDate가 가진 날짜에 대한 정보 (년. 월. 일)
console.log(myDate.toLocalTimeString());  // myDate가 가진 시간에 대한 정보 (시:분:초)
console.log(myDate.toLocalString());  // myDate가 가진 날짜와 시간에 대한 정보 (년. 월. 일 시:분:초)

// 자동 날짜 수정
// 범위를 벗어나는 값을 설정하려고 하면 자동으로 날짜를 수정해줌
let myDate = new Date(1988, 0, 32);  // 1988년 1월 32일은 없음!
console.log(myDate);  // Mon Feb 01 1988 00:00:00 -> 2월 1일로 자동 수정!

// 현시점의 날짜 값
Date.now();  // 메소드가 호출된 시점의 타임스탬프를 반환, 새로운 객체를 만들 필요가 없다!

// Date 객체의 형변환
let myDate = new Date(2017, 4, 18)
String(myDate);   // Thu May 18 2017 00:00:00 GMT+0900
Number(myDate);   // 1495033200000  => getTime() 메소드를 활용한 것과 똑같은 타임스탬프!
									// => Date 객체끼리 사칙연산도 가능! 
Boolean(myDate);  // true
```