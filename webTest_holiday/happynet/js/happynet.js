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

	$(".top2input2pic").click(function(){
		$(".top2inputclick").css({"border-top":"1px solid #ADB6C9","border-left":"1px solid #ADB6C9"});
		$(".top2input2pic").hide();
		$("#inputlogin").val("邮箱/手机号/其他用户名");
	});

	//文本框获得焦点
	$("#inputlogin").focus(function(){
		if ($(this).val()==this.name) {
			$(this).val("");
		};
		$(".top2inputclick").css({"border-top":"1px solid #000","border-left":"1px solid #000"});
		$(".top2input2pic").show();
	});

	$("#inputpwd").focus(function(){
		$(this).attr("type","password");
		if ($(this).val()==this.name) {
			$(this).val("");
		};
		$(this).css({"border-top":"1px solid #000","border-left":"1px solid #000"});
	});

	//文本框失去焦点
	$("#inputlogin").blur(function(){
		$(".top2inputclick").css({"border-top":"1px solid #ADB6C9","border-left":"1px solid #ADB6C9"});
		$(".top2input2pic").hide();
		if($(this).val()==""){
			$(this).val(function(){
				return this.name;
			});
		};
	});

	$("#inputpwd").blur(function(){
		$(this).css({"border-top":"1px solid #ADB6C9","border-left":"1px solid #ADB6C9"});
		if($(this).val()==""){
			$(this).attr("type","text");
			$(this).val(function(){
				return this.name;
			});
		};
	});

	/*$("input").blur(function(){
  		if($(this).val()==){
  			$(this).val(function(){
				return this.name;
			});
  		};
	});*/

	$("#locatearea").click(function(){
		$(".locationdown").show();
	});

	$(".locationname").click(function(){
		var val=$(this).html();
		$(this).parent().parent().parent().parent().find(".top2rightcontent1input").val(val);
	});

	$(".closebtn").click(function(){
		$(".locationdown").hide();
	});

	$(".closebtn").hover(function(){
		$(this).css("background-image","linear-gradient(#B9D6DA,#4C9ED9)");
	},function(){
		$(this).css("background-image","");
	});
});