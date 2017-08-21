// Ползунки на page6.html
$(function () {
    recount();
    (function ($, undefined) {
        var $form = $("#changeLoc");

        $form.on("click", "#loc1", function (event) {
             recount.call(changeData(), changeCores(), changeDDR(),changeHDD(),changeFreq());
        });

        $form.on("click", "#loc2", function (event) {
            recount.call(changeData(), changeCores(), changeDDR(),changeHDD(),changeFreq());
        });

        $form.on("click", "#loc1", function (event) {
            recount.call(changeData(), changeCores(), changeDDR(),changeHDD(),changeFreq());
        });
    })(jQuery);

    $('#polz5').on( 'click', changeData());
    $('#polz1').on( 'click', changeCores());
    $('#polz2').on( 'click', changeDDR());
    $('#polz3').on( 'click', changeHDD());
    $('#polz4').on( 'click', changeFreq());
});

// Функция расчета

function recount() {
    if ($('#loc1').prop('checked')) {
        //MOSCOW
        var monthPrices = {1: 250, 3: 750, 6: 1500, 12: 3000},
            corePrices = {
                1: {1: 0, 2: 150, 3: 300, 4: 450, 6: 750, 8: 850, 12: 1200},
                3: {1: 0, 2: 450, 3: 900, 4: 1350, 6: 2250, 8: 2550, 12: 3600},
                6: {1: 0, 2: 840, 3: 1560, 4: 2160, 6: 3450, 8: 4410, 12: 6600},
                12: {1: 0, 2: 1560, 3: 3000, 4: 4140, 6: 6600, 8: 8400, 12: 11880}
            },

            ddrPrices = {
                1: {512: 0, 1: 50, 2: 100, 3: 200, 4: 300, 6: 500, 8: 700, 10: 900, 12: 1000},
                3: {
                    512: 0,
                    1: 50 * 3,
                    2: 100 * 3,
                    3: 200 * 3,
                    4: 300 * 3,
                    6: 500 * 3,
                    8: 700 * 3,
                    10: 900 * 3,
                    12: 1000 * 3
                },
                6: {512: 0, 1: 285, 2: 570, 3: 1140, 4: 1710, 6: 2850, 8: 3990, 10: 5130, 12: 5700},
                12: {512: 0, 1: 540, 2: 1080, 3: 2160, 4: 3240, 6: 5400, 8: 7980, 10: 9720, 12: 10800}
            },

            hddPrices = {
                1: {5: 0, 7: 20, 10: 25, 15: 50, 20: 75, 25: 100, 30: 125, 40: 150, 50: 175},
                3: {
                    5: 0,
                    7: 20 * 3,
                    10: 25 * 3,
                    15: 50 * 3,
                    20: 75 * 3,
                    25: 100 * 3,
                    30: 125 * 3,
                    40: 150 * 3,
                    50: 175 * 3
                },
                6: {5: 0, 7: 20 * 6, 10: 25 * 6, 15: 50 * 6, 20: 300, 25: 100 * 6, 30: 125 * 6, 40: 2100, 50: 175 * 6},
                12: {
                    5: 0,
                    7: 20 * 12,
                    10: 25 * 12,
                    15: 50 * 12,
                    20: 300,
                    25: 100 * 12,
                    30: 125 * 12,
                    40: 2100,
                    50: 175 * 12
                }
            },

            netFrequencyPrices = {
                1: {50: 0, 100: 250},
                3: {50: 0, 100: 250 * 3},
                6: {50: 0, 100: 1200},
                12: {50: 0, 100: 2280},
            },

            coreCost = corePrices[$("#polz5-inp").val()][$("#polz1-inp").val()],

            ddrCost = ddrPrices[$("#polz5-inp").val()][$("#polz2-inp").val()],

            hddCost = hddPrices[$("#polz5-inp").val()][$("#polz3-inp").val()],

            netFrequencyCost = netFrequencyPrices[$("#polz5-inp").val()][$("#polz4-inp").val()],

            monthsCost = monthPrices[$("#polz5-inp").val()],

            total = coreCost + ddrCost + hddCost + netFrequencyCost + monthsCost;

    } else {

        //FRANCE
        var monthPrices = {1: 150, 3: 450, 6: 900, 12: 1800},

            corePrices = {
                1: {1: 0, 2: 50, 3: 100, 4: 150},
                3: {1: 0, 2: 50 * 3, 3: 100 * 3, 4: 150 * 3},
                6: {1: 0, 2: 50 * 6, 3: 100 * 6, 4: 150 * 6},
                12: {1: 0, 2: 50 * 12, 3: 100 * 12, 4: 150 * 12}
            },

            ddrPrices = {
                1: {512: 0, 1: 50, 2: 100, 3: 200, 4: 300},
                3: {512: 0, 1: 50 * 3, 2: 100 * 3, 3: 200 * 3, 4: 300 * 3},
                6: {512: 0, 1: 50 * 6, 2: 100 * 6, 3: 200 * 6, 4: 300 * 6},
                12: {512: 0, 1: 50 * 12, 2: 100 * 12, 3: 200 * 12, 4: 300 * 12}
            },

            hddPrices = {
                1: {5: 0, 7: 20, 10: 25, 15: 50, 20: 75, 25: 100, 30: 125, 40: 150, 50: 175},
                3: {
                    5: 0,
                    7: 20 * 3,
                    10: 25 * 3,
                    15: 50 * 3,
                    20: 75 * 3,
                    25: 100 * 3,
                    30: 125 * 3,
                    40: 150 * 3,
                    50: 175 * 3
                },
                6: {5: 0, 7: 20 * 6, 10: 25 * 6, 15: 50 * 6, 20: 300, 25: 100 * 6, 30: 125 * 6, 40: 2100, 50: 175 * 6},
                12: {
                    5: 0,
                    7: 20 * 12,
                    10: 25 * 12,
                    15: 50 * 12,
                    20: 300,
                    25: 100 * 12,
                    30: 125 * 12,
                    40: 2100,
                    50: 175 * 12
                }
            },

            netFrequencyPrices = {
                1: {100: 0, 200: 100},
                3: {100: 0, 200: 100 * 3},
                6: {100: 0, 200: 100 * 6},
                12: {100: 0, 200: 100 * 12}
            },

            coreCost = corePrices[$("#polz5-inp").val()][$("#polz1-inp").val()],

            ddrCost = ddrPrices[$("#polz5-inp").val()][$("#polz2-inp").val()],

            hddCost = hddPrices[$("#polz5-inp").val()][$("#polz3-inp").val()],

            netFrequencyCost = netFrequencyPrices[$("#polz5-inp").val()][$("#polz4-inp").val()],

            monthsCost = monthPrices[$("#polz5-inp").val()],

            total = coreCost + ddrCost + hddCost + netFrequencyCost + monthsCost;

    }

        jQuery("#billing").html(total);
    }


