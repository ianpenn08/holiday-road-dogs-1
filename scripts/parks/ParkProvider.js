let parks = []

export const useParks = () => {
    return parks.slice()
    
}

export const getParks = () => {
    return fetch("http://localhost:8088/data")
    .then(response => response.json())
    .then(parsedData => {
        console.table(parsedData)
        parks = parsedData
    })
}