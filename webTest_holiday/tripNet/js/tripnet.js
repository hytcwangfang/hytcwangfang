$(function(){

	setPositon();

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

		
	$(".top3ltli").hover(function(){
		$(this).css("background-image","url('css/images/banner_bg2.gif')");
		$(this).find(".top3ltlirtspan").css("color","#E40077");
	},function(){
		$(this).css("background-image","");
		$(this).find(".top3ltlirtspan").css("color","");
		return false;
	}).click(function(){
		$(".top3ltli").removeClass("top3ltlispec");
		$(this).addClass("top3ltlispec");
	});

	$("#showlisthover").hover(function(){
		$(".showtimelist").show();
	},function(){
		$(".showtimelist").hide();
	});


	$(".rttitle1span").hover(function(){
		var linkid = $(this).attr("linkid");
		$(".rtcontent").hide();
		$(this).addClass("color1");
		$(".rttitle1span").removeClass("color1");
		$("#" + linkid).show();
	},function(){});


	//显示右侧小幻灯片
	showflash1();

	//幻灯片圆点click事件
	$(".circleli").hover(function(){
		clearTimeout(timehandle);
		index = $(this).attr("index");
		$(".t3rttp11 img").attr("src",imgsrc[index]);
		$(".circleli").css("opacity","0.4");
		$(this).css("opacity","1");
		timehandle = setTimeout("showflash1()",3000);
	},function(){});


	$(".picli").hover(function(){
		$(this).find(".hoverspan").show();
	},function(){
		$(this).find(".hoverspan").hide();
	});

	showflash2();

	$(".picfn").hover(function(){
		clearTimeout(timehandle2);
		var btnstyle = $(this).attr("btnstyle");
		var btnstyle = $(this).attr("btnstyle");
		if(btnstyle == "forepic"){
			$(this).css("background-image","url('css/images/magazine_left2.gif')");
		};
		if(btnstyle == "nextpic"){
			$(this).css("background-image","url('css/images/magazine_right2.gif')");
		};

		$(".picfn").click(function(){
			var btnstyle = $(this).attr("btnstyle");
			if(btnstyle == "forepic"){
				curindex = curindex - 5;
				if(curindex < 0){
					curindex = curindex + 10;
				}
			};
			if(btnstyle == "nextpic"){
				curindex = curindex + 5;
			};
			$("#curindex0").attr("src",img[curindex%10]);
			$("#curindex1").attr("src",img[(curindex + 1)%10]);
			$("#curindex2").attr("src",img[(curindex + 2)%10]);
			$("#curindex3").attr("src",img[(curindex + 3)%10]);
			$("#curindex4").attr("src",img[(curindex + 4)%10]);
		});

	},function(){
		$(this).css("background-image","");
		timehandle2 = setTimeout("showflash2()",2000);
	});

	showflash3();

});


var index = -1;
var imgsrc = {};
var timehandle;
imgsrc[0] = "css/images/20130927015357196.jpg";
imgsrc[1] = "css/images/20130927022747970.jpg";
imgsrc[2] = "css/images/20130910103900296.jpg";
imgsrc[3] = "css/images/20130808120821871.jpg";

function showflash1(){
	$(".t3rttp11").css({"width":"0px"});
	index++;
	index = index%4;
	$(".t3rttp11 img").attr("src",imgsrc[index]);
	$(".circleli").css("opacity","0.4");
	$("#index" + index).css("opacity","1");
	$(".t3rttp11").animate({"width":"862px"});
	timehandle = setTimeout("showflash1()",3000);
}



var curindex = -1;
var img = {};
var timehandle2;
img[0] = "css/images/imgs/thumb_97_133_20130119050541440.jpg";
img[1] = "css/images/imgs/thumb_97_133_20130802112105580.jpg";
img[2] = "css/images/imgs/thumb_97_133_20130311114229687.jpg";
img[3] = "css/images/imgs/thumb_97_133_20130410111202413.jpg";
img[4] = "css/images/imgs/thumb_97_133_20130508051823778.jpg";
img[5] = "css/images/imgs/thumb_97_133_20130221024952520.jpg";
img[6] = "css/images/imgs/thumb_97_133_20130604034714657.jpg";
img[7] = "css/images/imgs/thumb_97_133_20130802114637658.jpg";
img[8] = "css/images/imgs/thumb_97_133_20130902034629622.jpg";
img[9] = "css/images/imgs/thumb_97_133_20130927022459633.jpg";

function showflash2(){
	curindex++;
	$("#curindex0").attr("src",img[curindex%10]);
	$("#curindex1").attr("src",img[(curindex + 1)%10]);
	$("#curindex2").attr("src",img[(curindex + 2)%10]);
	$("#curindex3").attr("src",img[(curindex + 3)%10]);
	$("#curindex4").attr("src",img[(curindex + 4)%10]);
	timehandle2 = setTimeout("showflash2()",5000);
}

var curindex3 = -1;
var imgthr = {};
var timehandle3;
imgthr[0] = "css/images/imgs/20130411043130531.jpg";
imgthr[1] = "css/images/imgs/20130605122408975.jpg";
imgthr[2] = "css/images/imgs/20130607023417664.jpg";
imgthr[3] = "css/images/imgs/20130607120916612.jpg";

function showflash3(){
	curindex3++;
	curindex3 = curindex3%4;
	$(".largepicarea img").attr("src",imgthr[curindex3]);
	timehandle3 = setTimeout("showflash3()",3000);
}



//页面滚动时
function setPositon(){

	$(window).scroll(function(){
		if ($(window).scrollTop()>=170) {
			$("#top3left").css({"position": "fixed", "top": "0px", "left": "178px"});
		}
		else{
			$("#top3left").css({"position": "static"});
		}
	});
	
}