 (function($) {
	 
	 var timed = 500;
	 var bannerBox = $('.banner_box');
	 var bannerLast = bannerBox.children('li:last');
	 
	 bannerBox.prepend(bannerLast);
	 
	 var indi = $('.indicator').children('li');
	 var indiLi = indi.find('li');
  // var indi2 = $('.indicator').children('.indi_2');
  // var indi3 = $('.indicator').children('.indi_3');
  // var indi4 = $('.indicator').children('.indi_4');
  // var indi5 = $('.indicator').children('.indi_5');
	 
	 
	 indi.on('click', function(e){
		e.preventDefault();
		 var $this = $(this);
		 var thisIndex = $this.index();
		 // console.log($(this).index());
		 
//var bannerLast = bannerBox.children('li:last');		 
//		 for(var i=0; i<6; i++)
//		 
//		 bannerBox.stop().animate({marginLeft:0}.timed, function(){
//			 bannerBox.prepend(bannerLast);
//			 bannerBox.css({marginLeft:'-100%'});
//		 });
		 
		 indi.css({backgroundColor:'#fff'});
		 $this.css({backgroundColor:'#f90'});
		 bannerBox.animate({marginLeft:-100 * thisIndex +'%'});
	 });
	 
	 
 var aniCount = function(){
	var i = 0;
	indi.on('triger', function(){
		for(; i<6; i++){
		 bannerBox.animate({marginLeft:-100 * i +'%'});
		}
		console.log('go');
	});
 }
	 
	 var moveAni = function(){
		 var i = 0;
		 setInterval(aniCount, 1000);
	 }
	 moveAni();
	 
	 //-----------------------------------------
	 
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








