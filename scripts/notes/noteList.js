import { useWitnessStatements } from '../witnesses/witnessStatementProvider.js';
import { NoteAsHTML } from './noteHTMLConverter.js';
import {deleteNote, getNotes, useNotes} from './notesDataProvider.js'
import {getCriminals, useCriminals} from "../criminals/CriminalsProvider.js"


const notesContainer = document.querySelector(".notesContainer");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())


export const NoteList = () => {
    getNotes()
    .then(getCriminals)
    .then(() => {
      const allNotes = useNotes()
      const allCriminals = useCriminals()
      render(allNotes, allCriminals)

    })
}

const render = (notesArray, criminalsArray) => {
    let notesHTMLRepresentations = ""
    for (const note of notesArray) {

      const relatedCriminal = criminalsArray.find(criminal => criminal.id === note.criminalId)

      notesHTMLRepresentations += NoteAsHTML(note, relatedCriminal)
    
    }
    notesContainer.innerHTML = `
              ${notesHTMLRepresentations}
          `
  }

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
      const [prefix, id] = clickEvent.target.id.split("--")

      deleteNote(id).then(
        () => {
          const updatedNotes = useNotes()
          const criminals = useCriminals()
          render(updatedNotes, criminals)
        }
      )
    }
  })