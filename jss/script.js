let paragraphDelete = document.querySelector(".main__paragraphDelete");
let button = document.querySelector(".main__remove");
let button2 = document.querySelector(".header__button");
let mainHeader = document.querySelector(".header__title");


button.addEventListener("click", () => {
    paragraphDelete.remove();
    button.remove();
});

button2.addEventListener("click", () => {
    mainHeader.classList.toggle("header__title--color");
    if (button2.innerText === "Add Color") {
        button2.innerText = "Remove Color";
    } else {
        button2.innerText = "Add Color";
    }

});