$(function(){

	$("#menudownhover").hover(function(){
		$("#menudown").show();
	},function(){
		$("#menudown").show();
	});

	$("#menudown").hover(function(){
		
	},function(){
		$(this).hide();
	});


	$(".top2inputclick").click(function(){
		$(".top2inputclick").css({"border-top":"1px solid #000","border-left":"1px solid #000"});
		$(".top2input2pic").show();
		$(".top2input2").val("");
	});

	$(".top2input2pic").click(function(){
		$(".top2inputclick").css({"border-top":"1px solid #666","border-left":"1px solid #666"});
		$(".top2input2pic").hide();
		$(".top2input2").val("邮箱/手机号/其他用户名");
	});
});