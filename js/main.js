/*
* Created by: Gustavo Adolfo Flores González
* Project: JSCanvasLib
* File: js/main.js
* Description: Is an easy to use JavaScript Library for the Canvas element (html5).
* Last modified: August 29, 2012
*
*/


/*
* Function: main  It Starts this little test
*
*/
function main()
{
	// creates the object
	var canv=new JSCanvasLib();
	
	// Calls the about function (ego, ego, great ego of mine).
	canv.about();
	
	// Sets the canvas reference (this step must be performed first)
	canv.setCanvas("testCanvas");
	
	// Sets the current font
	canv.setFont("10pt Verdana");
	
	// Draws a rectangle in red color
	canv.fillRect(0,0,100,100,"red");
	
	// Draws a rectangle with a transparent blue color
	canv.fillRect(50,50,100,100,"rgba(0,0,200,0.5)");
	
	// Draws the clasic "Hello World" in white 
	canv.drawString("Hello World",200,200,"white");
	
	// Loads and draws a simple image
	canv.drawImage("images/test1.png",20,20);

	// Loads and draws a simple image
	canv.drawImageStretch("images/test1.png",120,120,200,40);
	
}

// Sets the callback, so when the window loads every element it calls the main function
window.onload=main;
