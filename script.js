const navContent = document.getElementById('nav-content')

function toggleMenu() {
    if(navContent.classList.contains('active')) navContent.classList.remove('active');
    else navContent.classList.add('active');
}