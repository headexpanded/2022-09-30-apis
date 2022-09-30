const cityChoice = document.querySelector(".myInput");
const btn2 = document.querySelector("button");

cityChoice?.addEventListener("input", () => {
  const city = cityChoice?.value;
  fetcher(city);
});

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
      myP = document.querySelector(".text");
      myP2 = document.querySelector(".meteo");

      myP.textContent = `The weather in ${weather.location.name} is currently`;
      myP2.textContent = `${weather.current.condition.text}`;
    });
  setTimeout(() => {
    city = "";
  }, "3000");
}
