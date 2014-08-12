$(function(){
	showflash();
	/*$("#contentleftpictxt").hover(function(){
		clearTimeout(timehandle);
	},function(){
		timehandle = setTimeout('showflash()',2000);
	});*/
	$(".contentlefttxtli2").click(function(){
		$(".contentlefttxtli2").show();
		$(".contentlefttxtlipic").hide();
	    currentid = $(this).parent().attr("sortid");
		$(this).hide();
		$(this).next().show();
	});
});

var currentid=1;
var timehandle;

function showflash(){
	$("#contentleftpic2").hide();
	$("#contentleftpic3").hide();
	$("#contentleftpic4").hide();
	$("#contentleftpic1").hide();
	$(".contentlefttxtli2").show();
	$(".contentlefttxtlipic").hide();
	$("#li"+currentid).hide();
	$("#"+currentid).show();
	var curimg = $("#contentleftpic" + currentid).attr("imgurl");
	$("#contentleftpic" + currentid).css("background-image","url("+curimg+")");
	$("#contentleftpic" + currentid).show();
	
	currentid++;
	if (currentid>4) { 
		currentid = currentid%4;
	}
	timehandle = setTimeout('showflash()',2000);
}