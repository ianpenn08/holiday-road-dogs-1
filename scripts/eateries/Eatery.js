export const eateryHTML = (eatery) => {
    return `
        <div class="eateryInfo">
                <div><span class ="detailsInfo">Location:</span> ${eatery.city}, ${eatery.state}</div>
                <div><span class ="detailsInfo">Pet Friendly:</span> ${eatery.ameneties.petFriendly ? "Yes" : "No"}</div>
                <div><span class ="detailsInfo">Playground:</span> ${eatery.ameneties.playground ? "Yes" : "No"}</div>
                <div class = "eatery_park_description"><span class ="detailsInfo">Description:</span> ${eatery.description}</div>
            </dialog>
        </div>
    `
}


