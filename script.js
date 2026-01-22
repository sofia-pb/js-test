/* window.onload = function () { */
const lienzo = document.querySelectorAll("#lienzo");
const ctx = lienzo.getContext("2d");

lienzo.beginPath();
ctx.rect(0, 0, 100, 150);
ctx.strokeStyle("#6f00ff");
ctx.stroke();
