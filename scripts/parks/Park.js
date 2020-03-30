const parkHTML = (park) => {
    return `
        <div class="parkInfo">
            <div class="park__name">${park.fullName}</div>
            <button class="park__button">National Park Info</button>
            <dialog class="park__dialog">
                <div>Location: ${park.city}, ${park.statecode}</div>
                <div>Phone Number: ${park.phoneNumber}</div>
                <div>Email: ${park.emailAddress}</div>
                <div>${park.description}</div>
                <button class="button--close">Return to Itinerary</button>
            </dialog>
        </div>
    `
}

export default parkHTML