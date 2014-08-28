$(function(){

	//更换背景
	$("#fore").click(function(){
		index--;
		if(index < 0)
		{
			index = 6;
		}
		showbackground();
	});
	$("#next").click(function(){
		index++;
		showbackground();
	});

	//会话，联系人，发现，设置选项
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
	
	//好友，群，讨论组选项
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

	//选择要显示的好友分类下拉框
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
	
	//设置里的关于QQ下拉框
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

	//显示登录状态下拉框
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

	//选择登录状态
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


	//显示对话框
	$(".middetailli").click(function(){

		var id = $(this).attr("id");
		showdialog(id);


		//箭头下拉框
		$(".rightdownbtn").click(function(){
			var chatareaid = $(this).attr("chatareaid");
			var openstate = $(this).attr("openstate");
			if(openstate=="false"){
				$("#" + chatareaid).find(".directiondown").show();
				$(this).attr("openstate","true");
			}
			else{
				$("#" + chatareaid).find(".directiondown").hide();
				$(this).attr("openstate","false");
			}
		});
	
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
		
		//大笑脸表情按钮
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


		//发送按钮
		$(".rightfootsend").click(function(){
			var chatareaid = $(this).attr("chatareaid");
			var html = $("#" + chatareaid).find(".rightcontent").html();
			var val = $("#" + chatareaid).find(".rightfootinput").val();
			if(val != ""){
				html += '<div class="textarea">';
				html += '	<div class="textmasterright">';
				html += '		<img src="css/images/getface_009.jpg">';
				html += '	</div>';
				html += '	<div class="textcontentleft">';
				html += '		<div class="textmastername">';
				html += '			<span class="span08">温迪</span>';
				html += '		</div>';
				html += '		<div class="textdetail">';
				html += '			<span class="span09">' + val + '</span>';
				html += '		</div>';
				html += '	</div>';
				html += '</div>';
				$("#" + chatareaid).find(".rightcontent").html(html);
				$("#" + chatareaid).find(".rightfootinput").val("");
			}
		});
	
		//圆点选择表情图
		$(".littlecircleimgli").click(function(){
			var chatareaid = $(this).parent().parent().attr("id");
			var moodid=$(this).attr("moodid");
			$(this).parent().find(".circle").css("background","none repeat scroll 0% 0% #808080");
			$(this).find(".circle").css("background","none repeat scroll 0% 0% #000");
			$("#" + chatareaid).find(".feelingimglist").hide();
			$("#" + chatareaid).find("#" + moodid).show();
		});

		//选中表情后
		$(".feelingimgsli li").click(function(){
			var title = $(this).attr("title");
			var chatareaid = $(this).parent().parent().parent().attr("chatareaid");
			if(title != "delKey"){
				title = '[' + title + ']';
				var val = $("#" + chatareaid).find(".rightfootinput").val();
				val += title;
				$("#" + chatareaid).find(".rightfootinput").val(val);
			}
		});

		//窗口在整个body中移动
		$(".rightall").draggable({ 
			handle: ".righttittle",
			containment:"body",
			scroll:false
		});
	});


	//窗口最小化
	$(document).on("click",".rightclosebtnmini",function(){

		var miniid = $(this).attr("miniid");
		var friendid = $(this).attr("friendid");
		var chatareaid = $(this).attr("chatareaid");
		var indeedname = $(this).attr("indeedname");
		$("#" + chatareaid).hide();
		$(".mininumarea").show();
		var html = $(".mininumarea").html();
		html += '<li class="mini" id="mini' + miniid + '" friendid = ' + friendid + ' chatareaid = ' + chatareaid + '>';
		html += '	<span class="span010">' + indeedname + '</span>';
		html += '</li>';
		$(".mininumarea").html(html);
		$("#" + friendid).attr("minimun","true");
		$("#" + friendid).attr("openstate","true");

	
		//打开迷你窗口
		$(".mini").click(function(){
			var chatareaid = $(this).attr("chatareaid");
		 	var friendid = $(this).attr("friendid");
			$(this).remove();
		 	$("#" + friendid).attr("minimun","false");
		 	$("#" + chatareaid).show();
		});
	});

	
	
});

var imgshowsrc="css/images/open_arrow_fire.png";
var imghidesrc="css/images/open_arrow.png";
var index=0;

