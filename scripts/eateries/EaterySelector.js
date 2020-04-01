import { useEateris } from "./EateryProvider.js"

const contentTarget = document.querySelector(".eateryDropdown")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", e=>{
    if(e.target.id === "eaterySelect"){
        const selectedChosenEatery = new CustomEvent("eateryChosen", {
            detail: {
                eateryChosen: e.target.value
            }
        })
        // dispatch selectedChosenEatery custom event to whoever listening for selectedChosen event
        eventHub.dispatchEvent(selectedChosenEatery)
    }
})


export const eaterySelector = () => {
    const eateries = useEateris()
    // Renders the list of business names for the dropdown    
    const render = (eateryCollection) => {
        
        contentTarget.innerHTML = `
        <select class="" id="eaterySelect">
        <option value="0">Select Dining</option>
        ${
            // Uses map to iterate over the array of eateries to get back the individual eatery businessNames.
            eateryCollection.map(eatery => {
                return `<option value = "${eatery.city}">${eatery.businessName}</option>`
            })
        }
        </select>`
    }
    render(eateries)
}
