document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menuBtn');
    const navbar = document.getElementById('navbar');

    menuBtn.addEventListener('click', function() {
        navbar.classList.toggle('hidden');
    });
});
