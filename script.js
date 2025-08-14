( () =>{

//Sidebar

const openSidebarButton = document.querySelector('#open-sidebar-btn');
const closeSidebarButton = document.querySelector('#close-sidebar-btn');
const sidebar = document.querySelector('#sidebar');
const sidebarBackground = document.querySelector('#sidebar-background');

const CLOSED = 'closed';

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

})()