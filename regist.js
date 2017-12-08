var xmlhttp;
		//创建失焦事件--验证用户名是不是可以注册
		document.getElementById("name").addEventListener("blur",readTXT);
		//输入框聚焦事件--聚焦时选中
		document.getElementById("name").onfocus=function(){
			this.select();
		}
		//确认密码的文本框失焦时--检验两次密码是否正确
		document.getElementById("passagain").addEventListener("blur",ISsame);
		//网络请求状态发生变化时的事件
		function state_Change(){
			if (xmlhttp.readyState==0){
				console.log("请求未初始化");
			}	
			if(xmlhttp.readyState==1){
				console.log("服务器连接已建立");
			}
			if(xmlhttp.readyState==2){
				console.log("请求已接收");
			}
			if(xmlhttp.readyState==3){
				console.log("请求处理中");
			}
			//当请求处理完成且网络畅通显示ajax的处理结果
			if(xmlhttp.readyState==4 && xmlhttp.status===200){
				console.log("请求处理完成");
				document.getElementById("name_info").innerHTML=xmlhttp.responseText;
			}
		}

		function readTXT(){
			var a;
			//创建XMLHttpRequest对象
			
			if (window.XMLHttpRequest)
			{
				//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
				xmlhttp=new XMLHttpRequest();
			}
			else
			{
				// IE6, IE5 浏览器执行代码
				xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
			a=regist.username.value;//1.更新参数a的值
			//2.发送网络请求
			//获取表单用户输入的用户名	
			//获取本地文本
			//xmlhttp.open("GET","test.txt",true);
			//获取本地PHP文件
			//xmlhttp.open("GET","test.php",true);
			//获取服务器端txt文件
			//xmlhttp.open("GET","http://localhost:9999/ajax/biaodan/test.txt",true);
			//获取服务器端php文件
			xmlhttp.open("GET","http://localhost:9999/ajax/biaodan/test.php?a="+a,true);
			//xmlhttp.open("GET","http://localhost:9999/ajax/biaodan/aa.html",true);
			xmlhttp.send();
			xmlhttp.onreadystatechange=state_Change;//请求状态改变事件
		}
		function ISsame(){
			if(regist.pass.value!=regist.passagain.value){
				document.getElementById("pass_info").innerHTML="两次输入密码不一致！";
			}
			else{
				document.getElementById("pass_info").innerHTML="";
			}
		}
		//创建点击按钮的事件
		document.getElementById("read_data").addEventListener("click",Fread_data);
		function Fread_data(){
			alert("操作");
		}