document.addEventListener("DOMContentLoaded", () => {
    const figcaptions = document.querySelectorAll("figcaption.colorizable");
  
    figcaptions.forEach((caption) => {
      let colorIndex = 0;
      const colors = ["color1", "color2", "color3"];
  
      caption.addEventListener("click", () => {
        caption.classList.remove(...colors);
        caption.classList.add(colors[colorIndex]);
        colorIndex = (colorIndex + 1) % colors.length;
      });
    });
  });