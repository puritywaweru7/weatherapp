const apikey = "6de2c5ef7e6c31c8dee92ede400ee1ae";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

const locationinput = document.getElementById("locationinput");
const searchbutton = document.getElementById("searchbtn");
const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const descriptionElement = document.getElementById("description");

searchbutton.addEventListener("click", () => {
    const location =locationinput.value;
    if(location){
        fetchWeather(location);
    }
});

function fetchWeather(location){
    const url = `${apiUrl}?q=${location}&appid=${apikey}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch((error) => {
            console.error("Error fetching weather data", error);
        });
}