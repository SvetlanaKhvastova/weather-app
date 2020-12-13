import css from "./css/styles.css";
// import "./js/fetch.js";
import refs from "./js/refs.js";
import Weather from "./js/class.js";

const { inputSearchBar, searchBtn } = refs;

const myWeather = new Weather(refs);

searchBtn.addEventListener("click", () => {
  if (!inputSearchBar.value) return;
  myWeather.getFetch(inputSearchBar.value);
});

inputSearchBar.addEventListener("keyup", (evt) => {
  if (!inputSearchBar.value) return;
  if (evt.key === "Enter") {
    myWeather.getFetch(inputSearchBar.value);
  }
});
