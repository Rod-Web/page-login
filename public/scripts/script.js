import { logins } from '../../data/bd.js'; 
let paginTrue = "http://127.0.0.1:5500/public/page/Visual.html";

let logar = document.querySelector(".logar");

logar.addEventListener('click', function () {

    let inputUser = document.querySelector(".user");
    let inputPassword = document.querySelector(".password");

    if (!inputUser || !inputPassword) {  // '||' signfica "ou", '!' verifica se são valores falsos // Verifica se os inputs foram capturados no DOM
        console.error("Campo de login não encontrado..."); 
        return;
    }

    let user = inputUser.value;
    let password = inputPassword.value;

    if (user === "" || password === "") {  // Verifica se algum campo está vazio
        alert("Preencha todos os espaços do login...");
        return;
    }

    let loginValido = false;

    logins.forEach(posicao => {  // percorre todo o array e da um resultado/ação
        if (user === posicao.usuario && password === posicao.senha) {  // se o 'user' e 'password' são iguais a algum do 'logins' faz a ação 
            loginValido = true; // transforma em true
            window.location.href = paginTrue;  // Redireciona para a página interna
        };
    });

    if (!loginValido) { // se não tiver sido transformado em true vai dar como false e vai fazer a ação
        alert("Usuário ou senha incorretos...");
    }

});
