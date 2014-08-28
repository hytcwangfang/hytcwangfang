$(function(){

	window.showflashi= 0;
	window.i=0;
	showflash();
	showpic();

	$(".topmenulia").hover(function(){
		var eleid=$(this).attr("id");
		for(var i=1; i<14; i++){
			if (eleid=='t'+ i ) {
				var eleclass='c' + i;
				$(this).addClass(eleclass);
			}
		}

	},function(){
		var eleid=$(this).attr("id");
		for(var i=1; i<14; i++){
			if (eleid=='t'+ i ) {
				var eleclass='c' + i;
				$(this).removeClass(eleclass);
			}
		}
	});


	$(".top4leftliaanddown").hover(function(){
		$(".top4leftlia").show();
		$(this).find(".top4leftlia").hide();
		$(".top4leftlidown").hide();
		$(this).find(".top4leftlidown").show();
	},function(){
	});

	$(".top4midleftinner").hover(function(){
		$(this).find(".top4midleftinnerinner").show();
	},function(){
		$(this).find(".top4midleftinnerinner").hide();
	});

	$(".top4midrightlispanlink").hover(function(){
		$(this).css("color","rgb(255,102,0)");
	},function(){
		$(this).css("color","");
	});


	$(".top6left1up1pic").hover(function(){
		$(this).find(".top6left1up1picinner").show();
	},function(){
		$(this).find(".top6left1up1picinner").hide();
	});

	$(".top6left1up3pic").hover(function(){
		$(this).find(".top6left1up3picinner").show();
	},function(){
		$(this).find(".top6left1up3picinner").hide();
	});

	$(".top6left2up1pic").hover(function(){
		$(this).find(".top6left2up1picinner").show();
	},function(){
		$(this).find(".top6left2up1picinner").hide();
	});

	$(".top6left2up2pic").hover(function(){
		$(this).find(".top6left2up2picinner").show();
	},function(){
		$(this).find(".top6left2up2picinner").hide();
	});

	$(".top6left3up1pic").hover(function(){
		$(this).find(".top6left3up1picinner").show();
	},function(){
		$(this).find(".top6left3up1picinner").hide();
	});

	$(".top6left3up2pic").hover(function(){
		$(this).find(".top6left4up1picinner").show();
	},function(){
		$(this).find(".top6left4up1picinner").hide();
	});


	$(".top6left4up1pic").hover(function(){
		$(this).find(".top6left4up1picinner").show();
	},function(){
		$(this).find(".top6left4up1picinner").hide();
	});


	$(".top6left1up2left").hover(function(){
		$(this).find(".top6left1up2leftflash").show();
	},function(){
		$(this).find(".top6left1up2leftflash").hide();
	});





	$(".top7left1down").hover(function(){
		$(this).find(".top7left1downinner").show();
	},function(){
		$(this).find(".top7left1downinner").hide();
	});

	$(".top7left2pic").hover(function(){
		$(this).find(".top7left2picinner").show();
	},function(){
		$(this).find(".top7left2picinner").hide();
	});

	$(".top7left3uppic").hover(function(){
		$(this).find(".top7left3uppicinner").show();
	},function(){
		$(this).find(".top7left3uppicinner").hide();
	});

	$(".top7left3downleftpic").hover(function(){
		$(this).find(".top7left3downleftpicinner").show();
	},function(){
		$(this).find(".top7left3downleftpicinner").hide();
	});

	$(".top7left3downrightpic1").hover(function(){
		$(this).find(".top7left3downrightpic1inner").show();
	},function(){
		$(this).find(".top7left3downrightpic1inner").hide();
	});

	$(".top7left3downrightpic2").hover(function(){
		$(this).find(".top7left3downrightpic2inner").show();
	},function(){
		$(this).find(".top7left3downrightpic2inner").hide();
	});

	$(".top7left4up").hover(function(){
		$(this).find(".top7left4upinner").show();
	},function(){
		$(this).find(".top7left4upinner").hide();
	});

	$(".top7left4dwn").hover(function(){
		$(this).find(".top7left4dwninner").show();
	},function(){
		$(this).find(".top7left4dwninner").hide();
	});

	$(".top7left5up").hover(function(){
		$(this).find(".top7left5upinner").show();
	},function(){
		$(this).find(".top7left5upinner").hide();
	});

	$(".top7left5down").hover(function(){
		$(this).find(".top7left5downinner").show();
	},function(){
		$(this).find(".top7left5downinner").hide();
	});







	$(".topli").hover(function(){
		$(this).hide();
		$(this).next().show();
	},function(){
		$(this).show();
		$(this).next().hide();
	});

	$(".toplihover").hover(function(){
		$(this).parent().find(".topli").hide();
		$(this).show();
	},function(){
		$(this).hide();
		$(this).parent().find(".topli").show();
	});

});


