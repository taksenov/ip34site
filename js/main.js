$(document).ready(function ($) {
  
    // Sidebar Toggle
    
    $('.btn-navbar').click( function() {
	    $('html').toggleClass('expanded');
    });

	// Waypoints Scrolling
	
	var links = $('.navigation').find('li');
	var button = $('.intro button');
    var section = $('section');
    var mywindow = $(window);
    var htmlbody = $('html,body');

    
    section.waypoint(function (direction) {

        var datasection = $(this).attr('data-section');

        if (direction === 'down') {
            $('.navigation li[data-section="' + datasection + '"]').addClass('active').siblings().removeClass('active');
        }
        else {
        	var newsection = parseInt(datasection) - 1;
            $('.navigation li[data-section="' + newsection + '"]').addClass('active').siblings().removeClass('active');
        }

    });
    
    mywindow.scroll(function () {
        if (mywindow.scrollTop() == 0) {
            $('.navigation li[data-section="1"]').addClass('active');
            $('.navigation li[data-section="2"]').removeClass('active');
        }
    });
    
    function goToByScroll(datasection) {
        
        if (datasection == 1) {
	        htmlbody.animate({
	            scrollTop: $('.section[data-section="' + datasection + '"]').offset().top
	        }, 500, 'easeOutQuart');
        }
        else {
	        htmlbody.animate({
	            scrollTop: $('.section[data-section="' + datasection + '"]').offset().top + 70
	        }, 500, 'easeOutQuart');
        }
        
    }

    links.click(function (e) {
        e.preventDefault();
        var datasection = $(this).attr('data-section');
        goToByScroll(datasection);
    });
    
    button.click(function (e) {
        e.preventDefault();
        var datasection = $(this).attr('data-section');
        goToByScroll(datasection);
    });
  
    // Snap to scroll (optional)

    // Redirect external links
	
	$("a[rel='external']").click(function(){
		this.target = "_blank";
	}); 	
	
	
	// Modernizr SVG backup
	
	if(!Modernizr.svg) {
	    $('img[src*="svg"]').attr('src', function() {
	        return $(this).attr('src').replace('.svg', '.png');
	    });
	}    
	    
    

    
    


});