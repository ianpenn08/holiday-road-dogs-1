const contentTarget = document.querySelector(".park__details")
const eventHub = document.querySelector(".container")

export const parkHTML = (park) => {
    return `
        <div class="parkInfo">
            <div><span class="detailsInfo">Location:</span> ${park.addresses[0].city}, ${park.addresses[0].stateCode}</div>
            <div><span class="detailsInfo">Phone Number:</span> ${park.contacts.phoneNumbers[0].phoneNumber}</div>
            <div><span class="detailsInfo">Email:</span> ${park.contacts.emailAddresses[0].emailAddress}</div>
            <div class="park_description"><span class="detailsInfo">Description:</span> ${park.description}</div>
        </div>
    `
}
