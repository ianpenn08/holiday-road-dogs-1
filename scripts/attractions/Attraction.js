export const attractionHTML = (attraction) => {
    return `
        <div class="attractionInfo">
            <div><span class="detailsInfo">Name:</span> ${attraction.name}</div>
            <div><span class="detailsInfo">Location:</span> ${attraction.city}, ${attraction.state}</div>
            <div class = "attraction_description"><span class="detailsInfo">Description:</span> ${attraction.description}</div> 
        </div>
    `
}

