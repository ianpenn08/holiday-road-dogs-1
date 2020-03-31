export const attractionHTML = (attraction) => {
    return `
        <div class="attractionInfo">
            <h4 class="attraction__name">${attraction.name}</h4>
            <button id="attraction__button">Bizarrerie Info</button>
            <dialog class="attraction__dialog">
                <div>Location: ${attraction.city}, ${attraction.state}</div>
                <div>${attraction.description}
                <button class="button--close">Return to Itinerary</button>
            </dialog>
        </div>
    `
}

