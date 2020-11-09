import {getWitnessStatements, useWitnessStatements} from "./witnessStatementProvider.js"
import {witnessStatement} from "./witnessStatement.js"
import { renderWitnessButton } from "./witnesStatementButton.js"

const eventHub = document.querySelector(".container")
const witnessContainer = document.querySelector(".caseDataContainer")


eventHub.addEventListener("witnessesClicked", () => {

    witnessList()
})

const wintnessList = () => {
getWitnessStatements()
    .then(() =>{
        const witnessArray = useWitnessStatements()
        console.log(witnessArray)
        render(witnessArray)
    })
}

const render = ( witnessStatementsArray) => {
    let witnessStatementsHTMLRepresentations = ""
    for (const witness of witnessStatementsArray){
        witnessStatementsHTMLRepresentations += witnessStatement(witness)
        wintnesscontainer.innerHTML = `
        <h3> Glassdale Witnesses</h3>
        <section class ="witnessList">
        ${witnessStatementsArray}
        </section>`
    }
}