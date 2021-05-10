{
    const welcome = () => {
        console.log("Witamy w naszej bajce");
    };

    const removeParagraph = () => {
        const paragraphDelete = document.querySelector(".js-main__paragraphDelete");
        const button = document.querySelector(".js-main__remove");
        paragraphDelete.remove();
        button.remove();
    }

    const changeTitle = () => {
        const mainHeader = document.querySelector(".js-header__title");

        mainHeader.classList.toggle("js-header__title--color");
        const button2 = document.querySelector(".js-header__button");

        button2.innerText =
            button2.innerText === "Przyciemnij tytul" ?
            "Rozjasnij tytul" :
            "Przyciemnij tytul";
    };

    const init = () => {
        const button = document.querySelector(".js-main__remove");
        button.addEventListener("click", removeParagraph);
        const button2 = document.querySelector(".js-header__button");
        button2.addEventListener("click", changeTitle);

        welcome();
    };

    init();
}