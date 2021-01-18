
function check() {
  const checked =  document.getElementById("links").style.bottom
    if (checked === "100%") {
        document.getElementById("links").style.bottom = "0";
    } else {
        document.getElementById("links").style.bottom = "100%";
    }
}


