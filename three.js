const videoContainer = document.querySelector(".video-container");
const videos = document.querySelectorAll(".video-container div");
let currentIndex = 0;

function scrollVideos() {
  currentIndex = (currentIndex + 1) % videos.length; // Incrémente l'index et revient au début
  videoContainer.scrollTo({
    left: currentIndex * videoContainer.clientWidth,
    behavior: "smooth", // Défilement fluide
  });
}

// Définit l'intervalle de défilement (par exemple, 3 secondes)
setInterval(scrollVideos, 3000);
