$(document).ready(function(){
    $('.fa-hamburger').click(function(){
        $(this).toggleClass('fa-times');
        $('.narbar').toggleClass('nav-toggle');

    });

    $(window).on('scroll load', function(){

        $('.fa-hamburger').removeClass('fa-times');
        $('.narbar').removeClass('nav-toggle');

        // scroll spy

        $('section').each(function(){
            let top = $(window).scrollTop();
            let offset = $(this).offset().top - 200;
            let height = $(this).height();
            let id = $(this).attr('id');

            if(top > offset && top < offset + height){
                $('.narbar ul li a').removeClass('active');
                $('.navbar').find(` href="#${id}" `).addClass('active');

            }
        })

    });

    $('.menu .list .btn').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        let src = $(this).attr('data-src');

        $('#menu-img').attr('src', src);

    });
});


/*$(document).ready(function(){

    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');

    });
});

/*const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.getElementsByClassName.display ='flex';
    mainMenu.getElementsByClassName.top = '0';
}
function close(){
    mainMenu.getElementsByClassName.top = '-100%';
}



/*$(document).ready(function(){

    $('#menu-bar').click(function(){
        $(this).toggleClass('fa-times');
    });
});
/*$(".navbar-toggler").on("click", function(){
    $(".bar1").toggleClass("bar1Active");
    $(".bar2").toggleClass("bar2Active");
    $(".bar3").toggleClass("bar3Active");

    
})*/





 