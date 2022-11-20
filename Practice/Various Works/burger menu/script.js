$(document).ready(function() {
    $('.teset').click(function(event) {
        $('.header__navigation-burger,.header__navigation-styles').toggleClass('active');
        $('body').toggleClass('lock');
        $('.header').toggleClass('bckgr')
        $('.header__logo').toggleClass('bckgrlogo')
    });
});