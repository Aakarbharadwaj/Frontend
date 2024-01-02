let btn = document.querySelector("#btn");
        // let heading = document.querySelector("h1");
        btn.onclick=function(){
            let heading = document.createElement("h1");
            // console.log(heading);
            let name = document.querySelector("input").value;
            heading.innerText = name;
            // console.log(heading);
            document.querySelector("#test").appendChild(heading);
            // document.body.appendChild(heading);
        }