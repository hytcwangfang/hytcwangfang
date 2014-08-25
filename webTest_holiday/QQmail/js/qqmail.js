$(function(){
	$(".lefttopli").click(function(){
		var identitylink = $(this).attr("identitylink");
		$(".contentright").hide();
		$("#" + identitylink).show();
	});

	$(".k1a5span1").click(function(){
		var linkdetail = $(this).attr("linkdetail");
		$(".k1a5span1").removeClass("k1a5span2");
		$(this).addClass("k1a5span2");
		$(".k1a5rightcontent").hide();
		$("#" + linkdetail).show();
	});

	$(".funcli").click(function(){
		var linkclass = $(this).attr("linkclass");
		var openstate = $(this).attr("openstate");
		if (openstate == "false") {
			$("." + linkclass).show();
			$(this).attr("openstate","true");
		}else{
			$("." + linkclass).hide();
			$(this).attr("openstate","false");
		}
	});
});