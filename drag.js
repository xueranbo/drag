// JavaScript Document

function drag(id){
   var obj = document.getElementById(id);
   var disx = 0;
   var disy = 0;
   obj.onmousedown = function(ev){
      disx = ev.clientX - obj.offsetLeft;
	  disy = ev.clientY - obj.ogdetTop;
	  document.onmousemove = function(ev){
	    obj.style.left = ev.clientX - disx + 'px';
		obj.style.top = ev.clientY - disy + 'px';
	  }
   }
}