const contactContents = () => {
    const tabContent = document.getElementById('tab-content'); 
    const contactStuff = document.createElement("div");
    contactStuff.innerHTML = "<h1>Contact Moleman</h1><p>phone: 555-2368</p>";
    tabContent.appendChild(contactStuff);
}

export default contactContents