function showbackground(){
	var images={};
	images[0] = "url('css/images/1.jpg')";
	images[1] = "url('css/images/background_01.jpg')";
	images[2] = "url('css/images/background_02.jpg')";
	images[3] = "url('css/images/background_03.jpg')";
	images[4] = "url('css/images/background_04.jpg')";
	images[5] = "url('css/images/background_05.jpg')";
	images[6] = "url('css/images/background_06.jpg')";
	
	$("body").css("background-image", images[index%7]);
}


function showdialog(idname){
		var divtop = Math.random() * 25 + 75;
		var divleft = Math.random() * 200 + 10;
		var friendid = $("#" + idname).attr("friendid");
		var chatareaid = "chatarea" + friendid;
		var indeedname = $("#" + idname).find(".midindeedname").html();
		var openstate = $("#" + idname).attr("openstate");
		var minimun = $("#" + idname).attr("minimun");
		$(".rightall").css("z-index","15");
		if(openstate=="false"){
			var html = $("#allright").html();
			html += '<div class="rightall" id=' + chatareaid + '>';
			html += '	<div class="righttittle">';
			html += '		<div class="rightdownbtn" chatareaid = ' + chatareaid + ' openstate="false">';
			html += '			<div class="rightdownbtnpic">';
			html += '				<img src="css/images/pannel-arrow-down.png">';
			html += '			</div>';
			html += '		</div>';
			html += '		<span class="span07">' + indeedname + '</span>';
			html += '		<div class="rightclosebtnmini" miniid=' + friendid + ' friendid = "friend' + friendid + '" chatareaid = ' + chatareaid + ' indeedname = ' + indeedname + '>';
			html += '			<span class="span06">最小化</span>';
			html += '		</div>';
			html += '		<div class="rightclosebtn" friendid = "friend' + friendid + '" chatareaid = ' + chatareaid + '>';
			html += '			<span class="span06">关闭</span>';
			html += '		</div>';
			html += '		<div class="directiondown">';
			html += '			<ul>';
			html += '				<li class="directionli">';
			html += '					<div class="directionlipic position10"></div>';
			html += '					<span class="span001">群成员</span>';
			html += '				</li>';
			html += '				<li class="directionli">';
			html += '					<div class="directionlipic position42"></div>';
			html += '					<span class="span001">群资料</span>';
			html += '				</li>';
			html += '				<li class="directionli">';
			html += '					<div class="directionlipic position43"></div>';
			html += '					<span class="span001">聊天记录</span>';
			html += '				</li>';
			html += '			</ul>';
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
			html += '		<div class="rightfootsend" chatareaid = ' + chatareaid + '><span>发送</span></div>';
			html += '	</div>';
			/*表情区域*/
			html += '	<div class="feelingarea">';
			html += '		<ul id="mood1" class="feelingimglist" chatareaid = ' + chatareaid + '>';
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
			html += '					<li class="feelingimg1 position27" title="闭嘴"></li>';
			html += '					<li class="feelingimg1 position28" title="睡"></li>';
			html += '					<li class="feelingimg1 position29" title="大哭"></li>';
			html += '					<li class="feelingimg1 position30" title="尴尬"></li>';
			html += '					<li class="feelingimg1 position31" title="发怒"></li>';
			html += '					<li class="feelingimg1 position32" title="调皮"></li>';
			html += '					<li class="feelingimg1 position33" title="呲牙"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg1 position34" title="惊讶"></li>';
			html += '					<li class="feelingimg1 position35" title="难过"></li>';
			html += '					<li class="feelingimg1 position36" title="酷"></li>';
			html += '					<li class="feelingimg1 position37" title="冷汗"></li>';
			html += '					<li class="feelingimg1 position38" title="抓狂"></li>';
			html += '					<li class="feelingimg1 position39" title="吐"></li>';
			html += '					<li class="feelingimg1 position40" title="delKey"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '		</ul>';
			html += '		<ul id="mood2" class="feelingimglist" chatareaid = ' + chatareaid + '>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg2 position20" title="偷笑"></li>';
			html += '					<li class="feelingimg2 position21" title="可爱"></li>';
			html += '					<li class="feelingimg2 position22" title="白眼"></li>';
			html += '					<li class="feelingimg2 position23" title="傲慢"></li>';
			html += '					<li class="feelingimg2 position24" title="饥饿"></li>';
			html += '					<li class="feelingimg2 position25" title="困"></li>';
			html += '					<li class="feelingimg2 position26" title="惊恐"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg2 position27" title="流汗"></li>';
			html += '					<li class="feelingimg2 position28" title="憨笑"></li>';
			html += '					<li class="feelingimg2 position29" title="大兵"></li>';
			html += '					<li class="feelingimg2 position30" title="奋斗"></li>';
			html += '					<li class="feelingimg2 position31" title="咒骂"></li>';
			html += '					<li class="feelingimg2 position32" title="疑问"></li>';
			html += '					<li class="feelingimg2 position33" title="嘘"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg2 position34" title="晕"></li>';
			html += '					<li class="feelingimg2 position35" title="折磨"></li>';
			html += '					<li class="feelingimg2 position36" title="衰"></li>';
			html += '					<li class="feelingimg2 position37" title="骷髅"></li>';
			html += '					<li class="feelingimg2 position38" title="敲打"></li>';
			html += '					<li class="feelingimg2 position39" title="再见"></li>';
			html += '					<li class="feelingimg2 position40" title="delKey"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '		</ul>';
			html += '		<ul id="mood3" class="feelingimglist" chatareaid = ' + chatareaid + '>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg3 position20" title="擦汗"></li>';
			html += '					<li class="feelingimg3 position21" title="抠鼻"></li>';
			html += '					<li class="feelingimg3 position22" title="鼓掌"></li>';
			html += '					<li class="feelingimg3 position23" title="糗大了"></li>';
			html += '					<li class="feelingimg3 position24" title="坏笑"></li>';
			html += '					<li class="feelingimg3 position25" title="左哼哼"></li>';
			html += '					<li class="feelingimg3 position26" title="右哼哼"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg3 position27" title="哈欠"></li>';
			html += '					<li class="feelingimg3 position28" title="鄙视"></li>';
			html += '					<li class="feelingimg3 position29" title="委屈"></li>';
			html += '					<li class="feelingimg3 position30" title="快哭了"></li>';
			html += '					<li class="feelingimg3 position31" title="阴险"></li>';
			html += '					<li class="feelingimg3 position32" title="亲亲"></li>';
			html += '					<li class="feelingimg3 position33" title="吓"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg3 position34" title="可怜"></li>';
			html += '					<li class="feelingimg3 position35" title="菜刀"></li>';
			html += '					<li class="feelingimg3 position36" title="西瓜"></li>';
			html += '					<li class="feelingimg3 position37" title="啤酒"></li>';
			html += '					<li class="feelingimg3 position38" title="篮球"></li>';
			html += '					<li class="feelingimg3 position39" title="乒乓"></li>';
			html += '					<li class="feelingimg3 position40" title="delKey"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '		</ul>';
			html += '		<ul id="mood4" class="feelingimglist" chatareaid = ' + chatareaid + '>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg4 position20" title="咖啡"></li>';
			html += '					<li class="feelingimg4 position21" title="饭"></li>';
			html += '					<li class="feelingimg4 position22" title="猪头"></li>';
			html += '					<li class="feelingimg4 position23" title="玫瑰"></li>';
			html += '					<li class="feelingimg4 position24" title="凋谢"></li>';
			html += '					<li class="feelingimg4 position25" title="示爱"></li>';
			html += '					<li class="feelingimg4 position26" title="爱心"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg4 position27" title="心碎"></li>';
			html += '					<li class="feelingimg4 position28" title="蛋糕"></li>';
			html += '					<li class="feelingimg4 position29" title="闪电"></li>';
			html += '					<li class="feelingimg4 position30" title="炸弹"></li>';
			html += '					<li class="feelingimg4 position31" title="刀"></li>';
			html += '					<li class="feelingimg4 position32" title="足球"></li>';
			html += '					<li class="feelingimg4 position33" title="瓢虫"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg4 position34" title="便便"></li>';
			html += '					<li class="feelingimg4 position35" title="月亮"></li>';
			html += '					<li class="feelingimg4 position36" title="太阳"></li>';
			html += '					<li class="feelingimg4 position37" title="礼物"></li>';
			html += ' 					<li class="feelingimg4 position38" title="拥抱"></li>';
			html += ' 					<li class="feelingimg4 position39" title="强"></li>';
			html += ' 					<li class="feelingimg4 position40" title="delKey"></li>';
			html += ' 				</ul>';
			html += ' 			</li>';
			html += ' 		</ul>';
			html += '		<ul id="mood5" class="feelingimglist" chatareaid = ' + chatareaid + '>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg5 position20" title="弱"></li>';
			html += '					<li class="feelingimg5 position21" title="握手"></li>';
			html += '					<li class="feelingimg5 position22" title="胜利"></li>';
			html += '					<li class="feelingimg5 position23" title="抱拳"></li>';
			html += '					<li class="feelingimg5 position24" title="勾引"></li>';
			html += '					<li class="feelingimg5 position25" title="拳头"></li>';
			html += '					<li class="feelingimg5 position26" title="差劲"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg5 position27" title="爱你"></li>';
			html += '					<li class="feelingimg5 position28" title="NO"></li>';
			html += '					<li class="feelingimg5 position29" title="OK"></li>';
			html += '					<li class="feelingimg5 position30" title="爱情"></li>';
			html += '					<li class="feelingimg5 position31" title="飞吻"></li>';
			html += '					<li class="feelingimg5 position32" title="跳跳"></li>';
			html += '					<li class="feelingimg5 position33" title="发抖"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg5 position34" title="怄火"></li>';
			html += '					<li class="feelingimg5 position35" title="转圈"></li>';
			html += '					<li class="feelingimg5 position36" title="磕头"></li>';
			html += '					<li class="feelingimg5 position37" title="回头"></li>';
			html += '					<li class="feelingimg5 position38" title="跳绳"></li>';
			html += '					<li class="feelingimg5 position39" title="挥手"></li>';
			html += '					<li class="feelingimg5 position40" title="delKey"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '		</ul>';
			html += '		<ul id="mood6" class="feelingimglist" chatareaid = ' + chatareaid + '>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg6 position20" title="激动"></li>';
			html += '					<li class="feelingimg6 position21" title="街舞"></li>';
			html += '					<li class="feelingimg6 position22" title="献吻"></li>';
			html += '					<li class="feelingimg6 position23" title="左太极"></li>';
			html += '					<li class="feelingimg6 position24" title="右太极"></li>';
			html += '					<li class="feelingimg6 position25" title="双喜"></li>';
			html += '					<li class="feelingimg6 position26" title="鞭炮"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg6 position27" title="灯笼"></li>';
			html += '					<li class="feelingimg6 position28" title="发财"></li>';
			html += '					<li class="feelingimg6 position29" title="K歌"></li>';
			html += '					<li class="feelingimg6 position30" title="购物"></li>';
			html += '					<li class="feelingimg6 position31" title="邮件"></li>';
			html += '					<li class="feelingimg6 position32" title="帅"></li>';
			html += '					<li class="feelingimg6 position33" title="喝彩"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '			<li>';
			html += '				<ul class="feelingimgsli">';
			html += '					<li class="feelingimg6 position34" title="祈祷"></li>';
			html += '					<li class="feelingimg6 position35" title="爆筋"></li>';
			html += '					<li class="feelingimg6 position36" title="棒棒糖"></li>';
			html += '					<li class="feelingimg6 position37" title="喝奶"></li>';
			html += '					<li class="feelingimg6 position38" title="下面"></li>';
			html += '					<li class="feelingimg6 position39" title="香蕉"></li>';
			html += '					<li class="feelingimg6 position40" title="delKey"></li>';
			html += '				</ul>';
			html += '			</li>';
			html += '		</ul>';
			html += '		<div class="feelingnextchoose" id="' + chatareaid + '">';
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
			$("#" + idname).attr("openstate","true");
		}
		else{
			if( minimun == "true")
			{
				$("#" + chatareaid).show();
				$("#" + idname).attr("minimun","false");
				$("#mini" + friendid).remove();
			}
			else{
				//将已有的置顶
				$(".rightall").css("z-index","15");
				$("#" + chatareaid).css("z-index","20");
			}
		};	
}