

const eventHub = document.querySelector(".container")
contentTarget = document.querySelector(".previewContainer")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveItineraryChoices") {
        
        const saveClicked = new CustomEvent("saveItineraryClicked")

        
        eventHub.dispatchEvent(saveClicked)
    }
})


export const displaySaveItineraryButton = () => {
    contentTarget.innerHTML = "<button id='saveItineraryChoices'>Save Itinerary</button>"
}