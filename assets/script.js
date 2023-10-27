//need function for input label
//need function + event listener for search button
//need function to get api
//need to add searched cities to local storage + the page

const input = document.getElementById("floatingInput");
const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("searchResults");
const fiveDay = document.getElementById("fiveDay");

//seach button
searchBtn.addEventListener("click", getWeatherData);

//get api\
const apiKey = "af9558435b5b700340934127adc478ab";
const city = input.value; //chooses city based on the input
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af9558435b5b700340934127adc478ab&units=imperial"

function getWeatherData() {
    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        if (data.cod === 200) {
            displayWeatherData(data);
        } else {
            alert("City not found. Please check the city name.");
        }
    })
    .catch((error) => {
        console.error("Error fetching weather data:", error);
        alert("An error occurred while fetching weather data.");
    });
}

//display weather data
function displayWeatherData() {

} 