function toggleMenu() {
    const menu = document.getElementById('menu');
    const backdrop = document.getElementById('backdrop');


    if (menu.classList.contains('show')) {
        menu.classList.remove('show');
        backdrop.style.display = 'none'; // Hide backdrop
    } else{
        menu.classList.add('show');
        backdrop.style.display = 'block'; // Show backdrop
    }


}

    
/* menuBtn.addEventListener('click', function() {
    menu.classList.toggle('open');
    if (menu.classList.contains('open')) {
        menu.classList.remove('hidden');
    } else {
        setTimeout(() => {
            menu.classList.add('hidden');
        }, 300); // Match the transition duration
    }
});

closeBtn.addEventListener('click', function() {
    menu.classList.remove('open');
    setTimeout(() => {
        menu.classList.add('hidden');
    }, 300); // Match the transition duration
}); */

