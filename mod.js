(function(){
    let style = document.createElement('style');
    style.textContent = `
        * {
            scrollbar-width: none;
            -ms-overflow-style: none;
        }
        .sw-menu::-webkit-scrollbar, .sw-content::-webkit-scrollbar, .sw-module-content::-webkit-scrollbar {
            display: none;
            width: 0;
            height: 0;
        }
        
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
            width: 420px;
            max-height: 85vh;
            overflow-y: auto;
            background: var(--sw-bg, rgba(10,8,20,0.95));
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
        
        .sw-content {
            padding: 20px;
            overflow-y: auto;
            max-height: 65vh;
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
        
        .sw-subsection {
            margin: 12px 0 8px 8px;
            padding-left: 8px;
            border-left: 2px solid rgba(255,255,255,0.2);
        }
        
        .sw-subsection h5 {
            margin: 0 0 8px 0;
            font-size: 12px;
            color: rgba(255,255,255,0.7);
            letter-spacing: 0.5px;
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
        
        .sw-reset-btn {
            background: rgba(30,30,40,0.6) !important;
            border: 1px dashed rgba(255,255,255,0.4) !important;
            color: rgba(255,255,255,0.7) !important;
        }
        
        .sw-reset-btn:hover {
            background: rgba(50,50,65,0.8) !important;
            border: 1px dashed rgba(255,255,255,0.6) !important;
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
        
        .sw-profile-buttons {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
            margin-bottom: 10px;
        }
        
        .sw-profile-buttons button {
            flex: 1;
            padding: 8px 12px;
            font-size: 12px;
        }
        
        .sw-footer {
            text-align: center;
            font-size: 11px;
            color: rgba(255,255,255,0.5);
            padding: 12px 10px;
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
        
        .sw-shape-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        }
        
        .sw-shape {
            position: absolute;
            opacity: 0.08;
            pointer-events: none;
        }
        
        option {
            background: #1a1a2e;
            color: white;
        }
    `;
    document.head.appendChild(style);
    
    if(window.swBall) window.swBall.remove();
    if(window.swMenu) window.swMenu.remove();
    if(window.swShapeContainer) window.swShapeContainer.remove();
    
    // Контейнер для фигур на фоне
    let shapeContainer = document.createElement('div');
    shapeContainer.className = 'sw-shape-bg';
    shapeContainer.id = 'sw-shape-bg';
    document.body.appendChild(shapeContainer);
    window.swShapeContainer = shapeContainer;
    
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
        <div class="sw-content" id="sw-modules-container"></div>
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
    
    // ========== СИСТЕМА ПРОФИЛЕЙ ==========
    let profiles = {
        current: null,
        list: {}
    };
    
    function loadProfiles() {
        try {
            let saved = localStorage.getItem('sw_mod_profiles');
            if(saved) {
                profiles = JSON.parse(saved);
            } else {
                profiles = { current: null, list: {} };
            }
        } catch(e) { console.warn(e); }
    }
    
    function saveProfiles() {
        localStorage.setItem('sw_mod_profiles', JSON.stringify(profiles));
    }
    
    function createProfile(name) {
        if(profiles.list[name]) {
            showMessage('Профиль с таким именем уже существует', true);
            return false;
        }
        profiles.list[name] = {
            name: name,
            theme: document.body.style.backgroundColor || '#0f0c29',
            menuBg: getComputedStyle(document.documentElement).getPropertyValue('--sw-bg').trim() || 'rgba(10,8,20,0.95)',
            coins: null,
            characterName: null
        };
        profiles.current = name;
        saveProfiles();
        showMessage('Профиль "' + name + '" создан');
        return true;
    }
    
    function deleteProfile(name) {
        if(!profiles.list[name]) {
            showMessage('Профиль не найден', true);
            return false;
        }
        delete profiles.list[name];
        if(profiles.current === name) {
            profiles.current = null;
        }
        saveProfiles();
        showMessage('Профиль "' + name + '" удалён');
        return true;
    }
    
    function saveToProfile(name) {
        if(!profiles.list[name]) {
            showMessage('Профиль не найден', true);
            return false;
        }
        profiles.list[name].theme = document.body.style.backgroundColor || '#0f0c29';
        profiles.list[name].menuBg = getComputedStyle(document.documentElement).getPropertyValue('--sw-bg').trim() || 'rgba(10,8,20,0.95)';
        let coinEl = document.querySelector('.character-room-wallet__counter, .sc-iBaPNL .ds-text');
        if(coinEl) profiles.list[name].coins = coinEl.textContent;
        let nameEl = document.querySelector('.sc-iJuWdM, .s-headbar--profile-name');
        if(nameEl) profiles.list[name].characterName = nameEl.textContent;
        saveProfiles();
        showMessage('Профиль "' + name + '" сохранён');
        return true;
    }
    
    function loadProfile(name) {
        if(!profiles.list[name]) {
            showMessage('Профиль не найден', true);
            return false;
        }
        let profile = profiles.list[name];
        document.body.style.backgroundColor = profile.theme;
        document.documentElement.style.setProperty('--sw-bg', profile.menuBg);
        if(profile.coins) {
            let coinEl = document.querySelector('.character-room-wallet__counter, .sc-iBaPNL .ds-text');
            if(coinEl) coinEl.textContent = profile.coins;
        }
        if(profile.characterName) {
            let nameEl = document.querySelector('.sc-iJuWdM, .s-headbar--profile-name');
            if(nameEl) nameEl.textContent = profile.characterName;
        }
        profiles.current = name;
        saveProfiles();
        showMessage('Профиль "' + name + '" загружен');
        return true;
    }
    
    // Функция для генерации фигур на фоне
    function generateShapes(shapeType, baseColor) {
        let container = document.getElementById('sw-shape-bg');
        container.innerHTML = '';
        if(shapeType === 'none') return;
        
        let colors = [baseColor, '#ff00cc', '#00ffff', '#ffaa00'];
        let shapesCount = 15;
        
        for(let i = 0; i < shapesCount; i++) {
            let shape = document.createElement('div');
            shape.className = 'sw-shape';
            let size = Math.random() * 80 + 20;
            let left = Math.random() * 100;
            let top = Math.random() * 100;
            let color = colors[Math.floor(Math.random() * colors.length)];
            let animation = Math.random() * 10 + 5;
            
            if(shapeType === 'circle') {
                shape.style.borderRadius = '50%';
                shape.style.backgroundColor = color;
                shape.style.width = size + 'px';
                shape.style.height = size + 'px';
            } else if(shapeType === 'triangle') {
                shape.style.width = '0';
                shape.style.height = '0';
                shape.style.borderLeft = (size/2) + 'px solid transparent';
                shape.style.borderRight = (size/2) + 'px solid transparent';
                shape.style.borderBottom = size + 'px solid ' + color;
                shape.style.backgroundColor = 'transparent';
            } else if(shapeType === 'cross') {
                shape.style.width = size + 'px';
                shape.style.height = size + 'px';
                shape.style.background = `linear-gradient(45deg, transparent 45%, ${color} 45%, ${color} 55%, transparent 55%),
                                          linear-gradient(-45deg, transparent 45%, ${color} 45%, ${color} 55%, transparent 55%)`;
                shape.style.backgroundColor = 'transparent';
            }
            
            shape.style.left = left + '%';
            shape.style.top = top + '%';
            shape.style.animation = `float ${animation}s infinite ease-in-out`;
            container.appendChild(shape);
        }
    }
    
    let container = document.getElementById('sw-modules-container');
    
    // ========== МОДУЛЬ ПЕРСОНАЖ ==========
    (function() {
        let section = document.createElement('div');
        section.className = 'sw-section';
        section.innerHTML = '<h4>ПЕРСОНАЖ</h4><div class="sw-module-content"><div class="sw-loading">⏳ Загрузка...</div></div>';
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
        
        function resetCharacter() {
            waitForElement('.avatar__part_clothes', (clothesPart) => {
                clothesPart.innerHTML = '';
                showMessage('Одежда сброшена');
            });
            waitForElement('.avatar__part_hair-front', (hairPart) => {
                hairPart.innerHTML = '';
                showMessage('Причёска сброшена');
            });
        }
        
        waitForElement('.avatar__part_clothes', () => {
            modContainer.innerHTML = `
                <div class="sw-input-group">
                    <input type="text" id="sw-name-input" placeholder="${getCurrentName()}">
                    <button id="sw-apply-name">✓</button>
                    <button id="sw-reset-name" class="sw-reset-btn">↺</button>
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
                <div class="sw-input-group">
                    <button id="sw-reset-character" class="sw-reset-btn">Восстановить персонажа</button>
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
            
            document.getElementById('sw-reset-name').addEventListener('click', () => {
                let nameEl = findNameElement();
                if(nameEl) {
                    nameEl.textContent = 'Имя';
                    showMessage('Имя сброшено');
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
            
            document.getElementById('sw-reset-character').addEventListener('click', resetCharacter);
            
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
        section.innerHTML = '<h4>МОНЕТЫ</h4><div class="sw-module-content"><div class="sw-loading">⏳ Загрузка...</div></div>';
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
        
        function resetCoins() {
            let coinEl = findCoinElement();
            if(coinEl) {
                coinEl.textContent = '0';
                showMessage('Монеты сброшены');
            }
        }
        
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
                    <button id="sw-reset-coins" class="sw-reset-btn">↺</button>
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
                } else {
                    showMessage('Элемент с монетами не найден', true);
                }
            });
            
            document.getElementById('sw-reset-coins').addEventListener('click', resetCoins);
        });
    })();
    
    // ========== МОДУЛЬ КАСТОМИЗАЦИЯ ==========
    (function() {
        let section = document.createElement('div');
        section.className = 'sw-section';
        section.innerHTML = '<h4>КАСТОМИЗАЦИЯ</h4><div class="sw-module-content"></div>';
        container.appendChild(section);
        let modContainer = section.querySelector('.sw-module-content');
        
        let originalBg = document.body.style.backgroundColor;
        
        let whiteListSelectors = [
            '.sw-ball', '.sw-menu', '.sw-header', '.sw-content', '.sw-section',
            '.sw-input-group', '.sw-custom-select', '.sw-color-row', '.sw-color-option',
            '.sw-footer', '#sw-toast', '.sw-module-content', '.sw-loading',
            '.sw-title', '.sw-controls', '.sw-close-menu', '#sw-shape-bg', '.sw-shape'
        ];
        
        function isWhiteListed(element) {
            while(element) {
                for(let selector of whiteListSelectors) {
                    if(element.matches && element.matches(selector)) {
                        return true;
                    }
                }
                element = element.parentElement;
            }
            return false;
        }
        
        function hideBanners() {
            let anketa = document.querySelectorAll('a[href*="anketolog"], #anketolog-widget-button, [id*="anketolog"], [class*="anketolog"]');
            anketa.forEach(el => { if(!isWhiteListed(el)) el.style.display = 'none'; });
            
            let adBanners = document.querySelectorAll('[class*="banner"], [class*="promo"], [class*="advertisement"], [class*="offer"], [class*="ad-"], [data-testid*="banner"]');
            adBanners.forEach(el => { if(!isWhiteListed(el)) el.style.display = 'none'; });
            
            let premiumBlocks = document.querySelectorAll('.sc-fwwElh, .sc-jSoCLE, .sc-nZgfj, .sc-eJReFG, .sc-euWMRQ, .sc-gpaZuh');
            premiumBlocks.forEach(el => { if(!isWhiteListed(el)) el.style.display = 'none'; });
            
            let statBlocks = document.querySelectorAll('[class*="students"], [class*="premium"], [class*="full-access"]');
            statBlocks.forEach(el => { 
                if(el.textContent && (el.textContent.includes('учеников') || el.textContent.includes('полным доступом') || el.textContent.includes('Premium'))) {
                    if(!isWhiteListed(el)) el.style.display = 'none';
                }
            });
            
            showMessage('Баннеры и опросы скрыты');
        }
        
        function showBanners() {
            let hiddenElements = document.querySelectorAll('[style*="display: none"]');
            hiddenElements.forEach(el => {
                if(!isWhiteListed(el)) {
                    el.style.display = '';
                }
            });
            showMessage('Баннеры и опросы показаны');
        }
        
        function resetBanners() {
            showBanners();
        }
        
        modContainer.innerHTML = `
            <div class="sw-subsection">
                <h5>🎨 ФОН</h5>
                <div class="sw-input-group">
                    <input type="color" id="sw-bg-color" value="#0f0c29">
                    <button id="sw-apply-bg">Применить</button>
                    <button id="sw-reset-bg" class="sw-reset-btn">↺</button>
                </div>
                <div class="sw-input-group">
                    <select id="sw-shape-type">
                        <option value="none">Без фигур</option>
                        <option value="circle">Круг</option>
                        <option value="triangle">Треугольник</option>
                        <option value="cross">Крестик</option>
                    </select>
                    <button id="sw-apply-shapes">Применить фигуры</button>
                </div>
            </div>
            <div class="sw-subsection">
                <h5>🚫 БАННЕРЫ</h5>
                <div class="sw-input-group">
                    <button id="sw-hide-banners">Скрыть баннеры/опросы</button>
                    <button id="sw-show-banners">Показать всё</button>
                    <button id="sw-reset-banners" class="sw-reset-btn">↺</button>
                </div>
            </div>
        `;
        
        document.getElementById('sw-apply-bg').addEventListener('click', () => {
            let color = document.getElementById('sw-bg-color').value;
            document.body.style.backgroundColor = color;
            document.body.style.backgroundImage = 'none';
            showMessage('Цвет фона изменён');
        });
        
        document.getElementById('sw-reset-bg').addEventListener('click', () => {
            document.body.style.backgroundColor = originalBg;
            document.body.style.backgroundImage = '';
            document.getElementById('sw-bg-color').value = '#0f0c29';
            showMessage('Фон сброшен');
        });
        
        document.getElementById('sw-apply-shapes').addEventListener('click', () => {
            let shapeType = document.getElementById('sw-shape-type').value;
            let bgColor = document.getElementById('sw-bg-color').value;
            generateShapes(shapeType, bgColor);
            showMessage('Фигуры на фоне обновлены');
        });
        
        document.getElementById('sw-hide-banners').addEventListener('click', hideBanners);
        document.getElementById('sw-show-banners').addEventListener('click', showBanners);
        document.getElementById('sw-reset-banners').addEventListener('click', resetBanners);
    })();
    
    // ========== МОДУЛЬ НАСТРОЙКИ МЕНЮ ==========
    (function() {
        let section = document.createElement('div');
        section.className = 'sw-section';
        section.innerHTML = '<h4>НАСТРОЙКИ МЕНЮ</h4><div class="sw-module-content"></div>';
        container.appendChild(section);
        let modContainer = section.querySelector('.sw-module-content');
        
        let menuThemes = {
            'Фиолетовый': 'rgba(10,8,20,0.95)',
            'Красный': 'rgba(40,10,15,0.95)',
            'Зелёный': 'rgba(10,30,15,0.95)',
            'Голубой': 'rgba(10,25,40,0.95)',
            'Оранжевый': 'rgba(40,20,10,0.95)',
            'Розовый': 'rgba(35,10,30,0.95)'
        };
        
        function applyMenuTheme(themeName) {
            let color = menuThemes[themeName];
            if(color) {
                document.documentElement.style.setProperty('--sw-bg', color);
                showMessage('Тема меню: ' + themeName);
            }
        }
        
        function resetMenuTheme() {
            document.documentElement.style.setProperty('--sw-bg', 'rgba(10,8,20,0.95)');
            showMessage('Тема меню сброшена');
        }
        
        loadProfiles();
        
        function updateProfileUI() {
            let profileSelect = document.getElementById('sw-profile-select');
            if(profileSelect) {
                let currentValue = profileSelect.value;
                profileSelect.innerHTML = '<option value="">-- Выберите профиль --</option>';
                for(let name in profiles.list) {
                    let selected = (profiles.current === name) ? 'selected' : '';
                    profileSelect.innerHTML += `<option value="${name}" ${selected}>${name}${profiles.current === name ? ' (текущий)' : ''}</option>`;
                }
                if(currentValue && profiles.list[currentValue]) {
                    profileSelect.value = currentValue;
                } else if(profiles.current) {
                    profileSelect.value = profiles.current;
                }
            }
        }
        
        modContainer.innerHTML = `
            <div class="sw-subsection">
                <h5>🎨 Тема меню</h5>
                <div class="sw-input-group">
                    <select id="sw-menu-theme">
                        <option value="Фиолетовый">Фиолетовый</option>
                        <option value="Красный">Красный</option>
                        <option value="Зелёный">Зелёный</option>
                        <option value="Голубой">Голубой</option>
                        <option value="Оранжевый">Оранжевый</option>
                        <option value="Розовый">Розовый</option>
                    </select>
                    <button id="sw-apply-theme">Применить</button>
                    <button id="sw-reset-theme" class="sw-reset-btn">↺</button>
                </div>
            </div>
            <div class="sw-subsection">
                <h5>💾 Профили сохранений</h5>
                <div class="sw-profile-buttons">
                    <button id="sw-create-profile" style="background: linear-gradient(90deg, #00cc88, #009966);">Создать</button>
                    <button id="sw-delete-profile" style="background: linear-gradient(90deg, #ff5500, #cc3300);">Удалить</button>
                    <button id="sw-save-profile" style="background: linear-gradient(90deg, #3399ff, #2266cc);">Перезаписать</button>
                    <button id="sw-load-profile" style="background: linear-gradient(90deg, #ffcc00, #cc9900);">Загрузить</button>
                </div>
                <div class="sw-input-group">
                    <input type="text" id="sw-profile-name" placeholder="Имя профиля">
                    <select id="sw-profile-select">
                        <option value="">-- Выберите профиль --</option>
                    </select>
                </div>
            </div>
        `;
        
        document.getElementById('sw-apply-theme').addEventListener('click', () => {
            let theme = document.getElementById('sw-menu-theme').value;
            applyMenuTheme(theme);
        });
        
        document.getElementById('sw-reset-theme').addEventListener('click', resetMenuTheme);
        
        document.getElementById('sw-create-profile').addEventListener('click', () => {
            let name = document.getElementById('sw-profile-name').value.trim();
            if(!name) {
                showMessage('Введите имя профиля', true);
                return;
            }
            createProfile(name);
            updateProfileUI();
        });
        
        document.getElementById('sw-delete-profile').addEventListener('click', () => {
            let select = document.getElementById('sw-profile-select');
            let name = select.value;
            if(!name) {
                showMessage('Выберите профиль', true);
                return;
            }
            deleteProfile(name);
            updateProfileUI();
            document.getElementById('sw-profile-name').value = '';
        });
        
        document.getElementById('sw-save-profile').addEventListener('click', () => {
            let select = document.getElementById('sw-profile-select');
            let name = select.value;
            if(!name) {
                showMessage('Выберите профиль', true);
                return;
            }
            saveToProfile(name);
            updateProfileUI();
        });
        
        document.getElementById('sw-load-profile').addEventListener('click', () => {
            let select = document.getElementById('sw-profile-select');
            let name = select.value;
            if(!name) {
                showMessage('Выберите профиль', true);
                return;
            }
            loadProfile(name);
            updateProfileUI();
        });
        
        updateProfileUI();
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
