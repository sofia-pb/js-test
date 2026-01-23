window.onload = () => {
  const lienzo = document.getElementById("lienzo");
  lienzo.width = 800;
  lienzo.height = 600;
  const ctx = lienzo.getContext("2d");

  ctx.fillStyle = "#5900ff";
  ctx.fillRect(0, 420, 800, 180);

  const ilus = [
    { src: "inicio.webp", x: 171, y: 80, width: 458, height: 443 },
    { src: "recursos/hover-c.svg", x: 460, y: 225, width: 50, height: 60 },
    { src: "recursos/hover-a.svg", x: 300, y: 430, width: 180, height: 80 },
    { src: "recursos/hover-b.svg", x: 200, y: 265, width: 140, height: 80 },
    { src: "recursos/hover-d.svg", x: 400, y: 310, width: 170, height: 125 },
  ];

  function illustrations() {
    ilus.forEach((ilu) => {
      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, ilu.x, ilu.y, ilu.width, ilu.height);
      };
      img.src = ilu.src;
    });
  }

  illustrations();
};
