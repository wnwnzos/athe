$(function () { // jQB ///////////////////////////



    // 1. 자연주의 이미지
    $(".nat_img").parallax("30%", 0.2);
    // 2. 아떼 이미지
    $(".athe_img").parallax("100%", 0.2);




    /*제품리스트**********************/
    var pin = $(".pbox_inner");
    $(".rb").click(function (e) {
        e.preventDefault();
        pin.append($(pin).find(".pbox_list").first());

        // 클래스 제거 넣기(중앙대상:3번째 eq(2))
        $(pin).find(".pbox_list").eq(2).addClass("on")
            .siblings().removeClass("on");

    }); //////// click //////////////////

    $(".lb").click(function (e) {
        e.preventDefault();
        pin.prepend($(pin).find(".pbox_list").last());

        // 클래스 제거 넣기(중앙대상:3번째 eq(2))
        $(pin).find(".pbox_list").eq(2).addClass("on")
            .siblings().removeClass("on");

    }); //////// click //////////////////


    // 하단 이동 버튼
    var winH = $(window).height();
    $("#scroll-down").click(function () {
        $(".wrap").animate({
            scrollTop: winH + "px"
        }, 800, "easeOutQuint", function () {
            // 이동후 부드러운 스크롤 전역이동변수에 위치업데이트
            currentY = -winH;
        }); //// animate /////////
    }); ////////// click /////////////









    /*인스타그램영역************************************/


    new Swiper('.swiper-container', {


        slidesPerView: 3, // 동시에 보여줄 슬라이드 갯수
        spaceBetween: 25, // 슬라이드간 간격
        slidesPerGroup: 3, // 그룹으로 묶을 수, slidesPerView 와 같은 값을 지정하는게 좋음

        // 그룹수가 맞지 않을 경우 빈칸으로 메우기
        // 3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
        loopFillGroupWithBlank: true,



        // 스크롤바 설정하기
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,



        },

    }); /*swiper플러그인*/





    // 인스타그램 오버시 커버 나타나기
    $(".swiper-slide").hover(
        function () { // 오버시

            $(this).find("i").stop().fadeIn(300);

            $(this).find(".instar_cover").css({
                opacity: 1

            });

        },
        function () { // 아웃시
            $(this).find("i").stop().fadeOut(300);

            $(this).find(".instar_cover").css({
                opacity: 0

            });

        }); // hover ///////////////////////////////////





    /*플러스버튼 클릭시 이동***************/
    $(".pbox_list span").click(function () {
        location.href = "product_sub.html";
    });



    /********** 타이핑 효과 ********/

    var typed6 = new Typed('#typed6', {
        strings: ['진정성과 아름다움 사이^500\n아떼 제품 리뷰를 확인하세요'

    ],
        // 타이핑스피드
        typeSpeed: 60,
        // 지우기스피드
        backSpeed: 30,
        // 반복여부
        loop: true
    });






    var mob = 0;
    if ($(window).width() < 1025) mob = 1;
    console.log("모바일?" + mob);


    // 모바일일때 BEST ITEM 리스트에 Swiper 플러그인 적용하기!
    if (mob) {

        $('.swiper-wrapper').css({
            flexWrap: "nowrap"
        });
        $('.swiper-slide').css({
            display: "flex",
            height: "auto"
        });

        var swiper = new Swiper('.swiper-container', {

            spaceBetween: 20,
            navigation: { // 네비게이션 설정
                nextEl: '.swiper-button-next', // 다음 버튼 클래스명
                prevEl: '.swiper-button-prev', // 이번 버튼 클래스명
            }

        });

    } ////// if ////////////////////////////////////////








}); //////////////// jQB ////////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
