

const tagsContainer = document.querySelector('.js-tags');


tagsContainer.addEventListener('click', onTagsconteinerclick);

function onTagsconteinerclick(e) {
    if (e.target.nodeName!=='BUTTON') {
        return
    }
    const currentActiveBtn = document.querySelector('.tags__btn--active');
    console.log(currentActiveBtn);
    // currentActiveBtn.classList.toggle('tags__btn--active');
    // console.log(e.target);
    e.target.classList.add('tags__btn--active');
}

//time end ===33:00
