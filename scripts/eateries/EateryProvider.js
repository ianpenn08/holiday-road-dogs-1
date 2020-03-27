let eateries = []
export const useEateris = () => eateries.slice()
export const getEateries = () => {
    return fetch('http://holidayroad.nss.team/eateries')
    .then(response => response.json())
    .then(parsedData => {
        eateries = parsedData
    })
}
