let Criminals = []

export const useCriminals = () => Criminals.slice()
    

export const getCriminals = () => {
    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(parsedCriminals => {
                Criminals = parsedCriminals
            }
        )
}