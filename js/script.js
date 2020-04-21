$(function () {

    var header = $("#header");
    var introH = $("#intro").innerHeight(); /*в переменную сохраняем высоту intro блока*/
    var scrollOffset = $(window).scrollTop(); /*сколько проскролили*/


    /*Fixed header*/
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {

        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);

        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.remoweClass("fixed");
        }
    });

    function checkScroll(scrollOffset) {
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

    /*Smooth scroll*/
    $("[data-scroll]").on("click", function (event) { /*Наблюдаем атрибут элемента при нажатии*/
        event.preventDefault();
        /*event - отмена станд. поведения ссылки*/

        var blockId = $(this).data('scroll'),/*достать значение из атрибута data scroll*/
            blockOffSet = $(blockId).offset().top;/*получаем позицию от верха стр.*/

        $("html, body").animate({
            scrollTop: blockOffSet
        }, 500);
    });

    /*Slider*/

    $("[data-slider]").slick({

        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1

    });

    // Filter-nav

    let filter = $("[data-filter]"); //отслеживаем по data-filter

    filter.on("click", function (event) { //Если кликаем на фильтр работает функция
        event.preventDefault(); //Отмена стандартного поведения ссылки

        let cat = $(this).data('filter'); //при нажатии выдает data-filter - #filter

        if (cat == 'all') {
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function () { //проходим по всем элементам с атрибутом data-cat

                let workCat = $(this).data('cat'); //и сохраняем в эту переменную значение cat

                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }

            });

        }

    });


    //BASKET

});