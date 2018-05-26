// JavaScript Document

jQuery(document).ready(function($){
	
		"use strict";
	
		$('.smooth-scroll').on('click', 'a', function(e) {
   			
			e.preventDefault();
			
			var hash = this.hash;
		   
			var target_offset = $(this.hash).offset() ? $(this.hash).offset().top : 0;
			     
			var customoffset = 105;
			
			$('html, body').animate({scrollTop:target_offset - customoffset}, 500);

			
			window.location.hash = hash;
		
		});

	
});
