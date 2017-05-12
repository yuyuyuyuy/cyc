$(function(){
	$("#container #header #header_right span").click(function(){
		$(this).addClass("listbg").siblings().removeClass("listbg")
	})
	$("#container #header #header_right #bottom .fankedarenright .qixianet").hover(function(){
		$(".qixianethover").show();
		$(".qixianet .netlist").show()
	},function(){
		$(".qixianet .netlist").slideUp()
		$(".qixianethover").delay(500 ).hide(0);
	})
	/*灰色导航条的隐藏菜单*/
	$("#container #navbar2 .listmenu .listmenuli1 .lista span").hover(function(){
		$("#container #navbar2 .listmenu .listmenuli1 .netlist").show();
	},function(){
		$("#container #navbar2 .listmenu .listmenuli1 .netlist").hide();
	})
	$("#container #navbar2 .listmenu .listmenuli2 .lista span").hover(function(){
		$("#container #navbar2 .listmenu .listmenuli2").find(".netlist").show();
	},function(){
		$("#container #navbar2 .listmenu .listmenuli2").find(".netlist").hide();
	})
	/*轮播区域开始*/
	var i=0;
	var timer=setInterval(autorun,1500);
	function autorun(){
       i++;
     if(i==7){
     	i=0;
     }
	   $("#lunbo img").eq(i).fadeIn().siblings("img").hide();
	   $("#imglunbo #lunbo .cur li").eq(i).addClass("bgc").siblings("li").removeClass("bgc");
	}
	/*自动轮播结束*/
	$("#imglunbo #lunbo .cur li").hover(function(){
		var num=$(this).index()
		$("#imglunbo #lunbo .cur li").eq(num).addClass("bgc").siblings("li").removeClass("bgc");
		$("#lunbo img").eq(num).fadeIn().siblings("img").hide();
		clearInterval(timer)
	},function(){
	    timer=setInterval(autorun,1500);
	//鼠标移出效果有bug;
     })
		/*轮播区域结束*/
		
		/*无缝滚动区域开始*/
		var ul_width=0;
		$("#imglunbo #lunbo .wufeng_right ul.gundong1 li").each(function(){
		 ul_width= ul_width+$(this).width();
		})
		$("#imglunbo #lunbo .wufeng_right ul").css("width",ul_width+"px")
		$("#imglunbo #lunbo .wufeng_right ul.gundong1").css("left",ul_width+"px")
		
		var change_left = 710 - ul_width*2;
	    function wufeng(obj){
		setInterval(function(){
			var old_left = obj.position().left;//获得obj现有的left
			var new_left = old_left-1;
			if(new_left<change_left){
				new_left = 710;
			}
			obj.css('left',new_left+'px');
		},20)
	}
	wufeng($("#imglunbo #lunbo .wufeng_right ul.gundong1"));
	wufeng($("#imglunbo #lunbo .wufeng_right ul.gundong2"))

		/*无缝滚动区域结束*/
		
	//最新动态与积分反馈区域动态特效开始
	$(".dongtai .dongtaitexiao .title p").mouseover(function(){
       $(this).css({
       	"color":"#A10000",
       	"background-color":"#fff",
       	"cursor":"pointer"
       }).siblings().css({
       	"color":"#666",
       	"background-color":"#ededed"
       })
	})
	$(".title1").mouseover(function(){
	  $(".title1text").show().siblings().hide()
	})
	$(".title2").mouseover(function(){
	  $(".title2text").show().siblings().hide()
	})
	//最新动态与积分反馈区域动态特效结束
})
