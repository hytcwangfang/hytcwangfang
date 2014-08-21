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
});