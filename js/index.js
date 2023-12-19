var a=prompt("hey how are you?");
if(a == "good"){
    var b=confirm("nice to hear that");
}
else{
    var b=confirm("what happen");
}
document.getElementById("red").onclick=function(){
    document.getElementById("body").style.background="pink";
    document.getElementById("head").style.color="red";
}
document.getElementById("blue").onclick=function(){
    document.getElementById("body").style.background="pink";
    document.getElementById("set").style.color="green";
    document.getElementById("head").style.color="blue";
}
document.getElementById("green").onclick=function(){
    document.getElementById("body").style.background="yellow";
    document.getElementById("head").style.color="green";
}
document.getElementById("time").onclick=function(){
    document.getElementById("body").style.background="white";
    document.getElementById("set").style.color="pink";
    document.getElementById("set").innerHTML=Date;

}
document.getElementById("pink").onclick=function(){
    document.getElementById("body").style.background="seagreen";
    document.getElementById("head").style.color="skyblue";
}
