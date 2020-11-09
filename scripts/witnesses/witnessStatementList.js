import {getWitnessStatements, useWitnessStatements} from "./witnessStatementProvider.js"
import {witnessStatement} from "./witnessStatement.js"
import { renderWitnessButton } from "./witnesStatementButton.js"

const eventHub = document.querySelector(".container")
const witnessContainer = document.querySelector(".criminalsContainer")


eventHub.addEventListener("witnessesClicked", () => {

    witnessList()
})
const witnessList = () =>{
getWitnessStatements()
.then(() => {
  const witnessesArray = useWitnessStatements()
  console.log(witnessesArray)
  render(witnessesArray)
})
}

const render = ( witnessStatementsArray) => {
    let witnessStatementsHTMLRepresentations = ""
    for (const witness of witnessStatementsArray){
        witnessStatementsHTMLRepresentations += witnessStatement(witness)
        console.log(witnessStatementsHTMLRepresentations)
        witnessContainer.innerHTML = `
        <h3> Glassdale Witnesses</h3>
        <section class ="witnessList">
        ${witnessStatementsHTMLRepresentations}
        </section>`
    }
}