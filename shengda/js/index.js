$(function(){
	//setTimeout("readyWeb()",500);
	//收起或拉下手机快速注册窗口
	$(".slide_top").click(function(){
		var down_txtDisplay=$(this).find(".down_txt").attr("style");
		var slide_toggDisplay=$(this).find(".slide_togg").attr("style");
		if(down_txtDisplay=="display: none;"){
	 		$(this).animate({"top":"20px"},800);
	 		$(this).next().slideUp(800);
			$(this).find(".down_txt").css("display","inline");
	 		$(this).find(".slide_togg").css("display","none");
		}else if(slide_toggDisplay=="display: none;"){
			$(this).animate({"top":"335px"},800);
	 		$(this).next().slideDown(800);			
			$(this).find(".down_txt").css("display","none");
	 		$(this).find(".slide_togg").css("display","inline-block");
		}
		
	});
	$(".slide_up_close").click(function(){
		$(".slide_top .down_txt").css("display","inline");
	 	$(".slide_top .slide_togg").css("display","none");
	 	$(".mode_aimate_wrap .slide_top").animate({"top":"20px"},800);
	 	$(".slide_bg").slideUp(800);
	});
	//弹出手机下一步窗口
	$(".setup_btn").click(function(){
		$(".tran_slide_box1").animate({"left":"0"},500);
	});
	$("#btnRightArr").click(function(){
		$(".tran_slide_box1").animate({"left":"466px"},500);
	});

	//切换手机注册，邮箱注册，个性注册三种方式
	$(".mod_regist_nav li").click(function(){
		if($(this).attr("class")=="cur"){
			return false;
		}
		var selectedTab=$(this).attr("name");
		if(selectedTab=="registPhone"){
			$(".verifyCode").hide();
		}else{
			$(".verifyCode").show();
		}
		$("#mod_regist_form").attr("class","mod_regist_form "+selectedTab);
		$(this).parent().find(".cur").removeClass("cur");
		$(this).addClass("cur");
	});
	//手机号栏
	$("#mobile").click(function(){
		$(this).parent().parent().find(".tipsInfo").show();
		$(this).parent().parent().find(".tipsError").hide();
		return false;
	});
	$(document).click(function(){
		$(".tipsInfo").hide();
		$(".tipsError").show();
	});
	//切换到外国号码输入区
	$("#js_get_flags").click(function(){
		if($(this).html()!="点击这里"){
			$(this).prev().html("中国大陆号码？");
			$(this).html("点击这里");
			$(this).parent().parent().parent().find(".otherMb").show();
			$(this).parent().parent().parent().addClass("otherMbInput");
			return false;
		}else{
			$(this).prev().html("11位数字，");
			$(this).html("非中国大陆号码点击这里");
			$(this).parent().parent().parent().find(".otherMb").hide();
			$(this).parent().parent().parent().removeClass("otherMbInput");
			return false;
		}
	});

	// 切换不同国家的手机区号
	$(".flag_wrap,#flag_list li").click(function(){
		var phonequhao=$(this).find(".flag_name").html().split("+")[1];
		var guoqiClass=$(this).find("span").eq(0).attr("class");
		$("#country_flag").find("span").eq(0).attr("class",guoqiClass);
		$("#country_code").html("+"+phonequhao);
	});
	$(".selcountry_inner").click(function(){
		$("#flag_list").show();
		return false;
	});
	$(".country_search").click(function(){
		return false;
	});
	$(document).click(function(){
		$("#flag_list").hide();
	});
});


function readyWeb(){
	$(".slide_top .down_txt").css("display","none");
 	$(".slide_top .slide_togg").css("display","inline-block");
 	$(".mode_aimate_wrap .slide_top").animate({"top":"335px"},800);
 	$(".slide_bg").slideDown(800);
}