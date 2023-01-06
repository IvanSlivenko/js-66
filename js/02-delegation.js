const container = document.querySelector('.js-container')

container.addEventListener('click', onClick);

function onClick(evt) {
   if (evt.target.nodeName!=='BUTTON') {
       return;
   }
console.log(evt.target);
    // console.log(evt.target.nodeName);
console.log(evt.target.textContent);    
}

const addBtn = document.querySelector('.js-add-btn');
addBtn.addEventListener('click', onAddBtnClick);

let labelCounter = 6;
function onAddBtnClick() {
    const btn = document.createElement('button');
    btn.textContent = `Кнопка${labelCounter}`;
    container.appendChild(btn);
    labelCounter += 1;
    
}

