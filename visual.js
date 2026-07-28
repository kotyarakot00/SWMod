let swStyle = document.createElement('style');
swStyle.textContent = `
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
        width: 480px;
        min-width: 320px;
        max-width: 90vw;
        max-height: 85vh;
        overflow-y: auto;
        overflow-x: hidden;
        background: rgba(10,8,20,0.95);
        backdrop-filter: blur(16px);
        border-radius: 28px;
        z-index: 100000;
        display: none;
        font-family: 'Inter', sans-serif;
        border: 1px solid rgba(102,126,234,0.5);
        animation: menuAppear 0.3s ease-out;
        box-shadow: 0 20px 50px rgba(0,0,0,0.5);
        transform: translate(-50%,-50%);
    }
    
    .sw-menu::-webkit-scrollbar { width: 0; height: 0; display: none; }
    
    .sw-header {
        background: inherit;
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
    
    .sw-content { padding: 20px; }
    
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
        flex-wrap: wrap;
    }
    
    .sw-input-group input, .sw-input-group select {
        flex: 1;
        min-width: 100px;
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
    
    .sw-reset-btn {
        background: rgba(30,30,40,0.6) !important;
        border: 1px dashed rgba(255,255,255,0.4) !important;
        color: rgba(255,255,255,0.7) !important;
    }
    .sw-reset-btn:hover {
        background: rgba(50,50,65,0.8) !important;
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
    
    .sw-footer {
        text-align: center;
        font-size: 11px;
        color: rgba(255,255,255,0.3);
        margin-top: 16px;
        padding: 12px;
        border-top: 1px solid rgba(255,255,255,0.1);
    }
    
    .sw-message {
        font-size: 12px;
        color: #00ff88;
        text-align: center;
        margin-top: 10px;
        display: none;
    }
    
    .sw-resize-handle {
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 20px;
        height: 20px;
        cursor: nw-resize;
        background: linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.3) 50%);
        border-radius: 0 0 12px 0;
        pointer-events: auto;
        z-index: 100001;
    }
    
    .sw-resize-handle:hover {
        background: linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.6) 50%);
    }
    
    option {
        background: #1a1a2e;
        color: white;
    }
`;
document.head.appendChild(swStyle);

