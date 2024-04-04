//makes the div to cover screen
const screenController = (function () {
  //DOM Cache
  const body = document.querySelector('body');

  //add 'extension' button
  const extensionButton = document.createElement('button');
  extensionButton.classList.add('extension-on');
  extensionButton.innerText = 'Help'
  body.appendChild(extensionButton);
  extensionButton.addEventListener('click', (e) => {
    e.preventDefault();
    overlay();
  });

  //add css to make it cover whole screen in black
  function overlay () {
    const body = document.querySelector('body');
    //create overlay div
    const overlay = document.createElement('div');
    //overlay.classList.add('overlay');
    overlay.style.cssText = 'background-color: white; position: fixed; left: 0; right: 0; top: 0; bottom: 0; width: 100vw; height: 100vh; z-index: 3; opacity: 1;';
    //create Google Nav Bar
    const navbar = document.createElement('nav');
    //navbar.classList.add('nav-bar');
    navbar.style.cssText = 'display: flex; justify-content: space-between; padding: 10px 20px; font-size: 14px;'
    const leftLinks = document.createElement('div');
    //leftLinks.classList.add('left-links');
    leftLinks.style.cssText = 'display:flex; gap: 15px; align-items:center;'
    const about = document.createElement('a');
    about.innerText = 'About';
    const store = document.createElement('a');
    store.innerText = 'Store';
    leftLinks.appendChild(about);
    leftLinks.appendChild(store);

    const rightLinks = document.createElement('div');
    rightLinks.innerHTML = '<a>Gmail</a> <a>Images</a> <a class="apps"><svg id="Flat" xmlns="http://www.w3.org/2000/svg" width = 25 height = 25 color:#5F6368 viewBox="0 0 256 256"><path d="M76,60A16,16,0,1,1,60,44,16.01833,16.01833,0,0,1,76,60Zm52-16a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,128,44Zm68,32a16,16,0,1,0-16-16A16.01833,16.01833,0,0,0,196,76ZM60,180a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,60,180Zm68,0a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,128,180Zm68,0a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,196,180ZM60,112a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,60,112Zm68,0a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,128,112Zm68,0a16,16,0,1,0,16,16A16.01833,16.01833,0,0,0,196,112Z"/></svg></a> <a class="sign-in" style= "background-color: #3482ff; color: white; padding: 10px 25px; border-radius: 5px;">Sign in</a>'
    //rightLinks.classList.add('right-links');
    rightLinks.style.cssText = 'display: flex; gap:15px; align-items: center; padding-right: 10px;';
    
    navbar.appendChild(leftLinks);
    navbar.appendChild(rightLinks);
    overlay.appendChild(navbar);

    //create google main
    const main = document.createElement('div');
    //main.classList.add('main');
    main.innerHTML = '<img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google Logo"/>';
    main.style.cssText = 'display:flex; background-color: white; flex-direction: column; align-items: center; gap: 25px; margin-top: 200px;'
    const searchBar = document.createElement('div');
    //searchBar.classList.add('search-bar');
    searchBar.style.cssText = 'border: solid 1px #E1E2E4; border-radius: 30px; justify-content: space-between; align-items: center; padding: 10px 15px; gap: 15px;'
    searchBar.innerHTML = '<svg height = 20 width = 20  focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#9AA0A6" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg> <input type="text" style= "border: none; outline: none; width: 440px;"/> <svg height = 25 width = 25 focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#4285f4" d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"></path><path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path><path fill="#fbbc05" d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"></path><path fill="#ea4335" d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"></path></svg><svg height = 25 width = 25  focusable="false" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><rect fill="none" height="192" width="192"></rect><g><circle fill="#34a853" cx="144.07" cy="144" r="16"></circle><circle fill="#4285f4" cx="96.07" cy="104" r="24"></circle><path fill="#ea4335" d="M24,135.2c0,18.11,14.69,32.8,32.8,32.8H96v-16l-40.1-0.1c-8.8,0-15.9-8.19-15.9-17.9v-18H24V135.2z"></path><path fill="#fbbc05" d="M168,72.8c0-18.11-14.69-32.8-32.8-32.8H116l20,16c8.8,0,16,8.29,16,18v30h16V72.8z"></path><path fill="#4285f4" d="M112,24l-32,0L68,40H56.8C38.69,40,24,54.69,24,72.8V92h16V74c0-9.71,7.2-18,16-18h80L112,24z"></path></g></svg>'
    
    const buttons = document.createElement('div');
    buttons.innerHTML = "<button style='border: none; padding: 10px 15px; background-color:#F8F9FA; border-radius: 3px; font-size: 14px;'>Google Search</button> <button style='border: none; padding: 10px 15px; background-color:#F8F9FA; border-radius: 3px; font-size: 14px;'>I'm Feeling Lucky</button>"
    main.appendChild(searchBar)
    main.appendChild(buttons);
    overlay.appendChild(main);

    //create footer
    const footer = document.createElement('div');
    //footer.classList.add('footer');
    footer.style.cssText = 'display: grid; background-color: #F2F2F2; grid-template-columns: 1fr 2fr 1fr; position: absolute; width: 100%; bottom: 0; padding: 15px 30px; font-size: 14px;'
    const footerLeft = document.createElement('div');
    //footerLeft.classList.add('footer-left');
    footerLeft.style.cssText = 'display: flex; gap: 30px; align-items: center;';
    footerLeft.innerHTML = '<a >Advertising</a><a>Business</a><a>How Search works</a>';
    const footerMid = document.createElement('div');
    footerMid.innerHTML = 'Our third decade of climate action : join us';
    footerMid.style.cssText = 'text-align: center;'
    const footerRight = document.createElement('div');
    //footerRight.classList.add('footer-right');
    footerRight.style.cssText = 'display: flex; gap: 30px; align-items: center; justify-self: end';
    footerRight.innerHTML = '<a >Privacy</a> <a >Terms</a> <a> Settings</a>'
    footer.appendChild(footerLeft);
    footer.appendChild(footerMid);
    footer.appendChild(footerRight);
    overlay.appendChild(footer);
    body.appendChild(overlay);
  }
  return {overlay};
  
})();

//we click the button to activate extension -> has eventListener and runs 2 function one to 
//get google page pops up over current DOM
//the other is on a setTimeout(popbuttons, delay)
//popbuttons function will make two buttons and place it ontop of our overlay and one button says take me back
//the other says not safe and redirects to google.com
//makes redirect button
const redirectButtonController = (function() {
  //DOM Cache
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('body');
  const redirectButton = document.querySelector('.btn-click');

  const open = document.createElement('button');
  open.setAttribute('id', 'openGoogle');
  open.innerHTML = '<a href="https://www.google.com/"></a>';
  //
  function takeMeBack() {
    document.querySelector(".overlay").style.display = "none";
  } 
  function openGoogle(){
    document.getElementById("openGoogle").href = 'https://www.google.com/'
  }
  // const openGoogleButton = document.querySelector('.openGoogleButton');
  // document.getElementById("openGoogleButton").addEventListener("click", openGoogle);
  // const takeMeBackButton = document.querySelector('.takeMeBackButton');
  // document.getElementById("takeMeBackButton").addEventListener("click", takeMeBack);

})();

//gets url information
const urlScrapper = (function() {

})();

