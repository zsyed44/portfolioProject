function redirectToHomepage() {
    const body = document.body;
    body.style.animation = 'fadeOut 2s ease-in-out forwards';
    setTimeout(() => {
        window.location.href = 'homepage.html';
    }, 2000); // Match the fadeOut duration
}