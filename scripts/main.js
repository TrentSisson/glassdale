import { ConvictionSelect } from "./convictions/ConvictionSelect.js"
import {CriminalList} from "./criminals/CriminalList.js"
import { officerList } from "./officers/OfficerList.js"
import { OfficerSelect } from "./officers/OfficerSelect.js"
import { Criminals } from "./criminals/Criminal.js"
import { NoteForm } from "./notes/noteForm.js"
import { NoteList } from "./notes/noteList.js"
import "./criminals/AlibiList.js"
import "./witnesses/witnessStatementProvider.js"
import { renderWitnessButton } from "./witnesses/witnesStatementButton.js"
import "./witnesses/witnessStatementList.js"


ConvictionSelect()
CriminalList()
officerList()
OfficerSelect()
NoteForm()
NoteList()
renderWitnessButton()
