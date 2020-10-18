let Criminals = []

export const useCriminals = () => {
    return Criminals.slice()
}

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(
            parsedCriminals => {
                // console.table(parsedCriminals)
                Criminals = parsedCriminals
            }
        )
}