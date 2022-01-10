# 제어문

## <01. if문>

- 조건에 따라 코드를 실행할지 말지를 결정

```jsx
// 조건부분이 충족되면 동작부분을 수행
if (조건부분) {
	동작부분
}

let temperature = 0;
if (temperature <= 0) {
	console.log('물이 업니다.');
}
else {
	console.log('물이 얼지 않습니다.');
}
```

## <02. else if문>

```jsx
let temperature = 0;

if (temperature <= 0) {
	console.log('물이 업니다.');
}
else {
	if (temperature < 100) {
		console.log('물이 얼지도 끓지도 않습니다.');
	} else {
		console.log('물이 끓습니다.');
	}
}

if (temperature <= 0) {
	console.log('물이 업니다.');
}
else if (temperature < 100) {
		console.log('물이 얼지도 끓지도 않습니다.');
} else {
	console.log('물이 끓습니다.');
}

// 위와 아래는 같은 코드!
```

## <03. switch문>

```jsx
switch (비교할 값) {
	case 조건값1:
		동작부분;
		break;
	case 조건값2:
		동작부분;
		break;
	default:     // 생략가능
		동작부분;
```

## <04. switch문 vs if문>

- switch문과 if문 모두 특정 조건에 따라 다르게 동작하는 코드를 만들 수 있음
- 어떤 넓은 범위를 만족하는 조건식을 만들 때는 if문이 더 효과적
- 특정한 값에 일치하는 조건을 만들 때는 switch문이 효과적
- switch 문은 값을 비교할 때 자료형을 엄격하게 구분함

    ⇒ switch문을 if문으로 대체할 때는 반드시 등호 3개로 일치비교를 해야 함

## <05. for문>

```jsx
for (초기화부분; 조건부분; 추가동작부분) {
	동작부분
}

// 코드잇 최고! * 10
for(let i = 1; i <= 10; i++) {
	console.log('코드잇 최고!');
}

// 아래는 위와 같은 코드!, 추가동작부분을 꼭 작성할 필요는 없다.
for(let i = 1; i <= 10;) {
	console.log('코드잇 최고!');
	i++;
}

// 아래는 위와 같은 코드!, 초기화 부분도 꼭 작성할 필요 없다. 글로벌 변수를 그냥 사용해도 무관.
// 하지만 소괄호 안쪽 첫 번째 세미콜론을 생략할 수는 없음!
let i=1;
for(; i <= 10; i++) {
	console.log('코드잇 최고!');
}
```

- for문의 초기화 부분에서 생성한 변수는 for문의 로컬 변수!

## <06. while문>

```jsx
while (조건부분) {
	동작부분
}

// while, for문은 서로 대체 가능

let i = 1;
while(i <= 10) {
	console.log('코드잇 최고!');
	i++;
}
// 위와 아래는 같음
for(let i = 1; i <= 10; i++) {
	console.log('코드잇 최고!');
}

// while문은 글로벌 변수를 기준으로 비교, 증가된 값이 유지됨
```

## <07. break와 continue>

```jsx
/* break */
// 반복문의 조건과 상관없이 반복문을 종료시킬 수 있음.

/*
1
2
3
*/

let i = 1;
while(i <= 10) {
	console.log(i);
	if(i === 3) {
		break;
	}
	i++;
}

for(let i = 1; i<= 10; i++) {
	console.log(i);
	if(i === 7) {
		break;
	}
}

/* continue */
// 동작부분을 건너뜀!

/*
1
3
5
7
9
*/

for(let i = 1; i<= 10; i++) {
	if (i % 2 === 0) {
		continue;
	}
	console.log(i);
}

let i = 1;
while(i <= 10) {
	if (i % 2 === 0) {
		i++;
		continue;
	}
	console.log(i);
}
```