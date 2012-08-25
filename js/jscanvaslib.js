/*
Created by: Gustavo Adolfo Flores González

Project: JSCanvasLib
File: js/jscanvaslib.js
Description: Is an easy to use JavaScript Library for the Canvas element (html5).


*/

// DOMTool is a simple DOM object manager

// AsyncImage Object (Handles all the async loading and drawing of the image)
function AsyncImage(aPath,nPars,callback)
{
	// the real image
	var ximg=new Image();
	
	// basic data
	var odata={
		path: aPath, // the path (url of the image)
		pars: nPars, // parameters to use when do the real drawing
		img: ximg,   // internal reference to the image
		
		// Call back (this do the async drawing trick)
		cb:function(){
			callback(odata);
		}
		
	}
	// sets the callback function
	ximg.onload=odata.cb;
	// sets the path to the image to trigger the async drawing
	ximg.src=aPath;
	
	// return the actual object
	return odata;
}


// "The most important object of all" (ok, is the main object JSCanvasLib)
function JSCanvasLib(){
	// creates the internal object in JSON style
	var odata={
		// about (a little ego in here)
		about:function(){alert("JSCanvas 1.0\nby Gustavo Adolfo Flores González")},
		
		// Context reference of the canvas
		ctx:null,
		
		// This is the image list (used to save image instances).
		_images:{},
		
		// The magic function _asyncDrawImage
		// Description: This functions gets the parameters from the AsyncImage object, and do the actual drawing
		_asyncDrawImage:function(data){
			//data.pars is the actual parameters when drawImage was called (url,ix,iy)
			//data.pars.x is the x position
			//data.pars.y is the y position
			//data.pars.ctx is the current context (2d context of canvas)
			data.pars.ctx.drawImage(data.img,data.pars.x,data.pars.y);
		},
		
		// This function do the initial async creation of the image calling
		drawImage:function(url,ix,iy){
			
			this._images[url]=new AsyncImage(url,{x:ix,y:iy,ctx:this.ctx},this._asyncDrawImage);
		},
		
		// Set the reference to the canvas object from DOM
		setCanvas:function(id){
				this.ctx=document.getElementById(id).getContext('2d');
			},
			
		// This maps the property fillStyle to a function
		setColor:function(aColor){
				this.ctx.fillStyle=aColor;
			},
			
		// This maps the property font to a function
		setFont:function(aFont){
				this.ctx.font=aFont;
			},
		
		// This function combines this.setColor and this.ctx.fillText to get a simple call to draw a string with color
		drawString:function(text, x,y,aColor){
				this.setColor(aColor);
				this.ctx.fillText(text,x,y);
			},
		
		// This function combines this.setColor and this.ctx.fillRect to draw a rectangle with color
		fillRect:function(x,y,w,h,aColor){
				this.setColor(aColor);
				this.ctx.fillRect(x,y,w,h);
			}
	};
	
	return odata;
	
}

