(function() {
    let font = document.createElement('link');
    font.rel = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap';
    document.head.appendChild(font);

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
            from { opacity: 0; transform: scale(0.8); backdrop-filter: blur(0px); }
            to { opacity: 1; transform: scale(1); backdrop-filter: blur(16px); }
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
            width: 380px;
            background: rgba(10,8,20,0.85);
            backdrop-filter: blur(16px);
            border-radius: 28px;
            z-index: 100000;
            display: block;
            font-family: 'Inter', sans-serif;
            border: 1px solid rgba(102,126,234,0.5);
            animation: menuAppear 0.3s ease-out;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            transform: translate(-50%, -50%);
        }
        
        .sw-header {
            background: linear-gradient(90deg, #0f0c29, #302b63, #24243e);
            padding: 18px 24px;
            border-radius: 28px 28px 0 0;
            cursor: move;
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            border-bottom: 2px solid rgba(240,147,251,0.5);
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
            padding: 60px 24px;
            text-align: center;
        }
        
        .sw-message {
            font-size: 18px;
            font-weight: 500;
            background: linear-gradient(90deg, #b8c6ff, #ff00cc);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            letter-spacing: 1px;
        }
    `;
    document.head.appendChild(style);

    if (window.swBall) window.swBall.remove();
    if (window.swMenu) window.swMenu.remove();

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
        <div class="sw-content">
            <div class="sw-message">Находится в разработке</div>
        </div>
    `;
    document.body.appendChild(menu);
    window.swMenu = menu;

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
        if (!isDragging) return;
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
        if (e.target.tagName === 'BUTTON') return;
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
        if (!menuDrag) return;
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
        if (visible) {
            menu.style.display = 'none';
            visible = false;
        } else {
            menu.style.display = 'block';
            if (menu.style.left && menu.style.left !== 'auto') {
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

    console.log('%c★ SW MOD загружен | Меню открыто ★', 'color:#ff00cc;font-size:14px;font-weight:bold');
})();
