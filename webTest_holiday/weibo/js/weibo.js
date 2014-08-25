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
			html += '					<li class="critili" linkid="transquanti">';
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
	}).hover(function(){
		var clickstate = $(this).attr("clickstate");
		if(clickstate == "false"){
			$(this).css("border-bottom","2px solid #999");
		}
	},function(){
		$(this).css("border-bottom","");
	});

	//点赞，转播，评论
	$(document).on("click",".critili",function(){

		var linkid = $(this).attr("linkid");

		//点赞
		var val = $(this).find(".zanshu").html();
		if(linkid == "likedegree"){
			var cishu = $(this).find(".zanshu").attr("cishu");
			if(cishu == "0"){
				val = parseFloat(val) + 1;
				$(this).find(".zanshu").html(val);
				$(this).find(".zanshu").attr("cishu","1");
				$(this).attr("title","已赞过")
			}
			else{
				return;
			}
		}
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