let weather = []

export const useWeather = () => weather.slice()

export const getWeather = (lat, long) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=6f03413c7fb49d61ed84cd9ef21fdd00`)
    .then(response => response.json())
    .then (parseData => {
        console.log(parseData)
        weather = parseData
    })
}