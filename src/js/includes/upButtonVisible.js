const upButtonVisible = () => {    
    const upButton = document.querySelector('.up-button');

    if (window.scrollY > 1000) {
        upButton?.classList.add('is-scroll');
    } else {
        upButton?.classList.remove('is-scroll');
    }

    window.addEventListener('scroll', function() {
        if (window.scrollY > 1000) {
            upButton?.classList.add('is-scroll');
        } else {
            upButton?.classList.remove('is-scroll');
        }
    });
}

export default upButtonVisible;