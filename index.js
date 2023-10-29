function handleClick()
{
    // this.style.color = "white";
    var instrument = this.innerHTML;
    keyPressed(instrument);
    animate(instrument)
}

function keyPressed(key)
{
    switch (key) {
        case "w":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        
        case "a":
            new Audio("sounds/snare.mp3").play();
            break;

        case "s":
            new Audio("sounds/tom-1.mp3").play();
            break;

        case "d":
            new Audio("sounds/tom-2.mp3").play();
            break;
        
        case "j":
            new Audio("sounds/tom-3.mp3").play();
            break;

        case "k":
            new Audio("sounds/tom-4.mp3").play();
            break;

        case "l":
            new Audio("sounds/crash.mp3").play();
            break;
        
        default:
            break;
    }
}

function animate(pressedKey)
{
    var activeButton = document.querySelector("." + pressedKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}

i = 0;
while(i<document.querySelectorAll(".drum").length)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",handleClick);
    i++;
}

//both keypress or keydown events can be used
document.addEventListener("keydown",function(event){
    keyPressed(event.key);
    animate(event.key);
});