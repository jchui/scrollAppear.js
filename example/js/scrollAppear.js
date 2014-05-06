/**
 * scrollAppear.js
 * https://github.com/jchui/scrollAppear.js
 *
 * Copyright (C) 2014 jchui.me - Jeremy Chui
 */

(function ( $ ) {
 
    $.fn.sappear = function( options ) {
		
		// Default Settings
        var settings = $.extend({
        
        /*
        	fadeIn : Set as true, false, or duration (in milliseconds)
			fadeOut : Set as true, false, or duration (in milliseconds)
			appearSpot : Set as element id or pixels
			disappearSpot : Set as element id or pixels
        */
        
            'fadeIn' : 400,
            'fadeOut' : 400,
            'appearSpot' : 200,
            'disappearSpot' : 'none'
            
        }, options );
 
		var appearItem = this;
		
		appearItem.hide(); // Hide the element before it should appear
		
		/*
			Sets the position of where the elements should appear and disappear
		*/
		
		var appearSpot = settings.appearSpot;
		var disappearSpot = settings.disappearSpot;
		
		if ($.isNumeric(appearSpot) == false) {
			appearSpot = document.getElementById(appearSpot).offsetHeight;
		}
		
		if (disappearSpot == 'none') {
			disappearSpot = $(document).height();
		}
 
		/*
			Starts the scroll function
		*/
 
		$(window).scroll(function() {
		
			if ($(window).scrollTop() > appearSpot && $(window).scrollTop() < disappearSpot) { // Checks to see if the element should appear within this position range
			
				if (settings.fadeIn == 0) {
					appearItem.show();
				} else if (settings.fadeIn == 1) {
					appearItem.fadeIn();
				} else {
					appearItem.fadeIn(settings.fadeIn);
				}
				
			} else { // Hides the element
				
				if (settings.fadeOut == 0) {
					appearItem.hide();
				} else if (settings.fadeOut == 1) {
					appearItem.fadeOut();
				} else {
					appearItem.fadeOut(settings.fadeOut);
				}
				
			}
			
		});
 
    };
 
}( jQuery ));