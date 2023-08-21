//onchange function
var hexlabel=document.getElementById("hex-label");
function changeRange() {
  var red = parseInt(document.getElementById("red").value);
  var green = parseInt(document.getElementById("green").value);
  var blue = parseInt(document.getElementById("blue").value);

  console.log("this work changereange");

  var divcolor = "#" +hex(red)+hex( green) +hex( blue);
  window.colors.style.backgroundColor=divcolor;
var redlabel=document.getElementById('red-label');

//   document.getElementById("colors").style.backgroundColor = divcolor;
  
  
   hexlabel.innerText =divcolor;
  redlabel.innerText=red;
   
  document.getElementById("green-label").innerText=green;
  document.getElementById("blue-label").innerText=blue;

//   if(red<0 && green && blue<0 ){
//     document.getElementsByClassName("container").style.color="white";

//   }else{
//     document.getElementsByClassName("container").style.color="black";

//   }

}
function hex(v){
    var hex=v.toString(16);
    if(v<16){
hex="0"+hex;
    }
    return hex;
}
//copier the input
var iconcopier=document.getElementById("icon");

iconcopier.onclick=function(){
 navigator.clipboard.writeText(hexlabel.innerText);
this.style.color="green"
 
}