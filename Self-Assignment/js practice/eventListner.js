        let btn=document.querySelector("button");
        let body=document.querySelector("body");
        let currMode="light";
        
        btn.addEventListener("click",()=>{
            if(currMode === "light"){
                currMode = "dark";
                body.classList.add("dark");
                body.classList.remove("light");
                console.log("light");
            }
            
            else{
                currMode = "light";
                body.classList.add("light");
                body.classList.remove("dark");
                console.log("dark");
            }
        })