$(function(){
	$(".menuA").hover(function(){
		$(this).find(".menutitle").css({
			"background-color":"#000",
			"border-radius":"4px 4px 0 0",
			"color":"#fff"});
		$(this).find(".menutitle").next().show();
	},function(){
	$(this).find(".menutitle").css({
		"background-color":"",
		"border-radius":"",
		"color":""
	});
	$(this).find(".menutitle").next().hide();
	});

	$(".menulist li").hover(function(){
		$(this).css("background-color","#dddddd");
	},function(){
		$(this).css("background-color","");
	});
});