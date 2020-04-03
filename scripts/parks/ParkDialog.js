import { useParks } from "./ParkProvider.js"
import { parkHTML } from "./Park.js"

let visibility = false
let parkObject = []

const contentTarget = document.querySelector(".park__buttonLoc")
const parkDetails = document.querySelector(".park__details")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("parkChosen", customEvent => {
    const parkChosen = customEvent.detail.chosenPark
    const parks = useParks() // all parks
    if(parkChosen !== "0"){
        parkObject = parks.find(park=>{ // individual parks
            if(park.parkCode === parkChosen){
                return true
            }
            return false
        })
    }
})

contentTarget.addEventListener("click", e=>{
    if(e.target.id === "parkInfo"){
        parkDetails.innerHTML = parkHTML(parkObject)
        parkDetails.showModal()
    }
})

export const ParkButton = () => {
    contentTarget.innerHTML = "<button id='parkInfo'>Park Info</button>"
}





