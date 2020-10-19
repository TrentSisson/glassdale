import { getOfficers, useOfficers } from "./CriminalsProvider.js"
import { Criminals } from "./Criminal.js"

const OfficersContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {

    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()

            let criminalsHTMLRepresentation = ""
            for (const criminal of criminalArray) 
                
                criminalsHTMLRepresentation += Criminals(criminal)
                
                criminalContainer.innerHTML = `
                    <h3>Glassdale Criminals</h3>
                    <section class ="criminalList">
                        ${criminalsHTMLRepresentation}
                    </sections>
                `
        
    })
}