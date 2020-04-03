
const eventHub = document.querySelector(".container")
let database = []

const dispatchStateChangeEvent = () => {
    const stateChangeEvent = new CustomEvent("itineraryStateChangeEvent")
    eventHub.dispatchEvent(stateChangeEvent)
}
export const getItinerary = () => {
    fetch(' http://localhost:8088/itineraries')
    .then(response = response.json())
    .then(dataParsed = {
        database = dataParsed
    })
}
export const SaveItineraryToApi = (itinerary) => {
    return fetch('http://localhost:8088/itineraries',{
    method:'POST',
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(itinerary)})
    .then(getItinerary)
    .then(dispatchStateChangeEvent)
}
eventHub.addEventListener("attractionChoiceSaved")
eventHub.addEventListener("parkChoiceSaved")
eventHub.addEventListener("eateryChoiceSaved")