// run when page load
function start() {
    let btn = document.getElementById("wqw");
    btn.addEventListener("click", move);
};
// set timeout
function move() {
    setTimeout(myScroll, 3000);
};

//run scroll
function myScroll() {
    window.scrollTo(0, 500);
};