(function($){
	var gallerySlide = $('#gallerySlide');
	var bannerLast = gallerySlide.children('ul:last');
	var timed = 500;
	gallerySlide.prepend(bannerLast);
	
	//------------------------왼쪽 버튼 -----------------
	var btnl = $('.btnl')
	btnl.on('click',function(e){
		e.preventDefault();
		
	var bannerLast = gallerySlide.children('ul:last');
	gallerySlide.stop().animate({marginLeft:0},timed, function(){
		gallerySlide.prepend(bannerLast);
		gallerySlide.css({marginLeft:'-100%'});
	});
		
	});
	//-----------------------오른쪽 버튼------------------
	var btnr = $('.btnr')
	btnr.on('click',function(e){
		e.preventDefault();
		
	var bannerFirst = gallerySlide.children('ul:first');
	
	gallerySlide.stop().animate({marginLeft:'-200%'},timed, function(){
		gallerySlide.append(bannerFirst);
		gallerySlide.css({marginLeft:'-100%'});
								});
		
	});
	
	$('.gallery_thum').css({overflow:'hidden'});

	// .attr()   속성
	
var galleryBtn = $('#gallerySlide').find('li');
	
	galleryBtn.on('click', function(e){
	e.preventDefault();
		
		var imgHref = $(this).children('a').attr('href');
		var big = $('.bigimg');
		
		big.css({backgroundImage:'url('+ imgHref +')',
				transition:'all 0.3s ease'});
	});
	
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




















