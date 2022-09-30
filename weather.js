//const cityChoice = document.querySelector(".myInput");
const frm = document.getElementById("myForm");
const sel = document.getElementById("citySelect");

frm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const city = sel.value;
  console.log(typeof city, city);
  fetcher(city);
  //setTimeout(() => {
  //  city = "";
  //}, "3000");
});

function fetcher(city) {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=837feb5bc6e244ebb4f110244220407&q=${city}`
  )
    .then((response) => {
      return response.json();
    })
    .then((weather) => {
      console.log(weather);
      p1 = document.querySelector(".text");
      p2 = document.querySelector(".meteo");
      p3 = document.querySelector(".c-temp");
      p4 = document.querySelector(".wind");

      p1.textContent = `The weather in ${weather.location.name} is currently`;
      p2.textContent = `${weather.current.condition.text}`;
      p3.textContent = `Temp: ${weather.current.temp_c}\u00B0`;
      p4.textContent = `Wind: ${weather.current.gust_kph} kp\/h`;
    });
}
