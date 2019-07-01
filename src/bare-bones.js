const barebones = () => {
    const content = document.getElementById('content');
    content.innerHTML = "<h1>M O L E M A N - B B Q</h1><img src='moleman.png' alt='moleman'><ul class='tabs'><li id='menu'><a href='#'>Menu</a></li><li id='contact'><a href='#'>Contact</a></li>        </ul><p>This restaurant makes the best burger in town. Try our one-of-a-kind Moleman Burger. It's the best thing that'll ever happen to you.</p><div id='tab-content'></div>";
    
    document.getElementsByClassName('tabs')[0].style = "display: flex; list-style: none; justify-content: space-around";

    const listItems = document.getElementsByTagName('li');

    for (var i=0; i<listItems.length; i++) {
        listItems[i].style = "background-color: silver;";
    }

    document.body.style = "width: 600px; margin: 0 auto; text-align: center;";

}

export default barebones
