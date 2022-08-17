function start(){
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1*6+1;
var randomNumber1 = Math.floor(randomNumber1);
var randomImage1 = "images/dice" + randomNumber1 +".png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src",randomImage1);


var randomNumber2 = Math.random();
randomNumber2 = randomNumber2*6+1;
var randomNumber2 = Math.floor(randomNumber2);
var randomImage2 = "images/dice" + randomNumber2 +".png";
var image1 = document.querySelectorAll("img")[1].setAttribute("src",randomImage2);

if(randomImage1>randomImage2){
    document.querySelector("h1").innerHTML="Player 1 wins 🙌";
    setTimeout(function(){
        alert("Click on start to Play again ");
    },800);
    
    

}
else if(randomImage2>randomImage1){
    document.querySelector("h1").innerHTML="Player 2 wins 🙌";
    setTimeout(function(){
        alert("Click on start to Play again ");
    },800);
    
    

}
else if(randomImage2===randomImage1){
    document.querySelector("h1").innerHTML="Draw!";
    setTimeout(function(){
        alert("Click on start to Play again ");
    },800);
    

}

else{
    document.querySelector("h1").innerHTML="Start to Play!"

}
}

document.querySelector(".start").addEventListener("click",function(){

click();
    
});

function click(){
    document.querySelector(".start").classList.add("click");
    setTimeout(function(){
        document.querySelector(".start").classList.remove("click"); 
    },100);
}