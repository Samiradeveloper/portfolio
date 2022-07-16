
let n = 1;
$('#next').click(function (e) {
    e.preventDefault();
    n++;
    $('.cl' + n).click();
});
$('#prev').click(function (e) {
    e.preventDefault();
    n--;
    $('.cl' + n).click();
});
//menu jquery
$(function () {
    $('#user').click(function () {
        $('#nav').removeClass('menu').addClass('menu2')
        $('#content').css('width', '1200px')
    }),
        $('#home').click(function () {
            $('#nav').addClass('menu').removeClass('menu2')
            $('#content').css('width', '950px')
        }),
        $('#resume').click(function () {
            $('#nav').removeClass('menu').addClass('menu2')
            $('#content').css('width', '1200px')
        }),
        $('#works').click(function () {
            $('#nav').removeClass('menu').addClass('menu2')
            $('#content').css('width', '1200px')
        }),
        $('#blog').click(function () {
            $('#nav').removeClass('menu').addClass('menu2')
            $('#content').css('width', '1200px')
        }),
        $('#contact').click(function () {
            $('#nav').addClass('menu').removeClass('menu2')
            $('#content').css('width', '950px')
        });
    //footer date:
});
$(function () {
    let time = new Date;

    function toMonthName(monthNumber) {
        time.setMonth(monthNumber);
        return time.toLocaleDateString('en-US', {
            month: 'long',
        });
    }

    let day = time.getDate();
    let month = time.getMonth()
    let monthC = toMonthName(month)
    let year = time.getFullYear();
    $('#day').text(day)
    $('#month').text(monthC)
    $('#year').text(year)
});
$(function () {
    $('#About-page').hide();
    $('#Resume-page').hide();
    $('#portfolio').hide();
    $('#blog-page').hide();
    $('#contact-page').hide();
    $('#home').click(function () {
        $('#About-page').hide();
        $('#Home-page').slideDown()
        $('#Resume-page').hide();
        $('#portfolio').hide();
        $('#blog-page').hide();
        $('#contact-page').hide()
    })
    $('#user').click(function () {
        $('#Home-page').slideUp();
        $('#About-page').show();
        $('#Resume-page').hide();
        $('#portfolio').hide();
        $('#blog-page').hide();
        $('#contact-page').hide()

    })
    $('#resume').click(function () {
        $('#Home-page').hide()
        $('#portfolio').hide();
        $('#blog-page').hide();
        $('#contact-page').hide()
        $('#About-page').slideUp()
        $('#Resume-page').show()
    })
    $('#works').click(function () {
        $('#Home-page').hide()
        $('#About-page').hide()
        $('#Resume-page').slideUp()
        $('#portfolio').show()
        $('#contact-page').hide()
        $('#blog-page').hide();

    })
    $('#blog').click(function () {
        $('#Home-page').hide()
        $('#About-page').hide()
        $('#Resume-page').hide()
        $('#portfolio').slideUp()
        $('#blog-page').show()
        $('#contact-page').hide()
    });
    $('#contact').click(function () {
        $('#Home-page').hide()
        $('#About-page').hide()
        $('#Resume-page').hide()
        $('#portfolio').hide()
        $('#blog-page').slideUp()
        $('#contact-page').show()
    });
    var counter = 0;
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var i = setInterval(function () {
        $('#counter1 h2').html(a);
        $('#counter2 h2').html(b);
        $('#counter3 h2').html(c);
        $('#counter4 h2').html(d);
        counter++;
        if (a == 80) {
            a = 80;
        } else {
            a++
        }
        if (b == 120) {
            a = 120;
        } else {
            b++
        }
        if (d == 30) {
            d = 30;
        } else {
            d++
        }
        if (c == 60) {
            c = 60;
        } else {
            c++
        }
        if (counter == 120) {
            clearInterval(i);
            a = 0;
            b = 0;
            c = 0;
            d = 0;
        }
    }, 100);

    $(".list").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all") {
            $(".card").fadeIn(400);
            $("li.list.active").removeClass("active");
            $(this).addClass("active");
        } else {
            $("li.list.active").removeClass("active");
            $(this).addClass("active");
            $(".card")
                .not("." + value)
                .fadeOut(400);
            $(".card")
                .filter("." + value)
                .fadeIn(400);
        }
    });
    $(function () {

        $(".cont").each(function () {

            $(this).find(".progress-bar").animate({

                width: $(this).attr("data-percent")

            }, 6000);

            $(this).find("span").animate({

                left: $(this).attr("data-percent")
            }, 6000);

        });

    });
});