const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?q=slovakia&appid=21f51af4daba9eecb099b8e03a553187";
const API_KEY = "21f51af4daba9eecb099b8e03a553187";

async function checkWeather() {
    const response = await fetch(WEATHER_URL);
    var data = await response.json();

    document.getElementById("name").innerHTML = data.name;
}

checkWeather();
