/**
 * flatOwl
 * scrollSidebar
 * Scrollbar Message
 * Scrollbar MessageBox
 * sendMessage


 */

;
(function($) {

    "use strict";

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var flatOwl = function() {
        if ($().owlCarousel) {
            $('.themesflat-carousel-box').each(function() {
                var
                    $this = $(this),
                    auto = $this.data("auto"),
                    item = $this.data("column"),
                    item2 = $this.data("column2"),
                    item3 = $this.data("column3"),
                    gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    margin: gap,
                    nav: true,
                    navigation: true,
                    pagination: true,
                    autoplay: false,
                    autoplayTimeout: 5000,
                    responsive: {
                        0: {
                            items: item3
                        },
                        600: {
                            items: item2
                        },
                        1000: {
                            items: item
                        }
                    }
                });
            });
        }
    };

    var scrollSidebar = function() {
        if ($().mCustomScrollbar) {
            $(".sidebar .sidebar-nav.scroll").mCustomScrollbar({
                scrollInertia: 400,
            });
        }
    }; // Scrollbar Message

    var scrollbarMessage = function() {
        if ($().mCustomScrollbar) {
            $(".box-message .box-content .scroll").mCustomScrollbar({
                scrollInertia: 400,
            });
        }
    }; // Scrollbar Message

    var scrollbarMessageBox = function() {
        if ($().mCustomScrollbar) {
            $("#message .message-info .scroll").mCustomScrollbar({
                scrollInertia: 400,
            });
        }
    }; // Scrollbar MessageBox

    var scrollbarTable = function() {
        $(".box-project .box-content").mCustomScrollbar({
            axis: "x",
            advanced: { autoExpandHorizontalScroll: true },
            scrollInertia: 400,
        });
    }; // Scrollbar MessageBox
    var myElement = document.getElementById('simple-bar');
    new SimpleBar(myElement, {
        autoHide: true
    });

    var sendMessage = function() {
        $('textarea[name="message"]').each(function() {
            var text = $('textarea[name="message"]');
            $('.btn-send button').on('click', function(e) {
                if (text.val() == '') {
                    alert('Please type in the box to chat!');
                } else {
                    $('<div class="clearfix"></div><div class="message-in"><div class="message-pic"><img src="images/avatar/message-1.png" alt=""><div class="pulse-css-1"></div></div><div class="message-body"><div class="message-text"><p>' + text.val() + '</p></div><div class="message-meta"><p>Sunday, march 17, 2021 at 2:59 PM</p></div></div></div>').appendTo('div.message-box .mCustomScrollBox .mCSB_container');
                    text.val('');
                    var heights = $('div.message-box .mCustomScrollBox .mCSB_container').height(),
                        agv = heights - 644;
                    $('div.message-box .mCustomScrollBox .mCSB_container').css({
                        top: -(agv),
                    });
                };
                e.preventDefault();
            });
            $(this).keyup(function(event) {
                var keycode = (event.keyCode ? event.keyCode : event.which);
                if (keycode == '13') {
                    if (text.val() == '') {
                        alert('Please type in the box to chat!');
                    } else {
                        $('<div class="clearfix"></div><div class="message-in"><div class="message-pic"><img src="images/avatar/message-1.png" alt=""><div class="pulse-css-1"></div></div><div class="message-body"><div class="message-text"><p>' + text.val() + '</p></div><div class="message-meta"><p>Sunday, march 17, 2021 at 2:59 PM</p></div></div></div>').appendTo('div.message-box .mCustomScrollBox .mCSB_container');
                        text.val('');
                        var heights = $('div.message-box .mCustomScrollBox .mCSB_container').height(),
                            agv = heights - 644;
                        $('div.message-box .mCustomScrollBox .mCSB_container').css({
                            top: -(agv),
                        });
                    };
                };
                event.preventDefault();
            });
        });
    }; // Send Message
    // Dom Ready

    $(function() {
        scrollSidebar();
        flatOwl();
        scrollbarMessage();
        scrollbarMessageBox();
        scrollbarTable();
        sendMessage();
    });

})(jQuery);