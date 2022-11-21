let countries = {
    rus: ["citirus1", "citirus2", "citirus3"],
    usa: ["citiusa1", "citiusa2", "citiusa3"],
    en: ["citien1", "citien2", "citien3"]
}
// get select
let sel = document.getElementById("сountries")
// add to select event listener
sel.addEventListener("change", change)
// even which on select change, view additional select whith cities
function change() {
    let elem = document.getElementById("wq")
    if (elem != null) {
        elem.remove();
    }
    
    let newSel = crateSel(countries[`${sel.value}`], "wq");
    sel.after(newSel);
}

// create select from values
function crateSel(cities, id) {
    let sel = document.createElement("select");
    sel.id = id
    for (let index = 0; index < cities.length; index++) {
        let city = document.createElement("option");
        city.innerHTML = cities[index];
        sel.appendChild(city);
    }
    return sel
}