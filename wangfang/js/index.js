$(function(){
	//setInterval('showdigtime()',1000);
	showdigtime();
	//showbgimg();
});

var index=0;

function showbgimg(){

	var images={};
	//$("body").css({"float":"right","left":"1000px"});
	//$("body").animate({"left":"0px"});
	images[0] = "url('images/u=1168924828,2686978188&fm=56.jpg')";
	images[1] = "url('images/21645313_1370326968840.jpg')";
	images[2] = "url('images/21645967_1370327655544.jpg')";
	images[3] = "url('images/21645967_1370327655553.jpg')";
	images[4] = "url('images/20130713090657_YZhGk.jpeg')";
	images[5] = "url('images/20130714110957_yfPA2.jpeg')";
	images[6] = "url('images/20130714111129_cA4Na.jpeg')";
	images[7] = "url('images/20130714111346_w2SfM.jpeg')";
	images[8] = "url('images/20130714111500_GKteQ.jpeg')";
	images[9] = "url('images/20130714111655_TzSzG.jpeg')";
	images[10] = "url('images/20130714111830_GdiU5.jpeg')";
	images[11] = "url('images/20130714111848_sVaWd.jpeg')";
	images[12] = "url('images/b483b9014a90f603a7565b543b12b31bb151edc5.jpg')";
	images[13] = "url('images/f51249540923dd5427bd607bd309b3de9d8248dc.jpg')";
	images[14] = "url('images/u=1026740529,601810000&fm=56.jpg')";
	images[15] = "url('images/14912197_182902835000_2.jpg')";
	images[16] = "url('images/u=3581477079,232079083&fm=56.jpg')";
	images[17] = "url('images/u=4241458329,2326796741&fm=56.jpg')";
	images[18] = "url('images/yanyazhiting009.jpg')";
	images[19] = "url('images/9668328_082257492000_2.jpg')";
	index++;
	$("#all").css("background-image", images[index%20]);
	
	//$("body").css("float","left");
	//$("body").animate({"width":"0px"});
	
	setTimeout('showbgimg()',2000);}

function showdigtime(){
	var ct = new Date();
	//年
	var year = ct.getYear();
	if(year < 314){
		year = year + 1900;
	}
	var y1 = Math.floor(year/1000);
	var y2 = Math.floor((year%1000) /100);
	var y3 = Math.floor((year%100) / 10);
	var y4= Math.floor(year%10);
	$("#y1").css("background-position","0px -"+ ( y1*30 + 1 ) +"px");
	$("#y2").css("background-position","0px -"+ ( y2*30 + 1 ) +"px");
	$("#y3").css("background-position","0px -"+ ( y3*30 + 1 ) +"px");
	$("#y4").css("background-position","0px -"+ ( y4*30 + 1 ) +"px");
	//月
	var month = ct.getMonth();
	var m1 = Math.floor((month/10)%10);
	var m2 = Math.floor(month%10 + 1);
	$("#m1").css("background-position","0px -"+ ( m1*30 + 1 ) +"px");
	$("#m2").css("background-position","0px -"+ ( m2*30 + 1 ) +"px");
	//日
	var day = ct.getDate();
	var d1 = Math.floor((day/10)%10);
	var d2 = Math.floor(day%10);
	$("#d1").css("background-position","0px -"+ ( d1*30 + 1 ) +"px");
	$("#d2").css("background-position","0px -"+ ( d2*30 + 1 ) +"px");
	//时
	var hour = ct.getHours();
	var h1 = Math.floor((hour/10)%10);
	var h2 = Math.floor(hour%10);
	$("#h1").css("background-position","0px -"+ ( h1*30 + 1 ) +"px");
	$("#h2").css("background-position","0px -"+ ( h2*30 + 1 ) +"px");
	//分
	var minute=ct.getMinutes();
	var mi1 = Math.floor((minute/10)%10);
	var mi2 = Math.floor(minute%10);
	$("#mi1").css("background-position","0px -"+ ( mi1*30 + 1 ) +"px");
	$("#mi2").css("background-position","0px -"+ ( mi2*30 + 1 ) +"px");
	//秒
	var second=ct.getSeconds();
	var s1 = Math.floor((second/10)%10);
	var s2 = Math.floor(second%10);
	$("#s1").css("background-position","0px -"+ ( s1*30 + 1 ) +"px");
	$("#s2").css("background-position","0px -"+ ( s2*30 + 1 ) +"px");
	setTimeout('showdigtime()',1000);
}