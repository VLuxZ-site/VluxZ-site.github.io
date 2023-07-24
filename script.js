const videoPlayer = document.getElementById("animePlayer");

// Tambahkan fungsi untuk memutar atau menghentikan video
function togglePlayPause() {
    if (videoPlayer.paused || videoPlayer.ended) {
        videoPlayer.play();
    } else {
        videoPlayer.pause();
    }
}

// Tambahkan fungsi untuk memulai video dari awal
function restartVideo() {
    videoPlayer.currentTime = 0;
}

// Tambahkan event listener untuk memanggil fungsi di atas saat tombol play/pause diklik
videoPlayer.addEventListener("click", togglePlayPause);

// Tambahkan event listener untuk memanggil fungsi di atas saat tombol stop diklik
videoPlayer.addEventListener("ended", restartVideo);
