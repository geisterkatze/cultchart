var timestamp = new Date();
var start;


function step(timestamp) {
    if (!start) start = timestamp;
    const progress = timestamp - start;

    const backgroundHue = (progress / 60) % 360;
    window.document.body.style.backgroundColor = `hsl(${backgroundHue}, 20%, 80%)`;
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);