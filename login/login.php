<?php
	include_once "include/ez_sql_core.php";
	include_once "include/ez_sql_mysql.php";
	session_start();
	$userid=isset($_POST["userid"])?$_POST["userid"]:"";
	$userpwd=isset($_POST["userpwd"])?$_POST["userpwd"]:"";
	if($userid!="" && $userpwd!=""){
		$db= new ezSQL_mysql();
		$sql= "select * from userinfo where id='".$userid."' and userpwd='".$userpwd."'";
		$res= $db->get_row($sql);
		if(!$res){
			echo "fail login";
		}else{
			echo " welcome  ".$res->userNickname;		
			$_SESSION["curuserid"]=$userid;
			$_SESSION["curusername"]=$res->userNickname;
			header("location:index.php?username=".$res->userNickname);
		}
	}
	//$curuserid=isset($_SESSION["curuserid"])?$_SESSION["curuserid"]:"";
	//$curusername=isset($_SESSION["curusername"])?$_SESSION["curusername"]:"";
	//if($curuserid!=""){
		//header("location:index.php?username=".$curusername);
	//}	
?>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<link rel="stylesheet" type="text/css" href="css/login.css"> 
	<script type="text/javascript" src="js/jquery-1.11.1.js"></script>
	<script type="text/javascript" src="js/login.js"></script>
	<title>登录</title>
</head>
<body>
	<div class="bg"></div>
	<div class="header">
		<div class="headerWrapper">
			<a class="headerlogo">
				<i class="icon headerlogoImg "></i>
				<i class="icon headerlogoWord "></i>
			</a>
			<div class="headerNav">
				<span>探索一下</span>
			</div>
			<div class="headerNav headerNavSpecial">
				<span>问道</span>
				<i class="icon wendaoImg "></i>
			</div>
			<div class="headerNav right">
				<span>关于我们</span>
			</div>
		</div>
	</div>
	<div class="mainWrapper">
		<div class="mainContent">
			<div class="mainContentBg"></div>
			<div class="mainContentWrapper">
				<div class="mainContentWrapperLeft">
					<h1>十年后，你会成为怎样的人？</h1>
					<h2>「十年后」是一个关于未来的匿名社交网络。在这里，你可以自由地分享关于未来与梦想的真实想法，并探索其他人的梦想，以及背后的故事。</h2>
					<div class="mcwLeftNav">
						<a class="mcwLeftNavBtn">进站探索一下</a>
						<span>或者</span>
						<i class="icon mcwLeftNavTiaoIcon"></i>
					</div>
					<div class="mcwLeftSearch">
						<input type="text" class="mcwLeftSearchInput" placeHolder="搜索你的梦想">
						<i class="icon mcwLeftSearchIcon"></i>
					</div>
				</div>
				<div class="mainContentWrapperRight">
					<form action="login.php" method="POST" class="loginForm">
						<input name="userid" type="text" autocomplete="off" placeholder="请输入ID">
						<input name="userpwd" type="text" autocomplete="off" placeholder="请输入密码">
						<div class="loginOptions">
							<div class="loginOptionsLeft">
								<div class="loginOptionsLeftBox"></div>
								<span class="loginOptionsLeftLabel">下次自动登录</span>
							</div>
							<span class="loginOptionsRight loginOptionsNavLabel">忘记密码?</span>
						</div>
						<input type="submit" value="登录">
						<span class="loginFormBottom loginOptionsNavLabel">立即注册>></span>
					</form>
				</div>
			</div>
		</div>
	</div>
	
</body>
</html>