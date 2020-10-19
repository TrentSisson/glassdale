import {useOfficers, getOfficers} from "./officers/OfficerProvider.js"
import {useCriminals} from "./criminals/CriminalsProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"
useCriminals()

CriminalList()
OfficerList()



getOfficers()
.then(() => {const officerArray = useOfficers}
)