$(function(){
	//setTimeout("readyWeb()",500);
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
	$(".setup_btn").click(function(){
		$(".tran_slide_box1").animate({"left":"0"},500);
	});
	$("#btnRightArr").click(function(){
		$(".tran_slide_box1").animate({"left":"466px"},500);
	});
});


function readyWeb(){
	$(".slide_top .down_txt").css("display","none");
 	$(".slide_top .slide_togg").css("display","inline-block");
 	$(".mode_aimate_wrap .slide_top").animate({"top":"335px"},800);
 	$(".slide_bg").slideDown(800);
}