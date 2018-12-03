 function fnMove(seq){
        var offset = $('.sec' + seq).offset();
        $('html, body').animate({scrollTop : offset.top}, 1000);
    }

    var ht = $(window).height();
	$("article").height(ht);

	//브라우저가 리사이즈 될 때마다 article의 높이값 갱신
	$(window).on("resize", function(){
		var ht = $(window).height();
		$("article").height(ht);
	});

 $("article").on("mousewheel", function(event, delta){
		if(delta > 0){//마우스 휠을 올렸을 때
			//현재 article의 이전 article의 상단에서부터의 위치로
			//.offset().top 기준 객체가 브라우저 상단에서부터의 거리  
			var prev = $(this).prev().offset().top;
			$("html, body").stop().animate({"scrollTop": prev },1000, "easeInOutSine");
		} else if (delta < 0) {//마우스 휠을 내렸을 때
			var next = $(this).next().offset().top;
			$("html, body").stop().animate({"scrollTop":next}, 1000, "easeInOutSine");
		}
	});

 $(window).scroll(function(){//브라우저에서 스크롤 했을 때
		//.scrollTop() 브라우저에서 스크롤한 만큼의 거리
		var winTop = $(window).scrollTop();
		console.log(winTop);
		//var zone = $("p").offset().top - $(window).height() - 200;
		var zone = $(window).height() / 2;

		if(zone < winTop){
			$("#TopMenu").animate({ backgroundColor:'rgba(0,0,0,.7)',
				color:'#fff' }, 250);
		} else {
			//큐에 남았는 효과를 지우고 현재 진행만 실행
			$("#TopMenu").stop(true).animate({ backgroundColor:'rgba(0,0,0,0)',				color:'#fff' }, 250);
		}
	});

 $(window).on("scroll",function () {
		var ht = $(window).height();
		var scroll = $(window).scrollTop();

		/*if(scroll>=ht*0 && scroll<ht*1){//첫번째 메뉴의 두번째 페이지 영역
			$("#sideBtn li").removeClass();
			$("#sideBtn li").eq(0).addClass('on');
		}

		if(scroll>=ht*1 && scroll<ht*2){//첫번째 메뉴의 두번째 페이지 영역
			$("#sideBtn li").removeClass();
			$("#sideBtn li").eq(1).addClass('on');
		}
		if(scroll>=ht*2 && scroll<ht*3){//두번째 메뉴의 두번째 페이지 영역
			$("#sideBtn li").removeClass();
			$("#sideBtn li").eq(2).addClass('on');
		}
		if(scroll>=ht*3 && scroll<ht*4){//세번째 메뉴의 두번째 페이지 영역
			$("#sideBtn li").removeClass();
			$("#sideBtn li").eq(3).addClass('on');
		}
		if(scroll>=ht*4 && scroll<ht*5){//네번째 메뉴의 두번째 페이지 영역
			$("#sideBtn li").removeClass();
			$("#sideBtn li").eq(4).addClass('on');
		}*/
		for(var i=0; i<6; i++){//0~3까지 1씩 증가
			if(scroll>=ht*i && scroll<ht*(i+1)){
				$("#sideBtn span").removeClass();
				$("#sideBtn span").eq(i).addClass('on');
			}
		}
	});

