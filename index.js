
//Detecting Button Press



var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () 
  {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  
    
  }
  );
}


//Detecting Key Press



document.addEventListener( "keypress",function (event)
{
  makeSound(event.key);
  buttonAnimation(event.key);

});



///for Sounds

function makeSound(key){


  switch (key) {
    case "w":
      var tom = new Audio("tom-1.mp3");
      tom.play();

      break;

    case "a":
      var tom2 = new Audio("tom-2.mp3");
      tom2.play();
      break;

    case "s":
        var tom3 = new Audio("tom-3.mp3");
        tom3.play();
        break;

    case "d":
        var tom4 = new Audio("tom-4.mp3");
        tom4.play();
        break;
    
    case "j":
        var snare = new Audio("snare.mp3");
        snare.play();
        break;
    case "k":
        var crash = new Audio("crash.mp3");
        crash.play();
        break;
    case "l":
        var kickbass = new Audio("kick-bass.mp3");
        kickbass.play();
        break;
    default:
      break;
  }
  

}


function buttonAnimation(currentKey){

  

}


