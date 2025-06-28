let select = document.getElementById("spec");
let options = [...select.children];
select.oninput = function () {
    console.log(select.value);
    location.href = select.value;
}