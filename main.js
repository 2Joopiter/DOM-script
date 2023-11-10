const btns = document.querySelectorAll('.list1 li');
console.log(btns);

/*
자바스크립트의 style 제어
-자바스크립트는 html, js 파일 외에는 접근권한이 없음
-그래서 style 변경시 css 파일이 변경되는 게 아니라 html 요소에 inline형태로 스타일을 강제 추가 해주는 것(기존값 덮어쓰기)
*/

const box = document.querySelector('.box'); // 어떤것을 제어할건지 지정해서 불러오는 함수

console.dir(box);

btns[0].addEventListener('click', () => {
	box.style.backgroundColor = 'hotpink';
	console.dir(box);
});

//자바스크립트로 기존 스타일을 동적으로 덮어쓰는 것이 아닌 기존에 작업한 원래 스타일값을 css로 가져오는 것은 불가능(접근권한이 없기 때문)
//자바스크립트가 역으로 화면에 출력되고 있는 결과물을 다시 수치적으로 재계산해서 가져옴

btns[1].addEventListener('click', () => {
	console.log(getComputedStyle(box).width);
	console.log(getComputedStyle(box).backgroundColor);
});

//margin에 %를 쓰면 UI가 깨짐. 가능하면 margin, padding에는 %는 쓰지 말고 vw는 가능
