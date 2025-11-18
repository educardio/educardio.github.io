
const toggleButton = document.getElementById("hamburger");
const showNavbar = document.getElementById("sm-navbar");

toggleButton.addEventListener('click', function(event){
    event.stopPropagation();
    if (showNavbar.style.display === 'none' || showNavbar.style.display === ''){
        showNavbar.style.display = 'block';
    }
    else{
        showNavbar.style.display = 'none';
    }
});

document.addEventListener("click", function(){
    showNavbar.style.display = "none";
});

function handleResize(){
    if(window.innerWidth > 900){
        showNavbar.style.display = '';
    }
}

window.addEventListener('resize', handleResize);

handleResize();
