
        $(document).ready(function (){
            $(".toTop").click(function (){
                $('html, body').animate({
                    scrollTop: $(".logo").offset().top
                }, 2000);
            });
			$(".mNavL").click(function(){
				$(".navbar").fadeIn("slow");
			});    
			$(".mNavR").click(function(){
				$(".navbar").fadeOut("slow");
			});    
            $(".page01").click(function (){
                $('html, body').animate({
                    scrollTop: $(".page1").offset().top
                }, 2000);
            });
            $(".page02").click(function (){
                $('html, body').animate({
                    scrollTop: $(".page2").offset().top
                }, 2000);
            });
            $(".page03").click(function (){
                $('html, body').animate({
                    scrollTop: $(".page3").offset().top
                }, 4000);
            });
            $(".page04").click(function (){
                $('html, body').animate({
                    scrollTop: $(".page4").offset().top
                }, 4000);
            });đ
            $(".page05").click(function (){
                $('html, body').animate({
                    scrollTop: $(".page5").offset().top
                }, 5000);
            });
		});