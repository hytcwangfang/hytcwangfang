$(function(){

	//手风琴
	$(".top7li").hover(function(){
		$(".top7hover").hide();
		$(this).next().show();
	});

	//搜索框获得焦点
	$(".logininput").focus(function(){
		if ($(this).val()==this.name) {
			$(this).val("");
		};
	});

	//搜索框失去焦点
	$(".logininput").blur(function(){
		if($(this).val()==""){
			$(this).val(function(){
				return this.name;
			});
		};
	});
});