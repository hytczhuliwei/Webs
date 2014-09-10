<?php
	session_start();
	$curuserid=isset($_SESSION["curuserid"])?$_SESSION["curuserid"]:"";
	$curusername=isset($_SESSION["curusername"])?$_SESSION["curusername"]:"";
	if($curuserid==""){
		header("location:login.php?error=needlogin");
	}else{
		echo " welcome  ".$curusername;	
	}
?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> 
	<title>首页</title>
</head>
<body> 
	<form action="logout.php" method="post">
		<input type="submit" value="退出登录">
	</form>
</body>
</html>