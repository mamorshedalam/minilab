$(function ($) {
    'use strict'

    $(window).on('scroll', function () {
        if ($(window).scrollTop()) {
            $('#nav_inner').addClass('nav_fix');
        } else {
            $('#nav_inner').removeClass('nav_fix');
        }
        if ($(window).scrollTop()) {
            $('.nav_low').addClass('nav_fix');
        } else {
            $('.nav_low').removeClass('nav_fix');
        }
    });
    $(document).ready(function () {
        $('.toggle').click(function () {
            $('#nav_inner').toggleClass('active');
        });
    });
});