import home from './bare-bones';
import contact from './contact';
import menu from './menu';

home();

const menuNav = document.getElementById('menu');
const contactNav = document.getElementById('contact');
const content = document.getElementById('content');

menuNav.addEventListener('click', function showMenu() {
    document.getElementById('tab-content').innerHTML = "";
    menu();
});

contactNav.addEventListener('click', function showContact() {
    document.getElementById('tab-content').innerHTML = "";
    contact();
});

