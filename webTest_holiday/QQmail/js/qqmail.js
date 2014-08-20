$(function(){
	$(".lefttopli").click(function(){
		var identitylink = $(this).attr("identitylink");
		$(".contentright").hide();
		$("#" + identitylink).show();
	});
});