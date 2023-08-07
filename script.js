function animate(targetButton) {
    targetButton.classList.add("pressed");
    setTimeout(function () {
        targetButton.classList.remove("pressed");
    },200)
}

for(let i=0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        let currentElement=this;
        this.classList.add("white")
        let btnInnerHtml= this.innerHTML;
        animate(currentElement);
        // setTimeout(()=>{
        //     this.style.color="red"; it works too
        // },2000)
        setTimeout(function (){
            currentElement.classList.remove("white");
        },200)
        switch (btnInnerHtml) {
            case "w":
                let tom1=new Audio("sounds/tom-1.mp3")
                tom1.play();
                break;
            case "a":
                let tom2=new Audio("sounds/tom-2.mp3")
                tom2.play();
                break;
            case "s":
                let tom3=new Audio("sounds/tom-3.mp3")
                tom3.play();
                break;    
            case "d":
                let tom4=new Audio("sounds/tom-4.mp3")
                tom4.play();
                break;
            case "j":
                let snare=new Audio("sounds/snare.mp3")
                snare.play();
                break;
            case "k":
                let crash=new Audio("sounds/crash.mp3")
                crash.play();
                break;                
            case "l":
                let kick=new Audio("sounds/kick-bass.mp3")
                kick.play();
                break;   
            default:
                break;
        }
    
    })
}

document.addEventListener("keydown",function(event){
    switch (event.key) {
        case "w":
            animate(document.querySelector(".w"));
            document.querySelector(".w").classList.add("white");
            let tom1=new Audio("sounds/tom-1.mp3")
            tom1.play();
            setTimeout(function (){
                document.querySelector(".w").classList.remove("white");
            },200)
            break;
        case "a":
            animate(document.querySelector(".a"));
            document.querySelector(".a").classList.add("white");
            let tom2=new Audio("sounds/tom-2.mp3")
            tom2.play();
            setTimeout(function (){
                document.querySelector(".a").classList.remove("white");
            },200)
            break;
        case "s":
            animate(document.querySelector(".s"));
            document.querySelector(".s").classList.add("white");
            let tom3=new Audio("sounds/tom-3.mp3")
            tom3.play();
            setTimeout(function (){
                document.querySelector(".s").classList.remove("white");
            },200)
            break;    
        case "d":
            animate(document.querySelector(".d"));
            document.querySelector(".d").classList.add("white");
            let tom4=new Audio("sounds/tom-4.mp3")
            tom4.play();
            setTimeout(function (){
                document.querySelector(".d").classList.remove("white");
            },200)
            break;
        case "j":
            animate(document.querySelector(".j"));
            document.querySelector(".j").classList.add("white");
            let snare=new Audio("sounds/snare.mp3")
            snare.play();
            setTimeout(function (){
                document.querySelector(".j").classList.remove("white");
            },200)
            break;
        case "k":
            animate(document.querySelector(".k"));
            document.querySelector(".k").classList.add("white");
            let crash=new Audio("sounds/crash.mp3")
            crash.play();
            setTimeout(function (){
                document.querySelector(".k").classList.remove("white");
            },200)
            break;                
        case "l":
            animate(document.querySelector(".l"));
            document.querySelector(".l").classList.add("white");
            let kick=new Audio("sounds/kick-bass.mp3")
            kick.play();
            setTimeout(function (){
                document.querySelector(".l").classList.remove("white");
            },200)
            break;   
        default:
            break;
    }
})

