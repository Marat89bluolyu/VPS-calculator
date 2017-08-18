// Ползунки на page6.html

var core         	    = 1,
    ddr       		    = 1,
    hdd           	    = 10,
    netFrequency        = 50,
    months			    = 1,
    coreCost           = null,
    ddrCost            = null,
    hddCost          = null,
    netFrequencyCost  = null,
    monthsCost       = 250,
    total                 = null;



// Функция расчета
function recount() {
    total = coreCost
        +ddrCost
        +hddCost
        +netFrequencyCost
        +monthsCost;

    jQuery("#billing").html(total);
}


    /*$(".slider-wrap").on("change click keyup", "#polz1", function() {

        console.log("click");
        core = $( "#polz1" ).slider( "value" );
        coreCost = (core === 0 ) ? 0 : // 1
            (core === 1 ) ? 150 :   //2
                (core === 2 ) ? 300 :   //3
                    (core === 3 ) ? 450 :   //4
                        (core === 4 ) ? 750 :   //6
                            (core === 5 ) ? 850 : //8
                                    (core === 6 ) ? 1200 : //12
                                      console.log ("coreCost ===" + coreCost);

        recount();
        return false;
    });

    $(document).on("change click keyup", "#polz2", function() {
        ddr =  $( "#polz2" ).slider( "value" );
        ddrCost = (ddr === 0) ? 0 :
            (ddr === 1) ? 50 :
                (ddr === 2) ? 100 :
                    (ddr === 3) ? 200 :
                        (ddr === 4) ? 300 :
                            (ddr === 5) ? 500 :
                                (ddr === 6) ? 700 :
                                    (ddr === 7) ? 900 :
                                        (ddr === 8) ? 1000 :
                                            console.log ("ddrCost ===" + ddrCost);
        recount();
        return false;
    });

    $(document).on("change click keyup", "#polz3", function() {
        hdd = $( "#polz3" ).slider( "value" );
        hddCost = (hdd === 0) ? 0:
            (hdd === 1) ? 20:
                (hdd === 2) ? 25:
                    (hdd === 3) ? 50:
                        (hdd === 4) ? 75:
                            (hdd === 5) ? 100:
                                (hdd === 6) ? 125:
                                    (hdd === 7) ? 150:
                                        (hdd === 8) ? 175:
                                            console.log ("hddCost ===" + hddCost);

        recount();
    });

    $(document).on("change click keyup", "#polz4", function() {
        netFrequency = $( "#polz4" ).slider( "value" );
        netFrequencyCost = (netFrequency === 0) ? 0:
            (netFrequency === 1) ? 100:
                console.log ("netFrequencyCost ===" + netFrequencyCost);

        recount();
    });

    $(document).on("change click", "#polz5", function() {
        months = $( "#polz5" ).slider( "value" );
        monthsCost = (months === 0) ? 250 :
            (months === 1) ? 750 :
                (months === 2) ? 1500 :
                    (months === 3) ? 3000 :
                        console.log ("monthsCost ===" + monthsCost);

        recount();
    });
*/
//Стили ползунков

$( function() {
    var propertyValue = [1, 3, 6, 12];
    $( "#polz5" ).slider({
        range: "max",
        min: 0,
        max: 3,
        value: 0,
        step: 1,
        slide: function( event, ui ) {
            $( "#polz5-inp" ).val( propertyValue [ui.value] );

            switch(propertyValue [ui.value]) {
                case 1:
                    monthsCost = 250;
                    break;
                case 3:
                    monthsCost = 750;
                    break;
                case 6:
                    monthsCost = 1500;
                    break;
                case 12:
                    monthsCost = 3000;
                    break;
                default:
                    console.log("Error");
            }
            recount()
        }
    });
    //  $( "#polz5-inp" ).val( $( "#polz5" ).slider( "value" ) );
});

