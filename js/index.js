$(document).ready(function () {
	setTimeout(function(){

		rcb.checked = true
		myAudio.currentTime = 288;
		myAudio.play()
		timer2 = setInterval(lyrictrans,500)
		$("audio").animate({volume: 0.6}, 3000);
		console.log("183")
		timer = setInterval(function(){
    		if(myAudio.currentTime >=332){
    			$("audio").animate({volume: 0}, 3000);
    			if(myAudio.volume == 0 ){
    				$("audio")[0].pause()
    				clearInterval(timer)
    				rcb.checked = false;
    				nowTime = false;
    				outTime = false;
    			}
    		}	
		},200)
		
	},2000)

	var audio = document.getElementById("myAudio")

    var lrc = []; 
    //创建歌词数组;
		
		lrc.push("[04:35.830]");
		lrc.push("[04:41.890]");
		lrc.push("[04:48.790]消えそうに 咲きそうな");
		lrc.push("[04:54.670]蕾が 今年も 僕を待ってる");
		lrc.push("[05:01.510]今もまだ つかめない");
		lrc.push("[05:06.510]あなたと描いた夢");
		lrc.push("[05:10.440]立ち止まる僕のそばで");
		lrc.push("[05:15.630]優しく开く笑顏のような");
		lrc.push("[05:21.930]蕾を探してる");
		lrc.push("[05:30.600]空に");
		lrc.push("[06:02.700]");



    var myAudio = $("audio")[0];
    var lrcArr = [];
    getLrc();
    var flag = false;
    var index;
    function getLrc() {
        var timeReg = /\[\d{2}:\d{2}\.\d{3}\]/g;//匹配时间的正则表达式
        var result = [];
        for (var i=0;i<lrc.length;i++) {
            var time = lrc[i].match(timeReg); //获取歌词里的时间
            var value = lrc[i].replace(timeReg, ""); //获取纯歌词文本
            for (var j=0;j<time.length;j++ ) {
                var t = time[j].slice(1, -1).split(":"); //t[0]分钟，t[1]秒
                var timeArr = parseInt(t[0], 10) * 60 + parseFloat(t[1])-2;
                result.push([timeArr, value]);//以[时间(秒)，歌词]的形式存进result
            }
        }
        lrcArr = result;
    }
    showLrc()
    var lyric1 = document.getElementById("lyric-1");
    var lyric2 = document.getElementById("lyric-2");
    // var lyric2_blur = document.getElementById("lyric-2-blur");
    var lyric3 = document.getElementById("lyric-3");
    function showLrc() {
        var curTime = myAudio.currentTime;//获取当前的播放时间
        for (var i = 0; i < lrcArr.length; i++) {
            //播放时间大于对应歌词时间小于下一句歌词时间就显示当前歌词
            if ((curTime >lrcArr[i][0])&&(curTime<lrcArr[i+1][0])) {
            	
            	console.log("index之前 = "+index)
            	if(i !=index){
               		flag = false
               	}else if(i = index){
               		flag = true
               	}
            	
             
               	index = i
               	console.log("index之后 = "+index)

				break;//找到对应歌词就停
            }
        }
    }
    
    function lyrictrans(){
            if(!flag){
                TweenMax.to(["#lyric-1","#lyric-3"],0.8,{opacity:0,scale:0.95,y:5,onComplete:function(){
                TweenMax.to(["#lyric-1","#lyric-3"],0.5,{opacity:0.5,scale:1,y:0}),"-=0.8"}},"-=1.9");
                TweenMax.to(["#lyric-2",],0.8,{opacity:0,y:5,filter:"blur(10px)",scaleY:0.7,onComplete:function(){
                TweenMax.to(["#lyric-2"],0.5,{opacity:1,y:0,filter:"blur(0px)",scaleY:1}),"-=0.8"}},"-=2")
                setTimeout(function(){
                    // lyric2_blur.innerHTML = lrcArr[index][1];
                    lyric2.innerHTML = lrcArr[index][1];
                    // lyric1.innerHTML = lrcArr[index-1][1];
                    // lyric3.innerHTML = lrcArr[index+1][1];
                },450)

                setTimeout(function(){
                    lyric1.innerHTML = lrcArr[index-1][1];
                    lyric3.innerHTML = lrcArr[index+1][1];
                },500)
            }
            showLrc()
            console.log(flag)
            console.log(myAudio.currentTime)
            if(myAudio.currentTime >=335){
                var start = (timer2 - 100) > 0 ? timer2 -100 : 0;
                for(var i = start; i <= timer2; i++) {
                    clearInterval(i);
                }
            }
    }
    myAudio.volume = 0
	var timer;
    var timer2;
	var nowTime = false;
	var outTime = false;
    var rcb = document.getElementById("recordcb");
    console.log(rcb)

// 精简control
    rcb.onclick = function(){
        
    	event.stopPropagation();
    	clearInterval(timer)
    	console.log("checked = "+rcb.checked)
    	console.log("nowTime = "+nowTime);
    	console.log("outTime = "+outTime)
    	console.log("volume = "+myAudio.volume)
    	if(rcb.checked){
    			lyric2.style.opacity=1
    		//1.未播放过，点击从头播放
    		if(!outTime && !nowTime){
    			myAudio.currentTime = 288;
    			myAudio.play()
    			
    			$("audio").animate({volume: 0.6}, 3000);
    			console.log("183")
	    		timer = setInterval(function(){
		    		if(myAudio.currentTime >=332){
		    			$("audio").animate({volume: 0}, 3000);
		    			if(myAudio.volume == 0 ){
		    				$("audio")[0].pause()
		    				nowTime = false;
		    				outTime = false;
                            rcb.checked = false;		    		
		    			}
		    		}	
	    		},200)
	    		
    		}
    		//2.播放过暂停中  a.暂停处未到332，点击从暂停处播放
    		else if(outTime && !nowTime){
                timer2 = setInterval(lyrictrans,500)
    			myAudio.currentTime = outTime;
    			myAudio.play()
    			$("audio").animate({volume: 0.6}, 1000);
	    		timer = setInterval(function(){
		    		if(myAudio.currentTime >=332){
		    			$("audio").animate({volume: 0}, 3000);
		    			if(myAudio.volume == 0 ){	    				
		    				$("audio")[0].pause()
		    				nowTime = false;
		    				outTime = false;	
		    				lyric2.style.opacity=0
                            rcb.checked = false;
                            // clearInterval(timer)
                            
		    			}
		    		}	
	    		},200)
    		}	
    	}
    	else if(!rcb.checked){
    		//1.未到332，点击暂停
            var start = (timer2 - 100) > 0 ? timer2 -100 : 0;
                for(var i = start; i <= timer2; i++) {
                    clearInterval(i);
            }
    		outTime = myAudio.currentTime
    		if(outTime && !nowTime){
    			outTime = myAudio.currentTime
    			$("audio").animate({volume: 0,onCompelte:function(){
    			}}, 500);
    			console.log("到250了")
    			setTimeout(function(){
    				myAudio.pause()
    				console.log("到252了")

    				// lyric2.style.opacity=0
    			},500)    	

    		}
    	}
    }
})