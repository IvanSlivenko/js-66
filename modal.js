

const refs = {
    openModalBtn:
    document.querySelector('[data-action="open-modal"]'),

    closeModalBtn:
        document.querySelector('[data-action="close-modal"]'),
    backdrop:
        document.querySelector('.js-backdrop'),
};

refs.openModalBtn.addEventListener('click', onOpenModal);
refs.closeModalBtn.addEventListener('click', onCloseModal); 
refs.backdrop.addEventListener('click', onBackdropClick);


function onOpenModal() {
    window.addEventListener('keydown',onEscKeyPress);
    document.body.classList.add('show-modal');
}

function onCloseModal() {
    window.removeEventListener('keydown',onEscKeyPress);
    document.body.classList.remove('show-modal');
    // console.log('Модалка закрита за допомогою кнопки');
}
function onBackdropClick(event) {
    document.body.classList.remove('show-modal');
 
    if (event.target===event.currentTarget) {
        console.log('Клікнули саме в Бекдроп !!!');
        onCloseModal();
    }
}

function onEscKeyPress(event) {
    console.log(event.code);
    
    if (event.code==="Escape") {
        onCloseModal();
    }
}