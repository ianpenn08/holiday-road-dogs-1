let savedItinerary = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const itineraryStateChangedEvent = new CustomEvent("itineraryStateChanged")

    eventHub.dispatchEvent(itineraryStateChangedEvent)
}

export const useSavedItinerary = () => savedItinerary.slice()

export const getSavedItinerary = () => {
    return fetch('http://localhost:3000/itineraries')
    .then(response => response.json())
    .then(parsedData => {
        savedItinerary = parsedData
    })
}


// export const postSavedItinerary = itinerary => {
//     return fetch('http://localhost:3000/itineraries', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify(itinerary)
//     })
//     .then(getSavedItinerary)
//     .then(dispatchStateChangeEvent)
// }

export const deleteSavedItinerary = itineraryId => {
    return fetch(`http://localhost:3000/itineraries/${itineraryId}`, {
        method: "DELETE"
    })
    .then(getSavedItinerary)
    .then(dispatchStateChangeEvent)
}