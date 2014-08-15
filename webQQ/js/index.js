$(function(){
	$(".navBtn").click(function(){
		var btnName=$(this).attr("id");
		var curPanel=$(".navBtnSelected").attr("id");
		$(".panel-"+curPanel).hide();
		$(".navBtnSelected").find(".icon").css({
			"background-image":""
		});
		$(".navBtnSelected").removeClass("navBtnSelected");

		$(this).addClass("navBtnSelected");
		$(".panel-"+btnName).show();
		$(this).find(".icon").css({
			"background-image":'url("css/image/tab_icon_'+btnName+'_selected.png")'
		});
	});
});