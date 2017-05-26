 (function($) {
	 
 var banner = $('#adBanner');
 var bannerBox = $('.banner_box');      
 var bannerLi = bannerBox.children('li');
 var liLast = bannerLi.last();
// var liFirst = bannerLi.first();
 var indicator = $('.indicator');
 var indiLi = indicator.children('li');
    
    bannerLi.last().prependTo(liLast);
    bannerBox.css({marginLeft: -100 + '%'});
//  banner.css({overflow:'hidden'});
    
    var lbtn = $('.lbtn');
    var rbtn = $('.rbtn');
    var timed = 700;
    var ef = 'easeOutBack';
    
    lbtn.on('click', function(){
        liLast = bannerBox.children('li').last();
        bannerBox.stop().animate({marginLeft: 0},timed,
            function(){
            bannerBox.prepend(liLast);
            bannerBox.css({marginLeft:-100 +'%'});
        });            
    });
    
    var rotateAni = function(){
        bannerBox.stop().animate({marginLeft: -200 + '%'},timed,
            function(){
			
			indicator.children('li').css({backgroundColor:'#fff'});
			var liFirst = bannerBox.children('li').first();
            bannerBox.append(liFirst);
            bannerBox.css({marginLeft:-100 +'%'});
			
			var bannerIndex = bannerBox.find('.banner_1').index();
			console.log(bannerIndex);
			indicator.children('li').eq(bannerIndex).css({backgroundColor:'#9E9378'});
        });   
		
                 
    };
    
    rbtn.on('click', rotateAni);
//--------------------------------------------------------
	
	setInterval(rotateAni, timed*5);
	
	banner.on('mouseenter',function(){
		clearInterval(auto);
	});
	 
	 
	
//-----------------------------------------------------------
	 
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








