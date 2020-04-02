const returnItineraryButton = document.querySelector(".button--close")

returnItineraryButton.addEventListener("click", clickEvent => {
    console.log('button clicked')
}) 


export const attractionHTML = (attraction) => {
    return `
        <div class="attractionInfo">
            <span id="attraction-close-button">&times;</span>
            <div><span class="detailsInfo">Name:</span> ${attraction.name}</div>
            <div><span class="detailsInfo">Location:</span> ${attraction.city}, ${attraction.state}</div>
            <div><span class="detailsInfo">Description:</span> ${attraction.description}</div>
            
        </div>
    `
}

const attractionDetails = document.querySelector(".attraction__details")
attractionDetails.addEventListener("click", e => {
    if(e.target.id === "attraction-close-button"){
        attractionDetails.style.display = "none"
    }
})
