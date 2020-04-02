export const WeatherHTML = (weatherObject) => {
    return `
    <div class="weather">
    <p>Temperature: ${weatherObject.main.temp} ℉</p>
    <p>Feels Like: ${weatherObject.main.feels_like} ℉</p>
    <p>Humidity: ${weatherObject.main.humidity}%</p>
        <p> ${weatherObject.weather[0].main}: ${weatherObject.weather[0].description}</p>
    </div>
    `
}