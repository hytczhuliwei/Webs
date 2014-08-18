$(function(){
	//换背景
	$(".changBgFre").click(function(){
		picNum--;
		if(picNum<1){
			picNum=8;
		}
		$(".bgAllImage").attr("src",'css/image/'+picNum+'.jpg');
	});
	$(".changBgNext").click(function(){
		picNum++;
		if(picNum>8){
			picNum=1;
		}
		$(".bgAllImage").attr("src",'css/image/'+picNum+'.jpg');
	});


	//会话，联系人，控件，设置之间切换
	$(".navBtn").click(function(){
		var headerName=$(this).find("a span").html();
		$("#headerTitle").html(headerName);
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
	//点到搜索框出现蒙版
	$(".sousuoText").click(function(){
		$("#menban").show();
		$("#sousuoBar").css({
			"z-index":"1000"
		});
		return false;
	});
	$(document).click(function(){
		$("#menban").hide();
		$("#sousuoBar").css({
			"z-index":""
		});
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
	//点击当前状态，显示状态列表
	$(".onlineStateShowArea").click(function(){
		var thisState=$(this).attr("state");
		if(thisState=="show"){
			$(".changeOnlineIcon").show();
			$(this).attr("state","hide");
			return false;
		}else{
			$(this).attr("state","show");
		}
	});
	//点击其他地方，聊天窗口的下拉菜单,状态列表消失
	$(document).click(function(){
		$(".onlineStateShowArea").attr("state","show");
		$(".changeOnlineIcon").hide();

		$(".pannelMenuList").slideUp();
		$(".pannelMenuList").attr("isshow","false");
	});
	///更改用户在线状态
	$(".changeOnlineIcon li").click(function(){
		var onlinestate=$(this).find(".iconState").attr("class").split(" iconState")[0];
		$(".onlineStateShowArea span").attr("class","iconState "+onlinestate);
		$(".avatarWrap span").attr("class","iconState userOnlineState "+onlinestate);
	});
	//弹出消息设置
	$(".row3").click(function(){
		$("#setupPanel").show();
	});
	$("#setuppanelLeftButton").click(function(){
		$("#setupPanel").hide();
	});
	$("#setupPanel").click(function(){
		$(this).css({"z-index":"10001"});
		$("#chatPanel").css({"z-index":"10000"});
	});
	$("#chatPanel").click(function(){
		$(this).css({"z-index":"10001"});
		$("#setupPanel").css({"z-index":"10000"});
	});



	//弹出版本信息
	$(".group .row4").click(function(){
		var state=$(this).attr("state");
		if(state=="show"){
			$(this).parent().next().show();
			$(this).find(".more_icon").css({
				"background-image":'url("css/image/open_arrow_fire.png")'
			});
			$(this).attr("state","hide");
		}else{
			$(this).parent().next().hide();
			$(this).find(".more_icon").css({
				"background-image":'url("css/image/open_arrow.png")'
			});
			$(this).attr("state","show");
		}
		
	});
	//弹出聊天窗口
	$(document).on("click",".listItem",function(){
		var curName=$(this).find(".memberNick a").html();
		var curIdName=$(this).attr("id");
		var curType=curIdName.split("-item-")[0];
		var curId=curIdName.split("-item-")[1];
		var chatMessage=$(this).find(".chatMessage").html();
		if(curType=="friend" || curType=="group"){
			 chatMessage=$("#chat-"+curIdName).find(".chatMessage").html();
			 if(chatMessage==null){
			 	chatMessage="";
			 	var curAvaImg=$(this).find(".avatar img").attr("src");
			 	var curAvaName=$(this).find(".memberNick a").html();
			 	var html="";
			 	html+='<li class="listItem listItem-chat" id="chat-'+curIdName+'">';	
			 	html+='		<a href="#" class="avatar">';
			 	html+='			<img src="'+curAvaImg+'">';
			 	html+='		</a>';
			 	html+='		<p class="memberNick">';
			 	html+='			<a>'+curAvaName+'</a>';
			 	html+='			<span></span>';
			 	html+='		</p>';
			 	html+='		<p class="memberMsg"> </p>';
			 	html+='		<div class="deleteConversation"></div>';
			 	html+='		<div class="chatMessage">';
			 	html+='		</div>';
			 	html+='</li>';	
			 	$("#conversationList").prepend(html);
			 	$("#panelBodyBox").html(chatMessage);
				$("#panelTitle").html(curName);
			 	$("#chatPanel").attr("curid",curType+"-"+curId);
			 	$("#chatPanel").show();
			 	return;
			 }
		}else{
			var curhtml=$(this).html();
			var html="";
		 	html+='<li class="listItem listItem-chat" id="'+curIdName+'">';	
		 	html+=curhtml;
		 	html+='</li>';
		 	$("#conversationList").prepend(html);
		 	$(this).remove();
		 	$(".deleteConversation").stop().hide();
		}
		$("#panelBodyBox").html(chatMessage);
		$("#panelTitle").html(curName);
		$("#chatPanel").attr("curid",curType.split("chat-")[1]+"-"+curId);
		$("#panelBodyBox").scrollTop($("#panelBodyBox")[0].scrollHeight); 
		$("#chatPanel").show();
		
	});
	$("#panelRightButtonI").click(function(){
		$("#chatPanel").hide();
	});



	//发送消息
	$(".sendMessageBtn").click(function(){
		var nowTime=new Date();
		var inputContent=$(".chatInputArea").val();
		if(inputContent!="" && inputContent!=null){
			var html="";
			if(showtalktime=="y"){
				var hour=nowTime.getHours()<10?"0"+nowTime.getHours():nowTime.getHours();
				var minute=nowTime.getMinutes()<10?"0"+nowTime.getMinutes():nowTime.getMinutes();
				var second=nowTime.getSeconds()<10?"0"+nowTime.getSeconds():nowTime.getSeconds();
				html+='<div class="chatTime">';
				html+='<span>'+hour+':'+minute+':'+second+'</span>';	
				html+='</div>';	
				showtalktime="n"	
			}																							
		 	html+='<div class="chatContentSelf">';	
		 	html+='		<img class="avatarImg" src="image/avatarPic.jpg">';
		 	html+='		<p class="chatNick">阿井在歇歇凉';
		 	html+='		</p>';
		 	html+='		<p class="chatContent ">'+inputContent+'</p>';
		 	html+='	</div>';
		 	var curId=$("#chatPanel").attr("curid");
		 	var curIdType=curId.split("-")[0];
		 	var curIdNum=curId.split("-")[1];
		 	$("#chat-"+curIdType+"-item-"+curIdNum).find(".chatMessage").append(html);
		 	$("#chat-"+curIdType+"-item-"+curIdNum).find(".memberMsg").html(inputContent);
		 	$("#panelBodyBox").append(html);
		    $("#panelBodyBox").scrollTop($("#panelBodyBox")[0].scrollHeight); 
		    $(".chatInputArea").val("");
		}else{

		}
	});
	//聊天窗口的下拉菜单
	$("#panelLeftButton").click(function(){
		var showState=$(".pannelMenuList").attr("isshow");
		if(showState=="false"){
			var curChatPanelType=$("#chatPanel").attr("curid").split("-")[0];
			if(curChatPanelType=="group"){
				$(this).parent().parent().find(".menuListIcon1").css({"background-position": "0px 2px"});
				$(this).parent().parent().find(".menuListIcon1Words").html("群成员");
				$(this).parent().parent().find(".menuListIcon2Words").html("群资料");
			}else if(curChatPanelType=="friend"){
				$(this).parent().parent().find(".menuListIcon1").css({"background-position": "-128px 3px"});
				$(this).parent().parent().find(".menuListIcon1Words").html("QQ空间");
				$(this).parent().parent().find(".menuListIcon2Words").html("详细资料");
			}
			$(".pannelMenuList").slideDown();
			$(".pannelMenuList").attr("isshow","true");
			return false;
		}else if(showState=="true"){
			$(".pannelMenuList").slideUp();
			$(".pannelMenuList").attr("isshow","false");
		}
	});
	//删除图标
	// $(".listItem-chat").each(function(){
	 $(document).on("mouseover",".listItem-chat",function(){
		$(this).find(".deleteConversation").stop().show();
		return false;
	});
	  $(document).on("mouseout","body",function(){
		$(".deleteConversation").stop().hide();
	});

	//删除会话
	$(document).on("click",".deleteConversation",function(){
		$(this).parent().remove();
		return false;
	});
	setInterval('showTalkTime()',10000);

	//拖动窗口
	$("#chatPanel").draggable({containment:"body",handle:"#panelHeader"});
	$("#setupPanel").draggable({containment:"body",handle:"#setuppanelHeader"});
	//$(".chatMessage").parent().draggable({connectToSortable:"#conversationList",revert:"invalid",containment:"#conversationList",axis:"y"});
		$("#conversationList").sortable({ revert:true,axis:"y"});
		$("ul,li").disableSelection();
});


var showtalktime="y";
var picNum=2;
function showTalkTime(){
	showtalktime="y";
}

