const menuContents = () => {
    const tabContent = document.getElementById('tab-content'); 
    const menuStuff = document.createElement("div");
    menuStuff.innerHTML = "<h1>Moleman's Menu</h1><p>hamburger (plain): $12</p>";
    tabContent.appendChild(menuStuff);
}

export default menuContents
