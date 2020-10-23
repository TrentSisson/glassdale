import { getCriminals, useCriminals } from "./CriminalsProvider.js"
import { Criminals } from "./Criminal.js"
import {useConvictions} from "../convictions/ConvictionProvider.js"

const eventHub = document.querySelector(".container")

const criminalsContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {

    getCriminals()
        .then(() => {
            const criminalArray = useCriminals()
            render(criminalArray)
        })
    }
        

    

eventHub.addEventListener("crimeSelected", event => {
    if (event.detail.crimeThatWasChosen !== 0){

        

        const convictionsArray = useConvictions()

        const convictionThatWasChosen = convictionsArray.find(convictionObj =>{
            return criminalObj.conviction === convictionThatWasChosen.name

        })
        render(filteredCriminalArray)
    }
})

eventHub.addEventListener("officerSelected", officerSelectedEventObj => {
    const selectedOfficerName = officerSelectedEventObj.detail.sleectedOfficerName

    const criminalsArray = useCriminals()

    constfilteredArrayCriminals = criminalsArray.filter(
        (criminalObj) => {
            if (criminalObj.arrestingOfficer === selectedOfficerName) {
                return true
            }
            return false
            })
        
        
        })

    const render = (criminalsArray) => {
        let criminalsHTMLRepresentation = ""
        for (const criminal of criminalsArray) {

            criminalsHTMLRepresentation += Criminals(criminal)

            criminalsContainer.innerHTML =`
            <h3>Glassdale's BadBoys!</h3>
            <section class="criminalList">
            ${criminalsHTMLRepresentation}
            </section> 
            `
        }
    }
   