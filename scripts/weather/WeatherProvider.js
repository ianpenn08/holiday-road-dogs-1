let weather = []

export const useWeather = () => weather.slice()

export const getWeather = (searchTerm) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=6f03413c7fb49d61ed84cd9ef21fdd00`)
    .then(response => response.json())
    .then (parseData => {
        weather = parseData
    })
}