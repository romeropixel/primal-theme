jQuery(function ($) {
	
	/************************* 
	Variables (tama�os editables)
	**************************/
	
	var browserwidth;
	var largewidth = 1024; // resoluci�n m�nima desktop
	var mediumwidth = 767; // resoluci�n mmedia
	var smallwidth = 641; // resoluci�n chica
	
	var mywindow = $(window);
	var htmlbody = $('html,body');
	
	/************************* 
	Ejecuci�n
	**************************/
	
	// Obtiene anchura del browser 	
	function getbrowserwidth(){
		browserwidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0;
		//console.log(browserwidth);
		return browserwidth;
	}
	
	function onLoadAndResize(){  
		getbrowserwidth();
		homeGallery();
		
		if(browserwidth <= mediumwidth ) {
	       menuMobile();
	    }
	}
	
	function homeGallery() {  
		
		$('#home-gallery').flexslider({
		    animation: "fade",
		    animationLoop: true,
		    controlNav: false,
		    directionNav: true,
		    smoothHeight: true,
		    start: function(slider){
			     $('#home-gallery .inner').animate({
				   opacity: 1 
			    });
			    
			    if (!('.flexslider ul.slides li:only-child')){
				     $('#home-gallery .inner').delay(500).animate({
					   opacity: 1 
				    }, 400);
			    } else {
				      $('#home-gallery .inner').delay(700).animate({
					   opacity: 1 
				    }, 400);

			    }
		    }
		});

		$('#products-gallery').flexslider({
		    animation: "fade",
		    animationLoop: true,
		    controlNav: false,
		    directionNav: true,
		    smoothHeight: true,
		    prevText: "<i class='fa fa-chevron-left'></i>",
		    nextText: "<i class='fa fa-chevron-right'></i>",
		    start: function(slider){
			     $('#products-gallery .inner').animate({
				   opacity: 1 
			    });
			    
			    if (!('.flexslider ul.slides li:only-child')){
				     $('#products-gallery .inner').delay(500).animate({
					   opacity: 1 
				    }, 400);
			    } else {
				      $('#products-gallery .inner').delay(700).animate({
					   opacity: 1 
				    }, 400);

			    }
		    }
		});
	}


	//scrollto section
	function menuHome() { 
		
		//si es el home		
		var links = $('.menu-main > .menu > li > a, .menu-header a');
	    var target = $(links).attr("href");
				
		// go to scroll section 
	    function goToByScroll(target) {
	        htmlbody.animate({
	         scrollTop: $(target).offset().top-120
	         }, 1500, 'easeInOutQuint');
	         
	        if(browserwidth <= mediumwidth) {
	        	$('#inner-wrap').removeClass('active');
				$('#mobile-access').removeClass('active');
				$('body').removeClass('open-drawer');
				//console.log(target);
		    } 
	    }
	
		// link animation to section
	    links.click(function (e) {
	        e.preventDefault();
	        target = $(this).attr('href');
	        goToByScroll(target);
	    });
  			  
	}
	
	function menuPages() {
		
		//Menu pages 
		var _href = $('.menu-main > .menu > li > a, .menu-header a');
		var page = $("html, body");
		
		$(_href).each(function() {
		   _href = $(this).attr("href"); 
		   $(this).attr("href",'/'+ _href);  
		   
		   if(browserwidth <= mediumwidth) {
	        	$('#inner-wrap').removeClass('active');
				$('#mobile-access').removeClass('active');
				$('body').removeClass('open-drawer');
		    }
		});
		
	    var jump=function(e) {
	       if (e){
	           e.preventDefault();
	           var target = $(this).attr("href");
	       } else {
	           var target = location.hash;
	       }
	       
	       page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function(){
		       page.stop();
		    });
		    
		    page.animate({ 
			    scrollTop: $(target).offset().top }, 1000, function(){
				    location.hash = target;
					page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
			});
	
	    }
	
	    page.hide();
	    
        //$('a[href^=#]').bind("click", jump);

        if (location.hash){
            setTimeout(function(){
                $('html, body').scrollTop(0).show()
                jump()
            }, 0);
        }else{
          page.show()
        }

	}
	
	function menuMobile(){

    	$(document).off('click', '#button-mobile').on('click', '#button-mobile',function(e) {
	        allowSubmit = true;
           $('#mobile-access').addClass('active');
           $('#inner-wrap').addClass('active');
           $('body').addClass('open-drawer');
          
           addEventListener('touchmove', function(e) { 
            if (allowSubmit) {
              //e.preventDefault(); 
           }
	        }, true);
	    }); 
      
	    $('#nav-close-btn, .drawer-close').bind('click focus', function(e){ 
	        allowSubmit = false;
	        $('#inner-wrap').removeClass('active');
	        $('#mobile-access').removeClass('active');
	        $('body').removeClass('open-drawer');
	        e.preventDefault();
	    }); 
	  
	}
	
	function loadPage(){
		//console.log(location.hash);
        /*if(location.hash){
            $(window).scrollTop(0); //stop jump to hash straight away
            setTimeout(function(){
                //stop jump to hash again a bit later
                //for browser compatibility
                $(window).scrollTop(0);
            },1);
        }*/
        $(window).load(function(){
            if(location.hash){
                setTimeout(function(){
                    //use page scroll to id scrollTo method
                    //to animate page to location hash
                    //$.mPageScroll2id("scrollTo",location.hash);
                      htmlbody.animate({
			         scrollTop: $(location.hash).offset().top-120
			         }, 1500, 'easeInOutQuint');
                },500);
            }
        });
    }

	/************************* 
	Ejecuci�n
	**************************/

	$(window).load(function() {
	   onLoadAndResize();
	   loadPage();
	   
	   if ($('body').hasClass('home')) {	
			menuHome();
		} else {
			menuPages();
		}
		
	});

	$(window).resize(function(){
		onLoadAndResize();
	});
	
	// si tiene foundation
	//$(document).foundation({});

});
