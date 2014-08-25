$(function(){

	//显示右侧小幻灯片
	showflash1();

	//幻灯片圆点click事件
	$(".btntiny").click(function(){
		clearTimeout(timehandle);
		index = $(this).attr("index");
		$(".lm1rttop1con img").attr("src",imgsrc[index]);
		$(".btntiny").css("background-position","-8px -58px");
		$(this).css("background-position","-34px -58px");
		timehandle = setTimeout("showflash1()",3000);
	});

	//幻灯片左右键功能
	$(".lm1rtfootbtn").click(function(){ 
		clearTimeout(timehandle);
		var idname = $(this).attr("id");
		if(idname == "foremer"){
			if(index == 0){
				index = 3;
			}
			else{
				index--;
			};
		};
		if(idname == "next"){
			index++;
		};
		index = index%4;
		$(".lm1rttop1con img").attr("src",imgsrc[index]);
		$(".btntiny").css("background-position","-8px -58px");
		$("#index" + index).css("background-position","-34px -58px");
		timehandle = setTimeout("showflash1()",3000);
	});

	//搜索框获得焦点
	$(".inputstyle").focus(function(){
		if ($(this).val()==this.name) {
			$(this).val("");
		};
	});

	//搜索框失去焦点
	$(".inputstyle").blur(function(){
		if($(this).val()==""){
			$(this).val(function(){
				return this.name;
			});
		};
	});

	//搜索区对应的下拉选择框
	$("#top2midleft").click(function(){
		var openstate = $(this).attr("openstate");
		if(openstate == "false"){
			$(".downlist1").show();
			$(this).attr("openstate","true");
		}
		else{
			$(".downlist1").hide();
			$(this).attr("openstate","false");
		}
	});

	//选择搜索范围
	$(document).on("click",".dolist1li",function(){
		var value = $(this).html();
		$("#top2midleftspan").html(value);
		$(".dolist1li").css("color","#666");
		$(this).css("color","#0093E1");
		$(".downlist1").hide();
		$("#top2midleft").attr("openstate","false");
	});

   //选择导航栏要显示下拉内容
	$(".top3titleli").hover(function(){
		var idname = $(this).attr("id");
		if(idname == "singerhome"){
			$(".top3down1").show();
			$(".top3down2").hide();
		}
		if(idname == "specialhome"){
			$(".top3down2").show();
			$(".top3down1").hide();
		}
	},function(){});

	//选项卡1
	$(".lm1ltrtli1").click(function(){
		var val = $(this).html();
		var tilteid = $(this).attr("tilteid");
		if(val == "最新专辑"){
			return;
		}
		else{
			$(".lm1ltrtli1").removeClass("lm1ltrtli1js");
			$(this).addClass("lm1ltrtli1js");
			$(".musicpiclist").hide();
			$("#" + tilteid).show();
		}
	});

	//选项卡2
	$(".lm3titlespan2").click(function(){
		var val = $(this).html();
		var tabid = $(this).attr("tabid");
		if(val == "更多"){
			return;
		}
		else{
			$(this).parent().find(".lm3titlespan2").removeClass("lm3titlespan2js");
			$(this).addClass("lm3titlespan2js");
			$(this).parent().parent().parent().find(".lm3musiclist").hide();
			$(this).parent().parent().parent().find(".lm3rtimgs").hide();
			$("#" + tabid).show();
		}
	});


	//倒立的手风琴
	$(".lm4rtlicon").hover(function(){		
		$(".lm4rtlicon").show();
		$(this).hide();
		$(".lm4rtlihover").hide();
		$(this).next().show();
	},function(){});



	
});

var index = -1;
var imgsrc={};
var timehandle;
imgsrc[0] = "css/images/0f00050AJYaQMPph7K6ay0.jpg";
imgsrc[1] = "css/images/0f000AqZ4KohBaks4OcXg0.jpg";
imgsrc[2] = "css/images/0f000nYQaOnMiiR-jPksl6.jpg";
imgsrc[3] = "css/images/0f000QNxZAKF3UYh4Qu4c0.jpg";

function showflash1(){
	index++;
	index = index%4;
	$(".lm1rttop1con img").attr("src",imgsrc[index]);
	$(".btntiny").css("background-position","-8px -58px");
	$("#index" + index).css("background-position","-34px -58px");
	timehandle = setTimeout("showflash1()",2000);
}