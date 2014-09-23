/* 
Project: Small responsive CSS grid framework - demo js
Author: Mike Rusczyk / mike@ofad.org / http://hideawaylights.com/mike-rusczyk/
*/

/* Example page js / discard, not relavent to framework */


jQuery(function($){
	
  	$(document).ready(function() {

		$('header li').on('click', function() {
			var	mediaTarget = $(this).data("layout")

			$(this).addClass('active');
			$('header li').not($(this)).removeClass('active');
			$(this).closest('#main-container').removeClass().addClass(mediaTarget);

	    });

	});
	
});
