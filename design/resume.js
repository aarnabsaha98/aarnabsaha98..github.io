window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("Header").style.fontSize = "20px";
  } else {
    document.getElementById("Header").style.fontSize = "25px";
  }
}

