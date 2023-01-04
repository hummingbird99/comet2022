/* HTML 태그 변수 선언 */
const generateNum = document.querySelector("#generateNum");
const guessNum = document.querySelector("#guessNum");
const submitBtn = document.querySelector("#submitBtn");
const showUp = document.querySelector("#showUp");

/* 변수 선언 */
const rangeNum = generateNum.value;
const inputNum = guessNum.value;

if (rangeNum === "" || inputNum === "") {
    alert("Please select the number!");
    return;
}