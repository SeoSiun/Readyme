# 프로그래밍 맛보기

## <01. 세미콜론>

- javascript, c, c++ 등 많은 언어가 문장을 구분하는 방법으로 세미콜론을 사용
- javascipt는 한 줄에 한 문장씩 작성할 경우에 코드가 실행될 때 자동으로 세미콜론을 추가해주는 기능이 있음
- '꼭 필요한 경우에만 사용하자'는 견해와 '문장 끝에 반드시 사용하자'는 견해가 있음

## <02. 코멘트>

- // : 주석, 코멘트 (한 줄)
- /**/ : 여러 줄 코멘트 가능
- 어떤 의도로 코드가 작성되었는지 설명할 때
- 구현한 코드가 어떤 동작을 하는지 기록할 때

## <03. 자료형 개요>

- 프로그래밍이란 : 컴퓨터를 통해 복잡한 계산을 하는 것
- 자바스크립트의 자료형 (Data type)
    - **숫자 (Number)**
        - **정수 (Integer)** : -8, -6, -1, 0, 5, ...
        - **소수 (floating point)** : 3.14, -1.1, ...
        - 기본적으로 사칙연산 가능
    - **문자열 (String)** : "Hello" , 'Codeit', ...
        - 시작과 끝이 같은 따옴표여야 함
        - + 를 통해 문자열을 이을 수 있음
            - ex) "Hello" + "Codeit" ⇒ "HelloCodeit"
    - **불린 (Boolean)** : true, false
        - 주로 어떤 조건에 의한 결과값으로 사용

## <04. 추상화 개요>

- 추상 : 여러 가지 사물이나 개념에서 공통되는 특성이나 속성 따위를 추출하여 파악하는 작용
- 추상화 : 구체적인 정보는 숨기고 꼭 필요한 핵심만을 뽑아내서 표현하는 방식
    - 책의 제목, 영화 줄거리, 지도
    - **복잡한 것들을 목적에 맞게 단순화하는 것**
        - 목적을 명확히
        - 불필요한 것들은 숨기기
        - 핵심만 드러내기
    - 간결하고 명확하면서도 그 핵심만큼은 명확하게 드러내기 때문에 효과적인 소통을 할 수 있음
    - 프로그래밍도 추상화의 연속

## <05. 변수>

- 필요성
    - 반복 입력하는 구체적인 숫자는 오타를 만들어낼 수 있음
    - 숫자에 대한 의미전달이 어려움

        ⇒ 반복적으로 사용되는 숫자에 이름을 지어주면 구체적인 숫자를 숨길 수 있고, 그 숫자의 핵심적인 의미도 부여할 수 있음

        ⇒ 프로그래밍에서는 값에 이름을 부여하기 위해 **변수**를 사용

- 변수 선언

    ```jsx
    let espressoPrice;      // 변수 선언
    espressoPrice = 3000;   // 변수에 값을 할당

    let espressoPrice= 3000; // 위와 같은 의미
    ```

    - 변수를 선언한 다음부터는 키워드 없이 변수 이름만 알면 쉽게 값을 저장하고 변경할 수 있음

## <06. 작명 가이드>

- 변수를 만들 때 이름은 아래의 룰을 따라서 지어야 한다.

### [꼭 지켜야 하는 룰 (지키지 않으면 오류)]

1. JavaScript 식별자는 '문자(a-z, A-Z)', '밑줄(_)' 혹은 '달러 기호($)'로 시작해야 함, 두번째 글자부터는 숫자(0-9)도 가능
2. 대문자와 소문자를 구별함.
    - myname과 myName은 다른 이름
3. 예약어는 사용 불가.
    - if, for, let 등

### [지키면 좋은 룰 (더 좋은 스타일을 위해)]

1. 의미 없는 이름은 좋지 않음

    ```jsx
    let a, b, c, d;
    ```

    - 의미 없는 이름은, 어떤 값을 저장해뒀는지 찾기 어렵고, 활용이 어려움
    - 프로그램의 가독성이 떨어짐
2. 너무 추상적인 이름은 좋지 않음

    ```jsx
    let name;   // 너무 추상적인 이름
    ```

    - 다양한 이름이 있을 수 있는 경우, 구체적인 변수명을 정하는게 좋음
3. 모든 변수 이름은 'camelCase'로 쓰는 것이 좋음
    - 변수명에는 띄어쓰기가 불가능하므로, 그 역할을 대신할 무언가가 필요
    - 그 중 하나가 camelCase - 첫 번째 글자는 소문자로 하고, 띄어쓰기가 있는 각 단어의 첫 문자를 대문자로 표기하는 방식

## <07. 함수>

- 함수 선언

    ```jsx
    function 함수이름() {
    	명령; 
    	명령; 
    };

    // EX
    // 함수 선언
    function greetings() {
    	console.log('Hi');
    	console.log('안녕');
    	console.log('Guten Tag');
    	console.log('Bonjour');
    };

    //함수 호출
    greetings()
    ```

- 반복해서 사용할 때 더 효율적
- 함수 이름만 알고 있으면 내부적으로 실행되는 명령을 이해하지 못해도 사용 가능
- 이렇게 복잡한 내용은 함수 내부로 숨기고 핵심은 함수 이름에 드러내는 방식으로 함수에서도 추상화의 개념이 녹아 있음

## <8. 파라미터>

- Parameter (매개변수) : 함수 호출 시 소괄호 안에 적는 값
    - 함수 내에서 변수처럼 사용 가능
- 파라미터를 활용하면 상황에 따라 다른 값을 출력하는 함수를 만들 수 있다.

```jsx
function 함수이름(파라미터) {     
	명령;
  명령;
};

// EX 1 
function greetings(sentence) {
	console.log('Hi');
	console.log('안녕');
	console.log('Guten Tag');
	console.log('Bonjour');
  console.log(sentence)
};

greetings('Hola');

// EX 2
function welcome(name) {
  console.log('안녕하세요 '+name+'님!');
};

welcome('코드잇');
welcome('서시언');
welcome('이가은');

// EX 3
function printSquare(x) {
  console.log(x*x);
};

printSquare(2);
printSquare(5);
printSquare(6);
```

## <9. 여러 개의 파라미터>

```jsx
function 함수이름(파라미터, 파라미터) {     // , 로 구분해주면 여러 개의 파라미터 사용 가능

};

// EX 1
function printSum(a,b) {
  console.log(a+b);
};

printSum(10,5);
printSum(123,4);

// EX 2
function introduce(name, birth, nationality, job) {
  console.log('안녕하세요! 반갑습니다.')
  console.log('제 이름은 '+name+" 입니다.");
  console.log('생년월일은 '+ birth + ' 이고, ');
  console.log('국적은 '+ nationality +' 입니다.')
  console.log('직업은 '+ job +' 입니다.')
  console.log('잘 부탁드립니다!')
};

introduce('서시언','00.08.16', '한국', '학생')
```

- 파라미터 개수의 제한은 없지만 너무 많이 사용하면 복잡해질 수 있으므로 꼭 필요한 파라미터만 사용하자

## <10. return문>

- return : 함수 내부에서 정해진 일을 실행하고 난 뒤에 다시 돌려줌, 반환함.

```jsx
function getTwo() {
	return 2;     // 2는 리턴값, 반환값
}

console.log(getTwo());    // 함수를 호출한 자리에 리턴값이 전달됨

// EX
function getTwice(number) {
  return number * 2;
}

let x = getTwice(5);
let y = getTwice(2);

console.log(x * y);
```