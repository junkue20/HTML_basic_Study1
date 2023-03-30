$(document).ready(function () {
    var navbarShrink = () => {
        const mainNav = $('#mainNav');
        if (!mainNav) {
            return;
        }
        if (window.scrollY === 0)
            mainNav.removeClass('navbar-shrink');
        else
            mainNav.addClass('navbar-shrink');
    }
    navbarShrink();

    $(document).scroll(function () {
        navbarShrink();
    });
});
