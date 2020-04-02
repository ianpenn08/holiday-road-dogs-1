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
        
        eventHub.dispatchEvent(selectedChosenEatery)
    }
})


export const eaterySelector = () => {
    const eateries = useEateris()
       
    const render = (eateryCollection) => {
        
        contentTarget.innerHTML = `
        <select class="" id="eaterySelect">
        <option value="0">Select Dining</option>
        ${
        
            eateryCollection.map(eatery => {
                return `<option value = "${eatery.city}">${eatery.businessName}</option>`
            })
        }
        </select>`
    }
    render(eateries)
}
