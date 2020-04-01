export const eateryHTML = (eatery) => {
    return `
        <div class="eateryInfo">
                <div>Location: ${eatery.city}, ${eatery.state}</div>
                <div>Pet Friendly?: ${eatery.ameneties.petFriendly}</div>
                <div>${eatery.description}</div>
                <button id="eatery-close">Return to Eatery</button>
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

