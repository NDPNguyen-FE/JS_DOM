// gọi button cần dùng
var buttonAdd = document.getElementById("enter");
//gọi input
var input = document.getElementById("userinput");
// gọi  ul
var ul = document.querySelector("ul");

function inputLenght() {
    return input.value.length;
}

function createElements() {
    var li = document.createElement("li");
    var textNode = document.createTextNode(input.value);

    li.appendChild(textNode);

    ul.appendChild(li);
    input.value = "";
}

function addListAfterClick() {

    if (inputLenght() > 0) {
        createElements();
    }

}

function addListAfterKeypress(event) {

    if (inputLenght() > 0 && event.keyCode === 13) {
        createElements();
    }

}
buttonAdd.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);