

TweenMax.set('.knob',{x:423,y:-24})
var startx = $("#rangepath")[0].getBoundingClientRect().left
var spanArr = $("#dragspan").find("*").not("div");
var spanlrArr = [];
var allfaultArr=[];
var pagetransArr = [page1,page2,page3,page4,page5,page6,page7,page8,page9,page10];
var audiotransArr = [
[lovelyrics,".loveaudio",229,266],
[tenshilyrics,".tenshiaudio",216,240],
[kiboulyrics,".kibouaudio",201,230],
[secretlyrics,".secretaudio",212,231],
[amigolyrics,".amigoaudio",223,254],
[tubomilyrics,".tubomiaudio",288,332],
[kisekilyrics,".kisekiaudio",211,243],
[ninjyalyrics,".ninjyaaudio",14,28],
[katamelyrics,".katameaudio",0,15],
[lemonlyrics,".lemonaudio",210,243]
]
// Lyrics(audiotransArr[9][0],audiotransArr[9][1],audiotransArr[9][2],audiotransArr[9][3])
var nextposter;
var posterArr=["love","tenshi","kibou","secret","amigo","tubomi","kiseki","ninjya","katame","lemon"];
//nextcolor是该轮的color8
var nextcolor;
var nextcolorArr=["#7a8380","#000","#6761b1","#eedfe2","#d61d1a","#1e638d","#fefe00","#f8c373","#8C7284","#789d6f"];
var nestyear;
var nextyearArr=[1989,1994,1999,2000,2004,2007,2010,2013,2018]
var nextbg;
var nextbgArr=["lovebg","tenshibg","kiboubg","secretbg","amigobg","tubomibg","kisekibg","ninjyabg","katamebg","lemonbg"]
var nextbgcover;
//color6
var nextbgcoverArr=["#8b8b6a7d","#00000000","#a198ff7d","#0000","#ff989800","#98b7d6","#fefe009e","#fffe987d","#ff98ee7d","#557b52"];
var lastOldUpindex = 25;
//获取每个的
// console.log(spanArr)

for(var i=0 ; i<spanArr.length; i++){
	var left = spanArr[i].getBoundingClientRect().left-startx-5
	var right = spanArr[i].getBoundingClientRect().right-startx+5
	var center = (spanArr[i].getBoundingClientRect().right+spanArr[i].getBoundingClientRect().left)/2-startx-1
	spanlrArr.push([left,right,center]);
	allfaultArr.push(false)

}
var isSpanUpArr = allfaultArr
var oldUpindex;
var volumnPath = document.querySelector('#rangepath');
var risk = volumnPath.getTotalLength()/900
$(spanArr[25]).css({
	"transform":"translateY(-10px)",
	"transition":"transform 0.5s,box-shadow 0.5s,background-color 1.5s cubic-bezier(0.71,0.12,0.34,0.97)",
	"box-shadow":"2px 2px 2px rgba(0,0,0,1)"
})
$(spanArr[25]).addClass("addnum")
oldUpindex = 25


// console.log(pagetransArr)

