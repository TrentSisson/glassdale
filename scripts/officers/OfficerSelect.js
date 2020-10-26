import { getOfficers, useOfficers } from "./OfficerProvider.js"

const officerFilterContainer = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

export const OfficerSelect = () => {
    getOfficers()
    .then(() => {
        const officerArray = useOfficers()
        render(officerArray)
    })
} 
const render = (officers) => {
    officerFilterContainer.innerHTML = `
    <select class= "dropedown" id="officerSelect">
    <option value="0">Please select an officer...</option>
    ${officers.map(
officerObj => {
return `<option value="${officerObj.name}">${officerObj.name}</option>`
}
).join("")
}
</select>
`
}

eventHub.addEventListener("change", (changeEvent) => {
if (changeEvent.target.id === "officerSelect") {
console.log("OfficerSelect: Change event happened in the officers dropdown")

console.log("OfficerSelect: Build custom event for officerSelected")
const officerSelectedEvent = new CustomEvent("officerSelected", {
detail: {
officerName: changeEvent.target.value
}
})

console.log("OfficerSelect: Dispatch officerSelected event to event hub")
eventHub.dispatchEvent(officerSelectedEvent)
}
})

