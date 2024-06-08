document.addEventListener("DOMContentLoaded", (event) => {
    // Função para verificar se o usuário está logado
    const isLoggedIn = () => {
        // Aqui estou verificando se o `authToken` existe no localStorage
        return localStorage.getItem('authToken') !== null;
    };

    const accountLink = document.getElementById("accountLink");
    const loginLink = document.getElementById("loginLink");

    // Verifica o estado de login do usuário
    if (isLoggedIn()) {
        // Usuário está logado, exibe "Minha conta" e esconde "Entrar"
        accountLink.style.display = "inline";
        loginLink.style.display = "none";
    } else {
        // Usuário não está logado, exibe "Entrar" e esconde "Minha conta"
        accountLink.style.display = "none";
        loginLink.style.display = "inline";
    }
});
