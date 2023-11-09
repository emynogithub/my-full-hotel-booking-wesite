'strict mode'





const navBar = document.querySelector('.nav-bars');
const closeBtn = document.querySelector('.fa-times');
const menuBars = document.querySelector('.fa-bars');
const linkAdd = document.querySelector('.link-1')



const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.show-modal');


// const swiper = new swiper("#swiper-1", {
//     effect:"fade",
// });  
 





//sniper markup in my js file....................



menuBars.addEventListener('click', function(){
    navBar.classList.add('active2')

    console.log('clicked')

});

closeBtn.addEventListener('click', function(){
    navBar.classList.remove('active2')

})



//login section  code




//modal section


const searcher = document.querySelector(".search-box");
const searchh = document.querySelector(".searchh");
const cancel = document.querySelector(".cancel")


searcher.addEventListener('click', function(){
  searchh.classList.remove('hidden')

  console.log('clicked')

});


cancel.addEventListener('click', function(){
  searchh.classList.add('hidden')

  console.log('no clicked')

});















