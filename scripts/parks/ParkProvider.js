let parks = []

export const useParks = () => {
    return parks.slice()
    
}


export const getParks = () => {
    return fetch("http://developer.nps.gov/api/v1/parks?api_key=ooZUpH3kDoDNlxyLTK1AvsU20PwcIVEvfl7o9DEw")
    .then(response => response.json())
    .then(parsedData => {
        console.table(parsedData)
        parks = parsedData
    })
}