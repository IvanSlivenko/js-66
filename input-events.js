

// const input = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button > span');
// const license = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');
// // console.log(btn);

const refs = {
    input: document.querySelector('.js-inputEvents'),
    nameLabel: document.querySelector('.js-button > span'),
    licenseCheckbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
};
//console.log(refs.input);
// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputblur);
//refs.input.addEventListener('change',onInputChange);
refs.input.addEventListener('input', onInputChange);
refs.licenseCheckbox.addEventListener('change',onLicenseChange)
function  onInputFocus() { 
    console.log('input отримав focus - подію focus');
    // console.log('////////////////////////////////////');
};

function onInputblur() {
    console.log('input втратив focus - подія blur');
};

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value;
};
 
function onLicenseChange(event) {
    // console.log(event.currentTarget.checked);  
    // console.log(refs.btn.disabled);
    refs.btn.disabled = !event.currentTarget.checked;
};

