$(function () { // jQB ///////////////////////////

    console.log("로딩완료!");

   


    /*공지사항*/
    $(".notice_list li").click(function () {
        
        var htv = $(this).next(".txt").find("p").innerHeight();
        if($(this).next(".txt").height()!==0) htv=0;
        
        $(this).next(".txt")
        .animate({height:htv+"px"},700)
        .siblings(".txt")
        .animate({height:"0px"});
        
        
        var isrc = $(this).find(".pbtn img").attr("src");
        console.log(isrc);
        
        if (isrc === "images/minus.png") isrc = "images/plus.png";
        else isrc = "images/minus.png";
        
       
        
        $(".notice_list li").find(".pbtn img").attr("src", "images/plus.png");

        
        $(this).find(".pbtn img").attr("src", isrc);





    }); ///////////////  click /////////////////////




}); //////////////// jQB ////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
