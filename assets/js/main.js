
$(document).ready(function() {
    
    // Fade Out Loader
    setTimeout(function(){ $(".header__loader").fadeOut("slow"); }, 1000);
	

    // Expand Header 
    let header = document.querySelector(".header");
    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 0);
    });

    // Active Menu
    function functionScroll() {
        var section = document.querySelectorAll(".section"),
        sections = {},
        i = 0;
        
        Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop;
        });
        
        for (i in sections) {
            if (sections[i] <= window.pageYOffset + 64 ) {
                const active = document.querySelector(".active");
                if(active){
                    active.classList.remove("active");
                }
                
                if(document.querySelector("a[href*='" + i + "']")){
                    document.querySelector("a[href*='" + i + "']").classList.add("active");
                }
            }
        }
    }
        
    window.addEventListener("scroll", functionScroll);


    //Show Menu Dropdown
    let icon = document.getElementById("bars");
    $(".header__wrap-btn").click(function(){
        $(".header__wrap-dropdown").slideToggle();
        if(icon.classList.contains("fa-bars")){
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times");
        }else{
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });
    
    // Comment Owl Carousel
    $('.item__slide').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })
    
    // Team Owl Carousel
    $('.slide__content').owlCarousel({
        loop:true,
        margin:20,
        
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            900:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })
    
    //Counter Up
    $(".counter").counterUp({
        delay: 10,
        time: 2000
    });

    //WOW
    new WOW().init();

    //Show Popup
    $('.items__list-btn').click(function(){
        document.getElementById("popup").style.display = "flex";
    })
});

