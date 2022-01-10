// 함수 선언
function greetings(sentence) {
	console.log('Hi');
	console.log('안녕');
	console.log('Guten Tag');
	console.log('Bonjour');
  console.log(sentence)
};

//함수 호출
// greetings('Hola');


function welcome(name) {
  console.log('안녕하세요 '+name+'님!');
};

// welcome('코드잇');
// welcome('서시언');
// welcome('이가은');


function printSquare(x) {
  console.log(x*x);
};

// printSquare(2);
// printSquare(5);
// printSquare(6);


function printSum(a,b) {
  console.log(a+b);
};

// printSum(10,5);
// printSum(123,4);

function introduce(name, birth, nationality, job) {
  console.log('안녕하세요! 반갑습니다.')
  console.log('제 이름은 '+name+" 입니다.");
  console.log('생년월일은 '+ birth + ' 이고, ');
  console.log('국적은 '+ nationality +' 입니다.')
  console.log('직업은 '+ job +' 입니다.')
  console.log('잘 부탁드립니다!')
};

// introduce('서시언','00.08.16', '한국', '학생')


function getTwice(number) {
  return number * 2;
}

let x = getTwice(5);
let y = getTwice(2);

console.log(x * y);