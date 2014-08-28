$(function(){

	//幻灯片
	showflashadver();

	//广播
	$(".broadcastpic").click(function(){
		var castval = $(".textareastyle").val();
		var ct = new Date();
		var month = ct.getMonth();
		month = month + 1;
		var day = ct.getDate();
		var hour = ct.getHours();
		var minute = ct.getMinutes();
		if(castval == ""){
			return;
		}else{
			var html = '';
			html += '<ul class="detailarea">';
			html += '	<li class="detailareali">';
			html += '		<div class="detailleftheadpic">';
			html += '			<img src="css/images/100.jpg">';
			html += '		</div>';
			html += '		<div class="detailrighttext">';
			html += '			<div class="detailtitle">';
			html += '				<span class="span03">温迪</span>';
			html += '				<ul class="biaoshilist">';
			html += '					<li class="biaoshili"></li>';
			html += '					<li class="biaoshili"></li>';
			html += '				</ul>';
			html += '			</div>';
			html += '			<div class="detailcontent">';
			html += '				<span class="span05">' + castval + '</span>';
			html += '			</div>';
			html += '			<div class="critiarea">';
			html += '				<a href="" class="critileft">';
			html += '					<div class="pic1"></div>';
			html += '					<span class="critispan1">' + month + '月' + day + '日 ' + hour + ':' + minute + '</span>';
			html += '				</a>';
			html += '				<ul class="critiright">';
			html += '					<li class="critili" linkid="likedegree" title="赞">';
			html += '						<div class="critilileftpic"></div>';
			html += '						<span class="spancriti">(</span>';
			html += '						<span cishu="0" class="spancriti zanshu">0</span>';
			html += '						<span class="spancriti">)</span>';
			html += '						<span class="spanstyle1">|</span>';
			html += '					</li>';
			html += '					<li class="critili"  linkid="transquanti" shuoshuoid="1" openstate="false" showstate="true">';
			html += '						<span class="span1501">转播(</span>';
			html += '						<span class="span1501 zhuanbo">0</span>';
			html += '						<span class="span1501">)</span>';
			html += '						<span class="spanstyle1">|</span>';
			html += '					</li>';
			html += '					<li class="critili">';
			html += '						<span class="span1501">评论(</span>';
			html += '						<span class="span1501 pinglun">2219</span>';
			html += '						<span class="span1501">)</span>';
			html += '						<span class="spanstyle1">|</span>';
			html += '					</li>';
			html += '					<li class="critili">';
			html += '						<span class="span1501">收藏</span>';
			html += '					</li>';
			html += '				</ul>';
			html += '			</div>';
			html += '		</div>';
			html += '	</li>';
			html += '</ul>';
			var html2 = $("#broadcontent").html();
			html = html + html2;
			$("#broadcontent").html(html);
			$(".textareastyle").val("");
		}
	});
 
 	//hover 幻灯片
	$(".choosemath").hover(function(){
		$(".span9").css("background-color","#7C7C7C");
		$(this).find(".span9").css("background-color","#000");
		var i = $(this).find(".span9").html();
		flashindex = i - 1;
		$(".flashpics img").attr("src",imgsrc[flashindex%3]);
		clearTimeout(timehandle);
	},function(){
		$(this).find(".span9").css("background-color","");
		timehandle = setTimeout('showflashadver()',1000);
	});


	//选项卡（全部广播，微圈，微博精编）
	$(".span10").click(function(){
		var linkid = $(this).attr("linkid");
		$(".span10").removeClass("span10special");
		$(".span10").attr("clickstate","false");
		$(this).attr("clickstate","true");
		$(this).addClass("span10special");
		$(".broadlist").hide();
		$("#" + linkid).show();
		/*$(this).hover();*/
	});
	
	$(".span10").hover(function(){
		var clickstate = $(this).attr("clickstate");
		if(clickstate == "false"){
			$(this).css("border-bottom","2px solid #999");
		}

		/*$(".span10").click(function(){
			var linkid = $(this).attr("linkid");
			$(".span10").removeClass("span10special");
			$(".span10").attr("clickstate","false");
			$(this).attr("clickstate","true");
			$(this).addClass("span10special");
			$(".broadlist").hide();
			$("#" + linkid).show();
			$(this).hover().stop();
		});
		$(this).hover().start();*/

	},function(){
		$(this).css("border-bottom","");
	});

	//点赞，转播，评论
	//点赞
	$(document).on("click",".zanclass",function(){
				
		var val = $(this).find(".zanshu").html();

		var cishu = $(this).attr("cishu");
		if(cishu == "0"){
			val = parseFloat(val) + 1;
			$(this).find(".zanshu").html(val);
			$(this).attr("cishu","1");
			$(this).attr("title","已赞过");
			$(this).find(".critilileftpic").css("background-position","-306px -114px");
		}
		else{
			val = parseFloat(val) - 1;
			$(this).find(".zanshu").html(val);
			$(this).attr("cishu","0");
			$(this).attr("title","赞");
			$(this).find(".critilileftpic").css("background-position","-290px -114px");
		}
		
	});

	//转播
	$(document).on("click",".zhuanboclass",function(){

		var idindex = $(this).attr("shuoshuoid");
		var shuoshuoid = "shuoshuo" + idindex;
		var openstate = $(this).attr("openstate");
		var content = $("#" + shuoshuoid).find(".detailcontent").html();
		var zhuanboid = "zhuanbo" + shuoshuoid;
		var showstate = $(this).attr("showstate");
		if(openstate == "false"){

			$(this).attr("openstate","true");
			$(this).attr("showstate","true");

			var html = $("#" + shuoshuoid).find(".detailrighttext").html();
			html += '<div id=' + zhuanboid + ' class="zhuanboarea">';
			html += '	<div class="zhbotop">';
			html += '		<span class="zhbospan1">转播本条微博</span>';
			html += '		<a href="" class="zhbospan1 clearspan" style="color:#006A92;">[清空转播理由]</a>';
			html += '	</div>';
			html += '	<textarea class="zhboinput" value=' + content + '></textarea>';
			html += '	<ul class="zhbomood">';
			html += '		<li class="zhboface" style="background-position: -120px -33px;"></li>';
			html += '		<li class="zhboface" style="background-position: -144px -33px;"></li>';
			html += '		<li class="zhboface" style="background-position: -172px -33px;"></li>';
			html += '		<li class="zhboface" style="background-position: 0px -33px;"></li>';
			html += '		<li class="zhboface" style="background-position: -102px -184px;"></li>';
			html += '		<li class="checkarea">';
			html += '			<input type="checkbox" class="zhbocheck">';
			html += '			<span>转播到空间</span>';
			html += '		</li>';
			html += '		<li class="zhbobtnarea">';
			html += '			<input type="button" value="转播" class="zhubobtn">';
			html += '			<span class="zhbospan2">还能输入28字</span>';
			html += '		</li>';
			html += '	</ul>';
			html += '</div>';
			$("#" + shuoshuoid).find(".detailrighttext").html(html);
			

			//alert($(this).attr("class"));
		}
		else if(openstate == "true"){

				 if(showstate == "true"){
						/*alert("1");*/
						$("#" + zhuanboid).hide();
						$(this).attr("showstate","false");
					}
					else{
						$("#" + zhuanboid).show();
						$(this).attr("showstate","true");
					}
			}
		
		$(".clearspan").click(function(){
			$(this).parent().parent().find(".zhboinput").val(" ");
		});	


	});

});

var flashindex = 0;
var timehandle;
var imgsrc={};
imgsrc[0]="css/images/wm_D_20140818151228.jpg";
imgsrc[1]="css/images/sgnb_wSWZL_201408150222.jpg";
imgsrc[2]="css/images/wm_D_20140720073243.jpg";

function showflashadver(){
	
	$(".flashpics img").attr("src",imgsrc[flashindex%3]);
	$(".span9").css("background-color","#7C7C7C");
	var curid = (flashindex%3) + 1;
	$("#" + curid).css("background-color","#000");
	flashindex++;
	timehandle = setTimeout('showflashadver()',1000);
}