$(function(){
	//会话，联系人，控件，设置之间切换
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
	//在好友，群，讨论组之间切换
	$(".memberTitle").click(function(){
		var clickClass=$(this).attr("class");
		var clickClass0=clickClass.split(" ")[0];
		var clickClass1=clickClass.split(" ")[1];
		var clickClass2=clickClass.split(" ")[2];
		if(clickClass2==null){
			var memberTabBodyName=clickClass1.split("member-")[1]
			$(this).parent().parent().find(".active").removeClass("active");
			$(this).parent().parent().find(".memberTabBody-"+memberTabBodyName).addClass("active");
			$(".memberTabSelected").removeClass("memberTabSelected");
			$(this).addClass("memberTabSelected");
		}
		
	});

	//点开好友分组里的好友
	$(".friendlistTitle").click(function(){
		var listState=$(this).parent().attr("class");
		if(listState!="friendlist"){
			$(this).parent().removeClass("active");
		}else{
			$(this).parent().addClass("active");
		}
	});



});