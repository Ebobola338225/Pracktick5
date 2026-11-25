// MPA-версія: окремий HTML-файл на кожен розділ.
// При кожному переході браузер завантажує новий документ, тому цей скрипт
// запускається заново і таймер сесії щоразу починає з 00:00.
const sessionOut = document.querySelector('[data-part="session-time"]');
const started = Date.now();

function tick() {
  const total = Math.floor((Date.now() - started) / 1000);
  sessionOut.textContent = `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
  sessionOut.dateTime = `PT${total}S`;
}

window.setInterval(tick, 1000);
tick();
