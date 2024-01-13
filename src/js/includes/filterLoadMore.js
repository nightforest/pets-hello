const filterLoadMore = () => {    
    const loadMoreToggleAll = document.querySelectorAll('[data-filter-more]');

    loadMoreToggleAll?.forEach(item => {
        const filterMenu = item.closest('.filter-block__body').querySelector('.filter-menu');
        const filterMenuHiddenItems = filterMenu?.querySelectorAll('.filter-menu__item.is-hidden');

        item?.addEventListener('click', () => {
            filterMenuHiddenItems?.forEach(el => {
                el.classList.remove('is-hidden');
            });

            item.remove();
        });
    });
    
    
}

export default filterLoadMore;