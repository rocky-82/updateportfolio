function updateClock() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById('clock').textContent = `${date} ${time}`;
}

setInterval(updateClock, 1000);
updateClock();