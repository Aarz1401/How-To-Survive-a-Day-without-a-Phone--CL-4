document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('main-video');
    const choices = document.getElementById('choices');
    const choices2 = document.getElementById('choices2');
    const choices3 = document.getElementById('choices3');

    video.addEventListener('timeupdate', function() {
        if (Math.floor(video.currentTime) === 15) {
            video.pause();
            video.controls = false;  // Disable controls
            choices.classList.remove('hidden');
        } else if (Math.floor(video.currentTime) === 20) {
            video.pause();
            video.controls = false;  // Disable controls
            choices2.classList.remove('hidden');
        } else if (Math.floor(video.currentTime) === 25) {
            video.pause();
            video.controls = false;  // Disable controls
            choices3.classList.remove('hidden');
        } else {
            choices.classList.add('hidden');
            choices2.classList.add('hidden');
            choices3.classList.add('hidden');
        }
    });

    function navigate(time) {
        video.currentTime = time;
        video.play();
        video.controls = true;  // Enable controls
        choices.classList.add('hidden');
        choices2.classList.add('hidden');
        choices3.classList.add('hidden');
    }

    // Ensure buttons hide when clicked
    const buttons1 = choices.querySelectorAll('button');
    const buttons2 = choices2.querySelectorAll('button');
    const buttons3 = choices3.querySelectorAll('button');

    buttons1.forEach(button => {
        button.addEventListener('click', function() {
            choices.classList.add('hidden');
        });
    });

    buttons2.forEach(button => {
        button.addEventListener('click', function() {
            choices2.classList.add('hidden');
        });
    });

    buttons3.forEach(button => {
        button.addEventListener('click', function() {
            choices3.classList.add('hidden');
        });
    });

    window.navigate = navigate;  // Make the navigate function accessible globally
});
