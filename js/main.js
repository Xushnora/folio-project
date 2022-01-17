let a = 0;
let b = 0;
document.getElementById('light').addEventListener('click', function () {
    document.body.classList.toggle('dark');
    if (a == 0) {
        this.textContent = 'dark'
        a++;
}
});

document.getElementById('dark').addEventListener('click', function () {
    document.body.classList.toggle('dark');
    if (b == 0) {
        this.textContent = 'light'
        b++;
}
});

