
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("headbar").style.boxShadow = "1px 1px 10px 1px rgba(0, 0, 0, 0.1)";
    document.getElementById("logo").style.maxWidth = "150px";
    document.getElementById("headbar").style.background = "white";
    document.getElementById("searchBar").style.background = "white";
  } else {
    document.getElementById("logo").style.maxWidth = "180px";
    document.getElementById("headbar").style.background = "transparent";
    document.getElementById("headbar").style.boxShadow = "none";
    document.getElementById("searchBar").style.background = "transparent";
  }
}

//Search bar <= md screen
document.addEventListener('DOMContentLoaded', function () {
  var collapseElement = document.getElementById('searchSM');
  var elementToShow = document.getElementById('logo');
  collapseElement.addEventListener('show.bs.collapse', function () {
    elementToShow.style.display = 'none';
  });
  collapseElement.addEventListener('hide.bs.collapse', function () {
    elementToShow.style.display = 'block';
  });
});


//Form validaiton
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})()

//hero swiper
var swiper = new Swiper(".mySwiper", {
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  speed: 2000,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  simulateTouch: true, 
  touchRatio: 1,
});


$('.owl-carousel').owlCarousel({
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:2,
          nav:false
      },
      1000:{
          items:4,
      },
      1200:{
          items:5,
          nav:true,
          loop:false
      }
  }
})