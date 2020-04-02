import { settings } from "../Settings.js"

let weather = []

export const useWeather = () => weather
    
export const getWeather = (lat, long) => {
    return fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&appid=${settings.weatherKey}`)
    .then(response => response.json())
    .then (parseData => {
        weather = parseData.list
    })
}