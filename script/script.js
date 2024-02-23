document.getElementById("scroll-to-bottom-button").addEventListener("click", function() {
    document.body.scrollIntoView({ behavior: "smooth", block: "end" });
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }