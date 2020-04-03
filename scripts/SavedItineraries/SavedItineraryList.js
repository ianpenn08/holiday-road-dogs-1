import { getSavedItinerary, deleteSavedItinerary, useSavedItinerary } from "./SavedItineraryProvider.js";
import { savedItineraryObject } from "./SavedItinerary.js";

const contentTarget = document.querySelector(".savedItinerariesContainer")
const eventHub = document.querySelector(".container")



eventHub.addEventListener(/*"Event Name Goes Here"*/, event => render())


const render =() => {
    getSavedItinerary().then(() => {
            const allSavedItineraries = useSavedItinerary()

            const

        
    })
}

