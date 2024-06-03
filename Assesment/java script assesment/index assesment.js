let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value == "") {
        alert("Please Enter Information");
    } else {
        let newEle = document.createElement("div");
        newEle.innerHTML = `${inputs.value}<i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = "";
        newEle.querySelector("i").addEventListener("click", remove);
        function remove() {
            newEle.remove()
        };
    };
};