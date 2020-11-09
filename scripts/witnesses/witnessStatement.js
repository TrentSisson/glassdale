export const witnessStatement = (witnessObj) => {
    return `
    <div class= "witness">
        <h5>${witnessObj.name}</h5>
        <p>Statement: ${witnessObj.statements}</p>
    </div>`
}
