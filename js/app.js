
const navMain = $(".nav-main");
const links = $(".header-bg-top .nav-link");
const activeLink = $(".navbar-light .navbar-nav .active>.nav-link")
const navbar_brand = $(".navbar-light .navbar-brand");



const mediaBg = (x)=>{
    if (x.matches) {
        $(window).scroll(function(){
            if($(window).scrollTop() > 20){
                navMain.addClass("bg-white");
                activeLink.css("color"," black")
                links.each(function(index,link){
                   $(this).css("color"," black")
                });
                navbar_brand.addClass("text-dark")
            }else{
                navMain.removeClass("bg-white");
                links.each(function(index,link){
                    $(this).css("color","rgba(255, 255, 255, 0.5)")
                 });
                 navbar_brand.removeClass("text-dark")
            }
        })
    }


}

let x = window.matchMedia("(min-width: 990px)")
mediaBg(x)
x.addListener(mediaBg) 





