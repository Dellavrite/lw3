// run when click on button
function userAdd(event, form) {
    // remove default submit event
    event.preventDefault()
    // get all needed elements
    let table = document.getElementById("users")
    let row = document.createElement("tr")
    let fname = document.createElement("td")
    let lname = document.createElement("td")
    // add to table values from inputs
    fname.innerHTML = form.fname.value
    lname.innerHTML = form.lname.value
    row.appendChild(fname)
    row.appendChild(lname)
    table.insertAdjacentElement("beforeend", row)
    
}
// run when click on cell
function changeUser(event, elem) {
    // get clicked cell
    let target = event.target
    if (target.tagName != "TD"){
        return 0
    }
    // get new value
    let text = prompt("input Text")
    // change value
    target.innerHTML = text
}