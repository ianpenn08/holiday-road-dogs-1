import { useParks } from "./ParkProvider.js"
import { parkHTML } from "./Park.js"

const contentTarget = document.querySelector(".park__buttonLoc")
const parkDetails = document.querySelector(".park__details")

const eventHub = document.querySelector(".container")
let parkObject = []

eventHub.addEventListener("parkChosen", clickEvent => {
    const parkChosen = clickEvent.detail.chosenPark
    const parks = useParks() // all parks
    parkObject = parks.find(park=>{ // individual parks
        if(park.parkCode === parkChosen){
            return true
        }
        return false
    })

})

contentTarget.addEventListener("click", e=>{
    if(e.target.id === "parkInfo"){
        parkDetails.innerHTML = parkHTML(parkObject)
    }  
})

export const ParkButton = () => {
    contentTarget.innerHTML = "<button id='parkInfo'>Park Info</button>"
}





