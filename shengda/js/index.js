$(function(){
	setTimeout("readyWeb()",500);
	//收起或拉下手机快速注册窗口
	$(".slide_top").click(function(){
		var down_txtDisplay=$(this).find(".down_txt").attr("style");
		var slide_toggDisplay=$(this).find(".slide_togg").attr("style");
		if(down_txtDisplay=="display: none;"){
	 		$(this).animate({"top":"20px"},800);
	 		$("#div_Register").animate({"top":"0px","height":"369px"},800);
	 		$(this).next().slideUp(800);
			$(this).find(".down_txt").css("display","inline");
	 		$(this).find(".slide_togg").css("display","none");
		}else if(slide_toggDisplay=="display: none;"){
			$("#div_Register").animate({"top":"274px","height":"43px"},800);
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
	 	$("#div_Register").animate({"top":"0px","height":"369px"},800);
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


	
	$(document).click(function(){
		//手机号码验证
	    regMobile=/^1[3|4|5|8][0-9]\d{8}$/i;//验证手机正则
	    var htmlMobile="";
	    var mobileValue=$("#mobile").val();
		if($("#mobile").parent().attr("class")=="inputBox inputSuc"){
			$("#mobileTip").addClass("show_tips");
			$("#mobile").parent().removeClass("inputSuc");
			$("#mobile").parent().addClass("inputError");
		}
		if(mobileValue.lenth<11 || !regMobile.test(mobileValue)){
			if($("#mobile").parent().parent().attr("class")=="input_wrap otherMbInput"){
				htmlMobile+='手机号码格式错误';
			}else{
				htmlMobile+='<span class="phoneerrortip">手机号码填写不正确，</span>';
				htmlMobile+='<a class="js_get_flags" hidefocus="true">';
				htmlMobile+='非中国大陆号码点击这里';
				htmlMobile+='</a>';
			}										
			$("#mobileTip .tipsError").html(htmlMobile);
			$("#mobileTip .tipsInfo").hide();
			$("#mobileTip .tipsError").show();								
		}else if(mobileValue==""){
			htmlMobile+='手机号码未填写';
			$("#mobileTip .tipsError").html(htmlMobile);
			$("#mobileTip .tipsInfo").hide();
			$("#mobileTip .tipsError").show();
		}else if(regMobile.test(mobileValue)){
			$("#mobileTip").removeClass("show_tips");
			$("#checkCodeTip").addClass("show_tips");
			$("#input_wrap_smscode").attr("style","");
			$("#js_get_phone").removeClass("wait");
			$("#mobile").parent().removeClass("inputError");
			$("#mobile").parent().addClass("inputSuc");
		}
		
		//手机验证码验证
		regCheckcode=/^\d{6}$/;//验证六位验证码正则
	    var htmlCheckcode="";  
		if($("#checkCode").parent().attr("class")=="inputBox input_with_btn inputSuc"){
			$("#checkCodeTip").addClass("show_tips");
			$("#checkCode").parent().removeClass("inputSuc");
			$("#checkCode").parent().addClass("inputError");
		}
		if($("#checkCode").val()!="" && !regCheckcode.test($("#checkCode").val())){
			htmlCheckcode+='填写错误，验证码为短信中的6位数字';	
			$("#checkCodeTip .tipsError").html(htmlCheckcode);
			$("#checkCodeTip .tipsInfo").hide();
			$("#checkCodeTip .tipsError").show();																
		}else if($("#checkCode").val()==""){
			htmlCheckcode+='验证码未填写';
			$("#checkCodeTip .tipsError").html(htmlCheckcode);
			$("#checkCodeTip .tipsInfo").hide();
			$("#checkCodeTip .tipsError").show();
		}else  if(regCheckcode.test($("#checkCode").val())){
	    	$("#checkCodeTip").removeClass("show_tips");
			$("#js_get_phone").addClass("wait");
			$("#checkCode").parent().removeClass("inputError");
			$("#checkCode").parent().addClass("inputSuc");
		}
		
		//验证静态密码
		var passwordlength=$("#password").val().length;
		passwordlength--;
		regPassword=new RegExp("([0-9a-zA-Z])\\1{"+passwordlength+"}");//验证静态密码正则
	    var htmlPassword="";  
		if($("#password").parent().attr("class")=="inputBox inputSuc"){
			$("#passwordTip").addClass("show_tips");
			$("#password").parent().removeClass("inputSuc");
			$("#password").parent().addClass("inputError");
		}
	    if(passwordlength<5){
	    	htmlPassword+='密码过短，至少6位字母和数字';
			$("#passwordTip .tipsError").html(htmlPassword);
			$("#passwordTip .tipsInfo").hide();
			$("#passwordTip .tipsError").show();
	    }
		if($("#password").val()!="" && regPassword.test($("#password").val())){
			htmlPassword+='密码过于简单，不能为同一字符';	
			$("#passwordTip .tipsError").html(htmlPassword);
			$("#passwordTip .tipsInfo").hide();
			$("#passwordTip .tipsError").show();																
		}else if($("#password").val()==""){
			htmlPassword+='密码未填写';
			$("#passwordTip .tipsError").html(htmlPassword);
			$("#passwordTip .tipsInfo").hide();
			$("#passwordTip .tipsError").show();
		}else if(!regPassword.test($("#password").val())){
			$("#passwordTip").removeClass("show_tips");
			$("#js_get_phone").addClass("wait");
			$("#password").parent().removeClass("inputError");
			$("#password").parent().addClass("inputSuc");
		}

		//邮箱验证
		regEmail=/\b[\w-]+(\.[\w-]+)*@[\w-]+(\.((?=com)|(?=net)|(?=cn)|(?=org))\b)/;//验证静态密码正则
	    var htmlEmail="";  
	    var emailValue=$("#email").val();
		if($("#email").parent().attr("class")=="inputBox inputSuc"){
			$("#emailTip").addClass("show_tips");
			$("#email").parent().removeClass("inputSuc");
			$("#email").parent().addClass("inputError");
		}
		if(!regEmail.test(emailValue)){
			htmlEmail+='邮箱填写错误，请更正';								
			$("#emailTip .tipsError").html(htmlEmail);
			$("#emailTip .tipsInfo").hide();
			$("#emailTip .tipsError").show();								
		}else if(emailValue==""){
			htmlEmail+='注册邮箱未填写';
			$("#emailTip .tipsError").html(htmlEmail);
			$("#emailTip .tipsInfo").hide();
			$("#emailTip .tipsError").show();
		}else if(regEmail.test(emailValue)){
			$("#emailTip").removeClass("show_tips");
			$("#email").parent().removeClass("inputError");
			$("#email").parent().addClass("inputSuc");
		}
		

		//图片验证码验证
		regValidateCode=/[0-9a-zA-Z]{6}/;//验证静态密码正则
	    var htmlValidateCode="";  
	    var validateCodeValue=$("#validateCode").val();
		if($("#validateCode").parent().attr("class")=="inputBox inputSuc"){
			$("#validateCodeTip").addClass("show_tips");
			$("#validateCode").parent().removeClass("inputSuc");
			$("#validateCode").parent().addClass("inputError");
		}if(validateCodeValue==""){
			htmlValidateCode+='验证码不能为空';
			$("#validateCodeTip .tipsError").html(htmlValidateCode);
			$("#validateCodeTip .tipsInfo").hide();
			$("#validateCodeTip .tipsError").show();
		}else if(validateCodeValue.length!=6){
			htmlValidateCode+='验证码应为6位数字';								
			$("#validateCodeTip .tipsError").html(htmlValidateCode);
			$("#validateCodeTip .tipsInfo").hide();
			$("#validateCodeTip .tipsError").show();	
		}else if(!regValidateCode.test(validateCodeValue)){
			htmlValidateCode+='验证码不正确';								
			$("#validateCodeTip .tipsError").html(htmlValidateCode);
			$("#validateCodeTip .tipsInfo").hide();
			$("#validateCodeTip .tipsError").show();								
		}else if(regValidateCode.test(validateCodeValue)){
			$("#validateCodeTip").removeClass("show_tips");
			$("#validateCode").parent().removeClass("inputError");
			$("#validateCode").parent().addClass("inputSuc");
		}




		//个性账号验证
		regusername=/\b[a-zA-Z][0-9A-Za-z]{3,15}\b/;//验证静态密码正则
	    var htmlusername="";  
	    var usernameValue=$("#username").val();
		if($("#username").parent().attr("class")=="inputBox inputSuc"){
			$("#usernameTip").addClass("show_tips");
			$("#username").parent().removeClass("inputSuc");
			$("#username").parent().addClass("inputError");
		}if(usernameValue==""){
			htmlusername+='个性账号未填写';
			$("#usernameTip .tipsError").html(htmlusername);
			$("#usernameTip .tipsInfo").hide();
			$("#usernameTip .tipsError").show();
		}else if(usernameValue.length<4){
			htmlusername+='长度过短，至少4位字母和数字';								
			$("#usernameTip .tipsError").html(htmlusername);
			$("#usernameTip .tipsInfo").hide();
			$("#usernameTip .tipsError").show();	
		}else if(!regusername.test(usernameValue)){
			htmlusername+='格式错误，个性账号首位必须是字母';								
			$("#usernameTip .tipsError").html(htmlusername);
			$("#usernameTip .tipsInfo").hide();
			$("#usernameTip .tipsError").show();								
		}else if(regusername.test(usernameValue)){
			$("#usernameTip").removeClass("show_tips");
			$("#username").parent().removeClass("inputError");
			$("#username").parent().addClass("inputSuc");
		}
		
		

	});
	//手机号栏
	$("#mobile").click(function(){
		if($("#mobile").parent().parent().attr("class")=="input_wrap otherMbInput"){
			$("#js_get_flags").prev().html("中国大陆号码？");
			$("#js_get_flags").html("点击这里");
		}else{
			$("#js_get_flags").prev().html("11位数字，");
			$("#js_get_flags").html("非中国大陆号码点击这里");
		}
		$("#mobileTip").addClass("show_tips");
		$(this).parent().parent().find(".tipsInfo").show();
		$(this).parent().parent().find(".tipsError").hide();
		return false;
	});
	//切换到外国号码输入区
	$(document).on("click",".js_get_flags",function(){
		if($("#mobile").parent().parent().attr("class")!="input_wrap otherMbInput"){
			$(this).prev().html("中国大陆号码？");
			$(this).html("点击这里");
			$(this).parent().parent().parent().find(".otherMb").show();
			$(this).parent().parent().parent().addClass("otherMbInput");
		}else{
			$(this).prev().html("11位数字，");
			$(this).html("非中国大陆号码点击这里");
			$(this).parent().parent().parent().find(".otherMb").hide();
			$(this).parent().parent().parent().removeClass("otherMbInput");
		}
		return false;
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


	//手机验证码
	$("#checkCode").click(function(){
		$("#checkCodeTip").addClass("show_tips");
		$(this).parent().parent().find(".tipsInfo").show();
		$(this).parent().parent().find(".tipsError").hide();
		return false;
	});
	$("#js_get_phone").click(function(){
		$(this).addClass("wait");
		$(this).html("验证码已发送");
		return false;
	});
	//静态密码输入验证
	$("#password").click(function(){
		$("#passwordTip").addClass("show_tips");
		$(this).parent().parent().find(".tipsInfo").show();
		$(this).parent().parent().find(".tipsError").hide();
		return false;
	});
	$("#btnShowPass").click(function(){
		if($(this).html()=="显示密码"){
			$("#password").attr("type","text");
			$(this).html("隐藏密码");
		}else{
			$("#password").attr("type","password");
			$(this).html("显示密码");
		}
		return false;
	});
	$("#password").keyup(function(){
		var passwordlength=$(this).val().length;
		var passwordValue=$(this).val();
		if(passwordlength<7){
			$("#passwordTip").find(".tipsInfo").attr("class","tipsInfo curLow");
		}else if (passwordlength<11) {
			$("#passwordTip").find(".tipsInfo").attr("class","tipsInfo curMiddle");
		}else if (passwordlength>15) {
			$("#passwordTip").find(".tipsInfo").attr("class","tipsInfo curHigh");
		}
		if(passwordValue==""){
			htmlPassword+='密码未填写';
			$("#passwordTip .tipsError").html(htmlPassword);
			$("#passwordTip .tipsInfo").hide();
			$("#passwordTip .tipsError").show();
		}
	});

	//邮箱验证
	$("#email").click(function(){
		$("#emailTip").addClass("show_tips");
		$("#emailTip .tipsInfo").show();
		$("#emailTip .tipsError").hide();
		return false;
	});

	//图片验证码验证
	$("#validateCode").click(function(){
		$("#validateCodeTip").addClass("show_tips");
		$("#validateCodeTip .tipsInfo").show();
		$("#validateCodeTip .tipsError").hide();
		return false;
	});


	//个性账号验证
	$("#username").click(function(){
		$("#usernameTip").addClass("show_tips");
		$("#usernameTip .tipsInfo").show();
		$("#usernameTip .tipsError").hide();
		return false;
	});

});


function readyWeb(){
	$(".slide_top .down_txt").css("display","none");
 	$(".slide_top .slide_togg").css("display","inline-block");
 	$("#div_Register").animate({"top":"274px","height":"43px"},800);
 	$(".mode_aimate_wrap .slide_top").animate({"top":"335px"},800);
 	$(".slide_bg").slideDown(800);
}
