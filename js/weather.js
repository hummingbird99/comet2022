/* API KEY 선언 */
const API_KEY = "c9cf61ca18168ceba1b85ae0b6f9cf34";


/* 함수가 좌표를 받았을 때 실행 */
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)  // fetch(): 서버 네트워크에 접근하고자 하는 API를 요청, 비동기 promise 객체로 반환
    .then((response) => response.json()) // then(): promise를 리턴하고 두 개의 콜백 함수를 인수로 받음(이행/거부), 순차적으로 처리
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
    });
}


/* 함수가 좌표를 받지 못했을 때 실행 */
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); // 장치의 현재 위치 정보 호출