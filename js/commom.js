/*공통JS*/

$(function () { // jQB ///////////////////////////




    $(".wrap").smoothWheel();


   



    /*스크롤액션 텍스트보이기*****************************/
    var tpos = [];
    var tg = $(".sact");
    for (var i = 0; i < tg.length; i++) {
        tpos[i] = tg.eq(i).offset().top;
    } ////// for //////////////////

    console.log("타겟위치:" + tpos);




    /// 스크롤 액션 타겟 셋팅 ///
    tg.find("h2").css({
        position: "relative",
        top: "50px",
        opacity: 0,
        transition: "all .6s ease-in-out"
    });


    tg.find("p").css({
        position: "relative",
        top: "50px",
        opacity: 0,
        transition: "all .6s ease-in-out .5s"
    });




    //console.log("4번기준:" + (tpos[3] - 1000));

    //// 스크롤 액션 ////////////////////////////////
    $(".wrap").scroll(function () {
        var scTop = $(this).scrollTop();

        //console.log("스위:" + scTop);

        /// 1번구간 - .nature
        if (scTop > tpos[0] - 900 && scTop < tpos[0] + 200) {
            var root = $(".nature").find(".txt");
            root.find("h2").css({
                top: "0px",
                opacity: 1
            });
            root.find("p").css({
                top: "0px",
                opacity: 1
            });

        } //// if ////////////////////

        /// 2번구간 - .athe
        else if (scTop > tpos[1] - 400 && scTop < tpos[1] + 200) {
            var root = $(".athe").find(".txt");
            root.find("h2").css({
                top: "0px",
                opacity: 1
            });
            root.find("p").css({
                top: "0px",
                opacity: 1
            });

        } //// else if ////////////////////

        /// 3번구간 - .products_list
        else if (scTop > tpos[2] - 500 && scTop < tpos[2] + 200) {
            var root = $(".products_list").find(".sact");
            root.find("h2").css({
                top: "0px",
                opacity: 1
            });


        } //// else if ////////////////////







    }); /////// scroll /////////////////////////////////////









    // 메뉴햄버거버튼 클릭시 메뉴창 보이기 ///////////////////////////
    $(".hamburger").click(function () {
        $(".menu").fadeIn(500);


        $("body").css({
            overflowY: "hidden"
        });
    }); // click //////////////////////////////////////


    // 햄버거버튼 클릭시 메뉴창 숨기기
    $("#cbtn").click(function () {
        $(".menu").fadeOut(500);

        $("body").css({
            overflowY: "auto"
        }); // css /////////


    }); // click ///////////////////////////////////////









    /*퀵메뉴위치이동*/
    $('.top_btn').click(function () {


        //animate()메서드를 이용해서 선택한 태그의 스크롤 위치를 지정해서 0.8초 동안 부드럽게 해당 위치로 이동함.
        $('.wrap').animate({
            scrollTop: "0px"
        }, 800, function () {
            currentY = 0; // 부드러운스크롤 변수업데이트!
        }); ////// animate ////////




    }); ///////////////// click ////////////////////////////


    
    
    
    



}); //////////////// jQB ////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
