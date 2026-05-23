(function(container, showMessage) {
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
    
    container.innerHTML = `
        <div class="sw-input-group">
            <button id="sw-start-auto" style="background: linear-gradient(90deg, #00cc88, #00aa66);">▶ Запустить</button>
            <button id="sw-stop-auto" style="background: linear-gradient(90deg, #ff5500, #cc3300);">⏹ Остановить</button>
        </div>
    `;
    
    document.getElementById('sw-start-auto').addEventListener('click', startAutoPlay);
    document.getElementById('sw-stop-auto').addEventListener('click', stopAutoPlay);
})();
