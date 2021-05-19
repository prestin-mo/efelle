

function openNav() {
  var nav = document.getElementById("main-nav");
  if (nav.className === "navi") {
    nav.className += " responsive";
  } else {
    nav.className = "navi";
  }
}

