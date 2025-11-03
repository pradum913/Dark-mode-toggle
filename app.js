let body = document.querySelector("body");

let input = document.querySelector(".input");

input.checked = JSON.parse(localStorage.getItem("mode"));

updatebody();

function updatebody() {
    if(input.checked) {
        body.style.background = "black";
    } else {
        body.style.background = "white";
    }
}

input.addEventListener("input" , () => {
    updatebody();
    updateLocalStorage();
})

function updateLocalStorage() {
    localStorage.setItem("mode" , JSON.stringify(input.checked));
}