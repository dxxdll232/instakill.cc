// --- Clock ---
function updateTime() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  document.getElementById('time-display').textContent = timeStr;
}

setInterval(updateTime, 1000);
updateTime();

// --- Shared terminal elements ---
const overlay = document.getElementById("kali-overlay");
const terminal = document.getElementById("kali-terminal");
const terminalText = document.getElementById("kali-terminal-text");

// ---- Terminal 1: Fake neofetch ----
function showNeofetchTerminal() {
  overlay.style.display = "flex";
  terminalText.innerHTML = "";
  typeCommand("neofetch", () => renderNeofetch());
}

// ---- Terminal 2: We love to see it ----
function showWeLoveTerminal() {
  overlay.style.display = "flex";
  terminalText.innerHTML = "";
  typeCommand('echo "we love to see it"', () => {
    typeOutput("we love to see it\n");
  });
}

function hideKaliTerminal() {
  overlay.style.display = "none";
}

// --- Helpers ---
function typeCommand(cmd, callback) {
  let i = 0;
  const line = document.createElement("div");
  line.innerHTML = `<span class="prompt">└─$ </span><span id="typing-cmd"></span>`;
  terminalText.appendChild(line);

  function typeWriter() {
    if (i < cmd.length) {
      document.getElementById("typing-cmd").textContent += cmd.charAt(i);
      i++;
      setTimeout(typeWriter, 80);
    } else {
      terminalText.appendChild(document.createElement("br"));
      setTimeout(callback, 300);
    }
  }

  typeWriter();
}

function typeOutput(text, callback) {
  let i = 0;
  const line = document.createElement("div");
  terminalText.appendChild(line);

  function typeWriter() {
    if (i < text.length) {
      line.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 50);
    } else if (callback) {
      callback();
    }
  }

  typeWriter();
}

// --- Fake neofetch rendering ---
function getDeviceInfo() {
  const info = [];
  info.push("OS: Kali GNU/Linux Rolling x86_64");
  info.push(`Host: ${navigator.platform}`);
  info.push("Kernel: Browser Kernel");
  info.push(`Uptime: ~${Math.floor(performance.now() / 1000 / 60)} mins`);
  info.push(`Resolution: ${window.screen.width}x${window.screen.height}`);
  if (navigator.deviceMemory) info.push(`RAM: ${navigator.deviceMemory} GB`);

  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    if (debugInfo) {
      const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
      info.push(`GPU: ${renderer}`);
    }
  } catch (e) {
    info.push("GPU: Unknown");
  }

  info.push("Shell: bash");
  return info;
}

function renderNeofetch() {
  const asciiPenguin = [
    " .--. ",
    " |o_o | ",
    " |:_/ | ",
    " // \\ \\ ",
    " (| | )",
    " /'\\_ _/\\",
    " \\___)=(___/"
  ];

  const container = document.createElement("div");
  container.style.display = "flex";
  container.style.gap = "20px";

  const asciiContainer = document.createElement("div");
  asciiContainer.style.fontFamily = "monospace";
  asciiContainer.style.color = "#0ff";
  asciiContainer.style.whiteSpace = "pre";
  asciiPenguin.forEach(line => {
    asciiContainer.appendChild(document.createTextNode(line));
    asciiContainer.appendChild(document.createElement("br"));
  });

  const infoContainer = document.createElement("div");
  infoContainer.style.fontFamily = "monospace";
  infoContainer.style.color = "#fff";
  const info = getDeviceInfo();
  infoContainer.innerHTML = `
    <div style="color:#0ff;"></div>
    <div style="color:#0ff;"></div>
    ${info.map(line => `<div>${line}</div>`).join("")}
  `;

  container.appendChild(asciiContainer);
  container.appendChild(infoContainer);
  terminalText.appendChild(container);
}

// ---- Dragging for terminal ----
dragElement(terminal, document.getElementById("kali-drag-header"));

function dragElement(elmnt, dragHeader) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  dragHeader.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    elmnt.style.transform = "translate(0,0)";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

// --- Popup handling ---
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
