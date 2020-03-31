import { useParks } from "./ParkProvider.js"
import { parkHTML } from "./Park.js"

const contentTarget = document.querySelector(".park__buttonLoc")
const parkDetails = document.querySelector(".park__details")

const eventHub = document.querySelector(".container")
let parkObject = []

eventHub.addEventListener("parkChosen", clickEvent => {
    const parkChosen = clickEvent.detail.chosenpark
    console.log("parkChosen: -> ",parkChosen) ///afam
    const parks = useParks() // all parks
    parkObject = parks.find(park=>{ // individual parks
        if(park.parkCode === parkChosen){
            return true
        }
        return false
    })
    console.log(parkObject.fullName)

    // if (clickEvent.target.class === "parkInfo") {
    //     // Create a custom event to tell any interested component that the user wants to see park information
    //     const customEvent = new CustomEvent("parkButtonClicked")

    //     // Dispatch it to event hub
    //     //eventHub.dispatchEvent(customEvent)
    //     // how do i see the park dialog

    // }
})

contentTarget.addEventListener("click", e=>{
    if(e.target.id === "parkInfo"){
        // console.log('fullName: -> ', parkObject.fullName)
        // console.log('parkCode: -> ', parkObject.parkCode)
        // console.log('City: -> ', parkObject.addresses[0].city)
        parkDetails.innerHTML = parkHTML(parkObject)
    }
    // Create a custom event to tell any interested component that the user wants to see park information
    // const customEvent = new CustomEvent("parkButtonClicked",{
    //     detail:{
    //         parkDetailButton: 
    //     }
    // })

    //     // Dispatch it to event hub
    //     //eventHub.dispatchEvent(customEvent)    
})

export const ParkButton = () => {
    contentTarget.innerHTML = "<button id='parkInfo'>Park Info</button>"
}





