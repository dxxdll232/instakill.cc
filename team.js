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

document.addEventListener('DOMContentLoaded', function() {
    let currentMember = null;
    let audioPlayer = document.getElementById('audio-player');

const songs = [
    'dread.mp3', // 0
    'valor.mp3', // 1
    'synq.mp3', // 2
    'v.mp3', // 3
];

function showMember(member) {
    const memberInfo = {
        'Valor': { 'name': 'Valor', 'image': 'valor.jpg', 'description': 'nigger', 'songIndex': 1 },
        'Synqronize': { 'name': 'Synqronize', 'image': 'Synq.jpg', 'description': 'hi! >.~', 'songIndex': 2 },
        'V': { 'name': 'V', 'image': 'v.jpg', 'description': 'looc backwards', 'songIndex': 3 }
    };
 const hardcodedVolume = 0.2; 
    if (audioPlayer) {
        audioPlayer.volume = hardcodedVolume; 
    }
        const info = memberInfo[member];
        if (!info) return;

        const memberDiv = document.getElementById('member-info');
        const selectedElement = document.querySelector(`[onclick="showMember('${member}')"]`);

        if (currentMember) {
            currentMember.classList.remove('selected');
            const previousDot = document.getElementById(`${currentMember.getAttribute('data-member')}-dot`);
            if (previousDot) previousDot.innerHTML = '::';
            stopMusic();
        }

        if (currentMember === selectedElement) {
            currentMember = null;
            memberDiv.innerHTML = '';
            playDefaultSong();
            return;
        }

        if (selectedElement) {
            selectedElement.classList.add('selected');
            selectedElement.setAttribute('data-member', member);
        } else {
            console.warn('Selected element not found for member:', member);
            return;
        }

        document.querySelectorAll('.yellow').forEach(dot => {
            dot.innerHTML = '::';
        });

        const currentDot = document.getElementById(`${member}-dot`);
        if (currentDot) {
            currentDot.innerHTML = '<span style="color: #FFD700; margin-top: -2px;">&bull;</span>';
        }

memberDiv.innerHTML = `
    <img src="${info.image}" class="fade-in" style="width: 120px; height: 120px;" draggable="false">
    <p style="margin-top: 5px; margin-bottom: 0; color: #FFD700;">[ ${info.name} ]</p>
    <hr style="border-top: 1px solid #FFD700; margin: 3px 0;">
    <p class="glitch" style="margin-top: 5px;">${info.description}</p>
`;


        changeSong(info.songIndex);

        currentMember = selectedElement;
    }

    function playDefaultSong() {
        const defaultSongIndex = songs.length - 1;
        changeSong(defaultSongIndex);
    }

    function changeSong(songIndex) {
        if (!audioPlayer) {
            console.error('Audio player element not found');
            return;
        }

        const songPath = songs[songIndex] || songs[songs.length - 1];
        audioPlayer.src = songPath;
        audioPlayer.play().catch(error => {
            console.error('Error playing song:', error);
        });
    }

    function stopMusic() {
        if (audioPlayer) {
            audioPlayer.pause();
            audioPlayer.currentTime = 0;
        }
    }

    function removeOverlay() {
        const overlay = document.getElementById('overlay');
        if (overlay) {
            overlay.style.display = 'none';
            playDefaultSong();
        }
    }

    window.showMember = showMember;
    window.removeOverlay = removeOverlay;
});


}