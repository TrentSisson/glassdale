import { NoteAsHTML } from './noteHTMLConverter.js';
import {getNotes, useNotes} from './notesDataProvider.js'


const notesContainer = document.querySelector(".notesContainer");
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())


export const NoteList = () => {
    getNotes()
    .then(() => {
    const allNotes = useNotes()
    render(allNotes)

    })
}

const render = (notesArray) => {
    let notesHTMLRepresentations = ""
    for (const note of notesArray) {

      notesHTMLRepresentations += NoteAsHTML(note)
    
    }
    notesContainer.innerHTML = `
              ${notesHTMLRepresentations}
          `
  }