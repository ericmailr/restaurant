const contactContents = () => {
    const tabContent = document.getElementById('tab-content'); 
    const contactStuff = document.createElement("div");
    contactStuff.innerHTML = "<h1>Contact Moleman</h1><p>phone: 911</p>";
    tabContent.appendChild(contactStuff);
}

export default contactContents
