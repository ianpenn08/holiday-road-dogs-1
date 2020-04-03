
const saveItineraryButtonContainer = document.querySelector(".saveItineraryButtonContainer")
let parkChosen = false
let eateryChosen = false
let attractionChosen = false


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".previewContainer")

contentTarget.addEventListener("parkChosen", CustomEvent => {
    if (CustomEvent.target.id === "saveItineraryChoices") {

        const parkEvent = new CustomEvent("parkChoiceSaved")

        eventHub.dispatchEvent(parkEvent)
    }
    
})


contentTarget.addEventListener("attractionChosen", taco => {
    if (taco.target.id === "saveItineraryChoices")

    const attractionEvent = new CustomEvent("attractionChoiceSaved")
    
    eventHub.dispatchEvent(attractionEvent)
})




contentTarget.addEventListener("eateryChosen", CustomEvent => {
    if (CustomEvent.target.id === "saveItineraryChoices")

    const eateryEvent = new CustomEvent ("eateryChoiceSaved")
    
    event.dispatchEvent(eateryEvent)
})