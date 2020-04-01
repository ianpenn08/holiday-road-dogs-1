let weather = []

export const useWeather = () => weather

export const getWeather = (lat, long) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&appid=6f03413c7fb49d61ed84cd9ef21fdd00`)
    .then(response => response.json())
    .then (parseData => {
        weather = parseData.list
    })
}