(function($){
      var gnbLi = $('#gnb').find('li');
      var viewH = $('html,body').height(); //브라우저의 높이값
      var scrollT = $(window).scrollTop();
//      console.log(viewH);

      gnbLi.on('click', function(evt){
        evt.preventDefault(); //기존 링크 상쇄
        var $this = $(this);  //클릭한 것
        var thisIndex = $this.index();  //클릭한 것의 순서확인
      //  $(window).scrollTop(thisIndex * viewH);  //순서(번호값) * 브라우저 높이값
      $('html, body').animate({scrollTop: thisIndex * viewH},1000,'easeOutBounce');
    }); // gnbLi.onclick 
      
  // 마우스 휠을 사용(크로스 브라우징 처리, 함수(mouseWheel)를 호출)
      
      var d = false;  // 임의의 기능 취소처리
      
    $('body').on('mousewheel DOMMouseScroll', mouseWheel);
      
    function mouseWheel(e){
      // 마우스 휠 발생시 생기는 이벤트내의 객체 originalEvent를 변수(mouseEvent)
      var mouseEvent = e.originalEvent;
      // 임의의 변수 생성
      var me = 0;
      var winscroll = $('html,body').scrollTop();
      
      // firefox에있는 마우스휠 이벤트중 detail기능 있는지 판단
      if(mouseEvent.detail){
        //변수 me에 mouseEvent.detail 기능을 담기!
        me = mouseEvent.detail * 40;
      }else{
        //변수 me에 mouseEvent.wheelDelta 기능을 담기!
        me = mouseEvent.wheelDelta;
      }
      // 위기능 결론: 어느 브라우저라도 마우스휠을 사용했을때 똑같은 결과값이 me에 작용하도록 처리!!
      
      // 마우스휠 위/아래 적용
      if(me >= 0 && !d){
        d = true;
      // 1. 아래로 휠을 올렸을때 화면이동         
      // $('html body').stop().animate({scrollTop:scrollT -= viewH}, 1000);
        
        if(scrollT <= 0){
        // 1-1: scrollTop높이가 0작으면 무조건 scrollTop은 0
            $(window).scrollTop(0);
           }else{
        // 1-2: 0보다 큰상태일때는 작동(스크롤)!
            $('html, body')
              .stop()
              .animate({scrollTop:scrollT -= viewH}, 
                       1000, 
                       function(){d = false});
           }// scroll높이0일경우판단 종료
          
        
         }else if(me < 0 && !d){
           d = true;
      // 2. 위로 휠을 내렸을때 화면이동
      // $('html body').stop().animate({scrollTop:scrollT += viewH}, 1000);
           
           var browserFullH = viewH * 4; //브라우저 전체 높이값 계산(5개이기에 '*4' 처리)
           if(scrollT >= browserFullH){
           // 2-1: scroll높이를 전체 브라우저의 높이값을 판단해서 처리
               $(window).scrollTop(browserFullH);
            }else{
           // 2-2: 이외의 기능은 기존 계산식을 사용
             $('html, body').stop().animate({scrollTop:scrollT += viewH}, 1000,function(){d= false});
              
              
            }// else  
           
         }// 마우스 전체 휠(else)
       
      
    }  // mouseWheel(e)     
      
      
      
      // wrap 내부의 div 갯수파악 방법
      var wrapLength = $('#wrap').children('.view').length; 
//      console.log( wrapLength );
    })(this.jQuery);