/*
Created by: Gustavo Adolfo Flores González

Project: JSCanvasLib
File: js/main.js
Description: Is an easy to use JavaScript Library for the Canvas element (html5).


*/


function main()
{
	var canv=new JSCanvasLib();
	canv.about();
	canv.setCanvas("testCanvas");
	canv.setFont("10pt Verdana");
	canv.fillRect(0,0,100,100,"red");
	canv.fillRect(50,50,100,100,"rgba(0,0,200,0.5)");
	canv.drawString("Hello World",200,200,"white");
	canv.drawImage("images/test1.png",20,20);
	
}

window.onload=main;