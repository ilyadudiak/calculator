let num = document.querySelector("#num");
let result = document.querySelector("#result");
let prevResult = document.querySelector("#prevResult");
let button = document.querySelectorAll(".btn");
let percentBnt = document.querySelector("#percent");

let sun = document.querySelector("#sunBtn");
let moon = document.querySelector("#moonBtn");
let body = document.querySelector("body");

moon.style.display = "none";
function changeMode() {
    if (body.classList.contains("day")) {
        body.classList.remove("day");
        moon.style.display = "none";
        sun.style.display = "block";
    } else {
        body.classList.add("day");
        sun.style.display = "none";
        moon.style.display = "block";
    }
}
let resultArr = "";
result.innerHTML = resultArr;

button.forEach(element => {
    element.addEventListener("click", numAdd);
});
function numAdd() {

    resultArr += this.value;
    result.innerHTML = resultArr;
}

function clearOne() {
    resultArr = resultArr.slice(0, -1);
    result.innerHTML = resultArr;
}

function clearAll() {
    resultArr = "";
    prevResult.innerHTML = "";
    result.innerHTML = resultArr;
}

function solve() {
    prevResult.innerHTML = resultArr;
    resultArr = eval(resultArr);
    resultArr = resultArr.toString();
    result.innerHTML = resultArr;
}

function percent() {
    resultArr = resultArr / 100;
    result.innerHTML = resultArr;
}

function dotAdd() {
    resultArr += "."
    result.innerHTML = resultArr;
}