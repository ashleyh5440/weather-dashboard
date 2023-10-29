//need function for input label
//need function + event listener for search button
//need function to get api
//need to add searched cities to local storage + the page

const input = document.getElementById("floatingInput");
const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("searchResults");
const fiveDay = document.getElementById("fiveDay");

//seach button
searchBtn.addEventListener("click", getWeather);

//get api

function getWeather() {
const apiKey = "af9558435b5b700340934127adc478ab";
const city = input.value; //chooses city based on the input
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af9558435b5b700340934127adc478ab&units=imperial"

fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        
    })
}

//display weather data
function displayWeatherData() {

} 