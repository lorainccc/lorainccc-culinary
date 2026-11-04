/**
 * 
 *	Checking for mobile screen size, alter top menu to function for mobile.
 * 
 * 
 */

 jQuery(document).ready(function( $ ){
    $('div#offCanvas').removeAttr( "aria-hidden" );
	/**if ($(window).width() < 450 ){
        
		$('#s').attr('tabindex', '-1');
        $("input[name*='searchblogs']").attr('tabindex', '-1');
        $('#searchsubmit').attr('tabindex', '-1');
        $('.off-canvas > ul#menu-main-nav').removeAttr( "role" );
        $('.off-canvas > ul#menu-main-nav > li').removeAttr( "role" );
	}**/

    $("ul.accordion").removeAttr( "role" );
    $("a.accordion-title").removeAttr( "role" );

    $("li.tabs-title").removeAttr("role");
    $("li.tabs-title a").removeAttr( "role" );
 }); 