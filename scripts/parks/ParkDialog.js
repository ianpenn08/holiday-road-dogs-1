import { useParks } from "./ParkProvider.js"
import { parkHTML } from "./Park.js"

let visibility = false
let parkObject = []

const contentTarget = document.querySelector(".park__buttonLoc")
const parkDetails = document.querySelector(".park__details")
const parkCloseDialogButton = document.querySelector(".parkInfo")
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


eventHub.addEventListener("parkCloseDialogButton", customEvent => {
    visibility = !visibility
    if (visibility) {
        parkDetails.classList.remove("invisible")
        parkDetails.innerHTML = parkHTML(parkObject)
    }
    else {
        parkDetails.classList.add("invisible")
        //parkDetails.style.display = "none"
    }
})

contentTarget.addEventListener("click", e=>{
    if(e.target.id === "parkInfo"){
        parkDetails.innerHTML = parkHTML(parkObject)
    }  
})

export const ParkButton = () => {
    contentTarget.innerHTML = "<button id='parkInfo'>Park Info</button>"
}





