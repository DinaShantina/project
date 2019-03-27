$(function () {
    AOS.init();
    $(window).scrollTop(0);
    let navCount = true;
    let headerFirst = $('.text');
    $(window).scroll(() => {
        let currentPosition = $(".navbar").offset().top;
        if (currentPosition > 0.5) {
            if (navCount) {
                navCount = false;
                $(".navbar").css({ transition: ".5s ease-in-out 0s" })
                $(".navbar").addClass('navBackgroundColor');
                $(".hireUs").addClass('hireUsBorder');
                $("nav li a").css({ color: 'black', fontWeight: '900' });
                $(".navbar-brand").css({ color: 'black', fontWeight: '900' });
                $(".navbar-brand").find('img').attr('src', 'img/logo-black.svg');
            }
        } else {
            $(".navbar").css({ transition: " .5s ease-in-out 0s" });
            $(".navbar").removeClass('navBackgroundColor');
            $(".hireUs").removeClass('hireUsBorder');
            $("nav li a").css({ color: 'white' });
            $(".navbar-brand").css({ color: 'white', fontWeight: '100' });
            $(".navbar-brand").find('img').attr('src', 'img/logo-white.svg');
            navCount = true;
            $("nav li .hireUs").hover(function () {
                $(this).css({ color: 'black' });
            }, function () {
                $(this).css({ color: 'white' })
            });
        }
    });
    let photoPerson = ["img/pic1.jpg", "img/pic2.jpg", "img/pic3.jpg", "img/pic4.jpg"];
    let laptopPerson = ["img/bg1.png", "img/bg2.png", "img/bg3.png", "img/bg4.png"];
    let img = $('.home-slider');
    let lapImg = $('.laptop-slider');
    var index = 1;
    function rotateImage() {
        setInterval(function () {
            img.attr('src', photoPerson[index]);
            lapImg.attr('src', laptopPerson[index]);
            // img.fadeIn()
            if (index == photoPerson.length - 1) {
                index = 0;
            }
            else {
                index++;
            }
        }, 4000);
    }
    $(document).ready(rotateImage);

    function headerFade() {
        headerFirst.fadeIn(1000).removeClass('hidden');
    }
    $(document).ready(headerFade);

    $(".paragraph-text").hover(function () {
        $(this).children('img').css({ opacity: "1" });
        $(this).css({ backgroundColor: '#303030', color: 'white', cursor: 'pointer', transition: '0.3s ease-in-out 0s' });
        $(this).find('.second-text').css({
            opacity: "1",
            transition: '0.8s ease-in-out 0s'
        })
    }, function () {
        $(this).css({ backgroundColor: 'white', color: 'black', cursor: 'pointer', transition: '0.3s ease-in-out 0s' });
        $(this).children('img').css({ opacity: "0" });
        $(this).find('.second-text').css({ opacity: "1", transition: '0.8s ease-in-out 0s' });
    });
    // CLOCKS
    function setDate() {
        const date = new Date();

        const seconds = date.getUTCSeconds();
        const mins = date.getUTCMinutes();
        const hour = date.getUTCHours();

        var secondsDegrees;
        secondsDegrees = (seconds * 6) + 90;
        document.querySelector('.second-handLondon').style.transform = `rotate(${secondsDegrees}deg)`//London
        document.querySelector('.second-handNY').style.transform = `rotate(${secondsDegrees}deg)`;//New York
        document.querySelector('.second-handToronto').style.transform = `rotate(${secondsDegrees}deg)`//Toronto
        document.querySelector('.second-handHK').style.transform = `rotate(${secondsDegrees}deg)`//Hong Kong
        document.querySelector('.second-handBucharest').style.transform = `rotate(${secondsDegrees}deg)`//Bucharest
        document.querySelector('.second-handWarsaw').style.transform = `rotate(${secondsDegrees}deg)`//Warsaw

        var minsDegrees;
        minsDegrees = (mins * 6) + 90;
        document.querySelector('.min-handLondon').style.transform = `rotate(${minsDegrees}deg)`;//London
        document.querySelector('.min-handNY').style.transform = `rotate(${minsDegrees}deg)`;//New York
        document.querySelector('.min-handToronto').style.transform = `rotate(${minsDegrees}deg)`//Toronto
        document.querySelector('.min-handHK').style.transform = `rotate(${minsDegrees}deg)`//Hong Kong
        document.querySelector('.min-handBucharest').style.transform = `rotate(${minsDegrees}deg)`//Bucharest
        document.querySelector('.min-handWarsaw').style.transform = `rotate(${minsDegrees}deg)`//Warsaw

        var hourDegrees;
        hourDegrees = (hour * 30) + 90;
        document.querySelector('.hour-handLondon').style.transform = `rotate(${hourDegrees}deg)`;//London
        hourDegrees -= minsDegrees;
        hourDegrees = (hour * 30 - 120) + 90;
        document.querySelector('.hour-handNY').style.transform = `rotate(${hourDegrees}deg)`;//New York
        document.querySelector('.hour-handToronto').style.transform = `rotate(${hourDegrees}deg)`//Toronto
        hourDegrees -= hourDegrees;
        hourDegrees = (hour * 30 + 240) + 90;
        document.querySelector('.hour-handHK').style.transform = `rotate(${hourDegrees}deg)`//Hong Kong
        hourDegrees -= hourDegrees;
        hourDegrees = (hour * 30 + 60) + 90;
        document.querySelector('.hour-handBucharest').style.transform = `rotate(${hourDegrees}deg)`//Bucharest
        hourDegrees -= hourDegrees;
        hourDegrees = (hour * 30 + 30) + 90;
        document.querySelector('.hour-handWarsaw').style.transform = `rotate(${hourDegrees}deg)`//Warsaw
    }

    setInterval(setDate, 1000);

    setDate();


});