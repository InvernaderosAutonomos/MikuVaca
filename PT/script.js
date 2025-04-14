document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("miVideo");
    
    // Intentar reproducir el video automáticamente
    video.play().catch(error => {
      console.error("La reproducción automática falló:", error);
    });
  });