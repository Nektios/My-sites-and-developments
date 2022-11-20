$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.ul-nav,.burger').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header').toggleClass('bckgr')
    });
});