//need function for input label
//need function + event listener for search button
//need function to get api
//need to add searched cities to local storage + the page

const input = document.getElementById("floatingInput");
const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("searchResults");
const fiveDay = document.getElementById("fiveDay");

//seach button
searchBtn.addEventListener("click", {
    let cityName = input.value.trim();
    if(cityName === "") {
        alert("Please enter a city");
    } else {
        getWeatherData(cityName);
    }
});

//get api
function getWeatherData

//display weather data
function displayWeatherData 