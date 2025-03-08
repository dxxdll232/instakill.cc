const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("playPauseButton");
const songInfo = document.getElementById("songInfo");
const artistElement = document.getElementById("artist");
const songTitleElement = document.getElementById("songTitle");

const playlist = [
    { src: "song1.mp3", artist: "Artist 1", title: "Song 1" },
    { src: "song2.mp3", artist: "Artist 2", title: "Song 2" },
    { src: "song3.mp3", artist: "Artist 3", title: "Song 3" }
];

let currentSongIndex = 0;

function loadSong(index) {
    audio.src = playlist[index].src;
    artistElement.textContent = playlist[index].artist;
    songTitleElement.textContent = playlist[index].title;
}

function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.innerHTML = '<img src="pause.png">';
    } else {
        audio.pause();
        playPauseButton.innerHTML = '<img src="play.png">';
    }
}

function previousAudio() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseButton.innerHTML = '<img src="pause.png">';
}

function nextAudio() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseButton.innerHTML = '<img src="pause.png">';
}

audio.addEventListener("ended", nextAudio);

document.addEventListener("DOMContentLoaded", () => {
    loadSong(currentSongIndex);
});
