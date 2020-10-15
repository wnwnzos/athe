$(function () { // jQB ///////////////////////////

    //console.log("로딩완료!");

    // 1. 어센틱립밤 이미지
    $("#lip_white").parallax("50%", 0.3);









    /*스크롤액션 텍스트보이기*****************************/
    var tpos = [];
    var tg = $(".lip_txt");
    for (var i = 0; i < tg.length; i++) {
        tpos[i] = tg.eq(i).offset().top;
    } ////// for //////////////////


    tg.find("h3").css({
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


    //console.log("3번기준:" + (tpos[2]));

    //// 스크롤 액션 ////////////////////////////////
    $(".wrap").scroll(function () {
        var scTop = $(this).scrollTop();
        console.log("스위:" + scTop);




        /// 1번구간 - .sact
        if (scTop > tpos[0] - 600 && scTop < tpos[0] + 200) {
            var root = $(".sact1");
            root.find("h3").css({
                top: "0px",
                opacity: 1
            });
            root.find("p").css({
                top: "0px",
                opacity: 1
            });

        } //// if ////////////////////

        /// 2번구간 - .sbox
        else if (scTop > tpos[1] - 500 && scTop < tpos[1] + 200) {
            var root = $(".sact2");
            root.find("h3").css({
                top: "0px",
                opacity: 1
            });
            root.find("p").css({
                top: "0px",
                opacity: 1
            });

        } //// else if ////////////////////

        /// 3번구간 - .sact
        else if (scTop > tpos[2] - 400 && scTop < tpos[2]) {
            var root = $(".sact3");
            root.find("h3").css({
                top: "0px",
                opacity: 1
            });
            root.find("p").css({
                top: "0px",
                opacity: 1
            });

        } //// else if ////////////////////


    }); ///// scroll ////////////////////////////////



    /*전성분보기 클릭시 창 보이기*/
    $(".pline").click(function () {





        $(".wrap_cover").fadeIn(300);
        $(".igr").animate({
            right: "0"
        }, 300);

        smoothSts = 1;


        //        $('html,body,.wrap').css({
        //            'overflow': 'hidden'
        //
        //        }); // css /////////////////

    }); // click /////////////////////////

    /*전성분표 닫기버튼 클릭시 창 나가기*/
    $(".cbtn").click(function () {
        $(".wrap_cover").fadeOut(300);
        $(".igr").animate({
            right: "-500px"
        }, 300);
        smoothSts = 0;
    }); // click /////////////////////////







}); //////////////// jQB ////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
