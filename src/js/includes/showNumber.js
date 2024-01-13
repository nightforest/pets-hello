const showNumber = () => {
    const showNumberButton = document.querySelector("[data-show-number]");

    showNumberButton?.addEventListener('click', () => {
        showNumberButton.classList.remove('is-visible');
        console.log(1);
    });
}

export default showNumber;
