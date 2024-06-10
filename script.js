document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('main-video');
    const choices = document.getElementById('choices');
    const choices2 = document.getElementById('choices2');
    const choices3 = document.getElementById('choices3');
    const heartbeat = document.getElementById('heartbeat');

    video.addEventListener('timeupdate', function() {
        if (Math.floor(video.currentTime) === 35) {
            video.pause();
            video.controls = false;  // Disable controls
            choices.classList.remove('hidden');
            heartbeat.play();  // Play heartbeat sound
        } else if (Math.floor(video.currentTime) === 94) {
            video.pause();
            video.controls = false;  // Disable controls
            choices2.classList.remove('hidden');
            heartbeat.play();  // Play heartbeat sound
        } else if (Math.floor(video.currentTime) === 158) {
            video.pause();
            video.controls = false;  // Disable controls
            choices3.classList.remove('hidden');
            heartbeat.play();  // Play heartbeat sound
        } else {
            choices.classList.add('hidden');
            choices2.classList.add('hidden');
            choices3.classList.add('hidden');
            heartbeat.pause();  // Pause heartbeat sound
            heartbeat.currentTime = 0;  // Reset heartbeat sound
        }
    });

    function navigate(start, end, resume) {
        if (end) {
            video.currentTime = start;
            video.play();
            video.controls = true;  // Enable controls
            choices.classList.add('hidden');
            choices2.classList.add('hidden');
            choices3.classList.add('hidden');
            heartbeat.pause();  // Pause heartbeat sound
            heartbeat.currentTime = 0;  // Reset heartbeat sound

            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.addEventListener('timeupdate', handleTimeUpdate);

            function handleTimeUpdate() {
                if (Math.floor(video.currentTime) === end) {
                    video.currentTime = resume;
                    video.removeEventListener('timeupdate', handleTimeUpdate);
                }
            }
        } else {
            video.currentTime = start;
            video.play();
            video.controls = true;  // Enable controls
            choices.classList.add('hidden');
            choices2.classList.add('hidden');
            choices3.classList.add('hidden');
            heartbeat.pause();  // Pause heartbeat sound
            heartbeat.currentTime = 0;  // Reset heartbeat sound
        }
    }

    // Ensure buttons hide when clicked
    const buttons1 = choices.querySelectorAll('button');
    const buttons2 = choices2.querySelectorAll('button');
    const buttons3 = choices3.querySelectorAll('button');

    buttons1.forEach(button => {
        button.addEventListener('click', function() {
            choices.classList.add('hidden');
            heartbeat.pause();  // Pause heartbeat sound
            heartbeat.currentTime = 0;  // Reset heartbeat sound
        });
    });

    buttons2.forEach(button => {
        button.addEventListener('click', function() {
            choices2.classList.add('hidden');
            heartbeat.pause();  // Pause heartbeat sound
            heartbeat.currentTime = 0;  // Reset heartbeat sound
        });
    });

    buttons3.forEach(button => {
        button.addEventListener('click', function() {
            choices3.classList.add('hidden');
            heartbeat.pause();  // Pause heartbeat sound
            heartbeat.currentTime = 0;  // Reset heartbeat sound
        });
    });

    window.navigate = navigate;  // Make the navigate function accessible globally
});
