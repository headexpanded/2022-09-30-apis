const cityChoice = document.querySelector(".myInput");
const btn2 = document.querySelector("button");

// cityChoice?.addEventListener("input", () => {
//   let city = cityChoice?.value;
//   fetcher(city);
// });

btn2?.addEventListener("click", () => {
  const city = cityChoice?.value;
  fetcher(city);
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
      myP = document.querySelector(".text");
      myP2 = document.querySelector(".meteo");
      myP3 = document.querySelector(".c-temp");
      myP4 = document.querySelector(".wind");

      myP.textContent = `The weather in ${weather.location.name} is currently`;
      myP2.textContent = `${weather.current.condition.text}`;
      myP3.textContent = `Temp: ${weather.current.temp_c}\u00B0`;
      myP4.textContent = `Wind: ${weather.current.gust_kph} kp\/h`;
    });
  setTimeout(() => {
    city = "";
  }, "3000");
}
