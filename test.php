<?php
	$temp=$_GET['a'];//接收参数
	$con = mysql_connect("localhost", "root", "root");//创建数据库连接
	if (!$con){
	  //die('Could not connect: ' . mysql_error());
	  }
	  else{
	  	//echo"success!";
	  }
	$db_selected = mysql_select_db("ajax_stydy", $con);
	$sql = "select * from user where username='".$temp."'";
	$result = mysql_query($sql,$con);//查询数据
	if(!mysql_num_rows($result)){//数据库中不存在该用户名时提示可以注册
		//echo "wushuju";
		echo "<span style='color:green'>*恭喜您！用户名'".$temp."'可以注册*</span>";
	}
	else{//已存在该用户提示更换用户名
		echo "<span style='color:red'>*该用户名已被注册请更换！*</span>";
	}
	mysql_close($con);//关闭数据库连接
?>