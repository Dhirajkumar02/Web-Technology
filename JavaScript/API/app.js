let getWeather = document.getElementById("get_weather");
let fetchApi = async () => {
  let apiKey = "8f06e06eb2047b199cce01458d91862c";

  let city = document.getElementById("city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  let data = await fetch(apiUrl);
  let finalData = await data.json();
  console.log(finalData);

  let container = document.getElementById("container");
  console.log(container);
  container.innerHTML = `
    <h1>CityName: ${finalData.name} </h1>
    <h2>Temperature: ${finalData.main.temp} </h2>
    <h3>Country: ${finalData.sys.country} </h3>
    <h4>Description: ${finalData.weather[0].description} </h4>
    `;
};
getWeather.addEventListener("click", fetchApi);
