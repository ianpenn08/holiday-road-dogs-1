const returnItineraryButton = document.querySelector(".button--close")

returnItineraryButton.addEventListener("click", clickEvent => {
    console.log('button clicked')
}) 


export const attractionHTML = (attraction) => {
    return `
        <div class="attractionInfo">
            <div>Name: ${attraction.name}</div>
            <div>Location: ${attraction.city}, ${attraction.state}</div>
            <div>Description: ${attraction.description}</div>
            <button id="attraction-close-button">Return to Attraction</button>
        </div>
    `
}

const attractionDetails = document.querySelector(".attraction__details")
attractionDetails.addEventListener("click", e => {
    if(e.target.id === "attraction-close-button"){
        attractionDetails.style.display = "none"
    }
})
