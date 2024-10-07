let menu = document.getElementById('more_menu_button'); 
let close = document.getElementById('hide_menu'); 
let sidebar = document.getElementById("sidebar");

close.addEventListener('click', () => { 
    sidebar.classList.add('hide')
    setTimeout(()=>{
        sidebar.style.display='none';
        menu.style.display='block'
    },500)
    
});

menu.addEventListener('click', () => {
    menu.style.display = "none";
    sidebar.style.display = "block";
    setTimeout(()=>{
        sidebar.classList.remove('hide')
    },10)
});

