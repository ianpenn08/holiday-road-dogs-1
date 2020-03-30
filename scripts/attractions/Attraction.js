const attractionHTML = (attraction) => {
    return `
        <div class="attractionInfo">
            <div class="attraction__name">${attraction.name}</div>
            <button class="attraction__button">Bizarrerie Info</button>
            <dialog class="attraction__dialog">
                <div>Location: ${attraction.city}, ${attraction.state}</div>
                <div>${attraction.description}
                <button class="button--close">Return to Itinerary</button>
            </dialog>
        </div>
    `
}

export default attractionHTML