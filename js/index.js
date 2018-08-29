$(document).ready(function(){
	init();
});

function init() {
	//var log = console.log;
	var t = TweenMax;
	//log('init');
	//var game1bg = $('#game1_name.)

	function isTouchDevice() {
		return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
	};

	t.set($('.candy1'), {opacity:0, scale:.8});
	t.set($('.candy2'), {opacity:0, scale:.8});

	if (isTouchDevice() === false) {
		$('#logo_catchABite').mouseover( function(e){
			t.set(this, {zIndex:90});
			t.to($('#logo_catchABite .bg'), 0.4, {scale:1.2, ease:Power3.easeOut});
			t.to($('#logo_catchABite .fg'), 0.4, {scale:1.3, ease:Power3.easeOut});
			t.to($('#logo_catchABite .candy1'), 0.4, {opacity:1, scale:1.2, ease:Power3.easeOut});
			t.to($('#logo_catchABite .candy2'), 0.4, {opacity:1, scale:1.2, ease:Power3.easeOut});
		}).mouseout( function(e){
			t.set(this, {zIndex:0});
			//t.to(this, 0.2, {scale:1.0, ease:Back.easeOut});
			t.to($('#logo_catchABite .bg'), 0.15, {scale:1.0, ease:Back.easeOut});
			t.to($('#logo_catchABite .fg'), 0.2, {scale:1.0, ease:Back.easeOut});
			t.to($('#logo_catchABite .candy1'), 0.2, {opacity:0.0, scale:0.8, ease:Power3.easeOut});
			t.to($('#logo_catchABite .candy2'), 0.2, {opacity:0.0, scale:0.8, ease:Power3.easeOut});
		})

		$('#logo_getAirheaded').mouseover( function(e){
			t.set(this, {zIndex:90});
			//t.to(this, 0.2, {scale:1.1, ease:Power2.easeOut});
			t.to($('#logo_getAirheaded .bg'), 0.4, {scale:1.2, ease:Power3.easeOut});
			t.to($('#logo_getAirheaded .fg'), 0.4, {scale:1.25, ease:Power3.easeOut});
			t.to($('#logo_getAirheaded .candy1'), 0.4, {opacity:1, scale:1.2, ease:Power3.easeOut});
			t.to($('#logo_getAirheaded .candy2'), 0.4, {opacity:1, scale:1.2, ease:Power3.easeOut});
		}).mouseout( function(e){
			t.set(this, {zIndex:0});
			//t.to(this, 0.2, {scale:1.0, ease:Back.easeOut});
			t.to($('#logo_getAirheaded .bg'), 0.15, {scale:1.0, ease:Back.easeOut});
			t.to($('#logo_getAirheaded .fg'), 0.2, {scale:1.0, ease:Back.easeOut});
			t.to($('#logo_getAirheaded .candy1'), 0.2, {opacity:0.0, scale:0.8, ease:Power3.easeOut});
			t.to($('#logo_getAirheaded .candy2'), 0.2, {opacity:0.0, scale:0.8, ease:Power3.easeOut});
		})

		$('#logo_floatAway').mouseover( function(e){
			t.set(this, {zIndex:90});
			//t.to(this, 0.2, {scale:1.2, ease:Power2.easeOut});
			t.to($('#logo_floatAway .bg'), 0.4, {scale:1.2, ease:Power3.easeOut});
			t.to($('#logo_floatAway .fg'), 0.4, {scale:1.3, ease:Power3.easeOut});
			t.to($('#logo_floatAway .candy1'), 0.4, {opacity:1, scale:1.2, ease:Power3.easeOut});
			t.to($('#logo_floatAway .candy2'), 0.4, {opacity:1, scale:1.2, ease:Power3.easeOut});
		}).mouseout( function(e){
			t.set(this, {zIndex:0});
			//t.to(this, 0.2, {scale:1.0, ease:Back.easeOut});
			t.to($('#logo_floatAway .bg'), 0.15, {scale:1.0, ease:Back.easeOut});
			t.to($('#logo_floatAway .fg'), 0.2, {scale:1.0, ease:Back.easeOut});
			t.to($('#logo_floatAway .candy1'), 0.2, {opacity:0.0, scale:0.8, ease:Power3.easeOut});
			t.to($('#logo_floatAway .candy2'), 0.2, {opacity:0.0, scale:0.8, ease:Power3.easeOut});
		})
	}


	/*
	$('#game1_name').click( function(e){
		 window.open('./01/index.html', '_self');
	});

	$('#game2_name').click( function(e){
		window.open('./02/index.html', '_self');
	});


	$('#game3_name').click( function(e){
		window.open('./03/index.html', '_self');
	});
	*/

}