import { getSavedItinerary, deleteSavedItinerary, useSavedItinerary } from "./SavedItineraryProvider.js";
import { savedItineraryObject } from "./SavedItinerary.js";

const contentTarget = document.querySelector(".savedItinerariesContainer")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteSavedItinerary--")) {
        const [prefix,itineraryId] = clickEvent.target.id.split("--")
        deleteSavedItinerary(itineraryId)
    }
})





getSavedItinerary().then(() => {
    const everySavedItinerary = useSavedItinerary()

    contentTarget.innerHTML = everySavedItinerary.map(
        
    )
})