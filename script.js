window.onload = init;

function init() {
  const grids = document.getElementsByClassName("profile-grid");

  for (const grid of grids) {
    grid.addEventListener("mousemove", (e) => {
      const { x, y } = grid.getBoundingClientRect();
      grid.style.setProperty("--mouseX", `${e.clientX - x}px`);
      grid.style.setProperty("--mouseY", `${e.clientY - y}px`);
    });
  }
}
