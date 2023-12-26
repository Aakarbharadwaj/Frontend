document.getElementById("slt").onclick=function(){
    let a=document.getElementById("slt").value;
    if(a=="Django"){
        document.getElementById("para").innerHTML="Django is a versatile framework that can be used to create applications in a variety of domains. Companies are now using Django to create a variety of applications, such as content management systems, social networking sites, and scientific computing platforms, among others.Django is the best jfvhc;zkjfghjljglkjjkh;kjh.nb,hf hgksrcjh kjrf"
    }
    else if(a=="AWS"){
        document.getElementById("para").innerHTML="Cloud computing is the on-demand delivery of IT resources over the Internet with pay-as-you-go pricing. Instead of buying, owning, and maintaining physical data centers and servers, you can access technology services, such as computing power, storage, and databases, on an as-needed basis from a cloud provider like Amazon Web Services (AWS).AWS is the best jfvhc;zkjfghjljglkjjkh;kjh.nb,hf hgksrcjh kjrf"
    }
    else if(a=="Html"){
        document.getElementById("para").innerHTML="The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content. It is often assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.Html is the best jfvhc;zkjfghjljglkjjkh;kjh.nb,hf hgksrcjh kjrf"
    }
    else if(a=="Angular"){
        document.getElementById("para").innerHTML="Angular is a TypeScript-based, free and open-source single-page web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.Django is the best jfvhc;zkjfghjljglkjjkh;kjh.nb,hf hgksrcjh kjrf"

    }
    else{
        document.getElementById("para").innerHTML=""
    }
}
// document.getElementById("slt").onclick=function(){
//         document.getElementById("para").innerHTML= "Django is the best";
//     }

document.getElementById("r").onclick=function(){
    document.getElementById("body").style.backgroundColor= "red";
}
document.getElementById("y").onclick=function(){
    document.getElementById("body").style.backgroundColor= "yellow";
}
document.getElementById("g").onclick=function(){
    document.getElementById("body").style.backgroundColor= "green";
}
document.getElementById("a").onclick=function(){
    document.getElementById("body").style.backgroundColor= "blue";
}
document.getElementById("b").onclick=function(){
    document.getElementById("body").style.backgroundColor= "black";
}


document.getElementById("upper").onclick=function(){
    document.getElementById("para").style.textTransform="uppercase";
}
document.getElementById("lower").onclick=function(){
    document.getElementById("para").style.textTransform="lowercase";
    console.log("lower");
}
let f=16;
document.getElementById("plus").onclick=function(){
    ++f;
    document.getElementById("para").style.fontSize= f+"px";
    console.log("font size large");
}
document.getElementById("minus").onclick=function(){
    --f;
    document.getElementById("para").style.fontSize=f+"px";
    console.log("font is smaller");
}