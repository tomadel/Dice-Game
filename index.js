

//player1 dice number selection
let randomNumberOne = Math.floor((Math.random()*6)+1);
console.log(randomNumberOne);

//player1 image selection
let imgOne = document.querySelector(".img1");
imgOne.setAttribute("src",`/images/dice${randomNumberOne}.png`)


//player2 dice number selection
let randomNumberTwo = Math.floor((Math.random()*6)+1);

//player2 image selection
let imgTwo = document.querySelector(".img2");
imgTwo.setAttribute("src",`/images/dice${randomNumberTwo}.png`);

let resultHeader = document.querySelector(".result");



if (randomNumberOne === randomNumberTwo){
    resultHeader.innerHTML= "Draw";
}else if(randomNumberOne > randomNumberTwo){
    resultHeader.innerHTML = "Player 1 Wins!";
}else{
    resultHeader.innerHTML ="Player 2 Wins!";
}