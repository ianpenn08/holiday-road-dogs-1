const contentTarget = document.querySelector(".attraction__buttonLoc")
const eventHub = document.querySelector(".container")


contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.class === "attractionInfo") {
        // Create a custom event to tell any interested component that the user wants to see park information
        const customEvent = new CustomEvent("attractionButtonClicked")

        // Dispatch it to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const AttractionButton = () => {
    contentTarget.innerHTML = "<button class='attractionInfo'>Attraction Info</button>"
}