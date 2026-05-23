(function(){
    let style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
        }
        @keyframes glitch {
            0% { text-shadow: -2px 0 #ff00cc, 2px 0 #00ffff; }
            50% { text-shadow: 2px 0 #ff00cc, -2px 0 #00ffff; }
            100% { text-shadow: -2px 0 #ff00cc, 2px 0 #00ffff; }
        }
        @keyframes borderPulse {
            0% { border-color: rgba(102,126,234,0.6); box-shadow: 0 0 20px rgba(102,126,234,0.3); }
            50% { border-color: rgba(240,147,251,0.9); box-shadow: 0 0 40px rgba(240,147,251,0.5); }
            100% { border-color: rgba(102,126,234,0.6); box-shadow: 0 0 20px rgba(102,126,234,0.3); }
        }
        @keyframes menuAppear {
            from { opacity: 0; transform: translate(-50%,-50%) scale(0.8); backdrop-filter: blur(0px); }
            to { opacity: 1; transform: translate(-50%,-50%) scale(1); backdrop-filter: blur(16px); }
        }
        
        .sw-ball {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: grab;
            z-index: 99999;
            font-family: 'Inter', sans-serif;
            font-weight: 800;
            font-size: 28px;
            letter-spacing: 2px;
            color: white;
            border: 2px solid rgba(255,255,255,0.3);
            box-shadow: 0 0 30px rgba(102,126,234,0.6);
            backdrop-filter: blur(4px);
            animation: float 3s infinite, borderPulse 2s infinite;
        }
        .sw-ball:active { cursor: grabbing; }
        
        .sw-menu {
            position: fixed;
            top: 50%;
            left: 50%;
            width: 400px;
            max-height: 85vh;
            overflow-y: auto;
            background: rgba(10,8,20,0.95);
            backdrop-filter: blur(16px);
            border-radius: 28px;
            z-index: 100000;
            display: block;
            font-family: 'Inter', sans-serif;
            border: 1px solid rgba(102,126,234,0.5);
            animation: menuAppear 0.3s ease-out;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            transform: translate(-50%,-50%);
        }
        
        .sw-menu::-webkit-scrollbar { width: 6px; }
        .sw-menu::-webkit-scrollbar-track { background: rgba(255,255,255,0.1); border-radius: 3px; }
        .sw-menu::-webkit-scrollbar-thumb { background: #ff00cc; border-radius: 3px; }
        
        .sw-header {
            background: linear-gradient(90deg, #0f0c29, #302b63, #24243e);
            padding: 18px 24px;
            border-radius: 28px 28px 0 0;
            cursor: move;
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            border-bottom: 2px solid rgba(240,147,251,0.5);
            position: sticky;
            top: 0;
            z-index: 10;
        }
        
        .sw-title {
            font-size: 26px;
            font-weight: 800;
            background: linear-gradient(90deg, #fff, #ff00cc, #00ffff, #ff00cc);
            background-size: 300% 300%;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            animation: glitch 4s infinite;
        }
        
        .sw-controls button {
            background: rgba(0,0,0,0.5);
            border: 1px solid rgba(255,255,255,0.3);
            color: white;
            font-size: 20px;
            cursor: pointer;
            width: 32px;
            height: 32px;
            border-radius: 12px;
            margin-left: 8px;
            transition: 0.2s;
        }
        .sw-controls button:hover {
            background: rgba(240,147,251,0.4);
            border-color: #ff00cc;
            transform: scale(1.05);
        }
        
        .sw-content {
            padding: 20px;
        }
        
        .sw-section {
            margin-bottom: 24px;
            border-bottom: 1px dashed rgba(255,255,255,0.15);
            padding-bottom: 16px;
        }
        
        .sw-section h4 {
            margin: 0 0 12px 0;
            font-size: 14px;
            font-weight: 600;
            background: linear-gradient(90deg, #b8c6ff, #ff00cc);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            letter-spacing: 1px;
        }
        
        .sw-input-group {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
        }
        
        .sw-input-group input, .sw-input-group select {
            flex: 1;
            padding: 10px 12px;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.2);
            background: rgba(0,0,0,0.3);
            color: white;
            font-family: 'Inter', sans-serif;
            font-size: 13px;
            outline: none;
        }
        
        .sw-input-group input:focus, .sw-input-group select:focus {
            border-color: #ff00cc;
        }
        
        .sw-custom-select {
            position: relative;
            flex: 1;
        }
        
        .sw-custom-select select {
            width: 100%;
            padding: 10px 12px;
            border-radius: 12px;
            border: 1px solid rgba(255,255,255,0.2);
            background: rgba(0,0,0,0.3);
            color: white;
            font-family: 'Inter', sans-serif;
            font-size: 13px;
            outline: none;
            appearance: none;
            cursor: pointer;
        }
        
        .sw-custom-select::after {
            content: "▼";
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: rgba(255,255,255,0.6);
            font-size: 10px;
            pointer-events: none;
        }
        
        .sw-input-group button {
            padding: 10px 16px;
            border-radius: 12px;
            border: none;
            background: linear-gradient(90deg, #ff00cc, #3333ff);
            color: white;
            cursor: pointer;
            font-weight: bold;
            transition: 0.2s;
            white-space: nowrap;
        }
        
        .sw-input-group button:hover {
            transform: scale(1.02);
            opacity: 0.9;
        }
        
        .sw-color-row {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-top: 8px;
        }
        
        .sw-color-option {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid rgba(255,255,255,0.3);
            transition: 0.1s;
        }
        
        .sw-color-option:hover {
            transform: scale(1.1);
            border-color: #ff00cc;
        }
        
        .sw-warning {
            background: linear-gradient(90deg, #ff8800, #ff5500) !important;
        }
        
        .sw-footer {
            text-align: center;
            font-size: 11px;
            color: rgba(255,255,255,0.3);
            margin-top: 16px;
            padding-top: 10px;
            border-top: 1px solid rgba(255,255,255,0.1);
        }
        
        .sw-message {
            font-size: 12px;
            color: #00ff88;
            text-align: center;
            margin-top: 10px;
            display: none;
        }
        
        option {
            background: #1a1a2e;
            color: white;
        }
    `;
    document.head.appendChild(style);
    
    if(window.swBall) window.swBall.remove();
    if(window.swMenu) window.swMenu.remove();
    
    let ball = document.createElement('div');
    ball.className = 'sw-ball';
    ball.innerHTML = 'SW';
    document.body.appendChild(ball);
    window.swBall = ball;
    
    let menu = document.createElement('div');
    menu.className = 'sw-menu';
    menu.innerHTML = `
        <div class="sw-header">
            <span class="sw-title">★ SW MOD ★</span>
            <div class="sw-controls">
                <button class="sw-close-menu">✖</button>
            </div>
        </div>
        <div class="sw-content" id="sw-modules-container">
            <div style="text-align:center; padding:20px;">Загрузка модулей...</div>
        </div>
        <div class="sw-footer">⚡ Только визуальные изменения ⚡</div>
        <div id="sw-toast" class="sw-message"></div>
    `;
    document.body.appendChild(menu);
    window.swMenu = menu;
    
    function showMessage(text, isError) {
        let toast = document.getElementById('sw-toast');
        toast.style.color = isError ? '#ff6170' : '#00ff88';
        toast.textContent = text;
        toast.style.display = 'block';
        setTimeout(() => { toast.style.display = 'none'; }, 2000);
    }
    
    window.waitForElement = function(selector, callback, timeout) {
        timeout = timeout || 10000;
        let interval = setInterval(() => {
            let el = document.querySelector(selector);
            if(el) {
                clearInterval(interval);
                callback(el);
            }
        }, 200);
        setTimeout(() => clearInterval(interval), timeout);
    };
    
    window.waitForAnyElement = function(selectors, callback, timeout) {
        timeout = timeout || 10000;
        let interval = setInterval(() => {
            for(let s of selectors) {
                let el = document.querySelector(s);
                if(el) {
                    clearInterval(interval);
                    callback(el);
                    return;
                }
            }
        }, 200);
        setTimeout(() => clearInterval(interval), timeout);
    };
    
    async function loadModules() {
        let container = document.getElementById('sw-modules-container');
        container.innerHTML = '<div style="text-align:center; padding:20px;">Загрузка модулей...</div>';
        
        let modules = [
            { id: "character", name: "ПЕРСОНАЖ", url: "https://raw.githubusercontent.com/kotyarakot00/SWMod/main/core/character.js", order: 1 },
            { id: "coins", name: "МОНЕТЫ", url: "https://raw.githubusercontent.com/kotyarakot00/SWMod/main/core/coins.js", order: 2 },
            { id: "gameplay", name: "КАРТОЧКИ", url: "https://raw.githubusercontent.com/kotyarakot00/SWMod/main/core/gameplay.js", order: 3 },
            { id: "customize", name: "КАСТОМИЗАЦИЯ", url: "https://raw.githubusercontent.com/kotyarakot00/SWMod/main/core/customize.js", order: 4 }
        ];
        
        modules.sort((a, b) => a.order - b.order);
        container.innerHTML = '';
        
        for(let mod of modules) {
            try {
                let response = await fetch(mod.url);
                if(response.ok) {
                    let code = await response.text();
                    let section = document.createElement('div');
                    section.className = 'sw-section';
                    section.id = `sw-module-${mod.id}`;
                    section.innerHTML = `<h4>${mod.name}</h4><div class="sw-module-content">Загрузка...</div>`;
                    container.appendChild(section);
                    
                    let tempContainer = section.querySelector('.sw-module-content');
                    let func = new Function('container', 'showMessage', code);
                    func(tempContainer, showMessage);
                } else {
                    container.innerHTML += `<div class="sw-section"><h4>${mod.name}</h4><div style="color:#ff6170;">Ошибка загрузки модуля</div></div>`;
                }
            } catch(e) {
                container.innerHTML += `<div class="sw-section"><h4>${mod.name}</h4><div style="color:#ff6170;">Ошибка: ${e.message}</div></div>`;
            }
        }
    }
    
    loadModules();
    
    let isDragging = false;
    let startX, startY, ballLeft, ballTop;
    
    ball.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        ballLeft = ball.offsetLeft;
        ballTop = ball.offsetTop;
        ball.style.cursor = 'grabbing';
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', (e) => {
        if(!isDragging) return;
        let newLeft = ballLeft + (e.clientX - startX);
        let newTop = ballTop + (e.clientY - startY);
        newLeft = Math.max(0, Math.min(window.innerWidth - ball.offsetWidth, newLeft));
        newTop = Math.max(0, Math.min(window.innerHeight - ball.offsetHeight, newTop));
        ball.style.left = newLeft + 'px';
        ball.style.top = newTop + 'px';
        ball.style.right = 'auto';
        ball.style.bottom = 'auto';
    });
    
    document.addEventListener('mouseup', () => {
        isDragging = false;
        ball.style.cursor = 'grab';
    });
    
    let menuDrag = false;
    let menuX, menuY, menuLeft, menuTop;
    let header = menu.querySelector('.sw-header');
    
    header.addEventListener('mousedown', (e) => {
        if(e.target.tagName === 'BUTTON') return;
        menuDrag = true;
        menuX = e.clientX;
        menuY = e.clientY;
        menuLeft = menu.offsetLeft;
        menuTop = menu.offsetTop;
        menu.style.cursor = 'grabbing';
        menu.style.transform = 'none';
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', (e) => {
        if(!menuDrag) return;
        let newLeft = menuLeft + (e.clientX - menuX);
        let newTop = menuTop + (e.clientY - menuY);
        newLeft = Math.max(-menu.offsetWidth + 50, Math.min(window.innerWidth - 50, newLeft));
        newTop = Math.max(0, Math.min(window.innerHeight - 100, newTop));
        menu.style.left = newLeft + 'px';
        menu.style.top = newTop + 'px';
    });
    
    document.addEventListener('mouseup', () => {
        menuDrag = false;
        menu.style.cursor = 'default';
    });
    
    let visible = true;
    ball.addEventListener('click', () => {
        if(visible) {
            menu.style.display = 'none';
            visible = false;
        } else {
            menu.style.display = 'block';
            if(menu.style.left && menu.style.left !== 'auto') {
                menu.style.transform = 'none';
            } else {
                menu.style.left = '50%';
                menu.style.top = '50%';
                menu.style.transform = 'translate(-50%, -50%)';
            }
            visible = true;
        }
    });
    
    menu.querySelector('.sw-close-menu').addEventListener('click', () => {
        menu.style.display = 'none';
        visible = false;
    });
    
    console.log('%c★ SW MOD загружен ★', 'color:#ff00cc;font-size:14px;font-weight:bold');
})();
