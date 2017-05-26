 (function($) {
 	 
	 var gnbSlide =  $('.gnb_slide');
	 var gnbLi = gnbSlide.children('li');
	 var gnbOl = gnbLi.children('ol');
	 
	 
	 $(window).on('scroll',function(e){
	 var bannerTop = $('#bannerBox').offset().top;
	 var htmlScroll = $(this).scrollTop();
		if(htmlScroll >= bannerTop){
		   $('.gnb_03').addClass('fixedMenu');
			console.log('add');
		   }else{
		   $('.gnb_03').removeClass('fixedMenu');   
			console.log('remove');
		   }	  
	  });
	 
	 
	 
	 gnbLi.on('mouseenter', function(e){
		e.preventDefault();
		 
		 var $this = $(this);
		 var thisIndex = $this.index();
		 
		
		 gnbLi.eq(thisIndex).children('ol').stop().slideDown();
		 
		 gnbLi.eq(thisIndex).on('mouseleave', function(){
			 gnbLi.eq(thisIndex).children('ol').stop().slideUp(200);
		 });
		 
	 });
	 

	 

	 
  })(this.jQuery);