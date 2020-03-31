import { useAttractions } from "./AttractionProvider.js";
import { attractionHTML } from "./Dummy.js";


const contentTarget = document.querySelector(".attraction__buttonLoc")

export const AttractionList = () => {
    const AttractionArray = useAttractions()

    for (const AttractionObject of AttractionArray)
 {
     const AttractionString = Attraction(AttractionObject)

     contentTarget.innerHTML += AttractionString
 }
}