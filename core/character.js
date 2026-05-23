(function(container, showMessage) {
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
    
    function getCurrentName() {
        let selectors = ['.sc-iJuWdM', '.s-headbar--profile-name', '.elements__StudentNameWrapper span'];
        for(let s of selectors) {
            let el = document.querySelector(s);
            if(el && el.textContent.trim()) return el.textContent.trim();
        }
        return 'Имя';
    }
    
    function findNameElement() {
        let selectors = ['.sc-iJuWdM', '.s-headbar--profile-name', '.elements__StudentNameWrapper span'];
        for(let s of selectors) {
            let el = document.querySelector(s);
            if(el && el.textContent.trim()) return el;
        }
        return null;
    }
    
    function getAvatarPart(partName) {
        return document.querySelector(`.avatar__part_${partName}`);
    }
    
    container.innerHTML = `
        <div class="sw-input-group">
            <input type="text" id="sw-name-input" placeholder="${getCurrentName()}">
            <button id="sw-apply-name">✓</button>
        </div>
        <div class="sw-input-group">
            <div class="sw-custom-select">
                <select id="sw-clothes-select">
                    <option value="0">Без одежды</option>
                    <option value="1">Вариант 1</option>
                    <option value="2">Вариант 2</option>
                    <option value="3">Вариант 3</option>
                    <option value="4">Вариант 4</option>
                    <option value="5">Вариант 5</option>
                    <option value="6">Вариант 6</option>
                    <option value="7">Вариант 7</option>
                    <option value="8">Вариант 8</option>
                    <option value="9">Вариант 9</option>
                    <option value="10">Вариант 10</option>
                    <option value="11">Вариант 11</option>
                    <option value="12">Вариант 12</option>
                    <option value="13">Вариант 13</option>
                    <option value="14">Вариант 14</option>
                    <option value="15">Вариант 15</option>
                    <option value="16">Вариант 16</option>
                    <option value="17">Вариант 17</option>
                    <option value="18">Вариант 18</option>
                    <option value="19">Вариант 19</option>
                    <option value="20">Вариант 20</option>
                    <option value="21">Вариант 21</option>
                    <option value="22">Вариант 22</option>
                </select>
            </div>
            <button id="sw-apply-clothes">✓</button>
        </div>
        <div class="sw-input-group">
            <div class="sw-custom-select">
                <select id="sw-hair-select">
                    <option value="0">Без причёски</option>
                    <option value="1">Вариант 1</option>
                    <option value="2">Вариант 2</option>
                    <option value="3">Вариант 3</option>
                    <option value="4">Вариант 4</option>
                    <option value="5">Вариант 5</option>
                    <option value="6">Вариант 6</option>
                    <option value="7">Вариант 7</option>
                    <option value="8">Вариант 8</option>
                    <option value="9">Вариант 9</option>
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
        let select = document.getElementById('sw-clothes-select');
        let value = select.value;
        let clothesPart = getAvatarPart('clothes');
        if(clothesPart) {
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
        } else {
            showMessage('Одежда не найдена', true);
        }
    });
    
    document.getElementById('sw-apply-hair').addEventListener('click', () => {
        let select = document.getElementById('sw-hair-select');
        let value = select.value;
        let hairPart = getAvatarPart('hair-front');
        if(hairPart) {
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
        } else {
            showMessage('Причёска не найдена', true);
        }
    });
    
    document.querySelectorAll('.sw-color-option').forEach(colorEl => {
        colorEl.addEventListener('click', () => {
            let color = colorEl.style.background;
            let hairPart = getAvatarPart('hair-front');
            if(hairPart) {
                let svg = hairPart.querySelector('svg');
                if(svg) {
                    svg.style.fill = color;
                    svg.querySelectorAll('path').forEach(p => p.style.fill = color);
                    showMessage('Цвет волос изменён');
                }
            }
        });
    });
})();
