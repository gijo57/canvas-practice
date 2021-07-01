const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

function roundedRect(ctx, x, y, width, height, radius, type) {
  ctx.beginPath();
  ctx.moveTo(x, y + radius);
  ctx.lineTo(x, y + height - radius);
  ctx.arcTo(x, y + height, x + radius, y + height, radius);
  ctx.lineTo(x + width - radius, y + height);
  ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
  ctx.lineTo(x + width, y + radius);
  ctx.arcTo(x + width, y, x + width - radius, y, radius);
  ctx.lineTo(x + radius, y);
  ctx.arcTo(x, y, x, y + radius, radius);
  if (type === 'fill') {
    ctx.fill();
  } else {
    ctx.stroke();
  }
}

const draw = () => {
  ctx.strokeStyle = '#f3a871';
  ctx.lineWidth = 5;

  roundedRect(ctx, 40, 25, 235, 235, 45);
  ctx.strokeStyle = '#a94f0e';
  roundedRect(ctx, 36, 21, 244, 244, 50);

  ctx.fillStyle = '#d36311';
  roundedRect(ctx, 42, 27, 232, 232, 43, 'fill');

  ctx.fillStyle = 'white';
  ctx.strokeStyle = 'white';
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
  ctx.arcTo(145, 132, 95, 138, 58);
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
