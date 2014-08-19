$(function(){
	showflashadver();

	$(".choosemath").hover(function(){
		$(".span9").css("background-color","#7C7C7C");
		$(this).find(".span9").css("background-color","#000");
		var i = $(this).find(".span9").html();
		flashindex = i - 1;
		$(".flashpics img").attr("src",imgsrc[flashindex%3]);
		clearTimeout(timehandle);
	},function(){
		$(this).find(".span9").css("background-color","");
		timehandle = setTimeout('showflashadver()',1000);
		/*showflashadver();*/
	});



	$(".span10").click(function(){
		$(".span10").removeClass("span10special");
		$(".span10").attr("clickstate","false");
		$(this).attr("clickstate","true");
		$(this).addClass("span10special");
	});

	$(".span10").hover(function(){
		/*$(".span10").click(function(){
		$(".span10").removeClass("span10special");
		$(".span10").attr("clickstate","false");
		$(this).attr("clickstate","true");
		$(this).addClass("span10special");
	});*/
		var clickstate = $(this).attr("clickstate");
		if(clickstate == "false"){
			$(this).css("border-bottom","2px solid #999");
		}
	},function(){
		$(this).css("border-bottom","");
	});
});

var flashindex = 0;
var timehandle;
var imgsrc={};
imgsrc[0]="css/images/wm_D_20140818151228.jpg";
imgsrc[1]="css/images/sgnb_wSWZL_201408150222.jpg";
imgsrc[2]="css/images/wm_D_20140720073243.jpg";

function showflashadver(){
	
	$(".flashpics img").attr("src",imgsrc[flashindex%3]);
	$(".span9").css("background-color","#7C7C7C");
	var curid = (flashindex%3) + 1;
	$("#" + curid).css("background-color","#000");
	flashindex++;
	timehandle = setTimeout('showflashadver()',1000);
}