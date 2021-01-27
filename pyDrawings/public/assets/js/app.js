var app = {

    init: function () {

        console.log('app init');

        // L I S T E N E R S 
        $('.head-color').hover(app.changeColor)

        // CLIGNEMENT DES YEUX
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
    }
}

// App Loading
document.addEventListener('DOMContentLoaded', app.init);