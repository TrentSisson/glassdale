export const witnessStatement = (witness) => {
    return `
    <div class= "witness">
        <h5>${witness.name}</h5>
        <p>Statement: ${witness.statement}</p>
    </div>`
}
