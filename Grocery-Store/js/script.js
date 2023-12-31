let searchFrom = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>
{
    searchFrom.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginFrom.classList.remove('active');
    navbar.classList.remove('active'); 
}

let shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>
{
    shoppingCart.classList.toggle('active');
    searchFrom.classList.remove('active');
    loginFrom.classList.remove('active');
    navbar.classList.remove('active'); 
}

let loginFrom = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>
{
    loginFrom.classList.toggle('active');
    searchFrom.classList.remove('active');
    shoppingCart.classList.remove('active');
    navbar.classList.remove('active'); 
}

let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    searchFrom.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginFrom.classList.remove('active');
}

window.onscroll = () =>
{
    searchFrom.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginFrom.classList.remove('active');
    navbar.classList.remove('active'); 
}


var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnIntraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay:{
        delay:7500,
        disableOnIntraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });