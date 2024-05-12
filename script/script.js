/* Scrollbar */
document.getElementById("scroll-to-bottom-button").addEventListener("click", function() {
    document.body.scrollIntoView({ behavior: "smooth", block: "end" });
})

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navButton() {
  var x = document.getElementById("nav-menu-links");
  if (x.className === "nav-menu-links") {
    x.className += " responsive";
  } else {
    x.className = "nav-menu-links";
  }
}