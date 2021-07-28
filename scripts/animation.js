


let portal = document.getElementById('portal');
let stars = document.getElementById('stars');
let rick = document.getElementById('rick');
let text = document.getElementById('text');
let expl = document.getElementById('expl');
let mountains = document.getElementById('mountains');
let header = document.querySelector('header');


menuOpen = new Boolean();
crutch = new Boolean();

const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll('.nav-links li');

document.querySelector('#li1').addEventListener('click', () =>{
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index ) => {
        if (link.style.animation){
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
        }
    })
    burger.classList.toggle('toggle');
    if((menuOpen)&(crutch)){
        menuOpen = false;
        document.body.style.overflow = 'hidden';
    }else{
        menuOpen = true;
        document.body.style.overflow = 'auto';
    }
});



document.querySelector('#li2').addEventListener('click', () =>{
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index ) => {
        if (link.style.animation){
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
        }
    })
    burger.classList.toggle('toggle');

    if((menuOpen)&(crutch)){
        menuOpen = false;
        document.body.style.overflow = 'hidden';
    }else{
        menuOpen = true;
        document.body.style.overflow = 'auto';
    }
});


document.querySelector('#li3').addEventListener('click', () =>{
    nav.classList.toggle('nav-active');
    navLinks.forEach((link, index ) => {
        if (link.style.animation){
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
        }
    })
    burger.classList.toggle('toggle');
    if((menuOpen)&(crutch)){
        menuOpen = false;
        document.body.style.overflow = 'hidden';
    }else{
        menuOpen = true;
        document.body.style.overflow = 'auto';
    }
});

const navSlide = () => {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index ) => {
            if (link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.6}s`;
            }
        });
        burger.classList.toggle('toggle');
        if(menuOpen){
            menuOpen = false;
            document.body.style.overflow = 'hidden';
        }else{
            menuOpen = true;
            document.body.style.overflow = 'auto';
        }

        if(crutch){
            crutch = false;
        }else{
            crutch = true;
        }


    });
}

navSlide();



window.addEventListener('scroll', function (){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    portal.style.top = value * 1.05 + 'px';
    mountains.style.top = value * 0.5 + 'px';
    rick.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1 + 'px';
    expl.style.marginTop = value * 1 + 'px';
    header.style.top = value * 0.5 + 'px';
});


$(document).ready(function() {
    $('#win1').click( function(event){
        event.preventDefault();
        $('#overlay1').fadeIn(297, function(){
            document.body.style.overflow = 'hidden';
            $('#opwin1')
                .css('display', 'block')
                .animate({opacity: 1}, 198);
        });
    });

    $('#modalClose1, #overlay1').click( function(){
        $('#opwin1').animate({opacity: 0}, 198,
            function(){
                $(this).css('display', 'none');
                $('#overlay1').fadeOut(297);
                document.body.style.overflow = 'auto';
            });
    });

    $('#win2').click( function(event){
        event.preventDefault();
        $('#overlay2').fadeIn(297, function(){
            document.body.style.overflow = 'hidden';
            $('#opwin2')
                .css('display', 'block')
                .animate({opacity: 1}, 198);
        });
    });

    $('#modalClose2, #overlay2').click( function(){
        $('#opwin2').animate({opacity: 0}, 198,
            function(){
                $(this).css('display', 'none');
                $('#overlay2').fadeOut(297);
                document.body.style.overflow = 'auto';
            });
    });

    $('#win3').click( function(event){
        event.preventDefault();
        $('#overlay3').fadeIn(297, function(){
            document.body.style.overflow = 'hidden';
            $('#opwin3')
                .css('display', 'block')
                .animate({opacity: 1}, 198);
        });
    });

    $('#modalClose3, #overlay3').click( function(){
        $('#opwin3').animate({opacity: 0}, 198,
            function(){
                $(this).css('display', 'none');
                $('#overlay3').fadeOut(297);
                document.body.style.overflow = 'auto';
            });
    });
});