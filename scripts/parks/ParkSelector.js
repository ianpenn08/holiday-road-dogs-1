import { useParks } from "./ParkProvider.js"



const contentTarget = document.querySelector(".parkDropdown")

const eventHub = document.querySelector(".container")

contentTarget.addEventListener("change", changeEvent =>{
    if(changeEvent.target.id === "parkSelect"){
    const theParkThatWasChosen = changeEvent.target.value

    const parkChosenEvent = new CustomEvent("parkChosen",{
        detail:{
            chosenpark: theParkThatWasChosen
        }
    }) 
    eventHub.dispatchEvent(parkChosenEvent)}
})

export const ParkSelect = () => {
    const parks = useParks()

    const render = (parksCollection) => {
        contentTarget.innerHTML = `
        <select class="dropdown" id="parkSelect">
            <option value = "0">Select National Park</option>
            ${
                parksCollection.map(singlePark => {
                    return `<option value = "${singlePark.parkCode}">${singlePark.fullName}</option>`
                })
            }
        </select>
        `
    }

    render(parks)

}