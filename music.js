var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

const defaultSongIndex = 8;
let defaultSongCurrentTime = 0;
let currentSongIndex = 0;

const playlist = [{
        title: 'Careless Whisper - George Michael [VALOR]',
        src: 'valor.mp3'
    },
    {
        title: 'Fazbear Hills - FNAF World [SYNQONRIZE]',
        src: 'synq.mp3'
    },
    {
        title: 'oquinn - drama [V]',
        src: 'v.mp3'
    },
    {
        title: 'Hosted by dre.ad',
        src: 'dread.mp3'
    }
];
const audio = new Audio(playlist[currentSongIndex].src);
audio.loop = true;
audio.volume = 0.5;

function changeSong(index, currentTime = 0) {
    if (currentSongIndex === defaultSongIndex) {
        defaultSongCurrentTime = audio.currentTime;
    }

    currentSongIndex = index;
    audio.src = playlist[currentSongIndex].src;
    audio.currentTime = currentTime;
    audio.play();

    const songTitleElement = document.getElementById('songTitle');
    if (songTitleElement) {
        songTitleElement.innerText = playlist[currentSongIndex].title || 'Unknown Title';
    }
}

function playDefaultSong() {
    changeSong(defaultSongIndex, defaultSongCurrentTime);
}

function removeOverlay() {
    const overlay = document.getElementById("overlay");
    if (overlay) {
        overlay.style.display = 'none';
        playDefaultSong();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const songTitleElement = document.getElementById('songTitle');
    if (songTitleElement) {
        songTitleElement.innerText = 'None';
    }
});

function playRandomSong() {
    const randomIndex = getRandomSongIndex();
    changeSong(randomIndex);
}

function getRandomSongIndex() {
    return Math.floor(Math.random() * playlist.length);
}

playlist.forEach((song) => {
    const audioPreload = new Audio(song.src);
    audioPreload.load();
});

}