function showflash(){
	showflashi = showflashi + 1;
	if(showflashi > 5){
		showflashi = showflashi % 5 ;
	}
	var html1 = '<img src="css/images/bae91488-a7cc-4ae4-a6bb-da1a1ecef2ce.jpg"><a href="" class="top3rightupspan0">明星离婚纠纷多 巨额财产是关键</a>';
	var html2 = '<img src="css/images/b5a25975-9035-4428-875b-2366d61edaaf.jpg"><a href="" class="top3rightupspan0">配饰OR腕表？这些表让女人更闪耀</a>';
	var html3 = '<img src="css/images/7dcb0c95-b07a-4123-9f18-19e6396ffcdc.jpg"><a href="" class="top3rightupspan0">土豪金席卷时尚圈 高贵珠宝也吃这一套</a>';
	var html4 = '<img src="css/images/6e735dce-3430-4319-8595-35980ae557b5.jpg"><a href="" class="top3rightupspan0">抓住秋天的尾巴 寻一份滋补美食地图</a>';
	
	if(showflashi==1)
		{$("#top3left").html(html1);}
	if(showflashi==2)
		{$("#top3left").html(html2);}
	if(showflashi==3)
		{$("#top3left").html(html3);}
	if(showflashi==4)
		{$("#top3left").html(html4);}
	setTimeout('showflash()',1000);
}

function showpic(){
	var elepic={};
	elepic[0]="css/images/imgs/3b45822f-55c8-41f9-8b68-32e54b632452.jpg";
	elepic[1]="css/images/imgs/706bf338-716a-4d62-934e-634cb7cbcb48.jpg";
	elepic[2]="css/images/imgs/db56e26d-092c-478c-8e8c-1f8b7a263ee4.jpg";
	elepic[3]="css/images/imgs/1fef0dd9-1650-46ba-a751-37f032f8897e.jpg";
	elepic[4]="css/images/imgs/29cb0bc0-d551-41a1-8ec5-c26f7a01094f.jpg";
	elepic[5]="css/images/imgs/3a17fed8-1e8a-443f-9c08-ebed6c7b6349.jpg";
	elepic[6]="css/images/imgs/06916824-fe7d-48c3-85f5-3837249e1cd2.jpg";
	elepic[7]="css/images/imgs/4ca2436a-fe91-4543-a481-351ce7f5f0d7.jpg";
	$(".top5pic1 img").attr("src",elepic[(i+0)%8]); 
	$(".top5pic2 img").attr("src",elepic[(i+1)%8]); 
	$(".top5pic3 img").attr("src",elepic[(i+2)%8]); 
	$(".top5pic4 img").attr("src",elepic[(i+3)%8]); 
	$(".top5pic5 img").attr("src",elepic[(i+4)%8]); 
	$(".top5pic6 img").attr("src",elepic[(i+5)%8]); 
	$(".top5pic7 img").attr("src",elepic[(i+6)%8]); 
	$(".top5pic8 img").attr("src",elepic[(i+7)%8]); 
	i=i+1;
	setTimeout('showpic()',1000);
}