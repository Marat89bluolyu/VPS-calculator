// Ползунки на page6.html
$(function () {

		var arg = {};
		
		var state = {
			geo: 'moscow',
			cores: {
				containerElement: '#polz1',
				valueElement: '#polz1-inp',
				propertyValue: {
					moscow: [1, 2, 3, 4, 6, 8, 12],
					other:  [1, 2, 3, 4]
				},
				value: 1,
				linkData: {
					moscow: {
						name: 'configoption[114]',
						values: {
								1: 551,
								2: 552,
								3: 553,
								4: 554,
								6: 558,
								8: 557,
								12: 559
						}
					},
					france: {
						name: 'configoption[47]',
						values: {
								1: 246,
								2: 247,
								3: 508,
								4: 509
						}						
					}
					
				}
			},
			ram: {
				containerElement: '#polz2',
				valueElement: '#polz2-inp',
				propertyValue: {
					moscow: [512, 1, 2, 3, 4, 6, 8, 10, 12],
					other:  [512, 1, 2, 3, 4]
				},
				value: 512,
				linkData: {					
					moscow: {
						name: 'configoption[112]',
						values: {
							512: 538,
							1: 539,
							2: 540,
							3: 537,
							4: 541,
							6: 560,
							8: 561,
							10: 562,
							12: 563
						}
					},
					france: {
						name: 'configoption[45]',
						values: {
							512: 238,
							1: 239,
							2: 240,
							3: 241,
							4: 507				
						}							
					}
				}
			},
			hdd: {
				containerElement: '#polz3',
				valueElement: '#polz3-inp',
				propertyValue: [5, 7, 10, 15, 20, 25, 30, 40, 50],
				value: 5,
				linkData: {					
					moscow: {
						name: 'configoption[113]',
						values: {							
							5: 542,
							7: 543,
							10: 544,
							15: 545,
							20: 548,
							25: 549,
							30: 546,
							40: 547,
							50: 550
						}
					},
					france: {
						name: 'configoption[46]',
						values: {							
							5: 242,
							7: 243,
							10: 244,
							15: 245,
							20: 501,
							25: 502,
							30: 503,
							40: 504,
							50: 505
						}
					}					
				}
			},
			bandwidth: {
				containerElement: '#polz4',
				valueElement: '#polz4-inp',
				propertyValue: {
					moscow: [50,100],
					france: [100,200]
				},
				value: 50,
				linkData: {
					moscow: {
						name: 'configoption[115]',
						values: {
							50: 556,
							100: 555
						}
					},
					france: {
						name: 'configoption[49]',
						values: {
							100: 251,
							200: 506
						}
					}
				}
			},
			billingCycle: {
				containerElement: '#polz5',
				valueElement: '#polz5-inp',
				propertyValue: [1,3,6,12],
				value: 1,
				linkData: {
					name: 'billingcycle',
					values: {
						1: 'monthly',
						3: 'quarterly',
						6: 'semiannually',
						12: 'annually'
					}
				}
			}
		};

		function recount() {
				if ($('#loc1').prop('checked')) {
						//MOSCOW
						
						arg.monthPrices = {1: 250, 3: 750, 6: 1500, 12: 3000};
						arg.coresPrices = {
								1: {1: 0, 2: 150, 3: 300, 4: 450, 6: 750, 8: 850, 12: 1200},
								3: {1: 0, 2: 450, 3: 900, 4: 1350, 6: 2250, 8: 2550, 12: 3600},
								6: {1: 0, 2: 840, 3: 1560, 4: 2160, 6: 3450, 8: 4410, 12: 6600},
								12: {1: 0, 2: 1560, 3: 3000, 4: 4140, 6: 6600, 8: 8400, 12: 11880}
						};

						arg.ddrPrices = {
								1: {512: 0, 1: 50, 2: 100, 3: 200, 4: 300, 6: 500, 8: 700, 10: 900, 12: 1000},
								3: {512: 0,	1: 50 * 3, 2: 100 * 3, 3: 200 * 3, 4: 300 * 3, 6: 500 * 3, 8: 700 * 3, 10: 900 * 3,	12: 1000 * 3},
								6: {512: 0, 1: 285, 2: 570, 3: 1140, 4: 1710, 6: 2850, 8: 3990, 10: 5130, 12: 5700},
								12: {512: 0, 1: 540, 2: 1080, 3: 2160, 4: 3240, 6: 5400, 8: 7980, 10: 9720, 12: 10800}
						};

						arg.hddPrices = {
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
						};

						arg.netFrequencyPrices = {
								1: {50: 0, 100: 250},
								3: {50: 0, 100: 250 * 3},
								6: {50: 0, 100: 1200},
								12: {50: 0, 100: 2280},
						};

						arg.coresCost = arg.coresPrices[+state.billingCycle.value][+state.cores.value];

						arg.ddrCost = arg.ddrPrices[+state.billingCycle.value][+state.ram.value];

						arg.hddCost = arg.hddPrices[+state.billingCycle.value][+state.hdd.value];

						arg.netFrequencyCost = arg.netFrequencyPrices[+state.billingCycle.value][+state.bandwidth.value];

						arg.monthsCost = arg.monthPrices[+state.billingCycle.value];

						arg.total = arg.coresCost + arg.ddrCost + arg.hddCost + arg.netFrequencyCost + arg.monthsCost;

				} else {

						//FRANCE
						arg.monthPrices = {1: 150, 3: 450, 6: 900, 12: 1800};

								arg.coresPrices = {
										1: {1: 0, 2: 50, 3: 100, 4: 150},
										3: {1: 0, 2: 50 * 3, 3: 100 * 3, 4: 150 * 3},
										6: {1: 0, 2: 50 * 6, 3: 100 * 6, 4: 150 * 6},
										12: {1: 0, 2: 50 * 12, 3: 100 * 12, 4: 150 * 12}
								};

								arg.ddrPrices = {
										1: {512: 0, 1: 50, 2: 100, 3: 200, 4: 300},
										3: {512: 0, 1: 50 * 3, 2: 100 * 3, 3: 200 * 3, 4: 300 * 3},
										6: {512: 0, 1: 50 * 6, 2: 100 * 6, 3: 200 * 6, 4: 300 * 6},
										12: {512: 0, 1: 50 * 12, 2: 100 * 12, 3: 200 * 12, 4: 300 * 12}
								};

								arg.hddPrices = {
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
								};

								arg.netFrequencyPrices = {
										1: {100: 0, 200: 100},
										3: {100: 0, 200: 100 * 3},
										6: {100: 0, 200: 100 * 6},
										12: {100: 0, 200: 100 * 12}
								};
								
						arg.coresCost = arg.coresPrices[+state.billingCycle.value][+state.cores.value];

						arg.ddrCost = arg.ddrPrices[+state.billingCycle.value][+state.ram.value];

						arg.hddCost = arg.hddPrices[+state.billingCycle.value][+state.hdd.value];

						arg.netFrequencyCost = arg.netFrequencyPrices[state.billingCycle.value][+state.bandwidth.value];

						arg.monthsCost = arg.monthPrices[+state.billingCycle.value];

						arg.total = arg.coresCost + arg.ddrCost + arg.hddCost + arg.netFrequencyCost + arg.monthsCost;

				}

						jQuery("#billing").html(arg.total);
				}

		function dbg() {
			console.clear();
			console.log(
			'Chosen types: ',
			'\ngeo: '+state.geo,
			'\ncores: '+state.cores.value,
			'\nram: '+state.ram.value,
			'\nhdd: '+state.hdd.value,
			'\nbandwidth: '+state.bandwidth.value,
			'\nbillingCycle: '+state.billingCycle.value);
		}
		
		function generateForm() {
			var form = document.forms.linkGenerator;
			if (state.geo == 'moscow') {
				form.setAttribute('action','https://billing.ztv.su/cart.php?a=add&pid=51');
				form.elements['cores-form'].setAttribute('name',state.cores.linkData.moscow.name);
				form.elements['ram-form'].setAttribute('name',state.ram.linkData.moscow.name);
				form.elements['hdd-form'].setAttribute('name',state.hdd.linkData.moscow.name);
				form.elements['bandwidth-form'].setAttribute('name',state.bandwidth.linkData.moscow.name);
				form.elements[state.cores.linkData.moscow.name].value = state.cores.linkData.moscow.values[state.cores.value];
				form.elements[state.ram.linkData.moscow.name].value = state.ram.linkData.moscow.values[state.ram.value];
				form.elements[state.hdd.linkData.moscow.name].value = state.hdd.linkData.moscow.values[state.hdd.value];
				form.elements[state.bandwidth.linkData.moscow.name].value = state.bandwidth.linkData.moscow.values[state.bandwidth.value];
			} else {
				form.setAttribute('action','https://billing.ztv.su/cart.php?a=add&pid=14');
				form.elements['cores-form'].setAttribute('name',state.cores.linkData.france.name);
				form.elements['ram-form'].setAttribute('name',state.ram.linkData.france.name);
				form.elements['hdd-form'].setAttribute('name',state.hdd.linkData.france.name);
				form.elements['bandwidth-form'].setAttribute('name',state.bandwidth.linkData.france.name);
				form.elements[state.cores.linkData.france.name].value = state.cores.linkData.france.values[state.cores.value];
				form.elements[state.ram.linkData.france.name].value = state.ram.linkData.france.values[state.ram.value];
				form.elements[state.hdd.linkData.france.name].value = state.hdd.linkData.france.values[state.hdd.value];
				form.elements[state.bandwidth.linkData.france.name].value = state.bandwidth.linkData.france.values[state.bandwidth.value];
			}
			form.elements[state.billingCycle.linkData.name].value = state.billingCycle.linkData.values[state.billingCycle.value];
		}


    function ending(n) {
        var a = n.toString().slice(-2);
        if (a == '1' && a != '11') return 'ядро';
        else if ((a == '2' || a == '3' || a == '4') && (a != '12' && a != '13' && a != '14')) return 'ядра';
        else return 'ядер';
    }

		function changeCores() {
			
				var $container = $(state.cores.containerElement);
				var $valueElement = $(state.cores.valueElement);
				var	propVal = state.cores.propertyValue;
				var propValLastMoscow = propVal.moscow.slice(-1);
				var propValLastOther = propVal.other.slice(-1);
				var $right = $container.children('.right');
				var defaultValue = 0;
				
				if ( $container.slider('instance') )	{
					$container.slider('destroy');
				}
				if($('#loc1').prop('checked')) {
						$container.slider({
								range: "max",
								max: 6,
								step: 1,
								value: defaultValue,
								slide: function( event, ui ) {
										state.cores.value = propVal.moscow[ui.value];
										$valueElement.val( state.cores.value );
										$valueElement.next().text( ending(state.cores.value) );
										recount();
										dbg();
								}
						});
						
				 state.cores.value = 	propVal.moscow[defaultValue];			
				 $right.text($right.text().replace(/\d+/, propValLastMoscow));

				} else {

						$container.slider({
								range: "max",
								max: 3,
								step: 1,
								value: 0,
								slide: function( event, ui ) {                
										state.cores.value = propVal.other[ui.value];
										$valueElement.val( state.cores.value );
										recount();
										dbg();
								}
						})
						state.cores.value = propVal.other[0];
						$right.text($right.text().replace(/\d+/,propValLastOther));
			}
			recount();
		}



		function changeDDR() {
			
				var $container = $(state.ram.containerElement);
				var $valueElement = $(state.ram.valueElement);
				var $valueElementNext = $valueElement.next();
				var $right = $container.children('.right');
				var	propVal = state.ram.propertyValue;
				var propValLastMoscow = propVal.moscow.slice(-1);
				var propValLastOther = propVal.other.slice(-1);
				var defaultValue = 0;
				
				if ( $container.slider('instance') )	{
					$container.slider('destroy');
				}
				
				if ($('#loc1').prop('checked')) {
					$container.slider({
						range: "max",
						max: 8,
						step: 1,
						value: defaultValue,
						slide: function (event, ui) {
							state.ram.value = propVal.moscow [ui.value];
							$valueElement.val(state.ram.value);
							recount();
							if (state.ram.value == 512) {
								$valueElementNext.text($valueElementNext.text().replace(/[а-яА-Я]+/, "МБ"));
							}else {
								$valueElementNext.text($valueElementNext.text().replace(/[а-яА-Я]+/, "ГБ"));
							}
							dbg();
						}
					});
					state.ram.value = propVal.moscow[defaultValue];
					$valueElement.val(state.ram.value);
					$right.text($right.text().replace(/\d+/,propValLastMoscow));

				} else {

						$container.slider({
								range: "max",
								max: 4,
								step: 1,
								value: defaultValue,
								slide: function (event, ui) {
									state.ram.value = propVal.other [ui.value];
									$valueElement.val(state.ram.value);
									recount();
									if (state.ram.value == 512) {
										$valueElementNext.text($valueElementNext.text().replace(/[а-яА-Я]+/, "МБ"));
									}else {
										$valueElementNext.text($valueElementNext.text().replace(/[а-яА-Я]+/, "ГБ"));
									}
									dbg();
								}
						});
						state.ram.value = propVal.other[defaultValue];
						$valueElement.val(state.ram.value);
						$right.text($right.text().replace(/\d+/,propValLastOther));
				}
				recount();
		}

		function changeHDD() {

				var $container = $(state.hdd.containerElement);
				var $valueElement = $(state.hdd.valueElement);
				var	propVal = state.hdd.propertyValue;
				var defaultValue = 0;
				
				if ( $container.slider('instance') )	{
					$container.slider('destroy');
				}		
			
				$container.slider({
						range: "max",
						min: 0,
						max: 8,
						value: defaultValue,
						step: 1,
						slide: function( event, ui ) {
								state.hdd.value = propVal [ui.value];
								$valueElement.val(state.hdd.value);
								recount();
								dbg();
						}
				});
				state.hdd.value = propVal[defaultValue];
				$valueElement.val(state.hdd.value);
				recount();
		};

		function changeBandwidth() {
			
				var $container = $(state.bandwidth.containerElement);
				var $valueElement = $(state.bandwidth.valueElement);
				var	propVal = state.bandwidth.propertyValue;
				var defaultValue = 0;
			
				if ( $container.slider('instance') )	{
					$container.slider('destroy');
				}		
				
				if ($('#loc1').prop('checked')) {			
					
					$container.slider({
							range: "max",
							max: 1,
							step: 1,					
							value: defaultValue,
							slide: function( event, ui ) {
									state.bandwidth.value = propVal.moscow [ui.value];
									$valueElement.val(state.bandwidth.value);
									recount();							
									dbg();
							}
					});
					
					state.bandwidth.value = propVal.moscow[defaultValue];
					$valueElement.val(state.bandwidth.value);
					$container.children('.left').text(propVal.moscow[0]+'/'+propVal.moscow[0] + ' Мб/с');
					$container.children('.right').text(propVal.moscow[1]+'/'+propVal.moscow[1] + ' Мб/с');

				} else {
						
						$container.slider({
								range: "max",
								max: 1,
								step: 1,					
								value: defaultValue,						
								slide: function( event, ui ) {
										state.bandwidth.value = propVal.france [ui.value];
										$valueElement.val(state.bandwidth.value);
										recount();			
										dbg();								
								}
						});
						
						state.bandwidth.value = propVal.france[defaultValue];
						$valueElement.val(state.bandwidth.value);
						$container.children('.left').text(propVal.france[0]+'/'+propVal.france[0] + ' Мб/с');
						$container.children('.right').text(propVal.france[1]+'/'+propVal.france[1] + ' Мб/с');				
				}
				recount();
		}

		function changeBillingCycle () {

				var $container = $(state.billingCycle.containerElement);
				var $valueElement = $(state.billingCycle.valueElement);
				var	propVal = state.billingCycle.propertyValue;
				var defaultValue = 0;

				$container.slider({
						range: "max",
						max: 3,
						step: 1,
						value: defaultValue,
						slide: function( event, ui ) {           
								state.billingCycle.value = propVal[ui.value];
								$valueElement.val( state.billingCycle.value );
								recount();
								dbg();
						}
				});
				
				state.billingCycle.value = propVal[defaultValue];
				$valueElement.val(state.billingCycle.value );
				recount();
		};
		
		
		function init() {
			changeCores();
			changeDDR();
			changeHDD();
			changeBandwidth();
			changeBillingCycle();
			
			recount();
			
			generateForm();
		 
			var $form = $("#changeLoc");
			
			$(state.cores.valueElement).next().text(ending(state.cores.value));

			if (state.ram.value == 512) {
				$(state.ram.valueElement).next().text($(state.ram.valueElement).next().text().replace(/[а-яА-Я]+/, "МБ"));
			}else {
				$(state.ram.valueElement).next().text($(state.ram.valueElement).next().text().replace(/[а-яА-Я]+/, "ГБ"));
			}
			
			$(document.forms.linkGenerator).on('click',function(e) {
				e.preventDefault();
				generateForm();
				this.submit();
			})			
			
			$form.on("change", "#loc1,#loc2", function (event) {
					if (this.id == 'loc1') state.geo = 'moscow';
					else state.geo = 'france';
					changeCores();
					changeDDR();
					changeHDD();
					changeBandwidth();
					changeBillingCycle();
					generateForm();
					dbg();             
			});			
		}
		
		init();

});



// конец ползунков
/*
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
*/