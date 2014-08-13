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
	$(".navA").hover(function(){
		var curShowNav=$(this).find(".channel").attr("class").split("channel ")[1];
		if(curShowNav=="anime" || curShowNav=="artical" || curShowNav=="sumspecial"){
			$(this).find(".largeNav").css({"color":"#1FA4C7"});		
		}else if(curShowNav=="music"){
			$(this).find(".largeNav").css({"color":"#58BBB8"});	
		}else if(curShowNav=="game" || curShowNav=="more" ){
			$(this).find(".largeNav").css({"color":"#95BE3E"});	
		}else if(curShowNav=="joy" || curShowNav=="science" ){
			$(this).find(".largeNav").css({"color":"#FF9101"});
		}else if(curShowNav=="physical"){
			$(this).find(".largeNav").css({"color":"#E84C3D"});	
		}else if(curShowNav=="film"){
			$(this).find(".largeNav").css({"color":"#E04270"});	
		}
		$("#sub-guideMengban").stop(true,false).slideDown();
		$(this).find(".channel").stop(true,false).show();	
	},function(){
		$(this).find(".channel").stop(true,false).hide();
		$("#sub-guideMengban").stop(true,false).slideUp(300);
		$(this).find(".largeNav").css({"color":""});	
	});




	//tab切换
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
		$(this).find(".info_hover").stop(true,true).slideUp(50);
		$(this).find(".videoTitle").animate({"height":"45px"},400);
	},function(){
		$(this).find(".time").animate({"opacity":"0"},100);
		$(this).find(".info_hover").stop(true,true).delay(400).slideDown(300);
		$(this).find(".videoTitle").animate({"height":"16px"},300);
	});


	///每周新番
	$(".weekStyle").click(function(){
		$(".xfUpdateTool").hide();
		$(".xfUpdate").animate({"height":"28px"},500);
		$(".xfUpdateRight").animate({"height":"28px"},500);
		$(".weekStyle").css({"background-position":"-232px -367px"});


		$(this).parent().parent().find(".xfUpdateRight").animate({"height":"196px"},500);
		$(this).parent().parent().animate({"height":"196px"},500);
		$(this).css({"background-position":"-188px -367px"});
		$(this).parent().parent().find(".xfUpdateTool").show();
	});
	$(".btn-scroll").click(function(){
		var aarray=$(this).parent().parent().find(".xfUpdateRight").children("a");
		var length=(aarray.length-7)*24;
		alert(length);
		$(this).parent().parent().find(".quanbuxinfan").animate({"top":length+"px"},500);
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

		}).animate({"top":"-10px"},100,function(){

		}).animate({"top":"-1px"},100,function(){

		}).animate({"top":"-9px"},100,function(){

		}).animate({"top":"-6px"},50,function(){

		}).animate({"top":"-1px"},60)
	});
	}).dequeue("test");
	picNum++;
	if(picNum>4){
		picNum=0;
	}
}