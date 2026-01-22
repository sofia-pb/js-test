const lienzo = document.getElementById("lienzo");
lienzo.width = 800;
lienzo.height = 600;

if (lienzo.getContext) {
  const ctx = lienzo.getContext("2d");

  ctx.fillStyle = "#5900ff";
  ctx.fillRect(0, 420, 800, 180);

  let img = new Image();
  img.src = "./inicio.webp";
  img.onload = function () {
    ctx.drawImage(img, 171, 80, 458, 443);
  };
} else {
  alert("Not supported");
}

function newGame() {
  draw();
}
