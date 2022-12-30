const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    event.preventDefault(); //preventDefault: 이벤트의 기본 동작을 실행하지 않는다.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    /*greeting.innerText = "Hello " + username;*/ //보기 어려운 예전 방식
    greeting.innerText = `Hello ${username} keep going`; //javascript ES6에서 도입된 템플릿 문자열이다. `Stirg ${변수명}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit); //submit 이벤트 발생 시 function 수행

