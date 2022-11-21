// get list
let elem = document.getElementById("ol")
// create list element
let li = document.createElement("li")
// add to element text "Пункт
li.innerHTML = "Пункт"
// insert element into html
elem.insertAdjacentElement("beforeend", li)