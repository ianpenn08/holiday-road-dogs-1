import { useWeather, getWeather  } from "./WeatherProvider.js"
import { useParks } from '../parks/ParkProvider.js'
const eventHub = document.querySelector(".container")
eventHub.addEventListener("parkChosen", customEvent => {
    const parkName = customEvent.detail.chosenpark
    // const weatherList = useWeather()
    console.log('park:-> ',parkName)
    const parks = useParks()
    const onePark = parks.find(park => {
        if(park.addresses[0].city === parkName){
            console.log('==> ',park.addresses[0].city)
            return true
        }
        return false
    })
    console.log('P-> ',onePark.addresses[0].city)
    getWeather(onePark.addresses[0].city).then(() => {
        
    })
   
    // find for one specific park from list of parks
    // let say park = nashville zoo 
    // once we have park name then where is that park located(city)
    // we found city 
    // oh i found city. what is next?
    // loop over list of weather in that city
    // const listOfWeather = weatherList.map(weather=>{
    //     // one day weather
    //     // two day weather
    //     //park
    // })
    
})

export const weatherList = () => {

}