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
            <div style="text-align:center; padding:20px;">Загрузка...</div>
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
    
    let container = document.getElementById('sw-modules-container');
    
    // ========== МОДУЛЬ ПЕРСОНАЖ ==========
    (function() {
        let section = document.createElement('div');
        section.className = 'sw-section';
        section.innerHTML = '<h4>ПЕРСОНАЖ</h4><div class="sw-module-content">Загрузка...</div>';
        container.appendChild(section);
        let modContainer = section.querySelector('.sw-module-content');
        
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
        
        modContainer.innerHTML = '<div style="text-align:center; padding:20px;">⏳ Загрузка...</div>';
        
        waitForElement('.avatar__part_clothes', () => {
            modContainer.innerHTML = `
                <div class="sw-input-group">
                    <input type="text" id="sw-name-input" placeholder="${getCurrentName()}">
                    <button id="sw-apply-name">✓</button>
                </div>
                <div class="sw-input-group">
                    <div class="sw-custom-select">
                        <select id="sw-clothes-select">
                            <option value="0">Без одежды</option>
                            ${Object.keys(clothesUrls).map(i => `<option value="${i}">Вариант ${i}</option>`).join('')}
                        </select>
                    </div>
                    <button id="sw-apply-clothes">✓</button>
                </div>
                <div class="sw-input-group">
                    <div class="sw-custom-select">
                        <select id="sw-hair-select">
                            <option value="0">Без причёски</option>
                            ${Object.keys(hairUrls).map(i => `<option value="${i}">Вариант ${i}</option>`).join('')}
                        </select>
                    </div>
                    <button id="sw-apply-hair">✓</button>
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
                    showMessage('Имя изменено!');
                    input.value = '';
                    input.placeholder = getCurrentName();
                } else {
                    showMessage('Элемент с именем не найден', true);
                }
            });
            
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
                            }
                        }).catch(() => showMessage('Ошибка загрузки', true));
                    }
                });
            });
            
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
                            }
                        }).catch(() => showMessage('Ошибка загрузки', true));
                    }
                });
            });
            
            document.querySelectorAll('#sw-hair-colors .sw-color-option').forEach(colorEl => {
                colorEl.addEventListener('click', () => {
                    let color = colorEl.style.background;
                    waitForElement('.avatar__part_hair-front', (hairPart) => {
                        let svg = hairPart.querySelector('svg');
                        if(svg) {
                            svg.style.fill = color;
                            svg.querySelectorAll('path').forEach(p => p.style.fill = color);
                            showMessage('Цвет волос изменён');
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
        section.innerHTML = '<h4>МОНЕТЫ</h4><div class="sw-module-content">Загрузка...</div>';
        container.appendChild(section);
        let modContainer = section.querySelector('.sw-module-content');
        
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
        
        modContainer.innerHTML = '<div style="text-align:center; padding:20px;">⏳ Загрузка...</div>';
        
        waitForAnyElement([
            '.character-room-wallet__counter',
            '.sc-iBaPNL .ds-text',
            '#ssi-header-coin-image + .ds-text',
            '[data-testid="headbar-characterroom"] .ds-text'
        ], () => {
            modContainer.innerHTML = `
                <div class="sw-input-group">
                    <input type="text" id="sw-coins-input" placeholder="${getCurrentCoins()}">
                    <button id="sw-apply-coins">✓</button>
                </div>
            `;
            
            document.getElementById('sw-apply-coins').addEventListener('click', () => {
                let input = document.getElementById('sw-coins-input');
                let coins = input.value;
                if(coins === '') {
                    showMessage('Введите что-нибудь', true);
                    return;
                }
                let coinElement = findCoinElement();
                if(coinElement) {
                    coinElement.textContent = coins;
                    showMessage('Монеты изменены');
                    input.value = '';
                    input.placeholder = getCurrentCoins();
                } else {
                    showMessage('Элемент с монетами не найден', true);
                }
            });
        });
    })();
    
    // ========== МОДУЛЬ КАРТОЧКИ ==========
    (function() {
        let section = document.createElement('div');
        section.className = 'sw-section';
        section.innerHTML = '<h4>КАРТОЧКИ</h4><div class="sw-module-content">Загрузка...</div>';
        container.appendChild(section);
        let modContainer = section.querySelector('.sw-module-content');
        
        let autoPlayInterval = null;
        let isAutoPlaying = false;
        
        function clickNextButton() {
            let buttons = document.querySelectorAll('button, .next-button, [class*="next"], [class*="continue"]');
            for(let btn of buttons) {
                let text = btn.textContent.toLowerCase();
                if(text.includes('далее') || text.includes('дальше') || text.includes('продолжить') || text.includes('next')) {
                    btn.click();
                    return true;
                }
            }
            return false;
        }
        
        function tryAnswer() {
            let options = document.querySelectorAll('.answer-option, .variant, [class*="option"], [class*="choice"]');
            for(let opt of options) {
                if(!opt.classList.contains('disabled') && !opt.classList.contains('selected')) {
                    opt.click();
                    setTimeout(() => clickNextButton(), 500);
                    return true;
                }
            }
            return false;
        }
        
        function autoPlayStep() {
            if(tryAnswer()) return;
            clickNextButton();
        }
        
        function startAutoPlay() {
            if(isAutoPlaying) return;
            isAutoPlaying = true;
            autoPlayInterval = setInterval(() => autoPlayStep(), 2500);
            showMessage('Автопрохождение включено');
        }
        
        function stopAutoPlay() {
            if(autoPlayInterval) {
                clearInterval(autoPlayInterval);
                autoPlayInterval = null;
            }
            isAutoPlaying = false;
            showMessage('Автопрохождение остановлено');
        }
        
        modContainer.innerHTML = `
            <div class="sw-input-group">
                <button id="sw-start-auto" style="background: linear-gradient(90deg, #00cc88, #00aa66);">▶ Запустить</button>
                <button id="sw-stop-auto" style="background: linear-gradient(90deg, #ff5500, #cc3300);">⏹ Остановить</button>
            </div>
        `;
        
        document.getElementById('sw-start-auto').addEventListener('click', startAutoPlay);
        document.getElementById('sw-stop-auto').addEventListener('click', stopAutoPlay);
    })();
    
    // ========== МОДУЛЬ КАСТОМИЗАЦИЯ ==========
    (function() {
        let section = document.createElement('div');
        section.className = 'sw-section';
        section.innerHTML = '<h4>КАСТОМИЗАЦИЯ</h4><div class="sw-module-content"></div>';
        container.appendChild(section);
        let modContainer = section.querySelector('.sw-module-content');
        
        let originalBg = document.body.style.background;
        
        modContainer.innerHTML = `
            <div class="sw-input-group">
                <input type="color" id="sw-bg-color" value="#0f0c29">
                <button id="sw-apply-bg">Цвет фона</button>
            </div>
            <div class="sw-input-group">
                <input type="text" id="sw-bg-image" placeholder="URL картинки">
                <button id="sw-apply-image">Фон картинка</button>
            </div>
            <div class="sw-input-group">
                <button id="sw-hide-banners">Скрыть баннеры</button>
                <button id="sw-show-banners">Показать баннеры</button>
            </div>
            <div class="sw-input-group">
                <button id="sw-reset-bg">Сбросить фон</button>
            </div>
        `;
        
        document.getElementById('sw-apply-bg').addEventListener('click', () => {
            let color = document.getElementById('sw-bg-color').value;
            document.body.style.background = color;
            document.body.style.backgroundSize = 'cover';
            showMessage('Цвет фона изменён');
        });
        
        document.getElementById('sw-apply-image').addEventListener('click', () => {
            let url = document.getElementById('sw-bg-image').value.trim();
            if(!url) {
                showMessage('Введите URL картинки', true);
                return;
            }
            document.body.style.background = 'url(' + url + ') center/cover no-repeat';
            showMessage('Фон изменён');
        });
        
        document.getElementById('sw-reset-bg').addEventListener('click', () => {
            document.body.style.background = originalBg;
            showMessage('Фон сброшен');
        });
        
        document.getElementById('sw-hide-banners').addEventListener('click', () => {
            let banners = document.querySelectorAll('[class*="banner"], [class*="ad"], [class*="promo"], .ns_notification, .banner_weekend');
            banners.forEach(b => b.style.display = 'none');
            showMessage('Баннеры скрыты');
        });
        
        document.getElementById('sw-show-banners').addEventListener('click', () => {
            let banners = document.querySelectorAll('[class*="banner"], [class*="ad"], [class*="promo"], .ns_notification, .banner_weekend');
            banners.forEach(b => b.style.display = '');
            showMessage('Баннеры показаны');
        });
    })();
    
    // ========== ДРАГ-Н-ДРОП ==========
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
