// Mo this is just for visualization of our code for future refactoring.
export const savedItineraryObject = (itineraryObject) => {
    return `
        <section class="eachSavedItinerary">
            <h4> Saved Itinerary # </h4>
            <ul class="eachSavedItinerary__List>
                <li class="park">${singlePark.fullName}</li>
                <li class="attraction">${singleAttraction.name}</li>
                <li class="eatery">${eatery.businessName}</li></li>
            </ul>
            <p>
                <button id="deleteSavedItinerary--${itineraryObject.id}>Delete Itinerary</button>
            </p>
        </section>
                

    `
}