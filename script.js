const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const colorPicker = document.getElementById("color");
const sizePicker = document.getElementById("size");
const clearBtn = document.getElementById("clear");
const saveBtn = document.getElementById("save");

let drawing = false;

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mouseleave", () => drawing = false);
canvas.addEventListener("mousemove", draw);

function draw(e) {
  if (!drawing) return;
  const rect = canvas.getBoundingClientRect();
  ctx.fillStyle = colorPicker.value;
  ctx.beginPath();
  ctx.arc(
    e.clientX - rect.left,
    e.clientY - rect.top,
    sizePicker.value / 2,
    0,
    2 * Math.PI
  );
  ctx.fill();
}

clearBtn.onclick = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

saveBtn.onclick = () => {
  const link = document.createElement("a");
  link.download = "copilotte-dessin.png";
  link.href = canvas.toDataURL();
  link.click();
};
