import { useEateris } from "./EateryProvider.js"
import {eateryHTML} from "./Eatery.js"

const contentTarget = document.querySelector(".eatery__buttonLoc")
const eateryDetails = document.querySelector(".eatery__details")
const eventHub = document.querySelector(".container")
let eateryObject = []

eventHub.addEventListener("eateryChosen", clickEvent => {
    
    const eateryChosen = clickEvent.detail.eateryChosen

    const eateries = useEateris()
    
    eateryObject = eateries.find(eatery => {
        if(eateryChosen === eatery.city){
            return true
        }
        return false
    }) 
    
})

export const EateryButton = () => {
    contentTarget.innerHTML = "<button id='eateryInfo'>Eatery Info</button>"
}
const eateryInfoButton = document.querySelector("#eateryInfo")
contentTarget.addEventListener("click", e=>{
    if (e.target.id === "eateryInfo"){
        eateryDetails.innerHTML = eateryHTML(eateryObject)
    }
})  