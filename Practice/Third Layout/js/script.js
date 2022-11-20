$(document).ready(function() {
    $('.burger').click(function(event) {
        $('.burger,.ul-nav').toggleClass('active');
        $('body').toggleClass('lock');
        $('.first-header').toggleClass('bckgr')
    });
});