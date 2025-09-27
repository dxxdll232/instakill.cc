function updateTime() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
  document.getElementById('time-display').textContent = timeStr;
}

setInterval(updateTime, 1000);
updateTime();

function showTerminal() {
  const terminal = document.getElementById('terminal');
  const terminalAscii = document.getElementById('terminal-ascii');
  const terminalInfo = document.getElementById('terminal-info');
  
  terminal.style.display = 'block';
  terminalAscii.innerHTML = '';
  terminalInfo.innerHTML = '';

  const commandLine = document.createElement('div');
  commandLine.className = 'command-line';
  commandLine.style.position = 'absolute';
  commandLine.style.top = '40px';
  commandLine.style.left = '20px';
  commandLine.innerHTML = `
    <span class="prompt">┌──(user㉿lobotomy)-[~]</span><br>
    <span class="prompt">└─$</span> <span id="typing-text"></span><span class="cursor">█</span>
  `;
  terminalInfo.appendChild(commandLine);

  const text = "neofetch"; // Fake command
  const typingElement = document.getElementById('typing-text');
  let i = 0;
  
  function typeWriter() {
    if (i < text.length) {
      typingElement.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    } else {
      setTimeout(() => {
        commandLine.style.display = 'none';
        showAsciiAndInfo();
      }, 500);
    }
  }

  setTimeout(typeWriter, 300);
}

function getDeviceInfo() {
  const info = [];

  info.push(`OS: Kali GNU/Linux Rolling x86_64`);
  info.push(`Host: ${navigator.platform}`);
  info.push(`Kernel: Browser Kernel`);
  info.push(`Uptime: ~${Math.floor(performance.now() / 1000 / 60)} mins`);
  info.push(`Resolution: ${window.screen.width}x${window.screen.height}`);
  if (navigator.deviceMemory) {
    info.push(`RAM: ${navigator.deviceMemory} GB`);
  }

  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    if (debugInfo) {
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      info.push(`GPU: ${renderer}`);
    }
  } catch (e) {
    info.push(`GPU: Unknown`);
  }

  info.push(`Shell: bash`);
  return info;
}

function showAsciiAndInfo() {
  const terminalAscii = document.getElementById('terminal-ascii');
  const terminalInfo = document.getElementById('terminal-info');

  const asciiKali = [
"        .--.  ",
"       |o_o | ",
"       |:_/ | ",
"      //   \\ \\ ",
"     (|     | )",
"    /'\\_   _/`\\",
"    \\___)=(___/"
  ];

  const asciiContainer = document.createElement('div');
  asciiContainer.style.textAlign = 'left';
  asciiContainer.style.fontFamily = 'monospace';
  asciiContainer.style.lineHeight = '1.2';
  asciiContainer.style.whiteSpace = 'pre';
  asciiContainer.style.opacity = '0';
  asciiContainer.style.transition = 'opacity 1s ease-in';
  asciiContainer.style.display = 'inline-block';
  asciiContainer.style.verticalAlign = 'top';
  
  asciiKali.forEach((line) => {
    const lineElement = document.createElement('div');
    lineElement.style.color = "#0F9";
    lineElement.textContent = line;
    asciiContainer.appendChild(lineElement);
  });

  terminalAscii.appendChild(asciiContainer);

  // Device info styled like neofetch
  const infoData = getDeviceInfo();
  const infoContainer = document.createElement("div");
  infoContainer.style.fontFamily = "monospace";
  infoContainer.style.lineHeight = "1.4";
  infoContainer.style.marginLeft = "40px";
  infoContainer.style.display = "inline-block";
  infoContainer.style.verticalAlign = "top";
  infoContainer.style.opacity = "0";
  infoContainer.style.transition = "opacity 1s ease-in";

  infoContainer.innerHTML = `
    <div style="color:#0FF;">user@lobotomy</div>
    <div style="color:#0FF;">-----------------</div>
    ${infoData.map(line => `<div style="color:#FFF;">${line}</div>`).join("")}
  `;

  terminalAscii.appendChild(infoContainer);

  // Fade-in animations
  setTimeout(() => {
    asciiContainer.style.opacity = '1';
    infoContainer.style.opacity = "1";
  }, 100);
}

function hideTerminal() {
  document.getElementById('terminal').style.display = 'none';
}

let isDraggingTerminal = false;
let terminalOffsetX = 0;
let terminalOffsetY = 0;
const terminal = document.getElementById('terminal');
const terminalHeader = document.querySelector('.terminal-header');

terminalHeader.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('terminal-close')) return;
  isDraggingTerminal = true;
  const rect = terminal.getBoundingClientRect();
  terminalOffsetX = e.clientX - rect.left;
  terminalOffsetY = e.clientY - rect.top;
  terminal.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (isDraggingTerminal) {
    terminal.style.left = (e.clientX - terminalOffsetX) + 'px';
    terminal.style.top = (e.clientY - terminalOffsetY) + 'px';
    terminal.style.transform = 'none';
  }
});

document.addEventListener('mouseup', () => {
  isDraggingTerminal = false;
  terminal.style.cursor = 'default';
});

function showUserPopup(username, avatar, content) {
  const popup = document.getElementById('user-popup');
  document.getElementById('popup-username').textContent = username;
  document.getElementById('popup-content').innerHTML = `
    <div style="text-align: center; margin-bottom: 15px;">
      <img src="${avatar}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover;">
    </div>
    ${content}
  `;
  popup.style.display = 'flex';
  
  const userElement = event.currentTarget;
  const rect = userElement.getBoundingClientRect();
  popup.style.left = (rect.right + 10) + 'px';
  popup.style.top = (rect.top - 50) + 'px';
}

function hidePopup() {
  document.getElementById('user-popup').style.display = 'none';
}

let isDraggingPopup = false;
let popupOffsetX = 0;
let popupOffsetY = 0;
const popup = document.getElementById('user-popup');
const popupHeader = document.querySelector('.popup-header');

popupHeader.addEventListener('mousedown', (e) => {
  if (e.target.classList.contains('popup-close')) return;
  isDraggingPopup = true;
  const rect = popup.getBoundingClientRect();
  popupOffsetX = e.clientX - rect.left;
  popupOffsetY = e.clientY - rect.top;
  popup.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (isDraggingPopup) {
    popup.style.left = (e.clientX - popupOffsetX) + 'px';
    popup.style.top = (e.clientY - popupOffsetY) + 'px';
  }
});

document.addEventListener('mouseup', () => {
  isDraggingPopup = false;
  popup.style.cursor = 'default';
});
