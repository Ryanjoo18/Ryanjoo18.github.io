document.getElementById("scroll-to-bottom-button").addEventListener("click", function() {
    document.body.scrollIntoView({ behavior: "smooth", block: "end" });
});

function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);