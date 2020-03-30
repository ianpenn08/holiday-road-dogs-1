
const contentTarget = document.querySelector(".park__button")
const eventHub = document.querySelector(".container")


contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.class === "parkInfo") {
        // Create a custom event to tell any interested component that the user wants to see park information
        const customEvent = new CustomEvent("parkButtonClicked")

        // Dispatch it to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const ParkButton = () => {
    contentTarget.innerHTML = "<button class='parkInfo'>Park Info</button>"
}