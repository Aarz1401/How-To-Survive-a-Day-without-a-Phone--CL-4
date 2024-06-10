
document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('main-video');
    const choices = document.getElementById('choices');

    video.addEventListener('timeupdate', function() {
        if (video.currentTime >= 15 && video.currentTime < 16 || video.currentTime >= 25 && video.currentTime < 26) {
            video.pause();
            video.controls = false;  // Disable controls
            choices.classList.remove('hidden');
        }
    });

    function navigate(time) {
        video.currentTime = time;
        video.play();
        video.controls = true;  // Enable controls
        choices.classList.add('hidden');
    }

    window.navigate = navigate;  // Make the navigate function accessible globally
});