let SW = {
    ball: null,
    menu: null,
    container: null,
    toastEl: null,
    visible: true,

    init: function() {
        if(this.ball) this.ball.remove();
        if(this.menu) this.menu.remove();

        this.ball = document.createElement('div');
        this.ball.className = 'sw-ball';
        this.ball.innerHTML = 'SW';
        document.body.appendChild(this.ball);

        this.menu = document.createElement('div');
        this.menu.className = 'sw-menu';
        this.menu.innerHTML = `
            <div class="sw-header">
                <span class="sw-title">★ SW MOD ★</span>
                <div class="sw-controls">
                    <button class="sw-close-menu">✖</button>
                </div>
            </div>
            <div class="sw-content" id="sw-modules-container"></div>
            <div class="sw-footer">⚡ Только визуальные изменения ⚡</div>
            <div id="sw-toast" class="sw-message"></div>
            <div class="sw-resize-handle"></div>
        `;
        document.body.appendChild(this.menu);

        this.container = document.getElementById('sw-modules-container');
        this.toastEl = document.getElementById('sw-toast');

        this.dragHandlers();
        this.resizeHandlers();
        this.closeHandlers();
        this.toggleHandlers();

        console.log('%c★ SW MOD загружен ★', 'color:#ff00cc;font-size:14px;font-weight:bold');
        return this;
    },

    section: function(title, content) {
        let div = document.createElement('div');
        div.className = 'sw-section';
        div.innerHTML = `<h4>${title}</h4>`;
        div.appendChild(content);
        this.container.appendChild(div);
        return div;
    },

    group: function(elements) {
        let div = document.createElement('div');
        div.className = 'sw-input-group';
        elements.forEach(el => div.appendChild(el));
        return div;
    },

    input: function(placeholder, value) {
        let input = document.createElement('input');
        input.type = 'text';
        input.placeholder = placeholder || '';
        if(value) input.value = value;
        return input;
    },

    number: function(placeholder, value) {
        let input = document.createElement('input');
        input.type = 'number';
        input.placeholder = placeholder || '';
        if(value) input.value = value;
        return input;
    },

    select: function(options, selected) {
        let div = document.createElement('div');
        div.className = 'sw-custom-select';
        let sel = document.createElement('select');
        options.forEach(opt => {
            let o = document.createElement('option');
            o.value = opt.value || opt;
            o.textContent = opt.label || opt;
            if(selected && (o.value === selected || o.textContent === selected)) o.selected = true;
            sel.appendChild(o);
        });
        div.appendChild(sel);
        return div;
    },

    button: function(text, click, type) {
        let btn = document.createElement('button');
        btn.textContent = text;
        if(type === 'reset') btn.className = 'sw-reset-btn';
        btn.addEventListener('click', click);
        return btn;
    },

    colorRow: function(colors, onClick) {
        let div = document.createElement('div');
        div.className = 'sw-color-row';
        colors.forEach(c => {
            let el = document.createElement('div');
            el.className = 'sw-color-option';
            el.style.background = c;
            el.addEventListener('click', () => onClick(c));
            div.appendChild(el);
        });
        return div;
    },

    toast: function(text, isError) {
        this.toastEl.style.color = isError ? '#ff6170' : '#00ff88';
        this.toastEl.textContent = text;
        this.toastEl.style.display = 'block';
        clearTimeout(this.toastTimer);
        this.toastTimer = setTimeout(() => { this.toastEl.style.display = 'none'; }, 2000);
    },

    dragHandlers: function() {
        let dragActive = false, startX, startY, ballStartLeft, ballStartTop;
        
        this.ball.addEventListener('mousedown', (e) => {
            dragActive = true;
            startX = e.clientX;
            startY = e.clientY;
            ballStartLeft = this.ball.offsetLeft;
            ballStartTop = this.ball.offsetTop;
            this.ball.style.cursor = 'grabbing';
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if(!dragActive) return;
            let nl = ballStartLeft + (e.clientX - startX);
            let nt = ballStartTop + (e.clientY - startY);
            nl = Math.max(0, Math.min(window.innerWidth - this.ball.offsetWidth, nl));
            nt = Math.max(0, Math.min(window.innerHeight - this.ball.offsetHeight, nt));
            this.ball.style.left = nl + 'px';
            this.ball.style.top = nt + 'px';
            this.ball.style.right = 'auto';
            this.ball.style.bottom = 'auto';
        });

        document.addEventListener('mouseup', () => {
            dragActive = false;
            this.ball.style.cursor = 'grab';
        });

        let menuDrag = false, mStartX, mStartY, mStartLeft, mStartTop;
        let header = this.menu.querySelector('.sw-header');

        header.addEventListener('mousedown', (e) => {
            if(e.target.tagName === 'BUTTON') return;
            menuDrag = true;
            mStartX = e.clientX;
            mStartY = e.clientY;
            mStartLeft = this.menu.offsetLeft;
            mStartTop = this.menu.offsetTop;
            this.menu.style.cursor = 'grabbing';
            this.menu.style.transform = 'none';
            e.preventDefault();
        });

        document.addEventListener('mousemove', (e) => {
            if(!menuDrag) return;
            let nl = mStartLeft + (e.clientX - mStartX);
            let nt = mStartTop + (e.clientY - mStartY);
            nl = Math.max(-this.menu.offsetWidth + 50, Math.min(window.innerWidth - 50, nl));
            nt = Math.max(0, Math.min(window.innerHeight - 100, nt));
            this.menu.style.left = nl + 'px';
            this.menu.style.top = nt + 'px';
        });

        document.addEventListener('mouseup', () => {
            menuDrag = false;
            this.menu.style.cursor = 'default';
        });
    },

    resizeHandlers: function() {
        let handle = this.menu.querySelector('.sw-resize-handle');
        let isResizing = false, startX, startY, startW, startH;

        handle.addEventListener('mousedown', (e) => {
            isResizing = true;
            startX = e.clientX;
            startY = e.clientY;
            startW = this.menu.offsetWidth;
            startH = this.menu.offsetHeight;
            this.menu.style.transform = 'none';
            this.menu.style.left = this.menu.offsetLeft + 'px';
            this.menu.style.top = this.menu.offsetTop + 'px';
            e.preventDefault();
            e.stopPropagation();
        });

        document.addEventListener('mousemove', (e) => {
            if(!isResizing) return;
            let nw = startW + (e.clientX - startX);
            let nh = startH + (e.clientY - startY);
            nw = Math.min(window.innerWidth - 50, Math.max(320, nw));
            nh = Math.min(window.innerHeight - 50, Math.max(400, nh));
            this.menu.style.width = nw + 'px';
            this.menu.style.height = nh + 'px';
        });

        document.addEventListener('mouseup', () => { isResizing = false; });
    },

    closeHandlers: function() {
        this.menu.querySelector('.sw-close-menu').addEventListener('click', () => {
            this.menu.style.display = 'none';
            this.visible = false;
        });
    },

    toggleHandlers: function() {
        this.ball.addEventListener('click', () => {
            if(this.visible) {
                this.menu.style.display = 'none';
                this.visible = false;
            } else {
                this.menu.style.display = 'block';
                if(this.menu.style.left && this.menu.style.left !== 'auto') {
                    this.menu.style.transform = 'none';
                } else {
                    this.menu.style.left = '50%';
                    this.menu.style.top = '50%';
                    this.menu.style.transform = 'translate(-50%, -50%)';
                }
                this.visible = true;
            }
        });
    }
};

SW.init();
