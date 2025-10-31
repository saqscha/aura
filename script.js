// subtle hue shift
let hue = 0;
function animate() {
  hue += 0.1;
  document.body.style.filter = `hue-rotate(${hue}deg)`;
  requestAnimationFrame(animate);
}
animate();
