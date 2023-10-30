//need function for input label
//need function + event listener for search button
//need function to get api
//need to add searched cities to local storage + the page

const input = document.getElementById("floatingInput");
const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("searchResults");
const fiveDay = document.getElementById("fiveDay");

//seach button
searchBtn.addEventListener("click", handleSearchSubmit);

function handleSearchSubmit() {
    const city = document.getElementById("floatingInput").value.trim(); // .trim gets rid of white space
    if(!city) {
        return
    }
    getWeather(city);
}

//get api
function getWeather(city) {
const apiKey = "af9558435b5b700340934127adc478ab";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=af9558435b5b700340934127adc478ab&units=imperial`

fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)
        displayWeatherData(data);
    const {lat, lon} = data.coord //pulls the data out
    var apiUrlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`; //for the five day forecast

    fetch(apiUrlForecast)
    .then(function (response){
        return response.json();
    }).then(function (data){
        console.log(data);
        displayForecastData(data.list)
    })
    
    })
    .catch(function (error) {
        console.error("Error fetching weather data:", error);
    });
}

//display forescast
function displayForecastData(data){
    for (let i = 3; i < data.length; i+=8) {

    const temp = document.createElement("p");
    const humidity = document.createElement("p");
    const wind = document.createElement("p");
    const date = document.createElement("p");
    const img = document.createElement("img");

    date.textContent = dayjs.unix(data[i].dt).format("MM/DD/YYYY");
    wind.textContent = `${data[i].wind.speed} m/h`
    humidity.textContent = `${data[i].main.humidity} %`
    temp.textContent = `${data[i].main.temp} °F`
    img.src = `https://openweathermap.org/img/w/${data[i].weather[0].icon}.png`;
    img.alt = data[i].weather[0].description

    const card = document.createElement("div");
    card.append(date, img, temp, wind, humidity);
    document.getElementById("fiveDay").append(card);
    }
}

//display weather data
function displayWeatherData(data) {
    const cityNameElement = document.getElementById("city");
    const temperatureElement = document.getElementById("tempF");
    const windElement = document.getElementById("wind");
    const humidityElement = document.getElementById("humidity");

    cityNameElement.textContent = data.name
    temperatureElement.textContent = `${Math.round(data.main.temp)} °F`
    humidityElement.textContent = `${data.main.humidity} %`
    windElement.textContent = `${data.wind.speed} m/h`

    const img = document.createElement("img") //weather icon
    img.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    img.alt = data.weather[0].description
}

//saves searches to local storage
function saveSearchHistory(city) { //(city) because that's what needs to be saved
    const searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || []
    searchHistory.push(city); //adds city to the list
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
}

function displaySearchHistory() {

}
