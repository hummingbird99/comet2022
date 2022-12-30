const title = document.body;

const SMALL_SIZE = "smallSize";
const MEDIUM_SIZE = "mediumSize";
const BIG_SIZE = "bigSize";

function handleWindowResize() {
  const width = window.innerWidth;
  if(width > 900) {
    title.classList.add(BIG_SIZE);
    title.classList.remove(MEDIUM_SIZE,SMALL_SIZE);
  } else if(width <= 900 && width >= 600) {
    title.classList.add(MEDIUM_SIZE);
    title.classList.remove(BIG_SIZE, SMALL_SIZE);
  } else {
    title.classList.remove(MEDIUM_SIZE);
    title.classList.add(SMALL_SIZE);
  }
}

window.addEventListener("resize", handleWindowResize);