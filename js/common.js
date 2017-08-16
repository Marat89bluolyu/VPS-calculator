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

// Ползунки на page6.html

jQuery(function() {
    var core         	= 150, 
        ddr       		= 1, 
        hdd           	= 10,  
        internetWidth   = 10,
        payment			= 1, 
        oneMonth		= 0,
        threeMonth		= 0,
        total 			= 299;


    // Функция расчета
    function recount() {
        total = core 
        		+ddr
        		+hdd
        		+internetWidth
        		+payment


        jQuery("#u_KwMonth_cifra span").html((SP_Kw).toFixed(0));
        jQuery("#oneYearSaving span").html(oneYearSaving);
        jQuery("#fiveYearSaving span").html(fiveYearSaving);
        jQuery("#tenYearSaving span").html(tenYearSaving);
        jQuery("#treesCount span").html(treesCount);
    }
    recount();

    $(document).on("change keyup", "#polz1", function() {
        core *= $("#polz1-inp").val;

        recount();
    });

    $(document).on("change keyup", "#polz2", function() {
        ddr *=  $("#polz2-inp").val;

        recount();
    });

    $(document).on("change keyup", "#polz3", function() {
        hdd *= $("#polz3-inp").val;

        recount();
    });

    $(document).on("change keyup", "#polz4", function() {
        internetWidth *= $("#polz4-inp").val;
        recount();
    });

    $(document).on("change keyup", "#polz5", function() {
        payment *= $("#polz5-inp").val;
        recount();
    });
});





//STYLES

$( function() {
	$( "#polz1" ).slider({
		range: "max",
		min: 2,
		max: 24,
		slide: function( event, ui ) {
			$( "#polz1-inp" ).val( ui.value );
		}
	});
	$( "#polz1-inp" ).val( $( "#polz1" ).slider( "value" ) );
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
		min: 10,
		max: 22,
		step: 1,
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

