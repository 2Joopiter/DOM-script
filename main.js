const section = document.querySelector('section');
const articles = section.querySelectorAll('article'); // QuerySelectorAll로 찾은 배열은 유사배열
const btn = section.querySelector('.btn');
const childrenEl = section.children; // 마찬가지로 유사배열. 모든 자식요소를 볼 수 있음
const parentEl = btn.parentElement; // 직계부모는 하나이므로 단수로 나옴. parentElement.parentElement 이렇게 두번 써주면 직계부모 하나 위의 부모가 나옴
const grandParentEl = btn.closest('body'); // 한번에 조상까지 찾아줌
const prevEl = btn.previousElementSibling;
const nextEl = btn.nextElementSibling;
const siblings = btn.parentElement.children;
console.log(siblings);
