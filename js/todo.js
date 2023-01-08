const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
    const li = document.createElement("li"); // input ul에 li 생성
    const span = document.createElement("span"); // input ul에 span 생성
    li.appendChild(span); // appendChild: li(element node)에 span을 자식 노드로 추가
    span.innerText = newTodo; // text node 삽입
    toDoList.appendChild(li); // toDoList에 li를 자식 노드로 추가
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; // input value를 새 변수에 담아두기
    toDoInput.value = ""; // input value 비우기
    paintToDo(newTodo); // function 실행
}

toDoForm.addEventListener("submit", handleToDoSubmit);