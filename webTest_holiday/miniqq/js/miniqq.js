$(function(){

	$(".middownli").click(function(){
		$(".middownli").css({"background-color":"","box-shadow":""});
		$(".midcontentup").hide();
		var imgsrc10="css/images/tab_icon_conversation.png";
		var imgsrc11="css/images/tab_icon_conversation_selected.png";
		var imgsrc20="css/images/tab_icon_contact.png";
		var imgsrc21="css/images/tab_icon_contact_selected.png";
		var imgsrc30="css/images/tab_icon_plugin.png";
		var imgsrc31="css/images/tab_icon_plugin_selected.png";
		var imgsrc40="css/images/tab_icon_setup.png";
		var imgsrc41="css/images/tab_icon_setup_selected.png";
		$("#huihuaspan4").find(".middownlipic img").attr("src",imgsrc10);
		$("#lianxirenspan4").find(".middownlipic img").attr("src",imgsrc20);
		$("#faxianspan4").find(".middownlipic img").attr("src",imgsrc30);
		$("#shezhispan4").find(".middownlipic img").attr("src",imgsrc40);
		$(this).css({"background-color":"#333","box-shadow":"#111 0px 0px 10px 0px inset"});
		var idname=$(this).attr("id");
		if(idname=="huihuaspan4"){
			$(this).find(".middownlipic img").attr("src",imgsrc11);
			$("#huihuacontent").show();
		};
		if(idname=="lianxirenspan4"){
			$(this).find(".middownlipic img").attr("src",imgsrc21);
			$("#lianxirencontent").show();
		};
		if(idname=="faxianspan4"){
			$(this).find(".middownlipic img").attr("src",imgsrc31);
			$("#faxiancontent").show();
		};
		if(idname=="shezhispan4"){
			$(this).find(".middownlipic img").attr("src",imgsrc41);
			$("#shezhicontent").show();
		};
	});
	

	$(".middetailli2li").click(function(){
		$(".middetailspecial2").hide();
		$(".middetailli2li").css("border-bottom","");
		$(".middetailli2lispecial").css({"border-bottom":"2px solid #ccc","color":"#000"});
		$(".middetailli2li").find(".span6").css({"color":""});
		$(this).css("border-bottom","2px solid #0AA7FF");
		$(this).find(".span6").css({"color":"#0AA7FF"});
		var idname=$(this).attr("id");
		if (idname=="haoyouspan61") {
			$("#haoyoucontent").show();
		};
		if (idname=="qunspan62") {
			$("#quncontent").show();
		};
		if (idname=="taolunzuspan63") {
			$("#taolunzucontent").show();
		};
	});


	$(".middetailli2list").click(function(){
		var spanname=$(this).find(".span7").html();
		var imgshowsrc="css/images/open_arrow_fire.png";
		var imghidesrc="css/images/open_arrow.png";
		if (spanname=="我的好友") {
			var openstate=$("#haoyoulist").attr("openstate");
			if (openstate=="false") {
				$("#haoyoulist").show();
				$("#haoyoulist").attr("openstate","true");
				$(this).find(".middetailli2pic1 img").attr("src",imgshowsrc);
			}else{
				$("#haoyoulist").hide();
				$("#haoyoulist").attr("openstate","false");
				$(this).find(".middetailli2pic1 img").attr("src",imghidesrc);
			};
		};   
		if (spanname=="朋友") {
			var openstate=$("#pengyoulist").attr("openstate");
			if (openstate=="false") {
				$("#pengyoulist").show();
				$("#pengyoulist").attr("openstate","true");
				$(this).find(".middetailli2pic1 img").attr("src",imgshowsrc);
			}else{
				$("#pengyoulist").hide();
				$("#pengyoulist").attr("openstate","false");
				$(this).find(".middetailli2pic1 img").attr("src",imghidesrc);
			};
		};
		if (spanname=="家人") {
			var openstate=$("#jiarenlist").attr("openstate");
			if (openstate=="false") {
				$("#jiarenlist").show();
				$("#jiarenlist").attr("openstate","true");
				$(this).find(".middetailli2pic1 img").attr("src",imgshowsrc);
			}else{
				$("#jiarenlist").hide();
				$("#jiarenlist").attr("openstate","false");
				$(this).find(".middetailli2pic1 img").attr("src",imghidesrc);
			};
		};
		if (spanname=="同学") {
			var openstate=$("#tongxuelist").attr("openstate");
			if (openstate=="false") {
				$("#tongxuelist").show();
				$("#tongxuelist").attr("openstate","true");
				$(this).find(".middetailli2pic1 img").attr("src",imgshowsrc);
			}else{
				$("#tongxuelist").hide();
				$("#tongxuelist").attr("openstate","false");
				$(this).find(".middetailli2pic1 img").attr("src",imghidesrc);
			};
		};
	});
	

});