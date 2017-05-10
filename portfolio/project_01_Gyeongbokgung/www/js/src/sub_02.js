
 (function($) {
    $( ".date_box" ).datepicker();
	 //------------
	 
	 var gnbSlide =  $('.gnb_slide');
	 var gnbLi = gnbSlide.children('li');
	 var gnbOl = gnbLi.children('ol');
	 
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

