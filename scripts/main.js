import {useOfficers, getOfficers} from "./officers/OfficerProvider.js"


import {useCriminals} from "./criminals/CriminalsProvider.js"
useCriminals()



getOfficers()
.then(() => {const officerArray = useOfficers}
)