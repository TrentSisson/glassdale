const eventHub = document.querySelector(".container")
// export const Criminals = (criminalObj) => {
//     return`
//     <div id="criminal-${criminalObj.id}" class ="criminal">
//         <h1>CRIMINAL</h1>
//         <h5>${criminalObj.name}</h5>
//         <p>Age: ${criminalObj.age}</p>
//         <p>Crime: ${criminalObj.conviction}</p>
//         <p>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</p>
//         <p>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</p>
//         <button id="associates--${criminalObj.id}">Associate Alibis</button>

//     </div> 
//     `
// }

export const Criminals = (criminalObject, facilities) => {
  return `
  <div id="criminal-${criminalObject.id}" class="criminal">
      <h4>${criminalObject.name}</h4>
      <div class="criminal__details">
          <p>Convicted for ${criminalObject.conviction}</p>
          <p>Arrested by ${criminalObject.arrestingOfficer}</p>
          <p>Incarcerated between:
              ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
              ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
          </p>
          <p>Age: ${criminalObject.age}</p>
          <div>
              <h2>Facilities</h2>
              <ul>
                  ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
              </ul>
          </div>
          <button id="associates--${criminalObject.id}">Show Associates</button>
      </div>
  </div>
  `
}


eventHub.addEventListener("click", (eventObj) => {
    // split the id of the alibi button!
    const [nameOfId, criminalId] = eventObj.target.id.split("--")
    
    // check to see if the button that was clicked IS in fact the alibi button
    if(eventObj.target.id.startsWith("associates--")){
      console.log("button was clicked:", nameOfId, criminalId)
      // build a custom event and put the criminalId in the detail
      const myCustomEvent = new CustomEvent("alibiButtonClicked", {
        detail: {
          criminalId: criminalId
        }
      })
  
      // dispatch the event to the eventHub so that other modules can listen for this event
      eventHub.dispatchEvent(myCustomEvent)
    }
  })


