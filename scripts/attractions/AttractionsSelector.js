import { useAttractions } from "./AttractionProvider.js";

const contentTarget = document.querySelector(".attractionDropdown")

const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", changeEvent =>{
    if(changeEvent.target.id === "attractionSelect")
    const theAttractionThatWasChosen = changeEvent.target.value

    const attractionChosenEvent = new CustomEvent("attractionChosen",{
        detail:{
            chosenAttraction: theAttractionThatWasChosen
        }
    }) 
    eventHub.dispatchEvent(attractionChosenEvent)
})

export const AttractionSelect = () => {
    const attractions = useAttractions()

    const render = (attractionsCollection) => {
        contentTarget.innerHTML = `
        <select class="dropdown" id="attractionSelect">
            <option value = "0">Select A National Park</option>
            ${
                attractionsCollection.map(singleAttraction => {
                    return `<option>${singleAttraction.id}</option>`
                })
            }
        </select>
        `
    }

    render(attractions)
}