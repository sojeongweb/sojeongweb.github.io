(function($){
	var note = $('#note');
	var dd_btn = note.find('dd');
	var boxHide = function(){dd_btn.addClass('ddBox');}
	
	boxHide();
	note.find('dt').on('click',function(e){
		e.preventDefault();
		var $this = $(this);
		var nextDd = $this.next('dd');
		var getDd = nextDd.removeAttr('style');
		console.log(getDd);
		nextDd.siblings('dd').stop().addClass('ddBox',500);
		$this.next('dd').stop().toggleClass('ddBox',500);
		$this.children('button').stop().toggleClass('arrowTop');
	});
	//--------------------------------------------
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
