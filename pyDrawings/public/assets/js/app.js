var app = {

    init: function () {

        console.log('app init');
        app.clignement();

        // L I S T E N E R S 
        $('.head-color').hover(app.changeColor);
        $('.head-color').click(app.changeBackProductColor);
        $('.adopter').click(app.adopter);
        $('.emotion').hover(app.emotion);
    },

    // CLIGNEMENT DES YEUX
    clignement: function (params) {
        // LEFT
        setTimeout(function () {
            $('.left-eyelid').toggleClass('test');
        }
            , 1400);
        setTimeout(function () {
            $('.left-eyelid').removeClass('test');
        }
            , 1800);

        // RIGHT
        setTimeout(function () {
            $('.right-eyelid').toggleClass('test');
        }
            , 1600);
        setTimeout(function () {
            $('.right-eyelid').removeClass('test');
        }
            , 1800);
    },

    changeColor: function (e) {
        const headColor = $(e.currentTarget);
        app.clignement();

        if (headColor.hasClass('blue-color')) {
            $('.head').css('background', 'var(--blue-head');
            $('.left-eyelid').css('background', 'var(--blue-head');
            $('.right-eyelid').css('background', 'var(--blue-head');
        } else if (headColor.hasClass('green-color')) {
            $('.head').css('background', 'var(--green-head');
            $('.left-eyelid').css('background', 'var(--green-head');
            $('.right-eyelid').css('background', 'var(--green-head');
        } else if (headColor.hasClass('red-color')) {
            $('.head').css('background', 'var(--red-head');
            $('.left-eyelid').css('background', 'var(--red-head');
            $('.right-eyelid').css('background', 'var(--red-head');
        } else if (headColor.hasClass('yellow-color')) {
            $('.head').css('background', 'var(--yellow-head');
            $('.left-eyelid').css('background', 'var(--yellow-head');
            $('.right-eyelid').css('background', 'var(--yellow-head');
        }
    },

    changeBackProductColor: function (e) {
        const backGroundColor = $(e.currentTarget);
        if (backGroundColor.hasClass('blue-color')) {
            $('.card').css('background', 'var(--blue-color');
            $('h2').css('color', 'white')
            $('h3').css('color', 'white')
        } else if (backGroundColor.hasClass('green-color')) {
            $('.card').css('background', 'var(--green-color');
            $('h2').css('color', 'black')
            $('h3').css('color', 'black')
        } else if (backGroundColor.hasClass('red-color')) {
            $('.card').css('background', 'var(--red-color');
            $('h2').css('color', 'white')
            $('h3').css('color', 'white')
        } else if (backGroundColor.hasClass('yellow-color')) {
            $('.card').css('background', 'var(--yellow-color');
            $('h2').css('color', 'black')
            $('h3').css('color', 'black')
        }
    },

    /** EMOTION */
    emotion: function (e) {
        console.log('emo')
        const mouth = $(e.currentTarget);

        if (mouth.hasClass('emotion-happy')) {
            $('.mouth').toggleClass('emotion-happy-change');
            $('.left-eyelid').toggleClass('left-eyelid-change');
            $('.right-eyelid').toggleClass('right-eyelid-change');
            $('.left-eye').toggleClass('.left-eye-change');
            $('.right-eye').toggleClass('right-eye-change');
            $('.eyes').toggleClass('eyes-change');
            $('.pupil-left').toggleClass('pupil-left-change');
            $('.pupil-right').toggleClass('pupil-right-change');
        } else if (mouth.hasClass('emotion-sad')) {
            $('.mouth').toggleClass('mouthSad')
        } else if (mouth.hasClass('emotion-oneeye')) {
            $('.mouth').toggleClass('emotion-happy-change');
            $('.left-eyelid').toggleClass('closedEyelid');
        }
    },

    adopter: function (params) {
        // $('.mouth').css('border-radius', '0 0 60px 60px');
        app.clignement();
        $('.mouth').toggleClass('mouthCurve')
        $('.mouthCurve').toggleClass('mouth')
    },


    /** HORLOGE */
    clock: function() {
        console.log(this.getUri)
        const deg = 6
        const hr = document.querySelector('#hr');
        const mn = document.querySelector('#mn');
        const sc = document.querySelector('#sc');

        setInterval(() => {


            let day = new Date();
            let hh = day.getHours() * 30;
            let mm = day.getMinutes() * deg;
            let ss = day.getSeconds() * deg;

            hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
            mn.style.transform = `rotateZ(${mm}deg)`;
            sc.style.transform = `rotateZ(${ss}deg)`;
        })
    }
}

// App Loading
document.addEventListener('DOMContentLoaded', app.init);
document.addEventListener('DOMContentLoaded', app.clock);