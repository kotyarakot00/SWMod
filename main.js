let container = SW.container;

SW.section('МОНЕТЫ', SW.group([
    SW.input('Введите число', '0'),
    SW.button('Применить', () => {
        let input = container.querySelector('#sw-modules-container input');
        if(!input) return;
        let el = document.querySelector('.character-room-wallet__counter, .sc-iBaPNL .ds-text, #ssi-header-coin-image + .ds-text');
        if(el) {
            el.textContent = input.value;
            SW.toast('Монеты изменены!');
        } else {
            SW.toast('Элемент не найден', true);
        }
    })
]));

SW.section('ПЕРСОНАЖ', SW.group([
    SW.input('Новое имя'),
    SW.button('Применить', () => {
        let input = container.querySelector('#sw-modules-container input');
        if(!input) return;
        let nameEl = document.querySelector('.sc-iJuWdM, .s-headbar--profile-name, .elements__StudentNameWrapper span');
        if(nameEl) {
            nameEl.textContent = input.value;
            SW.toast('Имя изменено!');
        } else {
            SW.toast('Элемент не найден', true);
        }
    })
]));

SW.section('ФОН', SW.group([
    SW.button('Тёмный', () => {
        document.body.style.background = '#0a0814';
        SW.toast('Фон изменён');
    }),
    SW.button('Светлый', () => {
        document.body.style.background = '#ffffff';
        SW.toast('Фон изменён');
    }),
    SW.button('Сбросить', () => {
        document.body.style.background = '';
        SW.toast('Фон сброшен');
    }, 'reset')
]));

SW.section('БАННЕРЫ', SW.group([
    SW.button('Скрыть', () => {
        document.querySelectorAll('[class*="banner"], [class*="ad"], [class*="promo"], .ns_notification, .banner_weekend').forEach(el => el.style.display = 'none');
        SW.toast('Баннеры скрыты');
    }),
    SW.button('Показать', () => {
        document.querySelectorAll('[class*="banner"], [class*="ad"], [class*="promo"], .ns_notification, .banner_weekend').forEach(el => el.style.display = '');
        SW.toast('Баннеры показаны');
    })
]));

SW.section('ЦВЕТ МЕНЮ', SW.group([
    SW.colorRow(['#1a1a2e', '#2d1b2e', '#1b2d2d', '#1b2a3d', '#2d2d1b'], (color) => {
        SW.menu.style.background = color;
        SW.toast('Цвет изменён');
    })
]));

SW.toast('Мод загружен');
