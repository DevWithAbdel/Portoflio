
jQuery(function() {

    /*===================================================================================*/
    /*  back to top script
    /*===================================================================================*/
    var offset = 500;
    var back_top = jQuery('.skip_swing');
    jQuery(window).scroll(function(){
        (jQuery(this).scrollTop() > offset) ? back_top.addClass('show_icon') :  back_top.removeClass('show_icon');
    });

    jQuery('a.skip_swing').on('click', function() {
        var Lochref = jQuery(this).attr('href');
        jQuery("html, body").stop().animate({
            scrollTop: jQuery(Lochref).offset().top
        }, 1500);
        return false;
    });

    /*===================================================================================*/
    /*  tab js
    /*===================================================================================*/
    if (jQuery('#horizontalTab').length > 0) {
        jQuery('#horizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion
            width: 'auto', //auto or any width like 600px
            fit: true,   // 100% fit in a container
            //closed: 'accordion', // Start closed if in accordion view
            activate: function() { // Callback function if tab is switched
                var $tab = jQuery(this);
                var $info = jQuery('#tabInfo');
                var $name = jQuery('span', $info);
                $name.text($tab.text());
                $info.show();
            }
        });
    }

    /*===================================================================================*/
    /*  For Chart
    /*===================================================================================*/

    // chart1
    if (jQuery('#chart1').length > 0) {
        var ctx = document.getElementById('chart1');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [
                    'Core Token Sale',
                    'Partners & Advisors',
                    'Project Team Share',
                    'Reserve Token',
                    'Bounties',
                    'Bonuses'
                ],
                datasets: [{
                    label: '# of Votes',
                    data: [60,15,10,8,4,3],
                    backgroundColor: [
                        '#4845b4',
                        '#4fc489',
                        '#0ba1d6',
                        '#efe943',
                        '#e9734a',
                        '#5990a4'
                    ],
                    borderWidth: 0,
                    hoverOffset: false
                }]
            },
            options: {
                legend: {
                    display: false
                }
            },

        });
    }

    // chart2
    if (jQuery('#chart2').length > 0) {
        var ctx = document.getElementById('chart2');
        var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [
                    'Core Development',
                    'Sales & Marketing',
                    'Legal & Financial',
                    'Management',
                    'Bounties'
                ],
                datasets: [{
                    label: '# of Votes',
                    data: [40,30,15,10,5],
                    backgroundColor: [
                        '#4845b4',
                        '#4fc489',
                        '#0ba1d6',
                        '#efe943',
                        '#e9734a'
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                legend: {
                    display: false
                },
            },
        });
    }

    /*===================================================================================*/
    /*  For Expired Timer
    /*===================================================================================*/

    // clock-1 - index1.html
    if (jQuery('#clock').length > 0) {
        var exp_date = "Dec 10, 2022 15:37:20";
        timer("clock", exp_date);
    }
    // clock-2 - index2.html
    if (jQuery('#clock2').length > 0) {
        var exp_date = "Dec 12, 2022 10:17:25";
        timer("clock2", exp_date);
    }

    function timer(clockID, exp_date) {
        // Set the date we're counting down to
        var countDownDate = new Date(exp_date).getTime();

        // Update the count down every 1 second
        var x = setInterval(function() {
            // Get today's date and time
            var now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            //add a zero (0) if value less then 9
            var days    = ( days < 10 ) ? '0' + days : days;
            var hours   = ( hours < 10 ) ? '0' + hours : hours;
            var minutes = ( minutes < 10 ) ? '0' + minutes : minutes;
            var seconds = ( seconds < 10 ) ? '0' + seconds : seconds;

            // Output the result in an element with id="demo"
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("mins").innerHTML = minutes;
            document.getElementById("secs").innerHTML = seconds;

            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById(clockID).innerHTML = "EXPIRED";
            }
        }, 1000);
    }

    /*===================================================================================*/
    /*  animation wow
    /*===================================================================================*/
    if (jQuery('.wow').length > 0) {
        jQuery(function(){
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 0,
                mobile: false,
                live: true,
                scrollContainer: null,
            });
            wow.init();
        });
    }

    /*===================================================================================*/
    /*  newsletter form email validation
    /*===================================================================================*/
    jQuery('.newsletter-field form').submit(function() {
        var nlField = jQuery('.newsletter-field input[type="email"]');
        var expEmail = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[_a-z0-9-]+(\.[_a-z0-9-]+)*(\.[a-z]{2,4})$/;
        if ( nlField.val() == '' || expEmail.test( nlField.val() ) != true ) {
            jQuery(this).next().html('<div class="alert alert-danger alert-dismissible mt-10"><button type="button" class="close" data-dismiss="alert">&times;</button><i class="fa fa-info-circle"></i> Please enter correct email address!</div>');
            return false;
        } else {
            return;
        }
    });

});

jQuery(window).on('load', function() {

    /*===================================================================================*/
    /*  website loader js
    /*===================================================================================*/
    setTimeout(function(){
        jQuery('.unicrypt-pre-con').fadeOut('slow');
    }, 500);

});

jQuery(document).ready(function() {

    /*===================================================================================*/
    /*  fat-nav js
    /*===================================================================================*/
    if (jQuery('.fat-nav').length > 0) {
        (function() { jQuery.fatNav(); }());
        var fatContent = jQuery( '.main-menu ul').html();
        var fatHeaderRight = jQuery( '.header-right').html();
        var fatNav = '<div class="fat-nav__wrapper" id="fatmenu"><ul>' + fatContent + '<div class="header-right">' + fatHeaderRight + '</div></ul></div>';
        jQuery( '.fat-nav' ).html( fatNav );
        jQuery('#fatmenu ul li.menu-item-has-children').append("<span class='toggle_button'><small></small></span>");
        jQuery('#fatmenu ul ul').hide();
        jQuery('ul li.menu-item-has-children > .toggle_button').click(function() {
            if(jQuery(this).parent().children('ul').hasClass('submenu') ) {
                jQuery(this).parent().children('ul').removeClass("submenu").slideUp(400);
                jQuery(this).removeClass( 'active_item' );
            }
            else{
                jQuery(this).parent().children('ul').addClass("submenu").slideDown(400);
                jQuery(this).addClass( 'active_item' );
            }
        });
    }

    jQuery('.main-menu ul li ul').parent('li').addClass('menuarrow');

});

jQuery(window).resize(function() {
    var win_width = jQuery(window).width();
    if (win_width > 1099) {
        jQuery('.fat-nav').removeClass('active').css("display", "none");
        jQuery('.hamburger').removeClass('active');
    }

});