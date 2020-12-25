const body = document.querySelector('body');
const title = document.querySelector('.title');
const list = document.querySelector('.list');

body.addEventListener('keydown', e => {
    title.style.display = 'none';
    list.style.display = 'flex';

    list.innerHTML = `
        <div class="item">
            <div class="item-text">event.key</div>
            <div class="item-code">${e.key === ' ' ? 'Space' : e.key}</div>
        </div>
        <div class="item">
            <div class="item-text">event.keyCode</div>
            <div class="item-code">${e.keyCode}</div>
        </div>
        <div class="item">
            <div class="item-text">event.code</div>
            <div class="item-code">${e.code}</div>
        </div>
    `;
});
