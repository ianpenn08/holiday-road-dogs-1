
const apiid = "6f03413c7fb49d61ed84cd9ef21fdd00"

// let weather = []

export const getWeather = () => {
    return fetch('https://api.openweathermap.org/data/2.5/forecast?q=new%20york&appid=6f03413c7fb49d61ed84cd9ef21fdd00')
    .then(response => response.json())
    .then (parseData => {
        console.table(parseData)
        // weather = parseData
    })
}