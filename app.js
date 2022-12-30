const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
    event.preventDefault(); //preventDefault: 이벤트의 기본 동작을 실행하지 않는다.
    console.log(loginInput.value); //페이지가(a 태그) 새로고침 되지 않고 변수의 value를 보여준다.
}

function handleLinkClick() {
    alert("clicked!"); //alert로 인해 javascript 페이지 동작이 멈춘 후 href로 이동한다.
}

loginForm.addEventListener("submit", onLoginSubmit); //submit 이벤트 발생 시 function 수행
link.addEventListener("click", handleLinkClick); //click 이벤트 발생 시 function 수행

