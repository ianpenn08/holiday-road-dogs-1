const contentTarget = document.querySelector(".eatery__button")
const eventHub = document.querySelector(".container")


contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.class === "eateryInfo") {
        // Create a custom event to tell any interested component that the user wants to see park information
        const customEvent = new CustomEvent("eateryButtonClicked")

        // Dispatch it to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const EateryButton = () => {
    contentTarget.innerHTML = "<button class='eateryInfo'>Eatery Info</button>"
}