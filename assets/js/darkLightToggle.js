if (localStorage.getItem("mode") == null){
    console.log("no mode")
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        localStorage.setItem("mode", "dark")
    }
    else {
        localStorage.setItem("mode", "light")
    }
}else{
    console.log(localStorage.getItem("mode"))
    let buttons = document.body.getElementsByTagName("button")
    if(localStorage.getItem("mode") == "dark"){
        document.body.classList.add("dark2")
        document.body.classList.remove("light")
        for(let i = 0; i < buttons.length; i++){
            let svgs = document.body.getElementsByTagName("button")[i].getElementsByTagName("svg")
            for(let j = 0; j < svgs.length; j++){
                document.body.getElementsByTagName("button")[i].getElementsByTagName("svg")[j].classList.add("dark")
                document.body.getElementsByTagName("button")[i].getElementsByTagName("svg")[j].classList.remove("light")
            }
        }
    }else{
        document.body.classList.add("light2")
        document.body.classList.remove("dark")
        for(let i = 0; i < buttons.length; i++){
            let svgs = document.body.getElementsByTagName("button")[i].getElementsByTagName("svg")
            for(let j = 0; j < svgs.length; j++){
                document.body.getElementsByTagName("button")[i].getElementsByTagName("svg")[j].classList.add("light")
                document.body.getElementsByTagName("button")[i].getElementsByTagName("svg")[j].classList.remove("dark")
            }
        }
    }
}

function toggleDarkMode(){
    let buttons = document.body.getElementsByTagName("button")
    if(localStorage.getItem("mode") == "dark"){
        document.body.classList.remove("dark")
        document.body.classList.remove("dark2")
        document.body.classList.add("light")
        for(let i = 0; i < buttons.length; i++){
            let svgs = document.body.getElementsByTagName("button")[i].getElementsByTagName("svg")
            for(let j = 0; j < svgs.length; j++){
                document.body.getElementsByTagName("button")[i].getElementsByTagName("svg")[j].classList.remove("dark")
                document.body.getElementsByTagName("button")[i].getElementsByTagName("svg")[j].classList.add("light")
            }
        }
        localStorage.setItem("mode", "light")
    }else{
        document.body.classList.remove("light")
        document.body.classList.remove("light2")
        document.body.classList.add("dark")
        for(let i = 0; i < buttons.length; i++){
            let svgs = document.body.getElementsByTagName("button")[i].getElementsByTagName("svg")
            for(let j = 0; j < svgs.length; j++){
                document.body.getElementsByTagName("button")[i].getElementsByTagName("svg")[j].classList.remove("light")
                document.body.getElementsByTagName("button")[i].getElementsByTagName("svg")[j].classList.add("dark")
            }
        }
        localStorage.setItem("mode", "dark")
    }
}