$( function() {
    var propertyValue = [1, 2, 3, 4, 6, 8, 12];

    $( "#polz1" ).slider({
        range: "max",
        min: 0,
        max: 6,
        value: 0,
        step: 1,
        slide: function( event, ui ) {
            $( "#polz1-inp" ).val( propertyValue [ui.value] );

            switch (months) {
                case 1:
                    switch (propertyValue [ui.value]) {
                        case 1:
                            coreCost = 0;
                            break;
                        case 2:
                            coreCost = 150;
                            break;
                        case 3:
                            coreCost = 300;
                            break;
                        case 4:
                            coreCost = 450;
                            break;
                        case 6:
                            coreCost = 750;
                            break;
                        case 8:
                            coreCost = 850;
                            break;
                        case 12:
                            coreCost = 1200;
                            break;
                        default:
                            console.log(propertyValue [ui.value]);
                    }
                    break;

                case 3:
                    switch (propertyValue [ui.value]) {
                        case 1:
                            coreCost = 0;
                            break;
                        case 2:
                            coreCost = 150 * 3;
                            break;
                        case 3:
                            coreCost = 300 * 3;
                            break;
                        case 4:
                            coreCost = 450 * 3;
                            break;
                        case 6:
                            coreCost = 750 * 3;
                            break;
                        case 8:
                            coreCost = 850 * 3;
                            break;
                        case 12:
                            coreCost = 1200 * 3;
                            break;
                        default:
                            console.log(propertyValue [ui.value]);
                    }
                    break;

                case 6:
                    switch (propertyValue [ui.value]) {
                        case 1:
                            coreCost = 0;
                            break;
                        case 2:
                            coreCost = 840;
                            break;
                        case 3:
                            coreCost = 1560;
                            break;
                        case 4:
                            coreCost = 2160;
                            break;
                        case 6:
                            coreCost = 3450;
                            break;
                        case 8:
                            coreCost = 4410;
                            break;
                        case 12:
                            coreCost = 6600;
                            break;
                        default:
                            console.log("Error");
                    }
                    break;

                case 12:
                    switch (propertyValue [ui.value]) {
                        case 1:
                            coreCost = 0;
                            break;
                        case 2:
                            coreCost = 1560;
                            break;
                        case 3:
                            coreCost = 3000;
                            break;
                        case 4:
                            coreCost = 4140;
                            break;
                        case 6:
                            coreCost = 6600;
                            break;
                        case 8:
                            coreCost = 8400;
                            break;
                        case 12:
                            coreCost = 11880;
                            break;
                        default:
                            console.log(propertyValue [ui.value]);
                    }
                    break;

                default:
                    console.log(months);
                    break;
            }

recount()
        }
    });
   // $( "#polz1-inp" ).val( sliderValue [$( "#polz1" ).slider( "value" )] );
});

$( function() {
    var propertyValue = [512, 1, 2, 3, 4, 6, 8, 10, 12];
    $( "#polz2" ).slider({
        range: "max",
        min: 0,
        max: 8,
        value: 0,
        step: 1,
        slide: function( event, ui ) {
            $( "#polz2-inp" ).val( propertyValue [ui.value] );

            switch(propertyValue [ui.value]) {
                case 512:
                    ddrCost = 0;
                    break;
                case 1:
                    ddrCost = 50;
                    break;
                case 2:
                    ddrCost = 100;
                    break;
                case 3:
                    ddrCost = 200;
                    break;
                case 4:
                    ddrCost = 300;
                    break;
                case 6:
                    ddrCost = 500;
                    break;
                case 8:
                    ddrCost = 700;
                    break;
                case 10:
                    ddrCost = 900;
                    break;
                case 12:
                    ddrCost = 1000;
                    break;
                default:
                    console.log("Error");
            }
            recount()
        }
    });
    //$( "#polz2-inp" ).val( $( "#polz2" ).slider( "value" ) );
});

$( function() {
    var propertyValue = [5, 7, 10, 15, 20, 25, 30, 40, 50];
    $( "#polz3" ).slider({
        range: "max",
        min: 0,
        max: 8,
        value: 0,
        step: 1,
        slide: function( event, ui ) {
            $( "#polz3-inp" ).val( propertyValue [ui.value] );

            switch(propertyValue [ui.value]) {
                case 5:
                    hddCost = 0;
                    break;
                case 7:
                    hddCost = 20;
                    break;
                case 10:
                    hddCost = 25;
                    break;
                case 15:
                    hddCost = 50;
                    break;
                case 20:
                    hddCost = 75;
                    break;
                case 25:
                    hddCost = 100;
                    break;
                case 30:
                    hddCost = 125;
                    break;
                case 40:
                    hddCost = 150;
                    break;
                case 50:
                    hddCost = 175;
                    break;
                default:
                    console.log("Error");
            }
            recount()
        }
    });
   // $( "#polz3-inp" ).val( $( "#polz3" ).slider( "value" ) );
});

$( function() {
    var propertyValue = [50, 100];
    $( "#polz4" ).slider({
        range: "max",
        min: 0,
        max: 1,
        value: 0,
        step: 1,
        slide: function( event, ui ) {
            $( "#polz4-inp" ).val( propertyValue [ui.value] );

            switch(propertyValue [ui.value]) {
                case 50:
                    netFrequencyCost = 0;
                    break;
                case 100:
                    netFrequencyCost = 250;
                    break;
                default:
                    console.log("Error");
            }
            recount()
        }
    });
    //$( "#polz4-inp" ).val( $( "#polz4" ).slider( "value" ) );
});



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