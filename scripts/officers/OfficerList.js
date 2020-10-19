import { getOfficers, useOfficers } from "./OfficerProvider.js"
import { officer } from "./Officer.js"

const officerContainer = document.querySelector(".officersContainer")

export const officerList = () => {

    getOfficers()
        .then(() => {
            const officerArray = useOfficers()

            let officerHTMLRepresentation = ""
            for (const officers of officerArray) 
                
                officerHTMLRepresentation += officer(officers)
                
                officerContainer.innerHTML = `
                    <h3>Glassdale PD'S FINEST</h3>
                    <section class ="officerList">
                        ${officerHTMLRepresentation}
                    </sections>
                `
        
    })
}