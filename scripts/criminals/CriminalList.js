import { getCriminals, useCriminals } from "./CriminalsProvider.js"
import { Criminals } from "./Criminal.js"
import {useConvictions} from "../convictions/ConvictionProvider.js"
import { officerList } from "../officers/OfficerList.js"
import {getCriminalFacilities, useCriminalFacilities} from "../facility/criminalFacilityProvider.js"
import {getFacilities, useFacilities} from "../facility/facilityProvider.js"

const eventHub = document.querySelector(".container")


let facilities = []
let crimFac = []
let criminals = []

// Kick off the fetching of both collections of data
export const criminalList = () => { 
    getFacilities()
    .then(getCriminalFacilities)
    .then(getCriminals)
    .then(
        () => {
            // Pull in the data now that it has been fetched
            facilities = useFacilities()
            crimFac = useCriminalFacilities()
            criminals = useCriminals()
            
            // Pass all three collections of data to render()
            render(criminals, facilities, crimFac)
        }
        )
    }
    
    
    
    
    
    
    eventHub.addEventListener("crimeSelected", event => {
        if (event.detail.crimeThatWasChosen !== 0){
            
            
            const criminalsArray = useCriminals()
            facilities = useFacilities()
            crimFac = useCriminalFacilities()
            const convictionsArray = useConvictions()
            
            const convictionThatWasChosen = convictionsArray.find(convictionObj =>{
                console.log(convictionObj)
                return convictionObj.id === event.detail.crimeThatWasChosen
                
            })
            const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
                return criminalObj.conviction === convictionThatWasChosen.name
            })
            
            render(filteredCriminalsArray,facilities,crimFac)
        } else{
            CriminalList()
        }
    })
    
    
    
    eventHub.addEventListener("officerSelected", officerSelectedEventObj => {
        const selectedOfficerName = officerSelectedEventObj.detail.officerName
        
        const criminalsArray = useCriminals()
        facilities = useFacilities()
        crimFac = useCriminalFacilities()
        const filteredArrayCriminals = criminalsArray.filter(
            (criminalObj) => {
                if (criminalObj.arrestingOfficer === selectedOfficerName) {
                    return true
                }
                
                {
                    return false
                    
                }
                
            })
            
            render(filteredArrayCriminals,facilities,crimFac)
            
        })
        
        
        
        const criminalbox = document.querySelector(".criminalsContainer")
        const render = (criminalsToRender, allFacilities, allRelationships) => {
            // Step 1 - Iterate all criminals
            criminalbox.innerHTML = criminalsToRender.map(
                (criminalObject) => {
                    // Step 2 - Filter all relationships to get only ones for this criminal
                    const facilityRelationshipsForThisCriminal = allRelationships.filter(cf => cf.criminalId === criminalObject.id)
                    
                    // Step 3 - Convert the relationships to facilities with map()
                    const facilities = facilityRelationshipsForThisCriminal.map(cf => {
                        const matchingFacilityObject = allFacilities.find(facility => facility.id === cf.facilityId)
                        return matchingFacilityObject
                    })
                    
                    // Must pass the matching facilities to the Criminal component
                    return Criminals(criminalObject, facilities)
                }
                ).join("")
            }
    