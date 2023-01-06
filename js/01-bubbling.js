const refs = {
    parent: document.querySelector('#parent'),
    child: document.querySelector('#child'),
    innerChild: document.querySelector('#inner-child'),

};

refs.parent.addEventListener('click', onParentclick);
refs.child.addEventListener('click', onChildClick);
refs.innerChild.addEventListener('click',onInnerChildClick);

function onParentclick(evt) {
    console.log('onParentclick');
    console.log('onParentclick -> evt.target', evt.target);
    console.log('onParentclick -> evt.currentTarget',evt.currentTarget);
    }

function onChildClick(evt) {
    console.log('onChildClick');
    console.log('onChildClick -> evt.target', evt.target);
    console.log('onChildClick -> evt.currentTarget',evt.currentTarget);   
}
function onInnerChildClick(evt) {
    
    console.log('onInnerChildClick');
    console.log('onInnerChildClick -> evt.target', evt.target);
    console.log('onInnerChildClick -> evt.currentTarget',evt.currentTarget);      
}