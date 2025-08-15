( () =>{

const bodyElement = document.body;

const openSidebarButton = document.querySelector('#open-sidebar-btn');
const closeSidebarButton = document.querySelector('#close-sidebar-btn');
const sidebar = document.querySelector('#sidebar');
const sidebarBackground = document.querySelector('#sidebar-background');

const CLOSED = 'closed';

//Sidebar

openSidebarButton.addEventListener('click', function () {
    sidebar.classList.remove(CLOSED);
    sidebarBackground.classList.remove(CLOSED);
})

closeSidebarButton.addEventListener('click', closeSidebarFunction);

sidebarBackground.addEventListener('click', closeSidebarFunction);

function closeSidebarFunction() {
    if(!sidebar.classList.contains(CLOSED)) {
        sidebar.classList.add(CLOSED);
    }
    if(!sidebarBackground.classList.contains(CLOSED)) {
        sidebarBackground.classList.add(CLOSED);
    }
}

// Theme toggle

const themeToggleButton = document.querySelector('#theme-toggle-button');
const themeTooltip = document.querySelector('#nav-tooltip');
const lightIcon = document.querySelector('#light-icon');
const darkIcon = document.querySelector('#dark-icon');

const DARKMODE_CSS = 'dark';
let isDark = false;

lightIcon.style.display = 'inline';
darkIcon.style.display = 'none';

themeToggleButton.addEventListener('click', function () {
    if(!isDark) {
        if( !bodyElement.classList.contains(DARKMODE_CSS) ) {
            bodyElement.classList.add(DARKMODE_CSS);
        }
        isDark = switchToDarkThemeUI(true);
    }
    else {
        while (bodyElement.classList.contains(DARKMODE_CSS)) {
            bodyElement.classList.remove(DARKMODE_CSS);
        }
        isDark = switchToDarkThemeUI(false);
    }
})

themeToggleButton.addEventListener('mouseenter', function (){
    themeTooltip.style.display = 'inline-block';
})
themeToggleButton.addEventListener('mouseleave', function () {
    themeTooltip.style.display = 'none';
})

//false => Light; true => Dark
function switchToDarkThemeUI(state=true) {
    let darkState = false;
    
    //Dark theme
    if(state) {
        darkState = true;
        lightIcon.style.display = 'none';
        darkIcon.style.display = 'inline';
    }
    
    //Light theme
    if(!state) {
        darkState = false;
        darkIcon.style.display = 'none';
        lightIcon.style.display = 'inline';
    }
    return darkState;
}

})()