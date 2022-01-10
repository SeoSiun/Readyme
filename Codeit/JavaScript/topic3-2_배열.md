# 배열

## <01. 배열 (Array)>

```jsx
let courseRanking = [
	'JavaScript',
	'Git',
	'Computer',
	'Python'
];

// index == propertyName

// indexing (index를 통해 element(요소)를 가져오는 것, index는 0부터 시작!)
console.log(배열이름[index]);

// 순서가 있는 값을 만들 때는 객체보다는 배열을 사용하는 것이 낫다!
// 꼭 순서가 있지 않더라도, 여러 값들의 묶음을 나타낼 때도 사용할 수 있다.
```

## <02. 배열 다루기>

```jsx
let members = ['siun', '20', 'bok', 'ssu', 'seo'];

console.log(typeof members);  // object -> 배열도 객체의 한 종류!
															// => 다양한 프로퍼티, 메서드들이 미리 만들어져 있음!

console.log(members.length);     // 5 -> 배열이 가지고 있는 요소의 총 개수
console.log(members['length']);  // 5 -> length는 프로퍼티이므로 대괄호표기법으로도 접근 가능!

console.log(members[5]);    // undefined -> 존재하지 않는 요소에 접근하려고 하면 undefined!

// 요소 추가
members[5] = 'sss';
console.log(members[5]);    // sss

// index를 뛰어넘은 요소를 생성하면 사이에 undefined 값을 갖는 요소가 자동으로 추가됨
members[7] = 's';
console.log(members);
/*
(7) ['siun', '20', 'bok', 'ssu', 'seo', 'sss', emtpy, 's']
*/

// 요소 삭제
delete members[7];
console.log(members);
/*
(7) ['siun', '20', 'bok', 'ssu', 'seo', 'sss', emtpy, emtpy]
요소가 완벽하게 삭제되었다고 보기는 어렵다.
배열이 가지고 있는 메서드를 활용하자!
*/

```

## <03. 배열 메소드>

```jsx
let members = ['siun', '20', 'bok', 'ssu', 'seo'];

/* 요소 삭제 */
// splice(startIndex, deleteCount, item)
// 파라미터를 1개만 주면 전달된 index 이후의 요소들을 모두 삭제
// 파라미터를 2개 주면, 첫 번째 파라미터는 삭제를 시작할 지점, 두 번째 파라미터는 삭제할 요소 수가 됨
// 삭제된 요소의 자리에 세 번째 이후 파라미터의 값이 들어감

members.splice(1);
console.log(members);
/*
['siun']
*/

members.splice(1,2);
console.log(members);
/*
['siun', 'ssu', 'seo']
*/

members.splice(1,1,'hahaha','haha');
console.log(members);
/*
['siun', 'hahaha', 'haha', 'bok', 'ssu', 'seo']
*/

// 두번째 파라미터를 0으로 해주면 원하는 위치에 요소 추가 가능!
members.splice(1,0,'hahaha','haha');
console.log(members);
/*
['siun', 'hahaha', 'haha', '20', 'bok', 'ssu', 'seo']
*/

// 요소 값 수정도 가능!
members.splice(1,1,'hahaha');
console.log(members);
/*
['siun', 'hahaha', 'bok', 'ssu', 'seo']
*/

let members = ['siun', '20', 'bok', 'ssu', 'seo'];

// 배열의 첫 요소를 삭제 : shift()
members.shift();
console.log(members);
/*
['20', 'bok', 'ssu', 'seo']
*/

// 배열의 마지막 요소를 삭제 : pop()
members.pop();
console.log(members);
/*
['20', 'bok', 'ssu']
*/

// 배열의 첫 요소로 값 추가 : unshift(value)
members.unshift('hihi');
console.log(members);
/*
['hihi', '20', 'bok', 'ssu']
*/

// 배열의 마지막 요소로 값 추가 : push(value)
members.push('hahaha');
console.log(members);
/*
['hihi', '20', 'bok', 'ssu', 'hahaha']
*/

/*
array.indexOf(item) : 배열에서 특정 값 찾기
	만약 item이 포함되어 있다면 item이 있는 인덱스 리턴
	포함되어 있지 않다면 -1 리턴
	여러 번 포함되어 있다면 처음 발견된 인덱스 리턴

array.lastIndexOf(item) : indexOf와 같지만, 뒤에서부터 탐색

array.includes(item) : 배열에 특정값이 있는지 확인 -> 있는 경우 true, 없으면 false 리턴

array.reverse() : 배열의 순서를 뒤집을 수 있음
*/

```

## <04. for...of 반복문>

```jsx
for (변수 of 배열) {
	동작부분;
}

let members = ['siun', '20', 'bok', 'ssu', 'seo'];

// for
for (let i=0; i< members.length; i++) {
	console.log(members[i]);
}

// for...of 
for (let member of members) {
	console.log(member);
}

// for...in => 가능하기는 하지만 쓰지 않는 것을 추천
for (let index in members) {
	console.log(members[index]);
}
```

## <05. 다차원 배열>

- 배열의 요소에도 특별히 제한된 자료형이 없음, 배열도 배열의 요소가 될 수 있다
- 배열 안에 배열이 들어있는걸 2차원 배열, 배열 안에 이차원 배열이 들어있는걸 3차원배열... 이라고 함
    - 이런 애들을 다차원 배열이라고 한다!

```jsx
let twoDimensional = [[1,2],[3,4]];
console.log(twoDemensional[0][1]);   // 2

// 값들의 의미보다는 위치, 순서가 중요한 경우 이런식으로 사용할 수 있다.
// 이와 달리 어떤 값이 층을 나타낸다는 의미가 중요할 때는 객체로 나타낼 수 있다.
```