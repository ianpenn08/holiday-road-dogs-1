import { useAttractions } from "./AttractionProvider.js"
import { attractionHTML } from "./Attraction.js"

const attraction__buttonLoc = document.querySelector(".attraction__buttonLoc")
const contentTarget = document.querySelector(".previewContainer")
const attraction__details = document.querySelector(".attraction__details")

const eventHub = document.querySelector(".container")
const preview_attraction = document.querySelector(".preview_attraction")
let attractionObject = []

eventHub.addEventListener("attractionChosen", clickEvent => {
    const attractionChosen = clickEvent.detail.attractionChosen
    const attractions = useAttractions() 
    attractionObject = attractions.find(attraction => { 
        if(attractionChosen === attraction.city){
            return true
        }
        return false
    })
    preview_attraction.innerHTML = `<div >${attractionObject.name}</div>`
    

})



export const AttractionButton = () => {
    attraction__buttonLoc.innerHTML = "<button id='attractionInfo'>Attraction Info</button>"
}

contentTarget.addEventListener("click", event=>{
    if(event.target.id === "attractionInfo"){
        attraction__details.innerHTML = attractionHTML(attractionObject)
        attraction__details.showModal()
    }  
})
