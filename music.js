const audioFiles = [
    { src: "https://files.catbox.moe/cqawfd.mp3" }, 
    { src: "https://files.catbox.moe/cqawfd.mp3" },
    { src: "https://files.catbox.moe/cqawfd.mp3" },
    { src: "https://files.catbox.moe/cqawfd.mp3" }, 
    { src: "https://files.catbox.moe/cqawfd.mp3" },
];

let currentTrack = Math.floor(Math.random() * audioFiles.length);
const music = new Audio(audioFiles[currentTrack].src);
music.muted = false;  
music.preload = "auto";  

function toggleMusic() {
    if (music.paused) {
        music.play()
            .then(() => {
                console.log(`Now playing track ${currentTrack}`);
            })
            .catch(error => console.error("Playback failed:", error));
    } else {
        music.pause();
    }
}

music.addEventListener("ended", () => {
    let nextTrack;
    do {
        nextTrack = Math.floor(Math.random() * audioFiles.length);
    } while (nextTrack === currentTrack);

    currentTrack = nextTrack;
    music.src = audioFiles[currentTrack].src;
    music.play()
        .then(() => {
            console.log(`Now playing track ${currentTrack}`);
        })
        .catch(error => console.error("Playback failed:", error));
});
