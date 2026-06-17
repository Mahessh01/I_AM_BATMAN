document.addEventListener("DOMContentLoaded", () => {
    const reveal = document.getElementById("reveal");

    // start center (prevents "random face showing bug")
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let currentX = mouseX;
    let currentY = mouseY;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function animate() {
        // smooth lag movement
        currentX += (mouseX - currentX) * 0.12;
        currentY += (mouseY - currentY) * 0.12;

        reveal.style.setProperty("--x", currentX + "px");
        reveal.style.setProperty("--y", currentY + "px");

        requestAnimationFrame(animate);
    }

    animate();
});