	var timer;
	var $keywords = $(".keywords")[0]
	var main = document.getElementsByClassName('main')[0]
	var keywordsArr =[false,false,false,false,false];
	var keyworddiv = document.getElementsByClassName("keyworddiv");
	var index;
	var topandleft;

	function customMouse(e){
 		var x = e.clientX;
 		var y = e.clientY;

 		$(".cursorWrapper").css("top",y);
 		$(".cursorWrapper").css("left",x);
 		
 		
 		var elementMouseIsOver = document.elementFromPoint(x,y)
 		// console.log(elementMouseIsOver)
 
 		if(x>=$(".main")[0].getBoundingClientRect().left && x<=$(".main")[0].getBoundingClientRect().right && y<=$(".main")[0].getBoundingClientRect().bottom && y>= $(".main")[0].getBoundingClientRect().top){
 			if($.inArray(elementMouseIsOver,$("p"))!=-1 ||$.inArray(elementMouseIsOver,$(".keyworda"))!=-1)
 			// if($.inArray(elementMouseIsOver,$("p"))!=-1)
 			{
 				$(".cursorWrapper").css({
 				"border":"3px solid var(--color5)",
 				"width":"28px",
 				"height":"28px",
 				"box-shadow":"none",
 				"border-radius": "50%",
 				"transform":"translate(-50%,-50%)"
 				})
 				$(".cursorWrapper .cross").css({
	 				"display": "block",
	 				"transform":"translate(-50%,-50%) rotate(180deg)"
 				})
 			
 				$(".cursorWrapper .cross").addClass("change")
 			}
 			else if($.inArray(elementMouseIsOver,$(".keyinfo").find("*"))!=-1){

 				$(".cursorWrapper").css({
 				"border":"2px solid var(--color5)",
 				"width":"22px",
 				"height":"22px",
 				"box-shadow":"none",
 				"border-radius": "50%",
 				"transform":"translate(-50%,-50%)"
 				})
 				$(".cursorWrapper .cross").css({
	 				"display": "block",
	 				"transform":"translate(-50%,-50%) rotate(180deg)"
 				})
 			
 			}
 			else{
	 			$(".cursorWrapper").css({
	 				"border":"4px solid var(--color8)",
	 				"width":"18px",
	 				"height":"18px",
	 				"box-shadow":"none",
	 				"border-radius": "0",
	 				"transform":"translate(-50%,-50%) rotate(180deg)"
 				});
 				$(".cursorWrapper .cross").css({
	 				"display": "none",
	 				"transform":"translate(-50%,-50%)"
 				})
 				$(".cursorWrapper .cross").removeClass("change")

	 		}
 		}else if(x<=$(".main")[0].getBoundingClientRect().left || x>=$(".main")[0].getBoundingClientRect().right || y>=$(".main")[0].getBoundingClientRect().bottom || y<= $(".main")[0].getBoundingClientRect().top){
 			if($.inArray(elementMouseIsOver,$("p"))!=-1 )
 			{
 				$(".cursorWrapper").css({
	 				"border":"3px solid var(--color5)",
	 				"width":"28px",
	 				"height":"28px",
	 				"box-shadow":"none",
	 				"border-radius": "50%",
	 				"transform":"translate(-50%,-50%)"
 				})
 				$(".cursorWrapper .cross").css({
	 				"display": "block",
	 				"transform":"translate(-50%,-50%) rotate(180deg)"
 				})
 				$(".cursorWrapper .cross").addClass("change")
 			}else{
 				$(".cursorWrapper").css({
 				"border":"5px solid #fff",
 				"width":"10px",
 				"height":"10px",
 				"box-shadow":"none",
 				"border-radius": "50%",
 				"transform":"translate(-50%,-50%) rotate(180deg)"

 				});
 				$(".cursorWrapper .cross").css({
	 				"display": "none",
	 				"transform":"translate(-50%,-50%)"
 				})
 				$(".cursorWrapper .cross").removeClass("change")
 			}
 			
 		}
 	}

 	document.addEventListener("mousemove",customMouse);
 	

	$keywords.onmousemove = function(e){
		// console.log(oldindex)

		keywordsArr = [false,false,false,false,false];
		var x = e.clientX;
		var y = e.clientY;

		var dx = $keywords.offsetLeft+$keywords.offsetWidth/2+$(".main")[0].getBoundingClientRect().left;
		var dy = $keywords.offsetTop+$keywords.offsetTop/2+$(".main")[0].getBoundingClientRect().top;
		// console.log(mi)
		var cx = (x-dx)*0.01;
		var cy = (y-dy)*0.01;


		if(x >= (dx-$keywords.offsetWidth/2) && x <= (dx+$keywords.offsetWidth/2) && y >= (dy-$keywords.offsetHeight/2) && y <= (dy+$keywords.offsetHeight/2)){
			var movekeydiv =  $(".keyworddiv").not($(".keyworddiv")[index]);
			for(var i=0 ; i < movekeydiv.length ; i++){
				movekeydiv[i].style.transition = "all 1s linear"	
				movekeydiv[i].style.transform = "translate3d("+Math.random()*cx*25+"px,"+Math.random()*cy*10+"px,"+cx*10+"px) rotateY("+cx*5+"deg)"
			}
		}
		
	}
	var oldh3,oldh5,olddiv,oldnum,oldindex;
	var flagclickArr = [false,false,false,false,false];
	var isCloseIn = false;
	var isKeyinfoOut = true;
