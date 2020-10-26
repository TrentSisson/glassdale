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
        

        const criminalsArray = useCriminals()

        const convictionsArray = useConvictions()

        const convictionThatWasChosen = convictionsArray.find(convictionObj =>{
            console.log(convictionObj)
            return convictionObj.id === event.detail.crimeThatWasChosen

        })
        const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
            return criminalObj.conviction === convictionThatWasChosen.name
        })

        render(filteredCriminalsArray)
    } else{
        CriminalList()
    }
})



eventHub.addEventListener("officerSelected", officerSelectedEventObj => {
    const selectedOfficerName = officerSelectedEventObj.detail.officerName

    const criminalsArray = useCriminals()

    const filteredArrayCriminals = criminalsArray.filter(
        (criminalObj) => {
            if (criminalObj.arrestingOfficer === selectedOfficerName) {
                return true
            } 
         return false
           
            })
        
            render(filteredArrayCriminals)
            
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

   