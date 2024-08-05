window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        // document.getElementById("headbar").style.boxShadow = "1px 1px 10px 1px rgba(0, 0, 0, 0.1)";
        document.getElementById("logo").style.maxWidth = "150px";
        document.getElementById("headbar").style.background = "white";
        document.getElementById("searchBar").style.background = "white";
    } else {
        document.getElementById("logo").style.maxWidth = "180px";
        document.getElementById("headbar").style.background = "transparent";
        document.getElementById("searchBar").style.background = "transparent";
        // document.getElementById("headbar").style.boxShadow = "1px 1px 10px 1px transparent";
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

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
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