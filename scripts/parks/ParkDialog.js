
const contentTarget = document.querySelector(".park__buttonLoc")
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














const initializeDetailButtonEvents = () => {
    // CAN'T TOUCH THIS - START
    const allCloseButtons = document.querySelectorAll(".button--close")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }

 // Get a reference to all buttons that start with "button--"
 const allDetailButtons = document.querySelectorAll("button[id^='button--']")

 // Add an event listener to each one
 for (const btn of allDetailButtons) {
     btn.addEventListener(
         "click",
         theEvent => {
             const dialogSiblingSelector = `#${theEvent.target.id}+dialog`
             const theDialog = document.querySelector(dialogSiblingSelector)
             theDialog.showModal()
         }
     )
 }


}

export default initializeDetailButtonEvents