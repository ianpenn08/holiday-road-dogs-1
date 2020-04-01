import { useWeather, getWeather  } from "./WeatherProvider.js"
import { useParks } from '../parks/ParkProvider.js'
// import { WeatherHTML } from "./Weather.js"


const contentTarget = document.querySelector(".weatherContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("parkChosen", parkChosenEvent => {
    const everyPark = useParks()

    const chosenParkCode = parkChosenEvent.detail.chosenPark
    const selectedPark = everyPark.find((parkObject) => {
        return chosenParkCode === parkObject.parkCode
    })
    


let parkLat = ""
let parkLong = ""

const parkCoordinates = (location) => {
    parkLat = location.latitude
    parkLong = location.longitude
    
}

parkCoordinates(selectedPark)

getWeather(parkLat, parkLong)



})

  
   
