// get list
let list = document.getElementById("ul");
// get button
let btn = document.getElementById("add");
// add event to button
btn.addEventListener("click", add);
// run when click on list element, adding "!" to end of element
function addE(event, li) {
    let target = event.target;
    if (target.tagName != "LI") {
        return 0;
    }
    target.innerHTML += "!"
}
// run when click on button, adding list element with text "Пункт" into list
function add() {
    let elem = document.createElement("li")
    elem.innerHTML = "Пункт"
    list.appendChild(elem)
}