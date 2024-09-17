// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    console.log('O documento está pronto!');
    
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Validação simples de login
        const validEmail = "admin@serialkiller.com";
        const validPassword = "123456";
        
        if (email === validEmail && password === validPassword) {
            alert('Login realizado com sucesso!');
            window.location.href = 'index.html';
        } else {
            alert('Email ou senha incorretos!');
        }
    });
});