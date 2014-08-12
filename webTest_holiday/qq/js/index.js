$(function(){

	//今日热播
	$(".lm1leftactive").hover(function(){
		var idname = $(this).attr("id");
		if (idname=="lm1leftjinri") {
			$(this).css({
				"text-decoration":"underline"
			});
			$(".lm1leftcontent1").css({
				"display":"block"
			});
			$(".lm1leftcontent2").css({
				"display":"none"
			});
		}
	},function(){
		$(this).css({
			"text-decoration":"",
			"font-weight":"",
			"border-left":"",
			"border-right":"",
			"border-top":"",
			"background-color":""
		});
	});

	//要闻
	$(".lm1leftactive").hover(function(){
		var idname = $(this).attr("id");
		if (idname=="lm1rightyaowen"){
			$(this).css({
			"text-decoration":"underline"
			});
			$("#lmrightcontent1").css({
				"display":"block"
			});
			$("#lmrightcontent2").css({
				"display":"none"
			});
		}
	},function(){
		$(this).css({
			"text-decoration":""
		});
		
	});

	//影视剧
	$(".lm1leftnormal").hover(function(){
		var idname = $(this).attr("id");
		if (idname=="lm1leftyingshi") {
			$(this).css({
				"text-decoration":"underline",
				"font-weight":"bold",
				"border-left":"1px solid rgb(189, 215, 242)",
				"border-right":"1px solid rgb(189, 215, 242)",
				"border-top":"2px solid rgb(69, 143, 206)",
				"background-color":"#fff"
			});
			$(".lm1leftcontent2").css({
				"display":"block"
			});
			$(".lm1leftcontent1").css({
				"display":"none"
			});
		}
	},function(){
		$(this).css({
			"text-decoration":"",
			"font-weight":"",
			"border-left":"",
			"border-right":"",
			"border-top":"",
			"background-color":""
		});
	});

	//江苏新闻选项框
	$(".lm1leftnormal").hover(function(){
		var idname = $(this).attr("id");
		if (idname=="lm1rightjiangsu") {
			$(this).css({
				"text-decoration":"underline",
				"font-weight":"bold",
				"border-left":"1px solid rgb(189, 215, 242)",
				"border-right":"1px solid rgb(189, 215, 242)",
				"border-top":"2px solid rgb(69, 143, 206)",
				"background-color":"#fff"
			});
			$("#lmrightcontent2").css({
				"display":"block"
			});
			$("#lmrightcontent1").css({
				"display":"none"
			});
		}
	},function(){
		$(this).css({
				"text-decoration":"",
				"font-weight":"",
				"border-left":"",
				"border-right":"",
				"border-top":"",
			"background-color":""
		});
	});

	//培训/考试选项框
	$(".lm7leftuptxt1").hover(function(){
		$(this).css({
			"text-decoration":"underline"
		});
		$(".lm7leftdowncontent1").css({
			"display":"block"
		});
		$(".lm7leftdowncontent2").css({
			"display":"none"
		});
	},function(){
		$(this).css({
			"text-decoration":"",
			"font-weight":"",
			"border-left":"",
			"border-right":"",
			"border-top":"",
			"background-color":""
		});
	});
	$(".lm7leftuptxt2").hover(function(){
		$(this).css({
			"text-decoration":"underline",
			"font-weight":"bold",
			"border-left":"1px solid rgb(189, 215, 242)",
			"border-right":"1px solid rgb(189, 215, 242)",
			"border-top":"2px solid rgb(69, 143, 206)",
			"background-color":"#fff"
		});
		$(".lm7leftdowncontent2").css({
			"display":"block"
		});
		$(".lm7leftdowncontent1").css({
			"display":"none"
		});
	},function(){
		$(this).css({
			"text-decoration":"",
			"font-weight":"",
			"border-left":"",
			"border-right":"",
			"border-top":"",
			"background-color":""
		});
	});

	
	
});