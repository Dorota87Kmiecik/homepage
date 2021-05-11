{
    const welcome = () => {
        console.log("Witamy w naszej bajce");
    };

    const removeParagraph = () => {
        const paragraphDelete = document.querySelector(".js-main__paragraphDelete");
        const removalButton = document.querySelector(".js-main__remove");
        paragraphDelete.remove();
        removalButton.remove();
    }

    const changeTitle = () => {
        const mainHeader = document.querySelector(".js-header__title");

        mainHeader.classList.toggle("js-header__title--color");
        const backgroundChange = document.querySelector(".js-header__button");

        backgroundChange.innerText =
            backgroundChange.innerText === "Przyciemnij tytul" ?
            "Rozjasnij tytul" :
            "Przyciemnij tytul";
    };

    const init = () => {
        const removalButton = document.querySelector(".js-main__remove");
        removalButton.addEventListener("click", removeParagraph);
        const backgroundChange = document.querySelector(".js-header__button");
        backgroundChange.addEventListener("click", changeTitle);

        welcome();
    };

    init();
}