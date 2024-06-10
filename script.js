let player;
let choices;
let playButton;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'A6HhDFskbXs',  // Replace with your YouTube video ID
        playerVars: {
            'controls': 0,        // Hide the player controls
            'disablekb': 1,       // Disable keyboard controls
            'modestbranding': 1,  // Hide the YouTube logo
            'rel': 0,             // Disable related videos
            'showinfo': 0,        // Hide video title and uploader info
            'iv_load_policy': 3,  // Hide video annotations
            'autohide': 1,        // Hide controls when playing
            'cc_load_policy': 0,  // Don't show closed captions by default
            'playsinline': 1,     // Play video inline on mobile devices
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function onPlayerReady(event) {
    choices = document.getElementById('choices');
    playButton = document.getElementById('custom-play-button');
    playButton.style.display = 'block';
}

function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING) {
        playButton.textContent = 'Pause';
    } else {
        playButton.textContent = 'Play';
    }
}

function checkTime() {
    const currentTime = player.getCurrentTime();
    if ((currentTime >= 15 && currentTime < 16) || (currentTime >= 25 && currentTime < 26)) {
        player.pauseVideo();
        choices.classList.remove('hidden');
        playButton.style.display = 'none';  // Hide custom play button when choices are shown
    }
}

function navigate(time) {
    player.seekTo(time);
    player.playVideo();
    choices.classList.add('hidden');
    playButton.style.display = 'block';  // Show custom play button when choices are hidden
}

function togglePlay() {
    if (player.getPlayerState() === YT.PlayerState.PLAYING) {
        player.pauseVideo();
    } else {
        player.playVideo();
    }
}

function toggleFullscreen() {
    const iframe = document.getElementById('player');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) { // Firefox
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) { // Chrome, Safari and Opera
        iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) { // IE/Edge
        iframe.msRequestFullscreen();
    }

    // Listen for fullscreen change events
    document.addEventListener('fullscreenchange', onFullscreenChange);
    document.addEventListener('webkitfullscreenchange', onFullscreenChange);
    document.addEventListener('mozfullscreenchange', onFullscreenChange);
    document.addEventListener('MSFullscreenChange', onFullscreenChange);
}

function onFullscreenChange() {
    const isFullscreen = document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
    const customControls = document.getElementById('custom-controls');
    const choices = document.getElementById('choices');
    if (isFullscreen) {
        customControls.classList.add('fullscreen');
        choices.classList.add('fullscreen');
    } else {
        customControls.classList.remove('fullscreen');
        choices.classList.remove('fullscreen');
    }
}

window.navigate = navigate;  // Make the navigate function accessible globally

setInterval(checkTime, 1000);  // Check the video time every second
