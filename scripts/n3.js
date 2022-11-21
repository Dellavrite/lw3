// get form elements and summing them, after alert sum
function run() {
    let form = document.getElementById("form").elements
    var sum = 0;
    for (var i = 0; i < form.length; i++) {
        sum += +form[i].value;
    }
    alert(sum)
}   
