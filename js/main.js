// Start Global Variables
let select = document.getElementById("spec");
if (select) {
    let options = [...select.children];
}
let showPass = document.getElementsByClassName("fa-eye")[0];
// Start Global Variables
if (select) {
    select.oninput = function () {
        console.log(select.value);
        location.href = select.value;
    }
}
if (showPass) {
    showPass.onclick = function () {
        if (showPass.previousElementSibling.type == "password") {
            showPass.previousElementSibling.type = "text";
        } else {
            showPass.previousElementSibling.type = "password";
        }
    }
}