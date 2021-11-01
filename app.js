const weatherURL =
  "https://api.openweathermap.org/data/2.5/weather?q=lehi&appid=35701ad524635b065706933439a9ab30&units=imperial";
const apodURL =
  "https://api.nasa.gov/planetary/apod?api_key=lkeW18399HSJOgresZ4j1kd8cqdrUECjYMkImwrP";

async function getData(url, callback) {
  let rawData = await fetch(url);
  let jsonData = await rawData.json();
  callback(jsonData);
}

function renderWeather(data) {
  console.log(data);
  document.querySelector("#temp").innerHTML = `Temp: ${Math.floor(
    data.main.temp
  )}&#176;`;
  document.querySelector(
    "#condition"
  ).innerHTML = `Condition: ${data.weather[0].main}`;
  document.querySelector(
    "#highToday"
  ).innerHTML = `High: ${data.main.temp_max}`;
  document.querySelector("#lowToday").innerHTML = `Low: ${data.main.temp_min}`;
}

function renderAPOD(data) {
  console.log(data);
  document.querySelector("#apodimg").src = data.url;
  document.querySelector("#apodtitle").innerHTML = data.title;
}

getData(weatherURL, renderWeather);
getData(apodURL, renderAPOD);

document.querySelector("#date").innerHTML = new Date().toLocaleDateString();
document.querySelector("#time").innerHTML = new Date().toLocaleTimeString();
