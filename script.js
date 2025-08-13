( () =>{

//Sidebar

const openSidebarButton = document.querySelector('#open-sidebar-btn');
const closeSidebarButton = document.querySelector('#close-sidebar-btn');
const sidebar = document.querySelector('#sidebar');

openSidebarButton.addEventListener('click', function () {
    sidebar.style.display = 'flex';
})

closeSidebarButton.addEventListener('click', function () {
    sidebar.style.display = 'none';
})

})()