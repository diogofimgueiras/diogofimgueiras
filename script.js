// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('O documento está pronto!');
    
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Simulando um login
        if (email === 'admin@serialkiller.com' && password === '123456') {
            alert('Login realizado com sucesso!');
            window.location.href = 'index.html';
        } else {
            alert('Email ou senha incorretos!');
        }
    });
});