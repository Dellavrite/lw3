// get every paragraph
let nums = document.getElementsByTagName("p");
// add event listener to every parahraph
for (let index = 0; index < nums.length; index++) {
    nums[index].addEventListener("click", sqrt);
}
// ran when click on paragraph, ыquaring a number
function sqrt() {
    this.innerHTML = (+this.innerHTML)**2
}