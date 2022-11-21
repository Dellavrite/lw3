// get links
let links = document.getElementsByTagName("a");
// add events to every link
for (let index = 0; index < links.length; index++) {
    links[index].addEventListener("mouseover", over);
    links[index].addEventListener("mouseout", out);
}
// run when mouse hover on link
function over() {
    let elem = document.createElement("span");
    elem.id = "wqw";
    elem.innerHTML = `(${this.href})`;
    this.after(elem);
}
// run when mouse out from link
function out() {
    let elem = document.getElementById("wqw");
    elem.remove();
}