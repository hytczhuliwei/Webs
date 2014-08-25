$(function(){
	//搜索框获得焦点与失去焦点事件
	$("#searchInput").focus(function(){
		$(this).css({
			'background':'url("css/images/searchInputbg.png") repeat-x'
		});
	});
	$("#searchInput").blur(function(){
		$(this).css({
			'background':''
		});
	});

	//目录下拉框
	$(".categorymenu .topcat_list .topcat_list_item").hover(function(){
		$(this).css("background-color","#fff");
		$(this).find(".topcat_link").css({"color":"#000"});
	},function(){
		$(this).css("background-color","");
		$(this).find(".topcat_link").css({"color":""});
	});

	$(".categorymenu .topcat_list .a3.catalog-subnavigation").hover(function(){
		$(this).find(".topcat_spacer").css({
			"background":'url("css/images/megasprite.png") no-repeat right -34px'
		});
		$(this).find(".subcategorymenu").stop().slideDown(100);
	},function(){
		$(this).find(".topcat_spacer").css({
			"background":''
		});
		$(this).find(".subcategorymenu").stop().slideUp(100);
	});

	//时间圆点运动相关
	timehandle=setInterval("changeCircle()",20) ;
	//暂停和开始
	$(".pause.controls").click(function(){
		if($(this).attr("class")=="pause controls"){
			clearInterval(timehandle);
			$(this).addClass("active");
		}else{
			$(this).removeClass("active");
			timehandle=setInterval("changeCircle()",20) ;
		}
	});
	//点击圆点跳转到相应的页面
	$(".orbit-bullets li").click(function(){
		clearInterval(timehandle);
		bulletsNum=$(this).html();
		//circleDeg=0;
		//timehandle=setInterval("changeCircle()",20) ;//点击圆点后改变位置，重置时间，重新开始运动
		changeCircle();
		$(".pause.controls").addClass("active");//点击圆点后改变位置，暂停状态

	});
});


var circleDeg=0;
var bulletsNum=0;
var timehandle;
//圆点运动相关
function changeCircle(){
	$(".timer.controls").css("left",(31+bulletsNum*17)+"px");
	$(".rotator").css({"transform":"rotate("+circleDeg+"deg)"});
	circleDeg++;
	if(circleDeg<180){
		$(".rotator").removeClass("move");
		$(".mask").removeClass("move");
	}
	if(circleDeg>180){
		$(".rotator").addClass("move");
		$(".mask").addClass("move");
	}
	if(circleDeg>360){
		circleDeg=0;
		$(".rotator").removeClass("move");
		$(".mask").removeClass("move");
		bulletsNum++;
		if(bulletsNum>2){
			bulletsNum=0;
		}
	}

};