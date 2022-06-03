// Los elementos de este código se ejecutan cuando se carga la página
$(document).ready(function () {

    // Desvanecimiento del logo inical
    $('#divLogo').css("opacity", 0);
    // Este código hace desaparecer el logo, después de un retardo, al recargar la página
    setTimeout(function () {
        $('#bgLogo').css("display", 'none');
        $('.moverse').css("opacity", 1);
        document.body.style.overflowY = 'visible';
        window.scrollTo(0, 0);
    }, 2000);


    // _____________________________________________________________________________________________________________________________________________________

    // Mouse parallax
    $.fn.parallax = function (resistance, mouse) {
        $el = $(this);
        TweenLite.to($el, 0.6, {
            x: -((mouse.clientX - window.innerWidth / 2) / resistance),
            y: -((mouse.clientY - window.innerHeight / 2) / resistance)
        });
    };

    $(document).mousemove(function (e) {
        $(".moverse").parallax(8, e);       // Este nº  en .parallax es para que se mueva con menor resistencia
    });

    // _____________________________________________________________________________________________________________________________________________________

    // NAVBAR
    var stickyNavTop = $('.header').offset().top + 100;

    function scrolling() {
        // doc = $(document).height()
        hidingtop = $('.principal').offset().top;
        hidingbottom = $('.principal').position().top + $('.principal').outerHeight(true);
        if ($(window).scrollTop() > hidingtop && $(window).scrollTop() < hidingbottom) {
            $('.header').removeClass('sticky');
            $('.contacto').removeClass('visible');
            $('.logo').removeClass('visible');

            $('.navLateral').removeClass('stickyLateral');

        }
    }

    var stickyNav = function () {
        var scrollTop = $(window).scrollTop();

        if (scrollTop > stickyNavTop) {
            $('.header').addClass('sticky');
            $('.contacto').addClass('visible');
            $('.logo').addClass('visible');

            $('.navLateral').addClass('stickyLateral');

        } else {
            $('.header').removeClass('sticky');
            $('.contacto').removeClass('visible');
            $('.logo').removeClass('visible');

            $('.navLateral').removeClass('stickyLateral');

        }
    };

    stickyNav();

    $(window).scroll(function () {
        stickyNav();

        scrolling();
    });

    // _____________________________________________________________________________________________________________________________________________________

    // Carrusel JQuery
    let carrete = [
        'files/uno/1.gif',
        'files/uno/3.gif',
        'files/uno/3.gif',
        'files/uno/4.gif',
        'files/uno/5.jpg'
    ];
    let carrete1 = carrete;
    let carrete2 = [
        'files/dos/2.1.jpg',
        'files/dos/2.2.jpg'
    ];
    let carrete3 = [
        'files/tres/3.2.jpg',
        'files/tres/3.2.jpg',
        'files/tres/3.3.jpg',
        'files/tres/3.4.jpg',
        'files/tres/3.5.jpg',
        'files/tres/3.6.jpg'
    ];
    let carrete4 = [
        'files/cuatro/4.1.png',
        'files/cuatro/4.2.png'
    ];
    let carrete5 = [
        'files/cinco/5.1.jpg',
        'files/cinco/5.2.jpg',
        'files/cinco/5.3.jpg',
        'files/cinco/5.4.jpg'
    ];
    let pos = 0;
    let pos1 = 0;
    let pos2 = 0;
    let pos3 = 0;
    let pos4 = 0;
    let pos5 = 0;
    let mainView = $('#primero');

    function iniGaleria() {
        //Inicializa las galerías al cargar la página 

        $('#primero').css('background', "url(./" + carrete1[pos] + ")");
        $('#segundo').css('background', "url(./" + carrete2[pos] + ")");
        $('#tercero').css('background', "url(./" + carrete3[pos] + ")");
        $('#cuarto').css('background', "url(./" + carrete4[pos] + ")");
        $('#quinto').css('background', "url(./" + carrete5[pos] + ")");
        $('.gallery').css('backgroundSize', "cover");
        $('.gallery').css('backgroundPosition', "center");
        $('.gallery').css('backgroundRepeat', "no-repeat");
    }

    function galeria() {
        video();

        console.log(mainView.attr('id'));

        mainView.css('background', "url(./" + carrete[pos] + ")");
        mainView.css('backgroundSize', "cover");
        mainView.css('backgroundPosition', "center");
        mainView.css('backgroundRepeat', "no-repeat");
        console.log('izq click');
        console.log(pos);
    }

    function anterior() {
        if (pos <= 0) {
            pos = carrete.length - 1;
        } else pos--;
    }
    function siguiente() {
        if (pos >= (carrete.length - 1)) {
            pos = 0;
        } else pos++;
    }
    function video() {
        // puedes poner tantos if como galerias tengan videos
        if (pos1 == 1) {
            $('#video1').css('opacity', 1);
        } else $('#video1').css('opacity', 0);

        if (pos2 == 0) {
            $('#video2').css('opacity', 1);
            $('#video2').get(0).play();
        } else {
            $('#video2').css('opacity', 0);
            $('#video2').get(0).pause();
            $('#video2').get(0).currentTime = 0;
        }
    }

    $('.divMedia').on('click', function () {

        if (this.classList.contains('anterior')) {

            mainView = $(this).parent();
            switch (mainView.attr('id')) {

                case 'primero':
                    pos = pos1;
                    carrete = carrete1;
                    anterior();
                    pos1 = pos;
                    break;

                case 'segundo':
                    pos = pos2;
                    carrete = carrete2;
                    anterior();
                    pos2 = pos;
                    break;

                case 'tercero':
                    pos = pos3;
                    carrete = carrete3;
                    anterior();
                    pos3 = pos;
                    break;

                case 'cuarto':
                    pos = pos4;
                    carrete = carrete4;
                    anterior();
                    pos4 = pos;
                    break;

                case 'quinto':
                    pos = pos5;
                    carrete = carrete5;
                    anterior();
                    pos5 = pos;
                    break;

                default:
                    pos = 0;
                    break;
            }
            galeria();
        }

        if (this.classList.contains('siguiente')) {

            mainView = $(this).parent();
            switch (mainView.attr('id')) {

                case 'primero':
                    pos = pos1;
                    carrete = carrete1;
                    siguiente();
                    pos1 = pos;
                    break;

                case 'segundo':
                    pos = pos2;
                    carrete = carrete2;
                    siguiente();
                    pos2 = pos;
                    break;

                case 'tercero':
                    pos = pos3;
                    carrete = carrete3;
                    siguiente();
                    pos3 = pos;
                    break;

                case 'cuarto':
                    pos = pos4;
                    carrete = carrete4;
                    siguiente();
                    pos4 = pos;
                    break;

                case 'quinto':
                    pos = pos5;
                    carrete = carrete5;
                    siguiente();
                    pos5 = pos;
                    break;

                default:
                    pos = 0;
                    break;
            }
            galeria();
        }

        // galeria();
    });

    iniGaleria();
});
// _____________________________________________________________________________________________________________________________________________________

// Navbar contacto

function abrirContacto() {
    document.getElementById("fondo").style.display = "block";
    document.getElementsByClassName("contacto")[0].style.display = "none";
    document.getElementById("xIcon").style.display = "block";

    setTimeout(() => {
        document.getElementById("xIcon").classList.add("rotar");
    }, 20);
}
function cerrarContacto() {
    document.getElementById("xIcon").classList.remove("rotar");
    document.getElementById("fondo").style.opacity = "0";

    setTimeout(() => {
        document.getElementById("fondo").style.display = "none";
        document.getElementsByClassName("contacto")[0].style.display = "block";
        document.getElementById("xIcon").style.display = "none";
        document.getElementById("fondo").style.opacity = "1";

    }, 500);
}

// _____________________________________________________________________________________________________________________________________________________

// Colores del navbar lateral

$('#primero').mouseover(function(){
    $('#bola1').classList = "active";
});

$('#primero').mouseleave(function(){
    $('#bola1').classList = "";
});