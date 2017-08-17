// Ползунки на page6.html

var core         	    = 1,
    ddr       		    = 1,
    hdd           	    = 10,
    netFrequency        = 10,
    months			    = 1,
    coreCost           = null,
    ddrCost            = null,
    hddCost          = null,
    netFrequencyCost  = null,
    monthsCost       = null,
    total 			= 250;



// Функция расчета
function recount() {
    total = coreCost
        +ddrCost
        +hddCost
        +netFrequencyCost
        +monthsCost;

    jQuery("#billing").html(total);
}


    $(document).on("change click keyup", "#polz1", function() {
        core = $( "#polz1" ).slider( "value" );
        console.log (core);
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

    $(document).on("change click", "#polz2", function() {
        ddr =  $( "#polz2" ).slider( "value" );
        ddrCost = (ddr === 512) ? 0 :
            (ddr === 1) ? 50 :
                (ddr === 2) ? 100 :
                    (ddr === 3) ? 200 :
                        (ddr === 4) ? 300 :
                            (ddr === 6) ? 100 :
                                (ddr === 8) ? 700 :
                                    (ddr === 10) ? 900 :
                                        (ddr === 12) ? 1000 :
                                            console.log ("ddrCost ===" + ddrCost);
        recount();
    });

    $(document).on("change click", "#polz3", function() {
        hdd = $( "#polz3" ).slider( "value" );
        hddCost = (hdd === 5) ? 0:
            (hdd === 7) ? 20:
                (hdd === 10) ? 25:
                    (hdd === 15) ? 50:
                        (hdd === 20) ? 75:
                            (hdd === 25) ? 100:
                                (hdd === 30) ? 125:
                                    (hdd === 40) ? 150:
                                        (hdd === 50) ? 175:
                                            console.log ("hddCost ===" + hddCost);

        recount();
    });

    $(document).on("change click", "#polz4", function() {
        netFrequency = $( "#polz4" ).slider( "value" );
        netFrequencyCost = (netFrequency === 50) ? 0 :
            (netFrequency === 100) ? 100 :
                console.log ("netFrequencyCost ===" + netFrequencyCost);

        recount();
    });

    $(document).on("change click", "#polz5", function() {
        months = $( "#polz5" ).slider( "value" );
        console.log (months);
        monthsCost = (months === 1) ? 250 :
            (months === 3) ? 750 :
                (months === 6) ? 1500 :
                    (months === 12) ? 3000 :
                        console.log ("monthsCost ===" + monthsCost);

        recount();
    });

//Стили ползунков

$( function() {
    var coreValue = [1, 2, 3, 4, 6, 8, 12];

    $( "#polz1" ).slider({
        range: "max",
        min: 0,
        max: 6,
        value: 0,
        step: 1,
        slide: function( event, ui ) {
            $( "#polz1-inp" ).val( coreValue [ui.value] );
        }
    });
   // $( "#polz1-inp" ).val( sliderValue [$( "#polz1" ).slider( "value" )] );
    return false;
});

$( function() {
    $( "#polz2" ).slider({
        range: "max",
        min: 1,
        max: 64,
        slide: function( event, ui ) {
            $( "#polz2-inp" ).val( ui.value );
        }
    });
    $( "#polz2-inp" ).val( $( "#polz2" ).slider( "value" ) );
});

$( function() {
    $( "#polz3" ).slider({
        range: "max",
        min: 10,
        max: 2000,
        step: 10,
        slide: function( event, ui ) {
            $( "#polz3-inp" ).val( ui.value );
        }
    });
    $( "#polz3-inp" ).val( $( "#polz3" ).slider( "value" ) );
});

$( function() {
    $( "#polz4" ).slider({
        range: "max",
        min: 50,
        max: 100,
        step: 50,
        slide: function( event, ui ) {
            $( "#polz4-inp" ).val( ui.value );
        }
    });
    $( "#polz4-inp" ).val( $( "#polz4" ).slider( "value" ) );
});

$( function() {
    $( "#polz5" ).slider({
        range: "max",
        min: 1,
        max: 12,
        step: 1,
        slide: function( event, ui ) {
            $( "#polz5-inp" ).val( ui.value );
        }
    });
    $( "#polz5-inp" ).val( $( "#polz5" ).slider( "value" ) );
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