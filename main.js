const toggle = document.querySelector('#toggle');
const nav = document.querySelector('#navigation')
const ul = document.querySelector('#topMenu');
const navItems = document.querySelectorAll('a');

function toggleNav() {
    if (nav.className == 'closed' && /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
        nav.className = 'open';
    } else {
        nav.className = 'closed';
    }
};

toggle.addEventListener('click', (event) => {
    toggleNav();
});

nav.addEventListener('click', (event) => {
    for (let i = 0; i < navItems.length; i++) {
        if (event.target == navItems[i]) {
            toggleNav();
        }
    }
});