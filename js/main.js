const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?q=slovakia&appid=21f51af4daba9eecb099b8e03a553187";
const API_KEY = "21f51af4daba9eecb099b8e03a553187";

fetch(WEATHER_URL) 
.then(response => response.json())
.then(responseJson => {
    document.querySelector("name").innerHTML = responseJson.name
})
