document.querySelector('.faq-accordion').addEventListener('click', (event) => {
    if (event.target.closest('.faq-accordion__item')) {
        event.target.closest('.faq-accordion__item').classList.toggle('faq-accordion__item_active');
    }        
});

document.querySelector('.btn-burger').addEventListener('click', (event) => {    
    document.querySelector('.section-header').classList.toggle('section-header--active-nav');            
});

const hideScroll = () => {
    document.body.style.paddingRight = `${getScrollbarWidth()}px`;
    document.body.style.overflow = 'hidden';
};

const showScroll = (event) => {   
        document.body.style.paddingRight = '';
        document.body.style.overflow = 'visible'; 
};

// Get scrollbar width 
const getScrollbarWidth = () => {
    const outer = document.createElement('div');

    outer.style.position = 'absolute';
    outer.style.top = '-9999px';
    outer.style.width = '50px';
    outer.style.height = '50px';
    outer.style.overflow = 'scroll';
    outer.style.visibility = 'hidden';

    document.body.appendChild(outer);
    const getScrollbarWidth = outer.offsetWidth - outer.clientWidth;
    document.body.removeChild(outer);

    return scrollBarWidth;
}