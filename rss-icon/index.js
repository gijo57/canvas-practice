const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const draw = () => {
  ctx.fillStyle = 'black';
  ctx.strokeStyle = 'black';
  ctx.beginPath();
  ctx.arc(100, 190, 20, 0, 2 * Math.PI);
  ctx.fill();
  ctx.moveTo(80, 142);
  ctx.lineTo(80, 110);
  ctx.stroke();
  ctx.arcTo(195, 105, 180, 220, 95);
  ctx.stroke();
  ctx.lineTo(147, 217);
  ctx.stroke();
  ctx.arcTo(145, 132, 95, 140, 58);
  ctx.fill();
  ctx.moveTo(80, 85);
  ctx.lineTo(80, 53);
  ctx.stroke();
  ctx.arcTo(255, 53, 245, 220, 155);
  ctx.stroke();
  ctx.lineTo(210, 217);
  ctx.stroke();
  ctx.arcTo(210, 80, 80, 85, 120);
  ctx.fill();
  ctx.closePath();
};

draw();
