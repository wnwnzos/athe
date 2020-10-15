$(function () { // jQB ///////////////////////////

    //console.log("로딩완료!");
   

  

    // 제품리스트 오버시 상세보기 나타나기
    $(".prl_list").hover(
    function(){// 오버시
        
        $(this).find("a").stop().fadeIn(300)
            .siblings("a").fadeOut(100);
        
        $(this).find(".cover").css({
            opacity:1
            
        });
        
    },
    function(){// 아웃시
        $(".prl_list").find("a").stop().fadeOut(100)
        .siblings("a").fadeOut(100);
        
        $(this).find(".cover").css({
            opacity:0
            
        });
        
    });// hover ///////////////////////////////////
    
    
    
    


}); //////////////// jQB ////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
