$(function(){
	//button按下时显示效果
	$(".searchButton").mousedown(function(){
		 $(this).css({"background-position":"0 -123px"});		
	});
	$(".searchButton").mouseup(function(){
		 $(this).css({"background-position":"0 -88px"});		
	});

	//弹出浏览信息，投稿，个人信息等
	$("#guide_history").hover(function(){
		$(this).css({"height":"70px"});
		$(".history").mouseover(function(){
			$("#guide_historyArea").show();
		});
		$(".history").mouseout(function(){
			$("#guide_historyArea").hide();
		});
	},function(){
		$(this).css({"height":""});
		
	});
	$("#guide_post").hover(function(){
		$(this).css({"height":"70px"});
		$(".post").mouseover(function(){
			$("#guide_postArea").show();
		});
		$(".post").mouseout(function(){
			$("#guide_postArea").hide();
		});
	},function(){
		$(this).css({"height":""});
		
	});
	$("#guide_avatarArea").hover(function(){
		$(this).css({"height":"70px"});
		$(".avatar").mouseover(function(){
			$("#guide_userAva").show();
		});
		$(".avatar").mouseout(function(){
			$("#guide_userAva").hide();
		});
	},function(){
		$(this).css({"height":""});
		
	});
	
	//导航栏
	$(".navWords").hover(function(){
		var curClassName="."+$(this).attr("class").split("navWords ")[1];
		$(curClassName).mouseover(function(){
			$("#sub-guideMengban").slideDown();
			$(curClassName).slideDown();
		});
	//}
	},function(){

	});






	$(".tab").click(function(){
		$(this).parent().find(".tab").attr("class","tab");
		$(this).attr("class","tab active")
		var pppparent=$(this).parent().parent().parent().parent();
		var pageNum=$(this).attr("tabid");
		pppparent.find(".page").hide();
		pppparent.find(".page"+pageNum).show();
	});
	//显示视频全部标题和时间
	$(".videoBox").hover(function(){
		$(this).find(".time").animate({"opacity":"1"},500);
		$(this).find(".info_hover").stop(true,true).fadeOut(50);
		$(this).find(".videoTitle").animate({"height":"45px"},500);
	},function(){
		$(this).find(".time").animate({"opacity":"0"},500);
		$(this).find(".info_hover").stop(true,true).fadeIn(50);
		$(this).find(".videoTitle").animate({"height":"24px"},500);
	});
	//在追剧中显示视频蒙版
	$(".zhuijuPicArea").hover(function(){
		$(this).find(".icon").animate({"opacity":"1"},100);
	},function(){
		$(this).find(".icon").animate({"opacity":"0"},100);
	});
	//footer随机表情
	randomBiaoqing();
	$(".avatar-ac-footer").click(function(){
		var numCount=$(this).find(".rightTop").html();
		numCount++;
		clickNum++;
		$(this).find(".rightTop").html(numCount);
		if(numCount>0){
			$(this).find(".rightTop").show();
			if(clickNum>=50){
				randomBiaoqing();
				clickNum=0;
			}
		}else{
			$(this).find(".rightTop").hide();
		}
	});
	//更换专题图片
	timeHandle=setInterval("lightboxShow()",2000);
	$(".lightboxLeftTag").mouseover(function(){
		clearInterval(timeHandle);
		$(".lightboxGuide").stop(true);
		$(".element-animate").stop(true);
		$(".lightboxGuide").queue("test",[]);
		var picClassName=$(this).attr("class")
		picNum=picClassName.split("unit-")[1];
		lightboxShow();
		$(".lightboxGuide").queue("test",function(){});
	});
	// $(".lightboxGuide").mouseout(function(){
	// 	$(".lightboxGuide").stop(true);
	// 	$(".element-animate").stop(true);
	// 	$(".lightboxGuide").queue("test",[]);
	// 	timeHandle=setInterval("lightboxShow()",2000);
	// });

	//文章列表前的小图块
	// $(".wenzhangTitleList").mouseover(function(){
	// 	$(".wenzhangunit").attr("class","unit wenzhangunit")
	// 	$(this).parent().attr("class","unit wenzhangunit wenzhangActive");
	// });
	

});

var clickNum=0;
var picNum=1;
var timeHandle;


function randomBiaoqing(){
	var n=Math.floor(Math.random()*50+4);
	if(n<10){
		n="0"+n;
	}
	$("#changeBiaoqing").attr("src","images/biaoqing/"+n+".png");
}

function lightboxShow(){
	var imgSrc=$(".lightboxLeft").find(".unit-"+picNum).attr("data-src");
	$(".lightboxPicStyle").attr("src",imgSrc);
	var h1content=$(".unit-"+picNum).find("h1").html();
	var h3content=$(".unit-"+picNum).find("h3").html();
	
	$(".element-animate").find("h1").html(h1content);
	$(".element-animate").find("h3").html(h3content);
	$(".lightboxGuide").queue("test",function(){
		$(this).animate({"top":picNum*64+1},picNum*10+80,function(){
		$(".element-animate").animate({"top":"-1px"},80,function(){

		}).animate({"top":"-9px"},90,function(){

		}).animate({"top":"-3px"},80,function(){

		}).animate({"top":"-9px"},70,function(){

		}).animate({"top":"-6px"},50,function(){

		}).animate({"top":"-1px"},60)
	});
	}).dequeue("test");
	picNum++;
	if(picNum>4){
		picNum=0;
	}
}