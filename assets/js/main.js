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

//Search <= md screen
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