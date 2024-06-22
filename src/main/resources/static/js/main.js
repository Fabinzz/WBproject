document.addEventListener("DOMContentLoaded", (event) => {
    const isLoggedIn = () => {
        return localStorage.getItem('authToken') !== null;
    };

    const accountLink = document.getElementById("accountLink");
    const loginLink = document.getElementById("loginLink");

    if (isLoggedIn()) {
        accountLink.style.display = "inline";
        loginLink.style.display = "none";
    } else {
        accountLink.style.display = "none";
        loginLink.style.display = "inline";
    }
});
