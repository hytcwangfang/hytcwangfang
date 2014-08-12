$(function(){
	//setInterval('showdigtime()',1000);
	showdigtime();
});

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
	var hour=ct.getHours();
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