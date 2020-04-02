export const eateryHTML = (eatery) => {
    return `
        <div class="eateryInfo">
                <span id="eatery-close">&times;</span>
                <div><span class ="detailsInfo">Location:</span> ${eatery.city}, ${eatery.state}</div>
                <div><span class ="detailsInfo">Pet Friendly:</span> ${eatery.ameneties.petFriendly ? "Yes" : "No"}</div>
                <div><span class ="detailsInfo">Playground:</span> ${eatery.ameneties.playground ? "Yes" : "No"}</div>
                <div><span class ="detailsInfo">Description:</span> ${eatery.description}</div>
            </dialog>
        </div>
    `
}

const eateryDetails = document.querySelector(".eatery__details")
eateryDetails.addEventListener("click", e => {
    if(e.target.id === "eatery-close"){
        eateryDetails.style.display = "none"
    }
})