$("#lfknob")[0].onmousedown = function(e){ 
	var x = e.clientX;
	var y = e.clientY;
	var initx = x;
	if(initx>=$("#dragspan")[0].getBoundingClientRect().left-5 && initx<=$("#dragspan")[0].getBoundingClientRect().right+10)
	{
	document.onmousemove = function(e){
	  var x = e.clientX;
	  var y = e.clientY;
	  var nowx = x;
	  var nowy = y;
	  var knobx = x-startx;
	  //莫名其妙试对了。。不知道为什么
	  var knoby = volumnPath.getPointAtLength((x-startx)/risk).y-54;
	  
	  if(knobx>=3 && knobx<=759)
	  {
	  	TweenMax.set(".knob",{x:knobx,y:knoby*risk})
	  	TweenMax.set("#lfknob",{x:knobx-32,y:knoby*risk-5})
	  	// 输出当前path的总长度
	  	// console.log(volumnPath.getTotalLength());
	  }
	  else if(knobx<0 ||knobx >765)
	  {
	  	document.onmousedown = null;
	  	document.onmousemove = null
	  }
    
	  for (var i = 0; i < spanlrArr.length; i++) {			
              if ((knobx >spanlrArr[i][0])&&(knobx<spanlrArr[i][1])) {
              	$(spanArr[oldUpindex]).css({
                  "transform":"translateY(-0px)",
                  "transition":"transform 1s, box-shadow 2s,background-color 1.5s cubic-bezier(0.71,0.12,0.34,0.97)",
                  "box-shadow":"1px 1px 1px rgba(0,0,0,0)"
                })              
                $(spanArr[oldUpindex]).removeClass("addnum",{duration:5000})
              	oldUpindex = i;
              	if(i%5==0){
              		$(spanArr[i]).css({
	              		"transform":"translateY(-10px)",
	              		"transition":"transform 0.5s,box-shadow 0.5s,background-color 1.5s cubic-bezier(0.71,0.12,0.34,0.97)",
	              		"box-shadow":"3px 3px 3px rgba(0,0,0,1)"
              		})
              		$(spanArr[i]).addClass("addnum")
              	}else if(i%5!=0){
              		$(spanArr[i]).css({
	              		"transform":"translateY(-10px)",
	              		"transition":"transform 0.5s,box-shadow 0.5s,background-color 1.5s cubic-bezier(0.71,0.12,0.34,0.97)",
	              		"box-shadow":"2px 2px 2px rgba(0,0,0,1)"
              		})
              	}           	
              }
          }
	  }
	  var oldUpindex2;
    
	   document.onmouseup = function(){

    $("#lyric-2").removeClass("jump")
    // console.log(myAudio)
    // console.log("oldupindex" + oldUpindex)	
    // console.log("lastOldUpindex" +lastOldUpindex)
		document.onmousedown = null;
		document.onmousemove = null;
        
		if(oldUpindex%5==0){
      // console.log("oldUpindex%5==0")
      // $(spanArr[lastOldUpindex]).css({
      //   "transform":"translateY(-0px)",
      //   "transition":"transform 1s, box-shadow 2s,background-color 1.5s cubic-bezier(0.71,0.12,0.34,0.97)",
      //   "box-shadow":"1px 1px 1px rgba(0,0,0,0)"
      // })
      if(lastOldUpindex == oldUpindex){
        // alert("一样的不变化！")
        // oldUpindex = oldUpindex%5<3?(oldUpindex-oldUpindex%5):(oldUpindex-oldUpindex%5+5)
        TweenMax.to("#knob",0.2,{x:spanlrArr[oldUpindex][2],y:volumnPath.getPointAtLength((spanlrArr[oldUpindex][2])/risk).y-54});
        TweenMax.set("#lfknob",{x:spanlrArr[oldUpindex][2]-32,y:volumnPath.getPointAtLength((spanlrArr[oldUpindex][2])/risk).y-60});
      }
      else if(lastOldUpindex != oldUpindex){
        var intervals = []; 
        $(".elements").each(function() { var i = setInterval(function() { }, 1000); intervals.push(i); });
        intervals.forEach(clearInterval);
        // $(myAudio).animate({volume: 0}, 3000);
        // myAudio[0].pause()
        var sounds = document.getElementsByTagName('audio');
        for(i=0; i<sounds.length; i++) {
          $(sounds[i]).animate({volume: 0}, 1000)
          sounds[i].pause();
        }
        flagclickArr = [false,false,false,false,false];
        oldindex = undefined;
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
        lastOldUpindex = oldUpindex;
        console.log("lastOldUpindex"+lastOldUpindex)
        TweenMax.to("#knob",0.2,{x:spanlrArr[oldUpindex][2],y:volumnPath.getPointAtLength((spanlrArr[oldUpindex][2])/risk).y-54});
        TweenMax.set("#lfknob",{x:spanlrArr[oldUpindex][2]-32,y:volumnPath.getPointAtLength((spanlrArr[oldUpindex][2])/risk).y-60});
        $(spanArr[oldUpindex]).css({
            "transform":"translateY(-10px)",
            "transition":"transform 0.5s,box-shadow 0.5s,background-color 1.5s cubic-bezier(0.71,0.12,0.34,0.97)",
            "box-shadow":"2px 2px 2px rgba(0,0,0,1)"
        })
        // alert(audiotransArr[oldUpindex/5])
        if(oldUpindex !=35){
          Lyrics(audiotransArr[oldUpindex/5][0],audiotransArr[oldUpindex/5][1],audiotransArr[oldUpindex/5][2],audiotransArr[oldUpindex/5][3])
        }else if(oldUpindex ==35){
          $("#lyric-2").addClass("jump")
          // setTimeout(function(){LyricsJump(audiotransArr[7][0],audiotransArr[7][1],audiotransArr[7][2],audiotransArr[7][3])},0)
          LyricsJump(audiotransArr[7][0],audiotransArr[7][1],audiotransArr[7][2],audiotransArr[7][3]) 
        }
        // Lyrics(audiotransArr[oldUpindex/5][0],audiotransArr[oldUpindex/5][1],audiotransArr[oldUpindex/5][2],audiotransArr[oldUpindex/5][3])
        setTimeout(function(){
          nextcolor = nextcolorArr[oldUpindex/5]
          nextposter = "url(../images/"+posterArr[oldUpindex/5]+".jpg)";
          nextbg = "url(../images/"+nextbgArr[oldUpindex/5]+".jpg)";
          nextbgcover = nextbgcoverArr[oldUpindex/5];
          document.documentElement.style.setProperty('--poster2', nextposter);
          document.documentElement.style.setProperty('--nextcardcolor', nextcolor);
          document.documentElement.style.setProperty('--nextbg', nextbg);
          document.documentElement.style.setProperty('--nextbgcover', nextbgcover);
          TweenMax.to(".bg2",1.5,{opacity:1,delay:0.2});
          TweenMax.to(".bgcover2",1,{opacity:0.59,delay:1.2,ease:Sine.easeInOut});
          TweenMax.to(".tagtop p",1,{opacity:0,filter:"blur(5px)",y:15,onComplete:function(){
            TweenMax.to(".tagtop p",0.5,{opacity:1,filter:"blur(0px)",y:0})
          }})
          TweenMax.staggerTo([".bgpics",".lyrics",".keywords"],0.5,{yPercent:-2,opacity:0,delay:0.2,ease:Expo.easeOut},0.025)
          TweenMax.to([".ocean","#recorder"],0.5,{yPercent:5,opacity:0,ease:Expo.easeOut,onComplete:function(){
              pagetransArr[oldUpindex/5]();
          }})
          TweenMax.to(".poster",0.5,{opacity:0,delay:0.5})
          TweenMax.to([".bg",".bgcover"],0.5,{opacity:0,ease:Linear.easeOut})
          TweenMax.to(".musiccard",0.5,{rotation:3.5,delay:0.5,onComplete:function(){
              TweenMax.to(".postertrans",0.5,{opacity:1})
              TweenMax.to(".poster",0.5,{opacity:0,onComplete:function(){
                TweenMax.to(".postertrans",0.1,{opacity:0,delay:0.85})
                TweenMax.staggerTo([".bgpics",".lyrics",".keywords",".ocean"],0.5,{yPercent:0,opacity:1,delay:0.2,ease:Expo.easeOut},0.025)
                TweenMax.fromTo("#recorder",0.5,{xPercent:5,opacity:0},{xPercent:0,opacity:1,ease:Power1.easeOut,delay:0.85})                   
                TweenMax.to(".musiccard",0.5,{rotation:0,delay:0,onComplete:function(){}})
                TweenMax.to(".poster",0.5,{opacity:1,delay:0.5,onComplete:function(){
                    TweenMax.set(".bg",{opacity:1});
                    TweenMax.set(".bg2",{opacity:0});
                    TweenMax.set(".bgcover",{opacity:0.59});
                    TweenMax.set(".bgcover2",{opacity:0});
                    
                    
                }})
            
            }})
          }}) 
        },100)
        
          
          
      }   
            // console.log("换页啦！")
      $(spanArr[oldUpindex]).addClass("addnum");
            // lastOldUpindex = oldUpindex;
    }
    else if(oldUpindex%5!=0){
      console.log("oldUpindex%5!=0")
      $(spanArr[oldUpindex]).css({
        "transform":"translateY(-0px)",
        "transition":"transform 1s, box-shadow 2s,background-color 1.5s cubic-bezier(0.71,0.12,0.34,0.97)",
        "box-shadow":"1px 1px 1px rgba(0,0,0,0)"
      })
      // $(spanArr[lastOldUpindex]).css({
      //   "transform":"translateY(-0px)",
      //   "transition":"transform 1s, box-shadow 2s,background-color 1.5s cubic-bezier(0.71,0.12,0.34,0.97)",
      //   "box-shadow":"1px 1px 1px rgba(0,0,0,0)"
      // })


      if(Math.abs(lastOldUpindex - oldUpindex)<=2 ){
        // alert("一样的不变化！")
        // return
        oldUpindex = oldUpindex%5<3?(oldUpindex-oldUpindex%5):(oldUpindex-oldUpindex%5+5)
        // $(spanArr[oldUpindex]).css({
        //     "transform":"translateY(-10px)",
        //     "transition":"transform 0.5s,box-shadow 0.5s,background-color 1.5s cubic-bezier(0.71,0.12,0.34,0.97)",
        //     "box-shadow":"2px 2px 2px rgba(0,0,0,1)"
        // })
        TweenMax.to("#knob",0.2,{x:spanlrArr[oldUpindex][2],y:volumnPath.getPointAtLength((spanlrArr[oldUpindex][2])/risk).y-54});
        TweenMax.set("#lfknob",{x:spanlrArr[oldUpindex][2]-32,y:volumnPath.getPointAtLength((spanlrArr[oldUpindex][2])/risk).y-60});    
      }
      else if(Math.abs(lastOldUpindex -oldUpindex)>=3){
        var sounds = document.getElementsByTagName('audio');
        for(i=0; i<sounds.length; i++) {
          $(sounds[i]).animate({volume: 0}, 1000)
          sounds[i].pause();
        }
        var intervals = []; 
        $(".elements").each(function() { var i = setInterval(function() { }, 1000); intervals.push(i); });
        intervals.forEach(clearInterval);
        oldUpindex =oldUpindex%5<3?(oldUpindex-oldUpindex%5):(oldUpindex-oldUpindex%5+5)
        // oldUpindex = oldUpindex - lastOldUpindex > 0 ? lastOldUpindex + 5: lastOldUpindex - 5 
        flagclickArr = [false,false,false,false,false];
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
        lastOldUpindex = oldUpindex;
        console.log("lastOldUpindex = "+lastOldUpindex)
        TweenMax.to("#knob",0.5,{x:spanlrArr[oldUpindex][2],y:volumnPath.getPointAtLength((spanlrArr[oldUpindex][2])/risk).y-54});
        TweenMax.set("#lfknob",{x:spanlrArr[oldUpindex][2]-32,y:volumnPath.getPointAtLength((spanlrArr[oldUpindex][2])/risk).y-60});
        $(spanArr[oldUpindex]).css({
            "transform":"translateY(-10px)",
            "transition":"transform 0.5s,box-shadow 0.5s,background-color 1.5s cubic-bezier(0.71,0.12,0.34,0.97)",
            "box-shadow":"2px 2px 2px rgba(0,0,0,1)"
        })
        // audiotransArr[oldUpindex/5]
        if(oldUpindex !=35){
            Lyrics(audiotransArr[oldUpindex/5][0],audiotransArr[oldUpindex/5][1],audiotransArr[oldUpindex/5][2],audiotransArr[oldUpindex/5][3]);
        }
        else if(oldUpindex ==35){
          LyricsJump(audiotransArr[7][0],audiotransArr[7][1],audiotransArr[7][2],audiotransArr[7][3])
           // setTimeout(function(){LyricsJump(audiotransArr[7][0],audiotransArr[7][1],audiotransArr[7][2],audiotransArr[7][3])},0);
           $("#lyric-2").addClass("jump")
        }
        // Lyrics(audiotransArr[oldUpindex/5][0],audiotransArr[oldUpindex/5][1],audiotransArr[oldUpindex/5][2],audiotransArr[oldUpindex/5][3])
        setTimeout(function(){

          nextcolor = nextcolorArr[oldUpindex/5]
          nextposter = "url(../images/"+posterArr[oldUpindex/5]+".jpg)";
          nextbg = "url(../images/"+nextbgArr[oldUpindex/5]+".jpg)";
          nextbgcover = nextbgcoverArr[oldUpindex/5];
          document.documentElement.style.setProperty('--poster2', nextposter);
          document.documentElement.style.setProperty('--nextcardcolor', nextcolor);
          document.documentElement.style.setProperty('--nextbg', nextbg);
          document.documentElement.style.setProperty('--nextbgcover', nextbgcover);
          TweenMax.to(".bg2",1.5,{opacity:1,delay:0.2});
          TweenMax.to(".bgcover2",1,{opacity:0.59,delay:1.2,ease:Sine.easeInOut});
          TweenMax.staggerTo([".bgpics",".lyrics",".keywords"],0.5,{yPercent:-2,opacity:0,delay:0.2,ease:Expo.easeOut},0.025)
          TweenMax.to([".ocean","#recorder"],0.5,{yPercent:5,opacity:0,ease:Expo.easeOut,onComplete:function(){
              pagetransArr[oldUpindex/5]();
          }})
          TweenMax.to(".poster",0.5,{opacity:0,delay:0.5})
          TweenMax.to([".bg",".bgcover"],0.5,{opacity:0,ease:Linear.easeOut})
          TweenMax.to(".musiccard",0.5,{rotation:3.5,delay:0.5,onComplete:function(){
              TweenMax.to(".postertrans",0.5,{opacity:1})
              TweenMax.to(".poster",0.5,{opacity:0,onComplete:function(){
                  TweenMax.to(".postertrans",0.1,{opacity:0,delay:0.85})
                  TweenMax.staggerTo([".bgpics",".lyrics",".keywords",".ocean"],0.5,{yPercent:0,opacity:1,delay:0.2,ease:Expo.easeOut},0.025)
                  TweenMax.fromTo("#recorder",0.5,{xPercent:5,opacity:0},{xPercent:0,opacity:1,ease:Power1.easeOut,delay:0.85})                   
                  TweenMax.to(".musiccard",0.5,{rotation:0,delay:0})
                  TweenMax.to(".poster",0.5,{opacity:1,delay:0.5,onComplete:function(){
                      TweenMax.set(".bg",{opacity:1});
                      TweenMax.set(".bg2",{opacity:0});
                      TweenMax.set(".bgcover",{opacity:0.59});
                      TweenMax.set(".bgcover2",{opacity:0});     
                  }})
              
              }})
          }}) 
          $(spanArr[oldUpindex]).addClass("addnum")
        },500)
            

      }
    }
	   }
	}
}




