$(".keywords").on("click",".keyworda",function(){
	// alert("sdfsdfsdf")
		console.log("bottomopacity = "+$(".keyinfodiv-bottom").css("opacity"));
		console.log("keyinfodisplay = "+$(".keyinfo").css("display"));
		var nownum= $(this).attr("class").replace(/[^0-9]/ig,"");
		var nowindex = nownum-1;
		var nowdiv = ".keyinfodiv-"+nownum;
		var nowh3 = nowdiv+" h3";
		var nowh5 = nowdiv+" h5";
		console.log(oldindex+1)
		var tl = new TimelineMax()
		//oldindex存在 表示已经有打开的窗口
		if(oldindex+1){
			//newindex=oldindx=true 表示是同一个
			if(flagclickArr[nowindex]){

			}
			//newindex = false 关着 , oldindex = true 开着
			else if(!flagclickArr[nowindex]){
				
				tl
					.fromTo(oldh3,0.5,{opacity:1,y:0},{opacity:0,y:10,ease:CustomEase.create("nowh3", ".68,0,.32,.99")})
					.fromTo(oldh5,0.5,{opacity:1,y:0},{opacity:0,y:10,delay:0.1},"-=0.4")
					.fromTo(nowh3,1,{opacity:0,y:20},{opacity:1,y:0,ease:Power4.ease})
				 	.fromTo(nowh5,1,{opacity:0,y:20},{opacity:1,y:0,delay:0.1},"-=0.9");
				
				//在数组中声明：当前点击的窗口已打开
				flagclickArr[nowindex] = true;
				//在数组中声明：之前打开的窗口已关闭
				flagclickArr[oldindex] = false;
				//将当前点击的窗口设为oldindex用于之后的比较
				oldindex = nowindex;
				olddiv = nowdiv;
				oldh3 = nowh3;
				oldh5 = nowh5;
				oldnum = nownum;
				
			}
	    }
	    //oldindex不存在 表示当前没有打开的窗口
		else if(!oldindex){
			$(".keyinfo").css({
				"display":"block"
			});
			$(".keyinfodiv-bottom").css({
				"animation":"keyinfo_unfold 5s linear both",
				"background-color": "#fff",
				"opacity":"1"
				// "scaleY":"1"
			});
			$("#close").css({
				"display":"inline-block",
				"opacity":0
			});
			//打开当前点击的窗口
			tl
				.fromTo(nowh3,1,{opacity:0,y:20},{opacity:1,y:0,ease:CustomEase.create("nowh3", ".68,0,.32,.99")})
				.fromTo(nowh5,1,{opacity:0,y:20},{opacity:1,y:0,delay:0.1})
				.set("#close",{opacity:1,y:0,onComplete:function(){
					$("#close").css({"background-image": "url('images/close_in.svg')","animation-name":"play_in","animation-duration":"2000ms"});
					setTimeout(function(){isCloseIn = true},2000)

				}},"-=0.5")
			//在数组中声明：当前点击的窗口已打开
			flagclickArr[nowindex] = true;	
			//并将当前点击的窗口设为oldindex用于之后的比较
			oldindex = nowindex;
			olddiv = nowdiv;
			oldh3 = nowh3;
			oldh5 = nowh5;
			oldnum = nownum;
			console.log("sdfsdf")
			
		}


	})



	$("#close").on("mouseenter" , function(){
		// if()
		$("#close").css({"background-image": "url('images/close_out.svg')","animation-name":"play_out","animation-duration":"1000ms"});
		// console.log("enter!")
	})
	$("#close").on("mouseleave" , function(){
		$("#close").css({"background-image": "url('images/close_out_reverse.svg')","animation-name":"play_out_reverse","animation-duration":"1000ms"});
		// console.log("out!")
	})
	$("#close").on("click" , function(){
		flagclickArr = [false,false,false,false,false];
		// $(".keyinfo").css({
		// 		"display":"none"
		// });
		oldindex = undefined
		$(".keyinfodiv-bottom").css("animation","none")
		TweenMax.to("#close",0.5,{opacity:0,y:10,ease:Power1.easeOut})
		TweenMax.to(".keyinfodiv-bottom",0.7,{opacity:0,ease:Linear.ease,delay:0.2})
		TweenMax.to([oldh3,oldh5],0.3,{opacity:0,y:20,ease:Power4.easeOut,onComplete:function(){
			$(".keyinfodiv-bottom").css("background-color","none");
			$(".keyinfo").css("display","none");
			$("#close").css({"display":"none","background-image":"none"})
			
			// console.log(oldindex)
			$(".keyinfodiv-bottom").css("transform","matrix(1, 0, 0, 1, -190.5, 0)");
			isCloseIn = false;
			// isKeyinfoOut = true;

		},delay:0.2})
		
	})
    $(".keyinfo").delegate("*","click",function(){
    	console.log("294")
    	flagclickArr = [false,false,false,false,false];
		// $(".keyinfo").css({
		// 		"display":"none"
		// });
		oldindex = undefined
		$(".keyinfodiv-bottom").css("animation","none")
		TweenMax.to("#close",0.5,{opacity:0,y:10,ease:Power1.easeOut})
		TweenMax.to(".keyinfodiv-bottom",0.7,{opacity:0,ease:Linear.ease,delay:0.2})
		TweenMax.to([oldh3,oldh5],0.3,{opacity:0,y:20,ease:Power4.easeOut,onComplete:function(){
			$(".keyinfodiv-bottom").css("background-color","none");
			$(".keyinfo").css("display","none");
			$("#close").css({"display":"none","background-image":"none"})
			
			// console.log(oldindex)
			$(".keyinfodiv-bottom").css("transform","matrix(1, 0, 0, 1, -190.5, 0)");
			isCloseIn = false;
			// isKeyinfoOut = true;

		},delay:0.2})
		
    })



	$(".keywords").on("mouseenter",".keyworddiv",function(){
		
		keywordsArr = [false,false,false,false,false];
		index=$(".keyworddiv").index($(this));

				keywordsArr[index] = true;
	})
	$(".keywords").on("mouseleave",".keyworddiv",function(){
		index=null;
	})
	$(".keywords").on("mousemove","p",function(){
		$(".cursorWrapper").css({
 				"border":"5px solid #fff !important",
 				"width":"10px !important",
 				"height":"10px !important",
 				"box-shadow":"none !important"

 				});
	})
	function percentToPixel(_elem, _perc){
  return (_elem.parent().outerWidth()/100)*parseFloat(_perc);
}
