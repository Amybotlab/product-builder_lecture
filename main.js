document.getElementById('generate').addEventListener('click', () => {
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }
    document.getElementById('numbers').textContent = Array.from(numbers).join(', ');
});
