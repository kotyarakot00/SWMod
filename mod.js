(function(){
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
            display: block;
            font-family: 'Inter', sans-serif;
            border: 1px solid rgba(102,126,234,0.5);
            animation: menuAppear 0.3s ease-out;
            box-shadow: 0 20px 50px rgba(0,0,0,0.5);
            transform: translate(-50%,-50%);
        }
        
        .sw-menu::-webkit-scrollbar {
            width: 0;
            height: 0;
            display: none;
        }
        
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
        
        .sw-loading {
            text-align: center;
            padding: 20px;
            color: #b8c6ff;
            font-size: 13px;
            font-family: 'Inter', sans-serif;
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
    
    if(window.swBall) window.swBall.remove();
    if(window.swMenu) window.swMenu.remove();
    
    let swBall = document.createElement('div');
    swBall.className = 'sw-ball';
    swBall.innerHTML = 'SW';
    document.body.appendChild(swBall);
    window.swBall = swBall;
    
    let swMenu = document.createElement('div');
    swMenu.className = 'sw-menu';
    swMenu.innerHTML = `
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
    document.body.appendChild(swMenu);
    window.swMenu = swMenu;
    
    let swResizeHandle = swMenu.querySelector('.sw-resize-handle');
    let swIsResizing = false;
    let swResizeStartX, swResizeStartY, swStartWidth, swStartHeight;
    
    swResizeHandle.addEventListener('mousedown', (e) => {
        swIsResizing = true;
        swResizeStartX = e.clientX;
        swResizeStartY = e.clientY;
        swStartWidth = swMenu.offsetWidth;
        swStartHeight = swMenu.offsetHeight;
        swMenu.style.transform = 'none';
        swMenu.style.left = swMenu.offsetLeft + 'px';
        swMenu.style.top = swMenu.offsetTop + 'px';
        e.preventDefault();
        e.stopPropagation();
    });
    
    document.addEventListener('mousemove', (e) => {
        if(!swIsResizing) return;
        let newWidth = swStartWidth + (e.clientX - swResizeStartX);
        let newHeight = swStartHeight + (e.clientY - swResizeStartY);
        newWidth = Math.min(window.innerWidth - 50, Math.max(320, newWidth));
        newHeight = Math.min(window.innerHeight - 50, Math.max(400, newHeight));
        swMenu.style.width = newWidth + 'px';
        swMenu.style.height = newHeight + 'px';
    });
    
    document.addEventListener('mouseup', () => {
        swIsResizing = false;
    });
    
    function showMessage(text, isError) {
        let toast = document.getElementById('sw-toast');
        toast.style.color = isError ? '#ff6170' : '#00ff88';
        toast.textContent = text;
        toast.style.display = 'block';
        setTimeout(() => { toast.style.display = 'none'; }, 2000);
    }
    
    function waitForElement(selector, callback, timeout) {
        timeout = timeout || 10000;
        let interval = setInterval(() => {
            let el = document.querySelector(selector);
            if(el) {
                clearInterval(interval);
                callback(el);
            }
        }, 200);
        setTimeout(() => clearInterval(interval), timeout);
    }
    
    function waitForAnyElement(selectors, callback, timeout) {
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
    }
    
    let swContainer = document.getElementById('sw-modules-container');
    
    // ========== МОДУЛЬ ПЕРСОНАЖ ==========
    (function() {
        let section = document.createElement('div');
        section.className = 'sw-section';
        section.innerHTML = '<h4>ПЕРСОНАЖ</h4><div class="sw-module-content"><div class="sw-loading">Загрузка...</div></div>';
        swContainer.appendChild(section);
        let modContainer = section.querySelector('.sw-module-content');
        
        let savedName = '';
        let savedClothes = '';
        let savedHair = '';
        
        let clothesUrls = {
            '1': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/shirt-1-a3013c4fa9c391fe1bac95ce6c4ee82a.svg',
            '2': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/shirt-2-14e12c50a6def128c05f9dd5755f63d6.svg',
            '3': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/hoodie-1-3392839928b91710021a6ecb3c238388.svg',
            '4': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/hoodie-2-bfd4f7165e831ec13629d5a1a28f6491.svg',
            '5': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/sweater-1-a1d1cddf7b29cd4cbe0b4a2edf60d720.svg',
            '6': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/sweater-2-2e58e7821f322bd578154594636f375e.svg',
            '7': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/bomber-1-4ca4f85e452541d134720fb490ee9327.svg',
            '8': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/bomber-2-fba53cfaba78216c2f8e1ff2b3a9e0b4.svg',
            '9': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/sweatshirt-1-7824bc10ac54043238c70aa50c1a9ab2.svg',
            '10': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/sweatshirt-2-f5f79e79b4fe70dcc1ef62287bee4b29.svg',
            '11': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/polo-1-1ba513af9e9535f10f4168517f792e18.svg',
            '12': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/polo-2-0cd3e035748734d0908e0ac067fe2290.svg',
            '13': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/sweater-3-751d84f9a4dcb8451acfb7025231ec2a.svg',
            '14': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/shirt-3-674edabe8b8350ab1b6269ba10457d75.svg',
            '15': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/shirt-4-e278598c075949e25f677cfcf2ce8f61.svg',
            '16': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/thirt-1-8074d7c928281950b9336156b7009615.svg',
            '17': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/thirt-2-4d39ad7081b926c715ed3eed0e657ce7.svg',
            '18': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/thirt-3-c2d17aa05446e281c42de568b4094103.svg',
            '19': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/thirt-4-c0dbc1b8b4a632e47a6453765ef36fb4.svg',
            '20': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/thirt-5-db31bec030ca9e3ac064904c569f057d.svg',
            '21': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/thirt-6-ac6bb2369d2105759c5d787cc01e3a2c.svg',
            '22': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/clothes/hoodie-3-4ef42832b4ff498073cd1bda75e49cb9.svg'
        };
        
        let hairUrls = {
            '1': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/hair_shape/hair_shape-1-4bfae16181ebbfc3a1878c1cf1061d67.svg',
            '2': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/hair_shape/hair_shape-2-db9ad000bd29d6c347ed9e181889582e.svg',
            '3': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/hair_shape/hair_shape-3-2e35aa80bd156f8b4385c478f3f3aaad.svg',
            '4': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/hair_shape/hair_shape-4_front-5f5ec5fe320d9b594fefad2ea0ba7eeb.svg',
            '5': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/hair_shape/hair_shape-5_front-271e99cdd0a15b1ef2f647b5f780ceef.svg',
            '6': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/hair_shape/hair_shape-6_front-98b42b0bc7b2c00345d44a7488a4e4ed.svg',
            '7': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/hair_shape/hair_shape-7_front-9b9e39833aa1e8a5498079f13ea24be4.svg',
            '8': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/hair_shape/hair_shape-8_front-35ee787ec17dc8871834427e22b5cbb4.svg',
            '9': 'https://assets.uchi.ru/assets/student/avatar_constructor/avatar/hair_shape/hair_shape-9-ab543b554970162ecd37b97372b44cd8.svg'
        };
        
        function findNameElement() {
            let selectors = ['.sc-iJuWdM', '.s-headbar--profile-name', '.elements__StudentNameWrapper span'];
            for(let s of selectors) {
                let el = document.querySelector(s);
                if(el && el.textContent.trim()) return el;
            }
            return null;
        }
        
        function getCurrentName() {
            let el = findNameElement();
            return el ? el.textContent.trim() : 'Имя';
        }
        
        function saveCurrentState() {
            let nameEl = findNameElement();
            if(nameEl) savedName = nameEl.textContent;
            let clothesEl = document.querySelector('.avatar__part_clothes svg');
            if(clothesEl) savedClothes = clothesEl.outerHTML;
            let hairEl = document.querySelector('.avatar__part_hair-front svg');
            if(hairEl) savedHair = hairEl.outerHTML;
        }
        
        function restoreName() {
            let nameEl = findNameElement();
            if(nameEl && savedName) {
                nameEl.textContent = savedName;
                showMessage('Имя восстановлено');
            } else {
                showMessage('Нечего восстанавливать', true);
            }
        }
        
        function restoreClothes() {
            if(savedClothes) {
                waitForElement('.avatar__part_clothes', (clothesPart) => {
                    clothesPart.innerHTML = savedClothes;
                    showMessage('Одежда восстановлена');
                });
            } else {
                showMessage('Нечего восстанавливать', true);
            }
        }
        
        function restoreHair() {
            if(savedHair) {
                waitForElement('.avatar__part_hair-front', (hairPart) => {
                    hairPart.innerHTML = savedHair;
                    showMessage('Причёска восстановлена');
                });
            } else {
                showMessage('Нечего восстанавливать', true);
            }
        }
        
        waitForElement('.avatar__part_clothes', () => {
            // Сохраняем начальное состояние
            setTimeout(saveCurrentState, 500);
            
            modContainer.innerHTML = `
                <div class="sw-input-group">
                    <input type="text" id="sw-name-input" placeholder="${getCurrentName()}">
                    <button id="sw-apply-name">✓</button>
                    <button id="sw-reset-name" class="sw-reset-btn">⟳</button>
                </div>
                <div class="sw-input-group">
                    <div class="sw-custom-select">
                        <select id="sw-clothes-select">
                            <option value="0">Без одежды</option>
                            ${Object.keys(clothesUrls).map(i => `<option value="${i}">Вариант ${i}</option>`).join('')}
                        </select>
                    </div>
                    <button id="sw-apply-clothes">✓</button>
                    <button id="sw-reset-clothes" class="sw-reset-btn">⟳</button>
                </div>
                <div class="sw-input-group">
                    <div class="sw-custom-select">
                        <select id="sw-hair-select">
                            <option value="0">Без причёски</option>
                            ${Object.keys(hairUrls).map(i => `<option value="${i}">Вариант ${i}</option>`).join('')}
                        </select>
                    </div>
                    <button id="sw-apply-hair">✓</button>
                    <button id="sw-reset-hair" class="sw-reset-btn">⟳</button>
                </div>
                <div class="sw-color-row" id="sw-hair-colors">
                    <div class="sw-color-option" style="background:#212121" title="Чёрный"></div>
                    <div class="sw-color-option" style="background:#8B4513" title="Каштан"></div>
                    <div class="sw-color-option" style="background:#D2691E" title="Рыжий"></div>
                    <div class="sw-color-option" style="background:#FFD700" title="Золотистый"></div>
                    <div class="sw-color-option" style="background:#C0C0C0" title="Седой"></div>
                    <div class="sw-color-option" style="background:#FF6347" title="Красный"></div>
                    <div class="sw-color-option" style="background:#9400D3" title="Фиолетовый"></div>
                    <div class="sw-color-option" style="background:#00BFFF" title="Голубой"></div>
                </div>
            `;
            
            document.getElementById('sw-apply-name').addEventListener('click', () => {
                let input = document.getElementById('sw-name-input');
                let newName = input.value.trim();
                if(!newName) {
                    showMessage('Введите имя', true);
                    return;
                }
                let nameEl = findNameElement();
                if(nameEl) {
                    nameEl.textContent = newName;
                    showMessage('Имя изменено');
                    input.value = '';
                    input.placeholder = getCurrentName();
                    saveCurrentState();
                } else {
                    showMessage('Элемент с именем не найден', true);
                }
            });
            
            document.getElementById('sw-reset-name').addEventListener('click', restoreName);
            
            document.getElementById('sw-apply-clothes').addEventListener('click', () => {
                let value = document.getElementById('sw-clothes-select').value;
                waitForElement('.avatar__part_clothes', (clothesPart) => {
                    if(value === '0') {
                        clothesPart.innerHTML = '';
                        showMessage('Одежда убрана');
                    } else if(clothesUrls[value]) {
                        fetch(clothesUrls[value]).then(r => r.text()).then(svgContent => {
                            let newSvg = document.createElement('div');
                            newSvg.innerHTML = svgContent;
                            let svgElem = newSvg.querySelector('svg');
                            if(svgElem) {
                                svgElem.setAttribute('class', 'avatar_svg');
                                clothesPart.innerHTML = '';
                                clothesPart.appendChild(svgElem);
                                showMessage('Одежда изменена');
                                saveCurrentState();
                            }
                        }).catch(() => showMessage('Ошибка загрузки', true));
                    }
                });
            });
            
            document.getElementById('sw-reset-clothes').addEventListener('click', restoreClothes);
            
            document.getElementById('sw-apply-hair').addEventListener('click', () => {
                let value = document.getElementById('sw-hair-select').value;
                waitForElement('.avatar__part_hair-front', (hairPart) => {
                    if(value === '0') {
                        hairPart.innerHTML = '';
                        showMessage('Причёска убрана');
                    } else if(hairUrls[value]) {
                        fetch(hairUrls[value]).then(r => r.text()).then(svgContent => {
                            let newSvg = document.createElement('div');
                            newSvg.innerHTML = svgContent;
                            let svgElem = newSvg.querySelector('svg');
                            if(svgElem) {
                                svgElem.setAttribute('class', 'avatar_svg');
                                hairPart.innerHTML = '';
                                hairPart.appendChild(svgElem);
                                showMessage('Причёска изменена');
                                saveCurrentState();
                            }
                        }).catch(() => showMessage('Ошибка загрузки', true));
                    }
                });
            });
            
            document.getElementById('sw-reset-hair').addEventListener('click', restoreHair);
            
            document.querySelectorAll('#sw-hair-colors .sw-color-option').forEach(colorEl => {
                colorEl.addEventListener('click', () => {
                    let color = colorEl.style.background;
                    waitForElement('.avatar__part_hair-front', (hairPart) => {
                        let svg = hairPart.querySelector('svg');
                        if(svg) {
                            svg.style.fill = color;
                            svg.querySelectorAll('path').forEach(p => p.style.fill = color);
                            showMessage('Цвет волос изменён');
                            saveCurrentState();
                        }
                    });
                });
            });
        });
    })();
    
    // ========== МОДУЛЬ МОНЕТЫ ==========
    (function() {
        let section = document.createElement('div');
        section.className = 'sw-section';
        section.innerHTML = '<h4>МОНЕТЫ</h4><div class="sw-module-content"><div class="sw-loading">Загрузка...</div></div>';
        swContainer.appendChild(section);
        let modContainer = section.querySelector('.sw-module-content');
        
        let savedCoins = '0';
        
        function findCoinElement() {
            let selectors = [
                '.character-room-wallet__counter',
                '.sc-iBaPNL .ds-text',
                '#ssi-header-coin-image + .ds-text',
                '[data-testid="headbar-characterroom"] .ds-text'
            ];
            for(let s of selectors) {
                let el = document.querySelector(s);
                if(el) return el;
            }
            return null;
        }
        
        function getCurrentCoins() {
            let el = findCoinElement();
            return el ? el.textContent.trim() : '0';
        }
        
        function saveCoins() {
            let el = findCoinElement();
            if(el) savedCoins = el.textContent;
        }
        
        function restoreCoins() {
            let coinEl = findCoinElement();
            if(coinEl && savedCoins) {
                coinEl.textContent = savedCoins;
                showMessage('Монеты восстановлены');
            } else {
                showMessage('Нечего восстанавливать', true);
            }
        }
        
        waitForAnyElement([
            '.character-room-wallet__counter',
            '.sc-iBaPNL .ds-text',
            '#ssi-header-coin-image + .ds-text',
            '[data-testid="headbar-characterroom"] .ds-text'
        ], () => {
            setTimeout(saveCoins, 500);
            
            modContainer.innerHTML = `
                <div class="sw-input-group">
                    <input type="text" id="sw-coins-input" placeholder="${getCurrentCoins()}">
                    <button id="sw-apply-coins">✓</button>
                    <button id="sw-reset-coins" class="sw-reset-btn">⟳</button>
                </div>
            `;
            
            document.getElementById('sw-apply-coins').addEventListener('click', () => {
                let input = document.getElementById('sw-coins-input');
                let coins = input.value;
                if(coins === '') {
                    showMessage('Введите число', true);
                    return;
                }
                let coinElement = findCoinElement();
                if(coinElement) {
                    coinElement.textContent = coins;
                    showMessage('Монеты изменены');
                    input.value = '';
                    input.placeholder = getCurrentCoins();
                    saveCoins();
                } else {
                    showMessage('Элемент с монетами не найден', true);
                }
            });
            
            document.getElementById('sw-reset-coins').addEventListener('click', restoreCoins);
        });
    })();
    
    // ========== МОДУЛЬ НАСТРОЙКИ ==========
    (function() {
        let section = document.createElement('div');
        section.className = 'sw-section';
        section.innerHTML = '<h4>НАСТРОЙКИ</h4><div class="sw-module-content"></div>';
        swContainer.appendChild(section);
        let modContainer = section.querySelector('.sw-module-content');
        
        let menuThemes = {
            'Фиолетовый': 'rgba(10,8,20,0.95)',
            'Красный': 'rgba(40,10,15,0.95)',
            'Зелёный': 'rgba(10,30,15,0.95)',
            'Голубой': 'rgba(10,25,40,0.95)',
            'Оранжевый': 'rgba(40,20,10,0.95)'
        };
        
        function applyMenuColor(color) {
            swMenu.style.background = color;
            showMessage('Цвет меню изменён');
        }
        
        function resetMenuColor() {
            swMenu.style.background = 'rgba(10,8,20,0.95)';
            showMessage('Цвет меню сброшен');
        }
        
        let profiles = { current: null, list: {} };
        
        function loadProfiles() {
            try {
                let saved = localStorage.getItem('sw_mod_profiles');
                if(saved) profiles = JSON.parse(saved);
            } catch(e) {}
        }
        
        function saveProfiles() {
            localStorage.setItem('sw_mod_profiles', JSON.stringify(profiles));
        }
        
        function updateProfileSelect() {
            let select = document.getElementById('sw-profile-select');
            if(!select) return;
            select.innerHTML = '<option value="">-- Выбрать профиль --</option>';
            for(let name in profiles.list) {
                select.innerHTML += `<option value="${name}" ${profiles.current === name ? 'selected' : ''}>${name}</option>`;
            }
        }
        
        function createProfile() {
            let name = document.getElementById('sw-profile-name').value.trim();
            if(!name) { showMessage('Введите имя профиля', true); return; }
            if(profiles.list[name]) { showMessage('Профиль существует', true); return; }
            
            profiles.list[name] = {
                menuColor: swMenu.style.background
            };
            profiles.current = name;
            saveProfiles();
            updateProfileSelect();
            showMessage('Профиль создан: ' + name);
        }
        
        function deleteProfile() {
            let select = document.getElementById('sw-profile-select');
            let name = select.value;
            if(!name) { showMessage('Выберите профиль', true); return; }
            delete profiles.list[name];
            if(profiles.current === name) profiles.current = null;
            saveProfiles();
            updateProfileSelect();
            showMessage('Профиль удалён: ' + name);
        }
        
        function saveToProfile() {
            let select = document.getElementById('sw-profile-select');
            let name = select.value;
            if(!name) { showMessage('Выберите профиль', true); return; }
            if(!profiles.list[name]) { showMessage('Профиль не найден', true); return; }
            profiles.list[name].menuColor = swMenu.style.background;
            saveProfiles();
            showMessage('Профиль сохранён: ' + name);
        }
        
        function loadFromProfile() {
            let select = document.getElementById('sw-profile-select');
            let name = select.value;
            if(!name) { showMessage('Выберите профиль', true); return; }
            let p = profiles.list[name];
            if(!p) { showMessage('Профиль не найден', true); return; }
            if(p.menuColor) swMenu.style.background = p.menuColor;
            profiles.current = name;
            saveProfiles();
            updateProfileSelect();
            showMessage('Профиль загружен: ' + name);
        }
        
        loadProfiles();
        
        modContainer.innerHTML = `
            <div class="sw-input-group">
                <select id="sw-menu-color">
                    <option value="rgba(10,8,20,0.95)">Фиолетовый</option>
                    <option value="rgba(40,10,15,0.95)">Красный</option>
                    <option value="rgba(10,30,15,0.95)">Зелёный</option>
                    <option value="rgba(10,25,40,0.95)">Голубой</option>
                    <option value="rgba(40,20,10,0.95)">Оранжевый</option>
                </select>
                <button id="sw-apply-menu-color">✓</button>
                <button id="sw-reset-menu-color" class="sw-reset-btn">⟳</button>
            </div>
            <div class="sw-input-group">
                <input type="text" id="sw-profile-name" placeholder="Имя профиля">
                <select id="sw-profile-select"></select>
            </div>
            <div class="sw-input-group">
                <button id="sw-profile-create">Создать</button>
                <button id="sw-profile-delete">Удалить</button>
                <button id="sw-profile-save">Сохранить</button>
                <button id="sw-profile-load">Загрузить</button>
            </div>
        `;
        
        document.getElementById('sw-apply-menu-color').addEventListener('click', () => {
            let color = document.getElementById('sw-menu-color').value;
            applyMenuColor(color);
        });
        document.getElementById('sw-reset-menu-color').addEventListener('click', resetMenuColor);
        document.getElementById('sw-profile-create').addEventListener('click', createProfile);
        document.getElementById('sw-profile-delete').addEventListener('click', deleteProfile);
        document.getElementById('sw-profile-save').addEventListener('click', saveToProfile);
        document.getElementById('sw-profile-load').addEventListener('click', loadFromProfile);
        
        updateProfileSelect();
    })();
    
    // ========== ДРАГ-Н-ДРОП ==========
    let dragActive = false;
    let dragStartX, dragStartY, ballStartLeft, ballStartTop;
    
    swBall.addEventListener('mousedown', (e) => {
        dragActive = true;
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        ballStartLeft = swBall.offsetLeft;
        ballStartTop = swBall.offsetTop;
        swBall.style.cursor = 'grabbing';
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', (e) => {
        if(!dragActive) return;
        let newLeft = ballStartLeft + (e.clientX - dragStartX);
        let newTop = ballStartTop + (e.clientY - dragStartY);
        newLeft = Math.max(0, Math.min(window.innerWidth - swBall.offsetWidth, newLeft));
        newTop = Math.max(0, Math.min(window.innerHeight - swBall.offsetHeight, newTop));
        swBall.style.left = newLeft + 'px';
        swBall.style.top = newTop + 'px';
        swBall.style.right = 'auto';
        swBall.style.bottom = 'auto';
    });
    
    document.addEventListener('mouseup', () => {
        dragActive = false;
        swBall.style.cursor = 'grab';
    });
    
    let menuDragActive = false;
    let menuDragStartX, menuDragStartY, menuStartLeft, menuStartTop;
    let menuHeader = swMenu.querySelector('.sw-header');
    
    menuHeader.addEventListener('mousedown', (e) => {
        if(e.target.tagName === 'BUTTON') return;
        menuDragActive = true;
        menuDragStartX = e.clientX;
        menuDragStartY = e.clientY;
        menuStartLeft = swMenu.offsetLeft;
        menuStartTop = swMenu.offsetTop;
        swMenu.style.cursor = 'grabbing';
        swMenu.style.transform = 'none';
        e.preventDefault();
    });
    
    document.addEventListener('mousemove', (e) => {
        if(!menuDragActive) return;
        let newLeft = menuStartLeft + (e.clientX - menuDragStartX);
        let newTop = menuStartTop + (e.clientY - menuDragStartY);
        newLeft = Math.max(-swMenu.offsetWidth + 50, Math.min(window.innerWidth - 50, newLeft));
        newTop = Math.max(0, Math.min(window.innerHeight - 100, newTop));
        swMenu.style.left = newLeft + 'px';
        swMenu.style.top = newTop + 'px';
    });
    
    document.addEventListener('mouseup', () => {
        menuDragActive = false;
        swMenu.style.cursor = 'default';
    });
    
    let menuVisible = true;
    swBall.addEventListener('click', () => {
        if(menuVisible) {
            swMenu.style.display = 'none';
            menuVisible = false;
        } else {
            swMenu.style.display = 'block';
            if(swMenu.style.left && swMenu.style.left !== 'auto') {
                swMenu.style.transform = 'none';
            } else {
                swMenu.style.left = '50%';
                swMenu.style.top = '50%';
                swMenu.style.transform = 'translate(-50%, -50%)';
            }
            menuVisible = true;
        }
    });
    
    swMenu.querySelector('.sw-close-menu').addEventListener('click', () => {
        swMenu.style.display = 'none';
        menuVisible = false;
    });
    
    console.log('%c★ SW MOD загружен ★', 'color:#ff00cc;font-size:14px;font-weight:bold');
})();
