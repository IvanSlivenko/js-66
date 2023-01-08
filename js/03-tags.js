

// const tagsContainer = document.querySelector('.js-tags');
// let selectedTag = null;
 
// tagsContainer.addEventListener('click', onTagsconteinerclick);

// /////////////////////////////////////////////////////////////////////////////
// function onTagsconteinerclick(e) {
//     if (e.target.nodeName!=='BUTTON') {
//         return
//     }
//     const currentActiveBtn = document.querySelector('.tags__btn--active');
    
//  if (currentActiveBtn) {
//     currentActiveBtn.classList.remove('tags__btn--active');
//  }
//     // currentActiveBtn?.classList.remove('tags__btn--active');
    
//     const nextActiveBtn = e.target;
//     nextActiveBtn.classList.add('tags__btn--active');
//     selectedTag = nextActiveBtn.dataset.value;
//     console.log(selectedTag);
// }
    /////////////////////////////////////////////////////////////////////////


const tagsContainer = document.querySelector('.js-tags');
const selectedTags = new Set();
 
tagsContainer.addEventListener('click', onTagsconteinerclick);

function onTagsconteinerclick(e) {
    if (e.target.nodeName!=='BUTTON') {
        return
    }
    const btn = e.target;
    const tag = btn.dataset.value;
    const isActive = btn.classList.contains('tags__btn--active');
    
    console.log(btn.classList.contains('tags__btn--active')); 

    
    // const btnActiv = document.querySelector('.tags__btn--active');
    if (isActive) {
        selectedTags.delete(tag);
          }
   
    else { 
        selectedTags.add(tag);    
    }
     
  btn.classList.toggle('tags__btn--active');  
  console.log(selectedTags);
}


//https://www.youtube.com/watch?v=pNxBoxbnTVA
//time end ===55:21

