const wishToggle = () => {    
    const wishToggleAll = document.querySelectorAll('[data-wish-toggle]');
    
    wishToggleAll?.forEach(item => {
        item.addEventListener('click', function () {
            this.classList.toggle('is-active');
        });
    });
}

export default wishToggle;