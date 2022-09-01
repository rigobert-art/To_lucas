$(document).ready(function() {
    // var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    $('.floors').hide();
    $('.regform').hide();
    $('.condet').hide();
    $('.notify').hide();
    $('.help-details').hide();
    $('.negot').hide();

    $('#home-link').click(function() {
        if ($(this).addClass('active')) {
            $('.home').fadeIn();
            $('.user-details').fadeIn();
            $('.regform').fadeOut();
            $('.condet').fadeOut();
            $('.notify').fadeOut();
            $('.floors').fadeOut();
            $('.negot').fadeOut();
            $('.help-details').fadeOut();
        }
    });
    $('#floor-link').click(function() {
        if ($(this).addClass('active')) {
            $('.floors').fadeIn();
            $('.regform').fadeOut();
            $('.condet').fadeOut();
            $('.notify').fadeOut();
            $('.home').fadeOut();
            $('.user-details').fadeOut();
            $('.negot').fadeOut();
            $('.help-details').fadeOut();
        }
    });
    $('#regTen').click(function() {
        if ($(this).addClass('active')) {
            $('.regform').fadeIn();
            $('.floors').fadeOut();
            $('.condet').fadeOut();
            $('.notify').fadeOut();
            $('.home').fadeOut();
            $('.user-details').fadeOut();
            $('.help-details').fadeOut();
        }
    });
    $('#contract-link').click(function() {
        if ($(this).addClass('active')) {
            $('.condet').fadeIn();
            $('.regform').fadeOut();
            $('.floors').fadeOut();
            $('.notify').fadeOut();
            $('.home').fadeOut();
            $('.user-details').fadeOut();
            $('.negot').fadeOut();
            $('.help-details').fadeOut();
        }
    });
    $('#negot-link').click(function() {
        if ($(this).addClass('active')) {
            $('.negot').fadeIn();
            $('.condet').fadeOut();
            $('.regform').fadeOut();
            $('.floors').fadeOut();
            $('.notify').fadeOut();
            $('.home').fadeOut();
            $('.user-details').fadeOut();
            $('.help-details').fadeOut();
        }
    });
    $('#notify-link').click(function() {
        if ($(this).addClass('active')) {
            $('.notify').fadeIn();
            $('.floors').fadeOut();
            $('.regform').fadeOut();
            $('.condet').fadeOut();
            $('.home').fadeOut();
            $('.user-details').fadeOut();
            $('.help-details').fadeOut();
            $('.negot').fadeOut();
        }
    });
    $('#help-desk').click(function() {
        if ($(this).addClass('active')) {
            $('.help-details').fadeIn();
            $('.floors').fadeOut();
            $('.regform').fadeOut();
            $('.condet').fadeOut();
            $('.home').fadeOut();
            $('.user-details').fadeOut();
            $('.notify').fadeOut();
            $('.negot').fadeOut();
        }
    });

    $('#newpass').keyup(function() {
        var pswd = $(this).val();
        if (pswd.length < 8) {
            $('#length').removeClass('valid').addClass('invalid');
        } else {
            $('#length').removeClass('invalid').addClass('valid');
        }
        if (pswd.match(/[a-z]/)) {
            $('#letter').removeClass('invalid').addClass('valid');
        } else {
            $('#letter').removeClass('valid').addClass('invalid');
        }
        if (pswd.match(/[A-Z]/)) {
            $('#capital').removeClass('invalid').addClass('valid');
        } else {
            $('#capital').removeClass('valid').addClass('invalid');
        }
        if (pswd.match(/\d/)) {
            $('#number').removeClass('invalid').addClass('valid');
        } else {
            $('#number').removeClass('valid').addClass('invalid');
        }
        if (pswd.match(/[!@#\$%\^&\*_]/)) {
            $('#special').removeClass('invalid').addClass('valid');
        } else {
            $('#special').removeClass('valid').addClass('invalid');
        }
    }).focus(function() {
        $('#pswd-hint').show();
    }).blur(function() {
        $('#pswd-hint').hide();
    });
});
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))