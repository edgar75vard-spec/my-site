// Смена фона
const changeBgBtn = document.getElementById('changeBgBtn');
let isPurple = true;
changeBgBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = isPurple ? '#000000' : '#8e44ad';
    isPurple = !isPurple;
});

// Переключение между регистрацией и логином
const loginBtn = document.getElementById('loginBtn');
const backBtn = document.getElementById('backBtn');
const registerSection = document.getElementById('registerSection');
const loginSection = document.getElementById('loginSection');

loginBtn.addEventListener('click', () => {
    registerSection.classList.remove('active');
    loginSection.classList.add('active');
});

backBtn.addEventListener('click', () => {
    loginSection.classList.remove('active');
    registerSection.classList.add('active');
});

// Регистрация
const regForm = document.getElementById('regForm');
const regMessage = document.getElementById('regMessage');
regForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const password = regForm.password.value.trim();
    const latinRegex = /^[A-Za-z0-9!@#$%^&*()_+=-]{6,}$/;
    if (!latinRegex.test(password)) {
        regMessage.style.color = '#e74c3c';
        regMessage.textContent = "Пароль должен содержать только английские буквы и цифры!";
        return;
    }
    regMessage.style.color = '#2ecc71';
    regMessage.textContent = "Успешная регистрация! Перенаправление...";
    setTimeout(() => { window.location.href = "https://www.twitch.tv/bezskils"; }, 2000);
});

// Логин
const loginForm = document.getElementById('loginForm');
const loginMessage = document.getElementById('loginMessage');
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = loginForm.loginEmail.value.trim();
    const password = loginForm.loginPassword.value.trim();
    if (!email || !password) {
        loginMessage.style.color = '#e74c3c';
        loginMessage.textContent = "Введите email и пароль!";
        return;
    }
    loginMessage.style.color = '#2ecc71';
    loginMessage.textContent = "Успешный вход! Перенаправление...";
    setTimeout(() => { window.location.href = "https://www.twitch.tv/bezskils"; }, 2000);
});
