/* HTML 태그 변수 선언 */
const positiveNum = document.querySelector("#generateNum");
const chosenNum = document.querySelector("#guessNum");
const showUp = document.querySelector("#showUp");


const lotteryNum = "hidden";

/* input  */
function randomGame(event) {
    const lotteryNum = positiveNum[Math.floor(Math.random() * 10)];
    event.preventDefault();

}

function showUpText() {
    showUp.innerText = `You chose: ${chosenNum}, the machine chose: ${lotteryNum}`;
}