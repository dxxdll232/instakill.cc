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
  typeCommand('', () => {
    typeOutput("we love to see it");
  });
}

function hideKaliTerminal() {
  overlay.style.display = "none";
}

// --- Helpers ---
function typeCommand(cmd, callback) {
  let i = 0;
  const line = document.createElement("div");
  line.innerHTML = `<span class="prompt"> </span><span id="typing-cmd"></span>`;
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
                                                                                               "      ..,;;:cclloooooolcc:;,'...      ",                                                                                         
                                                                                              "  .;coxkOOOOkkkkkkkkkkkkkOOOOOkxdoc;'.   ",                                 
                                                                                        "    .;ldO0OkxddddddxxxxkkkkkkkkkOOOOOOOOOOOkdl:'.      ",                                                                        
                                                                                      "  .,:ok0OkdxxxxkkkkkOOOkxxxxxkkOOOOOOOOOOOOOOOOOOOkoc,.    ",                                                                        
                                                                                    " .;dO00OddddxOOkxxxxdodxxxxxxkkkkkxxxxxxxxkkkOOOOOOOOOOOko;.   ",                     
                                                                                   ".:k00xooodxOOxxkkxxxkkkkOOOOOxxxkxxxkkOOOOOOOOOOOOOOOOOOOOOOkl,   ",                                                                  
                                                                                 " ;x0OocloxOOxdxkxdxkOO0OOOkkddxxkOO0000000OOOOOOOOOOOOOOOOOOOOOOko,.  ",                                                                                                        
                                                                               " .o0Ododk00Oxdxkxdxk00OOkkxdodxkOkkO0000OOOOOkkkkkkkxxxxxkkkOOOOOOOOOd,   ",               
                                                                             "  ,k0xox00OkddxOkxk0K0OkxxdooxOOkxkO000OkkxxxdddddoooooooooooddkOOOOOOOOOo'   ",                                                               
                                                                             " ,kOooOK0OdodkkxkKKOOkdoooodOOxdk0K0kxxdddodddddddddooooooooodxkkkOOOOOOOOkc.   ",                                                    
                                                                            "  'xOol0KOOddkOdd0K0OkdlclookOxdk0K0kkxxxkOOOkkxxxddddoooooooodkOxdxOOOOOOOOOOo.   ",                                                      
                                                                            "   lOol0KOOddOo;l0KOOxl:coodOxox0K0OOO0KK00OkxddoooooooooollloxOkxdoxkxkOOOOOOOOd.   ",                                                       
                                                                            "  .ddckKOOxlxxclkKOkdc:loloxod0K000KKKK0kxddoooooooooollllloxOOkdoodOOddOOOOOOOOOl.    ",                                                      
                                                                            "  ,dclO0Okclklo00Oxoc:llcloldKK0KXKKOkxdoooooooollcccllloodkOkdoollxKOook0OkdxOOOk;      ",                                                     
                                                                            "  ,o:l0OOd;od:d0kdoc;ll;cdldKXXXKOkddooodoolcccccclooooodkkkdooolcd0KxlokK0kooOOOOd.       ",
                                                                            "  'l:lOOOl:ol:okdolcclclolxXNX0kxdoooolc::ccclooddollodkkxdooollld0KkoldkKKkldOOOOk;         ",                                             
                                                                            "  ,;'okdl:ll,cdoddloxdll0KOddol:;::coodoollc;'':dO0kxdooocccoox0KklloodOX0loOOOOOOl.             ",                                                                                                                            
                                                                          "    ...;ooocccccclxkxOkl:d0kdlc:;:lodolllodol::lkOkxdoool::coodkK0xlloooxKXxlkOOOOOOl.        ",
                                                                           "     .:loo::dOkocok0kookxolcclollloooodoodddxkxdoooc:,;coddk00xlllloodOXklxOOOOOOOc          ",
                                                                            "     .;lo:cxo:,'',:ldddoollloddxkOkkxxddxxdoollc;;,,codxk0ko:clccoookKOloOOOOOOOO:            ",                                                                                                             
                                                                           "      .;ccckd''ldlkx;;odoodkO00Okxxddddoolodddddl:codxkkxoc,,cc:coodkKkldOOxkOOOOk,              ",                                                                                                       
                                                                           "      ;doccddd0k,cXO;'lkOKKK0Okdoddddddddl:ldddoloxkxxdolcccc;:lodx0OolxOOxdkOOOOx.                ",                                                                                                      
                                                                           "     'loollOKKNO''d;..;xXNXXXKK00000000Oxl:clloodddxxxddllc;;codkOkdclkOOkxxkOOO0o.                  ",                                                                                                                                                
                                                                           "    .coldllKXd:l,.col:;xXNNNNNNNNXXK0Okdlllooddxkkkkxdlclc:coxkkxlccdkOOOxddxOOO0c                     ",                                                                                                 
                                                        		            " ;lloo:lXN0xdollodockNNNNNNNNNNXX0kxdddoddxxkOkxdoloooddxddolclodk00OxxxdkOO0O, ",   ",
                                                                        "     .llldl;oXNNNNNNX0kodKNNNNNNNNNNNNXKko;'',;:c;'';:cloddxd:,:looodk00OxdkxdOOO0k.  ",
                                                                        "    ;lcooc,dNNNNNNX0xdkKNNNNNNNNNNNNNX0x:;xKXXXk:...  .;xOOl,cooodxO00kxdxOddOOOKx.  ",
                                                         		          " .llcdl:;dNNNNNKOkOXNNNNNNNNNNNNNNNNNNd;dOOx;. ,c,.,..xXx:cdoodkOK0xdoxOkdxOOOKx. ",
                                                        		         "   ;ocoocc;dNNNNNXKXNNNNNNNNNNNNNNNNNNKOo'.,ll;';oo,:x:cKOodkxdkO0K0xoodkOkoxOO0Kd. ",
                                                           		       "     .odcolcl,cXNNNNNXXNNNNNNNNNNNNNNNNNNNNX0xolccokxloKN0K0xkOkxOO0K0xododkOxoxOO0Kd. ",
                                                           		         "   ,klco:cd:;kNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNX0xoc:l0NNNKkOOxkO0KKOdlddodkOdoxOO00o. ",
                                                                      "       cOccl:ldo:cKNNNNNNNXNNNNNNNNNNNNNNNNXKKXN0kOOKX00XNNKOOOkkO0KKkoldxoodOkookOOKko;                                      ",                                                                                                                
                                                                       "     oO:cc:oooo:c0NNNNNN0kKXXNNNNNNNNNNX000OK0k0KO0XNXXN0O0OxkOKK0xocdxlodx0xloxOOKkl:.                                    ",                                           
                                                                       "   .kk:c:cdoooc,:oONNNNNXKKK00KXNNNNNX0KXK00OXX000KOk0OO0kxk0KKOdlcddclddx0xloxO0Kxlc'                                   ",                                                                                                                                                                                                                                   
                                                                       "  'Ok:::ldolll::;:xXNNNK0XXXKKXXNNNK0XNKK0OXNK0K0kOOxkOxxOKK0koclddl:oxdk0xooxO0Kxllc.                                 ",                                                        
                                                                    "    ,Kx:;:odollc:ldl:dXNNX00XNNNNNNNK0XNKKKOKNX0XKoxKOOOxx0K0kxlcodolclxdok0xloxO0Kxlloc.                               ",                                                                      
                                                                     "   ;Kx;,coooloc;lddl;lKNNNNNNNNNNN00XNK0KOONNK0NO,l0OkdO00OxoloxocllcokdoO0xlodk0Kxclodc                             ",                                                     
                                                                     " :Kx,,ldollo::odo:::lKNNNNNNXXX0OKNXdc:oKNXO0NkokOxx00kxdlldxlcllccdOddO0xlodk0Kxcloox:                            ",                                                        
                                                                     " :Kx',ooolloccolc;coclxdoool;,'lKNNk,.,kNX00KOOOxxkOkddlloxdccllcclxOddO0dloox0Kxlldoxx,.                        ",                                                    
                                                                     "  :Kx,:doocllcll::cooooll:coc. .xNNXkoxKNX000OOkdxkxdoollddl:cclllllkOddO0dcoodOKklloddOd;.                    ",                                                                                   
                                                                     "   :Kk:cdolcolclc:cooooooccodlccxKNN0xOXNN0OO0kdodddolclodocc::llooclOOookKxcoodkKklcoddkOoc                 ",                                                                 
                                                                     "   :KOccdolloccccoooooool:loocokXNNNOOXNNKOOOdooooolcclooc:clccloooloOOookKkcodox0OlcldddO0o               ",                                                                                                        
                                                                     "      :K0ccdocloccloooooodo::odk0XNNNNNXXNK00OxlooolccloolcllllclcloooloOOdox0OlldodO0oclodddKK          ",                                                                      
                                                                      "     ;K0lcdlcolclooooooloodkKXNNNNNNNNNK0Okxolllcccloll;:loolllllloooloO0dodO0lcoook0dclodxxxX        ",                                                                                             
                                                                      "    .;0Klcdlcolcoollldxk0XNNNNNNNNNNXK0Oxdllc:::cllllooccoollolloolooloO0dldk0o:ldodOxlccodkxk      ",                                                                                                      
                                                                    "     ,:cOKlcolldlclokO0XNNNNNNNNNNNNX00OdlodxxxkOOOOOOOkxo:collocloloooloOKdloxOxccoookklc:lodOk    ",
                                                               "       .,oOdl0Kocolodc:xXNNNNNNNNNNNNNNX00Okkk0XNNNWNNNNNNNNNKOo:lc:lol:ldooloOXklodkklcodoxkolccooxO                ",                                                         
                                                              "      ,d0NNNko0KollloocdXXXXXXXNNXXXXXX00Okk0XNNNNNNNNNNNNNNNNK0Oo;:lolc:ldooloOX0oodxxocloodkdllcoodk              ",                                                                           
                                                              "    .dXWWNNNxoK0lcllocdXK00OOO000OOOOxxxdd0NNNNNNNNNNNNNNNNNNNK0OxooolllcldooloOKKxlodddlcoooxxloclood            ",                                                                              
                                                              "   'kNNNNNNXddK0lcooloKNK0OOkkxkxddkxxocxXNNNNNNNNNNNNNNNNNNNXOkkxxl:lloclooolok0K0ooooooclooddlolcooo          ",                                                                                   
                                                              "  .dNNNNNNNKodKOccdll0NNX0O00000kxkkxockNNNNNNNNNNNNNNNNNNXXK0OkddOd;coollooollk0KXdloooolcooodllocloo        ",                                                                                       
                                                             "   ;KNNNNNNN0oxKkclocxXNNX0O00O0kodxko:xNNNNNNNNNNNNNNNNXXKK00kxxkO0o,coolcooollk00XOlooooollooolcoocoo      ",                                                                                                
                                                              "  oNNNNNXXKdoOKxcoloKNNNX0OOO0OolxkdcoXNNNNNNNNNNNXXXKK000OxxxkO00O;'llooclooolk0OXKocdooooclodlclollo    ",                                                                                                  
                                                              " .xNNXXK00klx00dcolkNNNNX0O0O0kodkxdlkNNNNNNNNNNXKKK000OOxddO00OO0x..lloollooolxKOKNxcooooolcodo:cdlco  "
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

// --- Floating windows ---
const windowsContainer = document.getElementById("windows-container");
let windowCount = 0;

function createKaliWindow(title, content, isError = false) {
  const win = document.createElement("div");
  win.className = "kali-window" + (isError ? " kali-error" : "");
  win.style.top = `${100 + Math.random() * 200}px`;
  win.style.left = `${100 + Math.random() * 400}px`;
  win.style.zIndex = 2000 + windowCount;

  const header = document.createElement("div");
  header.className = "kali-window-header";
  header.innerHTML = `<span>${title}</span>`;
  const closeBtn = document.createElement("span");
  closeBtn.className = "kali-window-close";
  closeBtn.textContent = "✕";
  closeBtn.onclick = () => win.remove();
  header.appendChild(closeBtn);

  const body = document.createElement("div");
  body.className = "kali-window-body";
  body.innerHTML = content;

  win.appendChild(header);
  win.appendChild(body);
  windowsContainer.appendChild(win);

  dragElement(win, header);

  windowCount++;
  return win;
}

function spawnGenerator() {
  createKaliWindow("C:\\Generator", "Step 1: enter your name<br>C:\\User\\Generator.exe>");
}

function spawnConsole() {
  createKaliWindow("C:\\Console", "fake everything<br>C:\\User>");
}

function spawnImage(src) {
  createKaliWindow("C:\\Image_1", `<img src="${src}" style="max-width:100%;border:2px solid #3b82f6;">`);
}

function spawnError() {
  createKaliWindow(
    "C:\\Error",
    "Stay Strange<br><button onclick='this.closest(\".kali-window\").remove()'>OK</button>",
    true
  );
}

// --- Auto-spawn windows like FakeEverything ---
window.onload = function() {
  spawnGenerator();
  spawnConsole();
  spawnImage("lobotomy.jpg"); // change to your actual image path

  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      spawnError();
    }, i * 500);
  }
};
