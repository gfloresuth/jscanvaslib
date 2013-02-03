/*
* Created by: Gustavo Adolfo Flores González
* Project: JSCanvasLib
* File: js/jscanvaslib.js
* Description: Is an easy to use JavaScript Library for the Canvas element (html5).
* 
* Last modified: 29 August 2012
* 
*/


/*
*
* Object: AsyncImage (Handles all the async loading and drawing of the image)
* @param aPath Path to the image
*
*/
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

/*
* Function isset Checks if a variable is set to a value
* @param aVar A viariable to check
*
*/
function isset(aVar)
{
	return (typeof aVar == "undefined")?false:true;
}

/*
*
* Object: JSCanvasLib The main Object of this project
*
* Note: "The most important object of all" (ok, is the main object JSCanvasLib)
*
*/
function JSCanvasLib(){
	// creates the internal object in JSON style
	var odata={
		/*
		* about Shows the about dialog
		* Note: (a little ego in here)
		*
		*/
		about:function(){alert("JSCanvas 1.0\nby Gustavo Adolfo Flores González")},
		
		/*
		* Context reference of the canvas
		*
		*/
		ctx:null,
		
		/*
		* This is the image list (used to save image instances).
		*
		*/
		_images:{},
		
		/*
		* The magic function _asyncDrawImage
		* Description: This functions gets the parameters from the AsyncImage object, and do the actual drawing
		* @param data The basic data for the image (the actual parameters)
		*
		* Description
		*  This are the true parameters:
		* data.img Image path
		* data.pars.x Parameter X
		* data.pars.y Parameter Y
		* data.pars.w Parameter w (Width)
		* datapars.h Parameter h (Height)
		* 
		* Note: When data.pars.w and data.pars.h are set to a value, it uses the full drawImage.
		*
		*/
		_asyncDrawImage:function(data){
			//data.pars is the actual parameters when drawImage was called (url,ix,iy)
			//data.pars.x is the x position
			//data.pars.y is the y position
			//data.pars.ctx is the current context (2d context of canvas)
			if(isset(data.pars.w) && isset(data.pars.h))
			{
				data.pars.ctx.drawImage(data.img,data.pars.x,data.pars.y,data.pars.w,data.pars.h);
			}else{
				data.pars.ctx.drawImage(data.img,data.pars.x,data.pars.y);
			}
			
		},
		
		/*
		* This function do the initial async creation of the image calling
		* 
		* @param url The url to the image (local or web based path)
		* @param ix X coordinate
		* @param iy Y coordinate
		*/
		drawImage:function(url,ix,iy){
			
			this._images[url]=new AsyncImage(url,{x:ix,y:iy,ctx:this.ctx},this._asyncDrawImage);
		},

		/*
		* This function do the initial async creation of the image calling (with Stretch)
		*
		* @param url The url to the image (local or web based path)
		* @param ix Initial X coordinate
		* @param iy Initial Y coordinate
		* @param iw Initial Width
		* @param ih Initial Height
		*
		*/
		drawImageStretch:function(url,ix,iy,iw,ih){
			
			this._images[url]=new AsyncImage(url,{x:ix,y:iy,w:iw,h:ih,ctx:this.ctx},this._asyncDrawImage);
		},

		
		/*
		* Set the reference to the canvas object from DOM
		*
		* @param id The id of the canvas object (DOM based)
		*
		*/
		setCanvas:function(id){
				this.ctx=document.getElementById(id).getContext('2d');
			},
			
		/*
		* This maps the property fillStyle to a function
		*
		* @param aColor Is the actual color
		*
		*/
		setColor:function(aColor){
				this.ctx.fillStyle=aColor;
			},
			
		/*
		* This maps the property font to a function
		*
		* @param aFont Current font to set
		*
		*/
		setFont:function(aFont){
				this.ctx.font=aFont;
			},
		
		/*
		* This function combines this.setColor and this.ctx.fillText to get a simple call to draw a string with color
		*
		* @param text The texto to write
		* @param x X coordinate
		* @param y Y coordinate
		* @param aColor Color of the string to draw
		*
		*/
		drawString:function(text, x,y,aColor){
				this.setColor(aColor);
				this.ctx.fillText(text,x,y);
			},
		
		/*
		* This function combines this.setColor and this.ctx.fillRect to draw a rectangle with color
		*
		* @param x X coordinate
		* @param y Y coordinate
		* @param w Width
		* @param h Height
		* @param aColor The color to fill the Rectangle
		*
		*/
		fillRect:function(x,y,w,h,aColor){
				this.setColor(aColor);
				this.ctx.fillRect(x,y,w,h);
			}
	};
	
	return odata;
	
}


