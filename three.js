<script>
    const audio = document.getElementById('audio-player');
    const playPauseBtn = document.getElementById('play-pause-btn');
    const playIcon = document.getElementById('play-icon');

    playPauseBtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playIcon.src = 'Image/pause-icon.png'; // Changer l'icône pour "pause"
        } else {
            audio.pause();
            playIcon.src = 'Image/play-icon.png'; // Changer l'icône pour "play"
        }
    });

    // Optionnel : Changer l'icône automatiquement à la fin de l'audio
    audio.addEventListener('ended', function () {
        playIcon.src = 'Image/play-icon.png';
    });
</script>
