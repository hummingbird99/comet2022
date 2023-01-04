const clockTitle = document.querySelector(".js-clock");

const clock = function () {
  const xmas = new Date("2023-12-25");
  const today = new Date();

  const day = xmas - today;

  const Dday = Math.floor(day / (1000 * 60 * 60 * 24));
  const Dhour = Math.floor((day / (1000 * 60 * 60)) % 24);
  const Dminute = Math.floor((day / (1000 * 60)) % 60);
  const Dsecond = Math.floor((day / 1000) % 60);
  clockTitle.innerText = `${Dday}d ${Dhour}h ${Dminute}m ${Dsecond}s`;
};

clock();
setInterval(clock, 1000);