function changeData () {
    $( "#polz5" ).slider({
        range: "max",
        max: 3,
        step: 1,
        slide: function( event, ui ) {
            var propertyValue = [1, 3, 6, 12];
            $( "#polz5-inp" ).val( propertyValue [ui.value] );
           recount();
        }
    });
};


function changeCores() {
    if($('#loc1').prop('checked')) {
        $( "#polz1" ).slider({
            range: "max",
            max: 6,
            step: 1,
            slide: function( event, ui ) {
                var propertyValue = [1, 2, 3, 4, 6, 8, 12];
                $( "#polz1-inp" ).val( propertyValue [ui.value] );
                recount();
            }
        });

    } else {

        $( "#polz1" ).slider({
            range: "max",
            max: 3,
            step: 1,
            slide: function( event, ui ) {
                var propertyValue = [1, 2, 3, 4];
                $( "#polz1-inp" ).val( propertyValue [ui.value] );
                recount();
            }
        })
    };
    }



function changeDDR() {
    if ($('#loc1').prop('checked')) {
        $("#polz2").slider({
            range: "max",
            max: 8,
            step: 1,
            slide: function (event, ui) {
                var propertyValue = [512, 1, 2, 3, 4, 6, 8, 10, 12];
                $("#polz2-inp").val(propertyValue [ui.value]);
                recount();
            }
        });

    } else {

        $("#polz2").slider({
            range: "max",
            max: 4,
            step: 1,
            slide: function (event, ui) {
                var propertyValue = [512, 1, 2, 3, 4];
                $("#polz2-inp").val(propertyValue [ui.value]);
                recount();
            }
        });
    }
}

function changeHDD() {
    $( "#polz3" ).slider({
        range: "max",
        min: 0,
        max: 8,
        value: 0,
        step: 1,
        slide: function( event, ui ) {
            var propertyValue = [5, 7, 10, 15, 20, 25, 30, 40, 50];
            $( "#polz3-inp" ).val( propertyValue [ui.value] );
            recount();
        }
    });
};

function changeFreq() {
    if ($('#loc1').prop('checked')) {
    $( "#polz4" ).slider({
        range: "max",
        max: 1,
        step: 1,
        slide: function( event, ui ) {
            var propertyValue = [50, 100];
            $( "#polz4-inp" ).val( propertyValue [ui.value] );
            recount();
        }
    });

    } else {
        $( "#polz4" ).slider({
            range: "max",
            max: 1,
            step: 1,
            slide: function( event, ui ) {
                var propertyValue = [100, 200];
                $( "#polz4-inp" ).val( propertyValue [ui.value] );
                recount();
            }
        });
    }
}


// конец ползунков

$(function() {

	// плавный переход к якорям

	$(function(){
		$('a[href^="#"]').click(function(){
			var target = $(this).attr('href');
			$('html, body').animate({scrollTop: $(target).offset().top}, 800);
			return false; 
		}); 
	});

	// Табы на page1.html

	$(".page1-sec1 .wrapper .tab").click(function() {
		$(".page1-sec1 .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active")
		$(".page1-sec1 .item-wrap").hide().eq($(this).index()).fadeIn(800)
	}).eq(0).addClass("active");

	// Табы на page6.html

	$(".tariff .wrapper .tab").click(function() {
		$(".tariff .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active")
		$(".tariff .items-wrap").hide().eq($(this).index()).fadeIn(800)
	}).eq(0).addClass("active");

	// Слайдер на index.html

	$('.slider').slick({
		vertical: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		verticalSwiping: true,
		prevArrow: '<div class="prev"></div>',
		nextArrow: '<div class="next"></div>',
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});