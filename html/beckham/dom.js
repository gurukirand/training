// Author:Gurukiran D
// date: 10-08-18

var a=['HOME','STYLE DEMO','FULL WIDTH','DROPDOWN','PORTFOLIO','GALLERY'];//array for holding menu items

function display()
{
var ele= document.getElementsByTagName("BODY")[0]//bacground color
ele.style.background='#696966';

var ele2= document.getElementById("mydiv");
var x3=document.createElement("DIV");
x3.style.height="5px";//horizontal line
x3.style.background="#36b55d";
ele2.appendChild(x3);


var x4=document.createElement("DIV");
ele2.appendChild(x4)
x4.classList.add("div1");
//header section
var Modernist=document.createElement("DIV");
x4.appendChild(Modernist);
Modernist.classList.add("hd"); 
Modernist.innerHTML="The Modernist";

var templet=document.createElement("DIV");
x4.appendChild(templet);
templet.classList.add("second")
templet.innerHTML="Free BSD website templet";
// navbar
var navbar=document.createElement("DIV");
ele2.appendChild(navbar);
navbar.classList.add("div2");
// unordered list
var unorder=document.createElement("UL");
ele2.appendChild(unorder)
for(var i=0;i<6;i++)
{
    // list items
var list=document.createElement("LI");
unorder.appendChild(list);
var anchor=document.createElement("A");
list.appendChild(anchor);
anchor.innerHTML=a[i];
anchor.href="#";
}

// main content heading
var heading=document.createElement("DIV");
ele2.appendChild(heading);
heading.classList.add("para1")
heading.innerHTML="Cursus penati saccum nulla.";
// main content
var content=document.createElement("DIV");
ele2.appendChild(content);
content.classList.add("para")
content.innerHTML="Nullamlacus dui ipsum conseque loborrtis non euisque morbi penas dapibulum orna.Urnaultrices quis curabitur phasellentesque congue magnis vestibulum quismodo nulla et feuglat adipiscinia pellentum leo."
// read more button
var button=document.createElement("DIV");
ele2.appendChild(button);
button.classList.add("button")
button.innerHTML="Read More";
// image
var image=document.createElement("DIV");
ele2.appendChild(image);
image.classList.add("image");



}

