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
	
	$(".setupup2").click(function(){
		var idname=$(this).attr("id");
		if(idname=="aboutqq"){
			var openstate=$(this).attr("openstate");
			if(openstate=="false"){
				$(".setup2downlist").show();
				$(this).attr("openstate","true");
				$(this).find(".setupup2littleimg img").attr("src",imgshowsrc);
			}else{
				$(".setup2downlist").hide();
				$(this).attr("openstate","false");
				$(this).find(".setupup2littleimg img").attr("src",imghidesrc);
			};
		};
	});

	$("#setupdown").click(function(){
		var openstate=$(this).attr("openstate");
		if(openstate=="false"){
			$(".setuplittlepicli2down").show();
			$(this).attr("openstate","true");
		}else{
			$(".setuplittlepicli2down").hide();
			$(this).attr("openstate","false");
		}
		
	});


	$(".setuppiclistli").hover(function(){
		$(this).css("background-color","#7FD4FF");
	},function(){
		$(this).css("background-color","");
	});

	$(".setuppiclistli").click(function(){
		var idindex = $(this).attr("idindex");
		idindex = idindex * 18;
		$(".setuplittlepicli1").css("background-position","-" + idindex + "px 0px");
		$(".setuplittlepicli2down").hide();
		$(".setuplittlepicli2down").attr("openstate","false");
	});

	$(".middetailli").click(function(){
		var divtop = Math.random() * 25 + 75;
		var divleft = Math.random() * 200 + 10;
		var friendid = $(this).attr("friendid");
		var chatareaid = "chatarea" + friendid;
		var indeedname = $(this).find(".midindeedname").html();
		var openstate = $(this).attr("openstate");
		$(".rightall").css("z-index","15");
		if(openstate=="false"){
			var html=$("#allright").html();
			html += '<div class="rightall" id=' + chatareaid + '>';
			html += '	<div class="righttittle">';
			html += '		<div class="rightdownbtn">';
			html += '			<div class="rightdownbtnpic">';
			html += '				<img src="css/images/pannel-arrow-down.png">';
			html += '			</div>';
			html += '		</div>';
			html += '		<span class="span07">' + indeedname + '</span>';
			html += '		<div class="rightclosebtn" friendid = "friend' + friendid + '" chatareaid = ' + chatareaid + '>';
			html += '			<span class="span06">关闭</span>';
			html += '		</div>';
			html += '	</div>';
			html += '	<div class="rightcontent"></div>';
			html += '	<div class="rightfoot">';
			html += '		<div class="rightfootsmile" chatareaid = ' + chatareaid + '  openstate="false">';
			html += '			<img src="css/images/chat_bottombar_icon_face.png">';
			html += '		</div>';
			html += '		<div class="inputarea">';
			html += '			<input class="rightfootinput">';
			html += '		</div>';
			html += '		<div class="rightfootsend"><span>发送</span></div>';
			html += '	</div>';
			/*表情区域*/
			html += '	<div class="feelingarea">';
			html += '		<ul id="mood1" class="feelingimglist">';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg1 position20" title="微笑"></li>';
			html += '					<li class="feelingimg1 position21" title="撇嘴"></li>';
			html += '					<li class="feelingimg1 position22" title="色"></li>';
			html += '					<li class="feelingimg1 position23" title="发呆"></li>';
			html += '					<li class="feelingimg1 position24" title="得意"></li>';
			html += '					<li class="feelingimg1 position25" title="流泪"></li>';
			html += '					<li class="feelingimg1 position26" title="害羞"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg1 position27" title="微笑"></li>';
			html += '					<li class="feelingimg1 position28" title="微笑"></li>';
			html += '					<li class="feelingimg1 position29" title="微笑"></li>';
			html += '					<li class="feelingimg1 position30" title="微笑"></li>';
			html += '					<li class="feelingimg1 position31" title="微笑"></li>';
			html += '					<li class="feelingimg1 position32" title="微笑"></li>';
			html += '					<li class="feelingimg1 position33" title="微笑"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg1 position34" title="闭嘴"></li>';
			html += '					<li class="feelingimg1 position35" title="微笑"></li>';
			html += '					<li class="feelingimg1 position36" title="微笑"></li>';
			html += '					<li class="feelingimg1 position37" title="微笑"></li>';
			html += '					<li class="feelingimg1 position38" title="微笑"></li>';
			html += '					<li class="feelingimg1 position39" title="微笑"></li>';
			html += '					<li class="feelingimg1 position40" title="微笑"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '		</ul>';
			html += '		<ul id="mood2" class="feelingimglist">';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg2 position20" title="微笑"></li>';
			html += '					<li class="feelingimg2 position21" title="微笑"></li>';
			html += '					<li class="feelingimg2 position22" title="微笑"></li>';
			html += '					<li class="feelingimg2 position23" title="微笑"></li>';
			html += '					<li class="feelingimg2 position24" title="微笑"></li>';
			html += '					<li class="feelingimg2 position25" title="微笑"></li>';
			html += '					<li class="feelingimg2 position26" title="微笑"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg2 position27" title="微笑"></li>';
			html += '					<li class="feelingimg2 position28" title="微笑"></li>';
			html += '					<li class="feelingimg2 position29" title="微笑"></li>';
			html += '					<li class="feelingimg2 position30" title="微笑"></li>';
			html += '					<li class="feelingimg2 position31" title="微笑"></li>';
			html += '					<li class="feelingimg2 position32" title="微笑"></li>';
			html += '					<li class="feelingimg2 position33" title="微笑"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg2 position34" title="微笑"></li>';
			html += '					<li class="feelingimg2 position35" title="微笑"></li>';
			html += '					<li class="feelingimg2 position36" title="微笑"></li>';
			html += '					<li class="feelingimg2 position37" title="微笑"></li>';
			html += '					<li class="feelingimg2 position38" title="微笑"></li>';
			html += '					<li class="feelingimg2 position39" title="微笑"></li>';
			html += '					<li class="feelingimg2 position40" title="微笑"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '		</ul>';
			html += '		<ul id="mood3" class="feelingimglist">';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg3 position20" title="微笑"></li>';
			html += '					<li class="feelingimg3 position21" title="微笑"></li>';
			html += '					<li class="feelingimg3 position22" title="微笑"></li>';
			html += '					<li class="feelingimg3 position23" title="微笑"></li>';
			html += '					<li class="feelingimg3 position24" title="微笑"></li>';
			html += '					<li class="feelingimg3 position25" title="微笑"></li>';
			html += '					<li class="feelingimg3 position26" title="微笑"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg3 position27" title="微笑"></li>';
			html += '					<li class="feelingimg3 position28" title="微笑"></li>';
			html += '					<li class="feelingimg3 position29" title="微笑"></li>';
			html += '					<li class="feelingimg3 position30" title="微笑"></li>';
			html += '					<li class="feelingimg3 position31" title="微笑"></li>';
			html += '					<li class="feelingimg3 position32" title="微笑"></li>';
			html += '					<li class="feelingimg3 position33" title="微笑"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg3 position34" title="微笑"></li>';
			html += '					<li class="feelingimg3 position35" title="微笑"></li>';
			html += '					<li class="feelingimg3 position36" title="微笑"></li>';
			html += '					<li class="feelingimg3 position37" title="微笑"></li>';
			html += '					<li class="feelingimg3 position38" title="微笑"></li>';
			html += '					<li class="feelingimg3 position39" title="微笑"></li>';
			html += '					<li class="feelingimg3 position40" title="微笑"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '		</ul>';
			html += '		<ul id="mood4" class="feelingimglist">';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg4 position20" title="微笑"></li>';
			html += '					<li class="feelingimg4 position21" title="微笑"></li>';
			html += '					<li class="feelingimg4 position22" title="微笑"></li>';
			html += '					<li class="feelingimg4 position23" title="微笑"></li>';
			html += '					<li class="feelingimg4 position24" title="微笑"></li>';
			html += '					<li class="feelingimg4 position25" title="微笑"></li>';
			html += '					<li class="feelingimg4 position26" title="微笑"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg4 position27" title="微笑"></li>';
			html += '					<li class="feelingimg4 position28" title="微笑"></li>';
			html += '					<li class="feelingimg4 position29" title="微笑"></li>';
			html += '					<li class="feelingimg4 position30" title="微笑"></li>';
			html += '					<li class="feelingimg4 position31" title="微笑"></li>';
			html += '					<li class="feelingimg4 position32" title="微笑"></li>';
			html += '					<li class="feelingimg4 position33" title="微笑"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg4 position34" title="微笑"></li>';
			html += '					<li class="feelingimg4 position35" title="微笑"></li>';
			html += '					<li class="feelingimg4 position36" title="微笑"></li>';
			html += '					<li class="feelingimg4 position37" title="微笑"></li>';
			html += ' 					<li class="feelingimg4 position38" title="微笑"></li>';
			html += ' 					<li class="feelingimg4 position39" title="微笑"></li>';
			html += ' 					<li class="feelingimg4 position40" title="微笑"></li>';
			html += ' 				</ul>';
			html += ' 			</li>';
			html += ' 		</ul>';
			html += '		<ul id="mood5" class="feelingimglist">';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg5 position20" title="微笑"></li>';
			html += '					<li class="feelingimg5 position21" title="微笑"></li>';
			html += '					<li class="feelingimg5 position22" title="微笑"></li>';
			html += '					<li class="feelingimg5 position23" title="微笑"></li>';
			html += '					<li class="feelingimg5 position24" title="微笑"></li>';
			html += '					<li class="feelingimg5 position25" title="微笑"></li>';
			html += '					<li class="feelingimg5 position26" title="微笑"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg5 position27" title="微笑"></li>';
			html += '					<li class="feelingimg5 position28" title="微笑"></li>';
			html += '					<li class="feelingimg5 position29" title="微笑"></li>';
			html += '					<li class="feelingimg5 position30" title="微笑"></li>';
			html += '					<li class="feelingimg5 position31" title="微笑"></li>';
			html += '					<li class="feelingimg5 position32" title="微笑"></li>';
			html += '					<li class="feelingimg5 position33" title="微笑"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg5 position34" title="微笑"></li>';
			html += '					<li class="feelingimg5 position35" title="微笑"></li>';
			html += '					<li class="feelingimg5 position36" title="微笑"></li>';
			html += '					<li class="feelingimg5 position37" title="微笑"></li>';
			html += '					<li class="feelingimg5 position38" title="微笑"></li>';
			html += '					<li class="feelingimg5 position39" title="微笑"></li>';
			html += '					<li class="feelingimg5 position40" title="微笑"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '		</ul>';
			html += '		<ul id="mood6" class="feelingimglist">';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg6 position20" title="微笑"></li>';
			html += '					<li class="feelingimg6 position21" title="微笑"></li>';
			html += '					<li class="feelingimg6 position22" title="微笑"></li>';
			html += '					<li class="feelingimg6 position23" title="微笑"></li>';
			html += '					<li class="feelingimg6 position24" title="微笑"></li>';
			html += '					<li class="feelingimg6 position25" title="微笑"></li>';
			html += '					<li class="feelingimg6 position26" title="微笑"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg6 position27" title="微笑"></li>';
			html += '					<li class="feelingimg6 position28" title="微笑"></li>';
			html += '					<li class="feelingimg6 position29" title="微笑"></li>';
			html += '					<li class="feelingimg6 position30" title="微笑"></li>';
			html += '					<li class="feelingimg6 position31" title="微笑"></li>';
			html += '					<li class="feelingimg6 position32" title="微笑"></li>';
			html += '					<li class="feelingimg6 position33" title="微笑"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg6 position34" title="微笑"></li>';
			html += '					<li class="feelingimg6 position35" title="微笑"></li>';
			html += '					<li class="feelingimg6 position36" title="微笑"></li>';
			html += '					<li class="feelingimg6 position37" title="微笑"></li>';
			html += '					<li class="feelingimg6 position38" title="微笑"></li>';
			html += '					<li class="feelingimg6 position39" title="微笑"></li>';
			html += '					<li class="feelingimg6 position40" title="微笑"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '		</ul>';
			html += '		<div class="feelingnextchoose">';
			html += '			<ul class="littlecircleimglist">';
			html += '				<li moodid="mood1" class="littlecircleimgli">';
			html += '					<div class="circle circlespecial"></div>';
			html += '				</li>';
			html += '				<li moodid="mood2"  class="littlecircleimgli">';
			html += '					<div class="circle"></div>';
			html += '				</li>';
			html += '				<li moodid="mood3" class="littlecircleimgli">';
			html += '					<div class="circle"></div>';
			html += '				</li>';
			html += '				<li moodid="mood4" class="littlecircleimgli">';
			html += '					<div class="circle"></div>';
			html += '				</li>';
			html += '				<li moodid="mood5" class="littlecircleimgli">';
			html += '					<div class="circle"></div>';
			html += '				</li>';
			html += '				<li moodid="mood6" class="littlecircleimgli">';
			html += '					<div class="circle"></div>';
			html += '				</li>';
			html += '			</ul>';
			html += '		</div>';
			html += '	</div>';
			html += '</div>';

			$("#allright").html(html);

			$("#" + chatareaid).css({
				"top" : divtop + "px",
				"left" : divleft + "px",
				"z-index" : "20"
			});
			$(this).attr("openstate","true");
		}else{
			//将已有的置顶
			$(".rightall").css("z-index","15");
			$("#" + chatareaid).css("z-index","20");
		};	

		//关闭按钮
		$(".rightclosebtn").click(function(){
			var friendid = $(this).attr("friendid");
			var chatareaid = $(this).attr("chatareaid");
			/*alert(indeedname);*/
			$("#" + chatareaid).remove();
			$("#" + friendid).attr("openstate","false");
		});

		//将选中的置顶
		$(".rightall").click(function(){
			$(".rightall").css("z-index","15");
			$(this).css("z-index","20");
		});
		
		//表情按钮
		$(".rightfootsmile").click(function(){
			var openstate = $(this).attr("openstate");
			var chatareaid = $(this).attr("chatareaid");
			if(openstate == "false"){
				$("#" + chatareaid).find(".rightcontent").css("height","98px");
				$("#" + chatareaid).find(".feelingarea").show();
				$(this).attr("openstate","true");
			}else{
				$("#" + chatareaid).find(".rightcontent").css("height","400px");
				$("#" + chatareaid).find(".feelingarea").hide();
				$(this).attr("openstate","false");
			};
		});
	
		//圆点选择表情图
		$(".littlecircleimgli").click(function(){
			var moodid=$(this).attr("moodid");
			$(".circle").css("background","none repeat scroll 0% 0% #808080");
			$(this).find(".circle").css("background","none repeat scroll 0% 0% #000");
			$(".feelingimglist").hide();
			$("#" + moodid).show();
		});
	});
	
	
	
	


});

var imgshowsrc="css/images/open_arrow_fire.png";
var imghidesrc="css/images/open_arrow.png";