export const eateryHTML = (eatery) => {
    return `
        <div class="eateryInfo">
            <div class="eatery__name">${eatery.businessName}</div>
            <button class="eatery__button">Eatery Info</button>
            <dialog class="eatery__dialog">
                <div>Location: ${eatery.city}, ${eatery.state}</div>
                <div>Pet Friendly?: ${eatery.amenities.petFriendly}</div>
                <div>${eatery.description}</div>
                <button class="button--close">Return to Itinerary</button>
            </dialog>
        </div>
    `
}

 