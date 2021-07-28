/* 
Object: 객체

함수 선언문
function a() {

}
a();

함수 표현식
var a = function() {

}
a();
*/


// IIFE(즉시실행함수)
(function () {
	console.log('B 실행함');
})();

var c = function() {
	console.log('C 실행함');
}
c();

/* 
- 함수 선언문과 함수 표현식의 차이 
Hoisting(끌어올리다)
함수선언문은 Hoisting의 대상이다
함수표현식은 Hoisting의 대상이 아니다. 왜냐 변수는 호이스팅 대상이 아니다.
*/
console.log("===========");
d();
function d() {
	console.log('D 실행함');
}

e();
var e = function () {
	console.log('E 실행함');
}


/* 변수를 깊이 들어가 보자 */
var a;
console.log(a);

var a = 10;
console.log(a);

a = "A";
console.log(a);

a = function() { 
	console.log('a()를 실행함') 
};
console.log(a);
a();


