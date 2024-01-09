
function getCard(titel,name,views,time,month){
    let viewstr
    if(views<1000){
        viewstr = views;
    }
    else if(views>1000000){
        viewstr = views/1000 + "M";
    }
    else{
        viewstr = views/1000 + "K";
    }
    let html =`<div class="card">
    <div class="left">
        <div class="img">
                    <img src="http://source.unsplash.com/150x100?coding" alt="" class="thumnail">
                </div>
        <div class="time"><p>${time}</p></div>
    </div>
    <div class="info">
        <p class="title">${titel}</p>
        <p class="card-flex">${name} . ${viewstr} views . ${month} months ago</p>
    </div>
</div>`

document.querySelector(".container").innerHTML += html;
}


getCard("Learn javaScript inn detail video #1","Code with Aakar",900000,"12:55",2);

