var navbar = document.querySelector('header');

window.onscroll = function() {
  // pageYOffset or scrollY
  if (window.pageYOffset > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

