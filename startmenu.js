document.addEventListener("DOMContentLoaded", function() {
    console.log("Minimal start menu script loaded");
      const startMenuHTML = `
      <div id="win95-start-menu" style="display: none; position: absolute; bottom: 30px; left: 0; width: 200px; background-color: #6c6c6c; border: 2px outset #fff; box-shadow: 2px 2px 4px rgba(0,0,0,0.5); z-index: 9999;">
        <div style="display: flex;">
          <div style="width: 25px; background-color: #c0c0c0; color: white; writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg); padding: 10px 0; font-weight: bold;">
            Windows 95
          </div>
          <div style="flex: 1;">
            <div class="menu-item" style="padding: 5px; display: flex; align-items: center;">
              <span style="width: 20px; display: inline-block; margin-right: 5px;">🖥️</span>
              <span>Programs</span>
              <span style="margin-left: auto;">►</span>
            </div>
            
            <div class="menu-item documents-menu-item" style="padding: 5px; display: flex; align-items: center; position: relative; background-color: #c0c0c0;">
              <span style="width: 20px; display: inline-block; margin-right: 5px;">📁</span>
              <span>Documents</span>
              <span style="margin-left: auto;">►</span>
              
              <div class="documents-submenu" style="display: none; position: absolute; left: 100%; top: 0; width: 180px; background-color: #c0c0c0; border: 2px outset #fff;">
                <div class="doc-item" data-doc="sleepthegod" style="padding: 5px; display: flex; align-items: center;">
                  <span style="width: 20px; display: inline-block; margin-right: 5px;">📄</span>
                  <span>SleepTheGod</span>
                </div>
                <div class="doc-item" data-doc="underpants22" style="padding: 5px; display: flex; align-items: center;">
                  <span style="width: 20px; display: inline-block; margin-right: 5px;">📄</span>
                  <span>Underpants22</span>
                </div>
                <div class="doc-item" data-doc="conreppin" style="padding: 5px; display: flex; align-items: center;">
                  <span style="width: 20px; display: inline-block; margin-right: 5px;">📄</span>
                  <span>conreppin</span>
                </div>
                <div class="doc-item" data-doc="mourn" style="padding: 5px; display: flex; align-items: center;">
                  <span style="width: 20px; display: inline-block; margin-right: 5px;">📄</span>
                  <span>Mourn</span>
                </div>
                <div class="doc-item" data-doc="white" style="padding: 5px; display: flex; align-items: center;">
                  <span style="width: 20px; display: inline-block; margin-right: 5px;">📄</span>
                  <span>White</span>
                </div>
              </div>
            </div>
            
            <div class="menu-item" style="padding: 5px; display: flex; align-items: center;">
              <span style="width: 20px; display: inline-block; margin-right: 5px;">⚙️</span>
              <span>Settings</span>
              <span style="margin-left: auto;">►</span>
            </div>
            
            <div class="menu-item" style="padding: 5px; display: flex; align-items: center;">
              <span style="width: 20px; display: inline-block; margin-right: 5px;">🔍</span>
              <span>Find</span>
            </div>
            
            <div class="menu-item" style="padding: 5px; display: flex; align-items: center;">
              <span style="width: 20px; display: inline-block; margin-right: 5px;">❓</span>
              <span>Help</span>
            </div>
            
            <div class="menu-item" style="padding: 5px; display: flex; align-items: center;">
              <span style="width: 20px; display: inline-block; margin-right: 5px;">▶️</span>
              <span>Run...</span>
            </div>
            
            <div style="height: 1px; background-color: #888; margin: 5px 0;"></div>
            
            <div class="menu-item" style="padding: 5px; display: flex; align-items: center;">
              <span style="width: 20px; display: inline-block; margin-right: 5px;">🔌</span>
              <span>Shut Down...</span>
            </div>
          </div>
        </div>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', startMenuHTML);
    
    const startMenu = document.getElementById('win95-start-menu');
    const startButton = document.querySelector('.start-button');
    const documentsMenuItem = document.querySelector('.documents-menu-item');
    const documentsSubmenu = document.querySelector('.documents-submenu');
    const docItems = document.querySelectorAll('.doc-item');
    
    let menuVisible = false;
    
    if (startButton) {
      startButton.addEventListener('click', function(e) {
        console.log("Start button clicked");
        e.stopPropagation(); 
        
        menuVisible = !menuVisible;
        startMenu.style.display = menuVisible ? 'block' : 'none';
      });
    }
    
    if (documentsMenuItem && documentsSubmenu) {
      documentsMenuItem.addEventListener('mouseenter', function() {
        documentsSubmenu.style.display = 'block';
        documentsMenuItem.style.backgroundColor = '#000080';
        documentsMenuItem.style.color = 'white';
      });
      
      documentsMenuItem.addEventListener('mouseleave', function(e) {
        if (!documentsSubmenu.contains(e.relatedTarget)) {
          documentsSubmenu.style.display = 'none';
          documentsMenuItem.style.backgroundColor = '#c0c0c0';
          documentsMenuItem.style.color = 'black';
        }
      });
      
      documentsSubmenu.addEventListener('mouseleave', function() {
        documentsSubmenu.style.display = 'none';
        documentsMenuItem.style.backgroundColor = '#c0c0c0';
        documentsMenuItem.style.color = 'black';
      });
    }
    
    docItems.forEach(item => {
      item.addEventListener('click', function() {
        const docName = this.getAttribute('data-doc');
        openNotepad(docName);
        startMenu.style.display = 'none';
        menuVisible = false;
      });
      
      item.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#000080';
        this.style.color = 'white';
      });
      
      item.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#c0c0c0';
        this.style.color = 'black';
      });
    });
    
    document.addEventListener('click', function(e) {
      if (menuVisible && !startMenu.contains(e.target) && e.target !== startButton) {
        startMenu.style.display = 'none';
        menuVisible = false;
      }
    });
        function openNotepad(docName) {
      const docContent = getDocumentContent(docName);
      
      const notepadWindow = document.createElement('div');
      notepadWindow.className = 'window draggable';
      notepadWindow.id = `notepad-${docName}`;
      notepadWindow.style.width = '500px';
      notepadWindow.style.position = 'fixed';
      notepadWindow.style.top = '50%';
      notepadWindow.style.left = '50%';
      notepadWindow.style.transform = 'translate(-50%, -50%)';
      notepadWindow.style.zIndex = '1000';
      
      notepadWindow.innerHTML = `
        <div class="title-bar">
          <div class="title-bar-text">${docName} - Notepad</div>
          <div class="title-bar-controls">
            <button class="minimize-button" aria-label="Minimize"></button>
            <button class="maximize-button" aria-label="Maximize"></button>
            <button class="close-button" aria-label="Close"></button>
          </div>
        </div>
        <div class="window-body">
          <div style="display: flex; border-bottom: 1px solid #888; padding: 2px 0;">
            <div style="padding: 2px 8px; font-size: 12px;">File</div>
            <div style="padding: 2px 8px; font-size: 12px;">Edit</div>
            <div style="padding: 2px 8px; font-size: 12px;">Search</div>
            <div style="padding: 2px 8px; font-size: 12px;">Help</div>
          </div>
          <div style="height: 300px; overflow: auto; padding: 4px; font-family: 'Courier New', monospace; font-size: 14px; background-color: white; border: 1px inset #888;">
            <pre style="margin: 0; white-space: pre-wrap;">${docContent}</pre>
          </div>
        </div>
      `;
      
      document.body.appendChild(notepadWindow);
      
      if (window.jQuery && window.jQuery.ui) {
        $(`#notepad-${docName}`).draggable({
          handle: '.title-bar',
          start: function() {
            $(this).css({
              transform: 'none',
              top: $(this).offset().top + 'px',
              left: $(this).offset().left + 'px'
            });
          }
        });
      }
      
      const closeButton = notepadWindow.querySelector('.close-button');
      if (closeButton) {
        closeButton.addEventListener('click', function() {
          notepadWindow.remove();
        });
      }
    }
    
    function getDocumentContent(docName) {
      const contentMap = {
        'sleepthegod': `https://www.instagram.com/shelladesantis/
  https://www.facebook.com/yougotthis
  https://www.linkedin.com/in/shella-desantis-896871lb1
  https://www.youtube.com/channel/UCHkurv0G2w-K1IOXj-1mFIw
  
  » Arrest Records:
                  September 27, 2007
                  POSS DRUGS 100FT SCHOOL
                  Arresting Agency/BIBB SHERIFF DEPARTMENT
                                  September 27, 2007
                                  POSS ALCOHOL-SCHOOL PROPERTY
                                  Arresting Agency/BIBB SHERIFF DEPARTMENT
                                                  September 27, 2007
                                                  POSS. OF WEAPON ON SCHOOL PROP`,
        'underpants22': `Personal Journal - Do Not Read!
  
  August 15: I don't know if anyone will ever see this. I've been tracking strange signals
  coming from the abandoned radio tower outside town. Something is happening there at
  exactly 3:33 AM every night.
  
  August 16: I went to the tower last night. There was a blue light pulsing from the top.
  When I got closer, I felt dizzy and lost time. Woke up at home somehow.
  
  August 17: My computer keeps turning on by itself and opening files I've never seen.
  Someone or something is watching me.`,
        'conreppin': `Bank Account Details:
  Account Number: 2845791620
  Routing: 084009519
  PIN: 3582
  
  SS: 331-48-7209
  
  Home Address:
  1422 Oakwood Lane
  Springfield, IL 62704
  
  -----------
  Remember to change all passwords before the end of the month!
  New pattern: Sk$94!2T+(month)(year)`,
        'mourn': `Project Blackout: Status Report
  Phase 1: Complete - All network infrastructure in place
  Phase 2: In Progress - System infiltration 78% complete
  Phase 3: Pending - Awaiting confirmation from Command
  
  Target facilities:
  - Northeast Grid Station
  - Central Database Facility
  - Western Distribution Hub
  
  Contingency protocols activated if no contact within 48 hours.
  Emergency exit: code sequence 7A-F9-22B-01D`,
        'white': `FROM: d_miller@[redacted].gov
  TO: j_white@[redacted].gov
  SUBJECT: Re: Surveillance Protocol Update
  
  Jim,
  
  The new satellite imaging system is operational. We now have 24/7 coverage of all
  designated zones with 3cm resolution. Facial recognition is functioning at 98.7% accuracy.
  
  Please remind field teams that all data collected is classified TOP SECRET / SCI and
  cannot be discussed over unsecured channels.
  
  Next briefing: Thursday, 0800.
  
  -David`
      };
      
      return contentMap[docName] || 'No content available for this document.';
    }
  });
