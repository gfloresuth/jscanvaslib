/*
Created by: Gustavo Adolfo Flores González

Project: JSCanvasLib
File: js/jscanvaslib.js
Description: Is an easy to use JavaScript Library for the Canvas element (html5).


*/

// DOMTool is a simple DOM object manager


function AsyncImage(aPath,nPars,callback)
{
	var ximg=new Image();
	var odata={
		path: aPath,
		pars: nPars,
		img: ximg,
		cb:function(){
			callback(odata);
		}
		
	}
	ximg.onload=odata.cb;
	ximg.src=aPath;
	return odata;
}

function JSCanvasLib(){
	var odata={
		about:function(){alert("1.0")},
		ctx:null,
		_images:{},
		
		_asyncDrawImage:function(data){
			data.pars.ctx.drawImage(data.img,data.pars.x,data.pars.y);
			//console.log(data);	
		},
		
		drawImage:function(url,ix,iy){
			
			this._images[url]=new AsyncImage(url,{x:ix,y:iy,ctx:this.ctx},this._asyncDrawImage);
		},
		
		setCanvas:function(id){
				this.ctx=document.getElementById(id).getContext('2d');
			},
		setColor:function(aColor){
				this.ctx.fillStyle=aColor;
			},
		setFont:function(aFont){
				this.ctx.font=aFont;
			},
		drawString:function(text, x,y,aColor){
				this.setColor(aColor);
				this.ctx.fillText(text,x,y);
			},
		fillRect:function(x,y,w,h,aColor){
				this.setColor(aColor);
				this.ctx.fillRect(x,y,w,h);
			}
	};
	
	return odata;
	
}

