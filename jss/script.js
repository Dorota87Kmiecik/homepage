{
    const welcome = () => {
        console.log("Witamy w naszej bajce");
    };

    const RemoveClick = () => {
        const paragraphDelete = document.querySelector(".js-main__paragraphDelete");
        const button = document.querySelector(".js-main__remove");
        paragraphDelete.remove();
        button.remove();
    }

    const ChangeTitle = () => {
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
        button.addEventListener("click", RemoveClick);
        const button2 = document.querySelector(".js-header__button");
        button2.addEventListener("click", ChangeTitle);

        welcome();
    };

    init();
}