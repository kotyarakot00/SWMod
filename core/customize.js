(function(container, showMessage) {
    let originalBg = document.body.style.background;
    
    container.innerHTML = `
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
