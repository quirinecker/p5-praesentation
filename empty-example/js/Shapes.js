window.addEventListener("load", () => {
  window.addEventListener('keypress', function(e) {
    let keyCode = e.which;
    let key = e.key;

    if (keyCode == 32) {
      window.location.href="./ShapeCustomizing.html";
    } else if (key == 'x') {
      window.location.href="./createCanvas.html";
    }
  })
});
