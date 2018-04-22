window.onload=function(){
	/*
	function byId(id){
		return typeof(id) === "string"?document.getElementById(id):id;
	}*/
	var pics=document.getElementById("banner").getElementsByTagName("div"),
		dots=document.getElementById("dots").getElementsByTagName("span"),
		main=document.getElementById("main"),
		prev=document.getElementById("prev"),
		next=document.getElementById("next"),
		picslen=pics.length,
		timer=null,
		index = 0; 
	
	main.onmouseover = function(){
		clearInterval(timer);
	}
	
	main.onmouseout = function(){
		timer = setInterval(function(){
			index++;
			if(index==picslen) index=0;
			changeImg();
		},3000);
	}
	main.onmouseout();
	
	//圆点点击
	for(var j=0;j<picslen;j++){
		dots[j].id=j;
		dots[j].onclick=function(){
			index=this.id;
			changeImg();
		}
	}
	
	//点击上一张
	prev.onclick=function(){
		index--;
		if(index<0) index=2;
		changeImg();
	}
	//点击下一张
	next.onclick=function(){
		index++;
		if(index>picslen-1) index=0;
		changeImg();
	}
	
	//图片切换
	function changeImg(){
		for(var i=0;i<picslen;i++){
			pics[i].style.display="none";
			dots[i].className="";
		}
		pics[index].style.display="block";
		dots[index].className="span-active";
	}	
}