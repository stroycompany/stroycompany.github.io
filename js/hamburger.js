const hamburgerBtn = document.querySelector('.hamburger-btn');
const hamburger = document.querySelector('.hamburger');
const hamburgerBtnHr = document.querySelector('.hamburger-btn__hr');
const hamburgerBtnHr1 = document.querySelector('.hamburger-btn__hr1');
const hamburgerBtnHr2 = document.querySelector('.hamburger-btn__hr2');
const clicked = document.getElementById('click');

hamburgerBtn.addEventListener('click', function(){
    if (hamburger.style.opacity == 0){
        hamburger.style.transition = `all 1s`;
        hamburgerBtnHr.classList.add('active');
        hamburgerBtnHr1.style.display = `none`;
        hamburgerBtnHr2.classList.add('active');
        hamburger.style.display = `block`;
        setTimeout(() =>{
            hamburger.style.opacity = 1;
        }, 10);
    }else{
        hamburger.style.transition = `all 1s`;
        hamburgerBtnHr.classList.remove('active');
        hamburgerBtnHr.style.transition = `all 1s`;
        hamburgerBtnHr1.style.display = `block`;
        hamburgerBtnHr2.classList.remove('active');
        hamburgerBtnHr2.style.transition = `all 1s`;
        hamburger.style.display = `none`;
        setTimeout(() =>{
            hamburger.style.opacity = 0;
        }, 1000);
    };
});
clicked.addEventListener('click', function() {
    hamburger.style.display = `none`;
    hamburger.style.transition = `all 1s`;
    hamburgerBtnHr.classList.remove('active');
    hamburgerBtnHr.style.transition = `all 1s`;
    hamburgerBtnHr1.style.display = `block`;
    hamburgerBtnHr2.classList.remove('active');
    hamburgerBtnHr2.style.transition = `all 1s`;
    setTimeout(() =>{
        hamburger.style.opacity = 0;
    }, 1000);
});