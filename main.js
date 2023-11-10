const btns = document.querySelectorAll('.list1 li');
console.log(btns);

/*
  DOM (Document Object Model) : wed Api
  : 브라우저가 HTML 태그를 해석해서 렌더링을 할 때 자바스크립트로 하여금 생성된 요소를 제어할 수 있도록 객체형태로 만들어주는 API (Application Programing Interface; 프로그래밍 인터페이스)
*/
console.dir(btns[0]); // 객체형태로 구조를 볼 수 있음

/*
btns[0].onclick = () => {
	console.log('button1');
};

이 양식은 덮어쓰기가 가능해서 권장되지 않음
*/

/*
btns[0].addEventListener('click', () => {
	console.log('엄청 중요한 작업');
});

btns[0].addEventListener('click', () => {
	console.log('실수로 연결한 쓸데없는 작업');
});

*/

//가급적이면 addEventListener를 이용

//MISSION. 3개의 btns 요소를 forEach로 반복을 돌면서 각 버튼 클릭시 console.log(button1~3)까지 각각 찍히도록 만들기.

/*
btns.forEach((txt, index) => {
	console.log(btns[index]);
});

function msg(btns)
*/

/*
btns[0].addEventListener('click', () => {
	console.log('button1');
});

btns[1].addEventListener('click', () => {
	console.log('button2');
});

btns[2].addEventListener('click', () => {
	console.log('button3');
});

*/

btns.forEach((btn, index) => {
	btn.addEventListener('click', () => {
		console.log(`button${index + 1}`);
	});
});
