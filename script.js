var back_btn = document.querySelector(".back-btn");
var height = document.querySelector("#projects-section").clientHeight;



window.addEventListener("scroll", ()=> {
    if (document.documentElement.scrollTop > 20) {
        back_btn.classList.add('show');
    }
    else {
        back_btn.classList.remove("show");
    }
});

back_btn.addEventListener('click', () => {
    console.log('clicked');
    window.scrollTo({top: 0, behavior: 'smooth'});
});




var nav_slide = () => {
    var nav_burger = document.querySelector(".nav-burger");
    var nav_links = document.querySelector(".nav-links");
    var nav_links_list = document.querySelectorAll(".nav-links li");

    nav_burger.addEventListener('click', () => {
        
        // Navigation Toggle
        nav_links.classList.toggle('nav-active');

        // Navigation Links: Animation
        nav_links_list.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            }
            else {
                link.style.animation = `show-nav-links 0.5s ease forwards ${index / 8 + 0.5}s`;
            }
        });

        // Burger Menu: Close Botton
        nav_burger.classList.toggle("toggle");

    });
}

nav_slide();