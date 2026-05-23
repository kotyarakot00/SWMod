(function(container, showMessage) {
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
    
    container.innerHTML = `
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
        let coinEl = findCoinElement();
        if(coinEl) {
            coinEl.textContent = coins;
            showMessage('Монеты изменены');
            input.value = '';
            input.placeholder = getCurrentCoins();
        } else {
            showMessage('Элемент с монетами не найден', true);
        }
    });
})();
