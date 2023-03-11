// Get all elements with class "myButton"
let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let card6 = document.getElementById("card6");
let card7 = document.getElementById("card7");
let card8 = document.getElementById("card8");
let card9 = document.getElementById("card9");

card1.addEventListener("click",xo1);
card2.addEventListener("click",xo2);
card3.addEventListener("click",xo3);
card4.addEventListener("click",xo4);
card5.addEventListener("click",xo5);
card6.addEventListener("click",xo6);
card7.addEventListener("click",xo7);
card8.addEventListener("click",xo8);
card9.addEventListener("click",xo9);

let image_player1 = document.getElementById("image1");
let image_player1_x = document.getElementById("imagex1");

let image_player2 = document.getElementById("image2");
let image_player2_x = document.getElementById("imagex2");

let image_player3 = document.getElementById("image3");
let image_player3_x = document.getElementById("imagex3");

let image_player4 = document.getElementById("image4");
let image_player4_x = document.getElementById("imagex4");

let image_player5 = document.getElementById("image5");
let image_player5_x = document.getElementById("imagex5");

let image_player6 = document.getElementById("image6");
let image_player6_x = document.getElementById("imagex6");

let image_player7 = document.getElementById("image7");
let image_player7_x = document.getElementById("imagex7");

let image_player8 = document.getElementById("image8");
let image_player8_x = document.getElementById("imagex8");

let image_player9 = document.getElementById("image9");
let image_player9_x = document.getElementById("imagex9");

/****desision*** */

let player = 1;
let andGame = 0;
let player_logo ;
let player_logo_next ;
function link(){
    if(player == 1){
        player_logo = "x";
        player_logo_next = "o";
        player = 2;
    }  
    else{
        player_logo = "o";
        player_logo_next = "x";
        player = 1;
    }
    image_player1.setAttribute("src",`icon/1_${player_logo_next}.png`);
    image_player2.setAttribute("src",`icon/1_${player_logo_next}.png`);
    image_player3.setAttribute("src",`icon/1_${player_logo_next}.png`);
    image_player4.setAttribute("src",`icon/1_${player_logo_next}.png`);
    image_player5.setAttribute("src",`icon/1_${player_logo_next}.png`);
    image_player6.setAttribute("src",`icon/1_${player_logo_next}.png`);
    image_player7.setAttribute("src",`icon/1_${player_logo_next}.png`);
    image_player8.setAttribute("src",`icon/1_${player_logo_next}.png`);
    image_player9.setAttribute("src",`icon/1_${player_logo_next}.png`);

}

function xo1(){
    if(image_player1_x.getAttribute("src") == "n" && andGame == 0)
    {
        link();
        image_player1_x.setAttribute("src",`icon/2_${player_logo}.png`);
        image_player1.style.visibility="hidden";
        image_player1_x.style.visibility="visible";
        test();
    }
}
function xo2(){
    if(image_player2_x.getAttribute("src") == "n" && andGame == 0)
    {
        link();
        image_player2_x.setAttribute("src",`icon/2_${player_logo}.png`);
        image_player2.style.visibility="hidden";
        image_player2_x.style.visibility="visible";
        test();
    }
}
function xo3(){
    if(image_player3_x.getAttribute("src") == "n" && andGame == 0)
    {
        link();
        image_player3_x.setAttribute("src",`icon/2_${player_logo}.png`);
        image_player3.style.visibility="hidden";
        image_player3_x.style.visibility="visible";
        test();
    }
}
function xo4(){
    if(image_player4_x.getAttribute("src") == "n" && andGame == 0)
    {
        link();
        image_player4_x.setAttribute("src",`icon/2_${player_logo}.png`);
        image_player4.style.visibility="hidden";
        image_player4_x.style.visibility="visible";
        test();
    }
}
function xo5(){
    if(image_player5_x.getAttribute("src") == "n" && andGame == 0)
    {
        link();
        image_player5_x.setAttribute("src",`icon/2_${player_logo}.png`);
        image_player5.style.visibility="hidden";
        image_player5_x.style.visibility="visible";
        test();
    }
}
function xo6(){
    if(image_player6_x.getAttribute("src") == "n" && andGame == 0)
    {
        link();
        image_player6_x.setAttribute("src",`icon/2_${player_logo}.png`);
        image_player6.style.visibility="hidden";
        image_player6_x.style.visibility="visible";
        test();
    }
}
function xo7(){
    if(image_player7_x.getAttribute("src") == "n" && andGame == 0)
    {
        link();
        image_player7_x.setAttribute("src",`icon/2_${player_logo}.png`);
        image_player7.style.visibility="hidden";
        image_player7_x.style.visibility="visible";
        test();
    }
}
function xo8(){
    if(image_player8_x.getAttribute("src") == "n" && andGame == 0)
    {
        link();
        image_player8_x.setAttribute("src",`icon/2_${player_logo}.png`);
        image_player8.style.visibility="hidden";
        image_player8_x.style.visibility="visible";
        test();
    }
}
function xo9(){
    if(image_player9_x.getAttribute("src") == "n" && andGame == 0)
    {
        link();
        image_player9_x.setAttribute("src",`icon/2_${player_logo}.png`);
        image_player9.style.visibility="hidden";
        image_player9_x.style.visibility="visible";
        test();
    }
}

let button = document.getElementById("button");
let winner1 = document.getElementById("winner1");
let winner2 = document.getElementById("winner2");
let winner3 = document.getElementById("winner3");
let winner4 = document.getElementById("winner4");
let winner5 = document.getElementById("winner5");
let winner6 = document.getElementById("winner6");
let winner7 = document.getElementById("winner7");
let winner8 = document.getElementById("winner8");

let player_red = document.getElementById("player_red");
let player_green = document.getElementById("player_green");
const audio = new Audio('icon/winner.mp3');

let party = document.getElementById("party");
button.addEventListener("click",refrech);

function test()
{
    if(andGame == 0)
    {
        if(image_player1_x.getAttribute("src")==image_player2_x.getAttribute("src") && image_player2_x.getAttribute("src")==image_player3_x.getAttribute("src") && (image_player1_x.getAttribute("src") != "n"))
        {
            party.style.visibility="visible";
            button.style.visibility="visible";
            winner6.style.animation="winer 0.5s linear forwards";
            if(image_player1_x.getAttribute("src") == "icon/2_x.png")
                player_red.style.animation = "winerImg 1s linear infinite";
            else
                player_green.style.animation = "winerImg 1s linear infinite";
            audio.play();
            andGame = 1;

        }
        else if(image_player5_x.getAttribute("src")==image_player4_x.getAttribute("src") && image_player4_x.getAttribute("src")==image_player6_x.getAttribute("src") && (image_player6_x.getAttribute("src") != "n"))
        {
            party.style.visibility="visible";
            button.style.visibility="visible";
            winner7.style.animation="winer 0.5s linear forwards";
            if(image_player5_x.getAttribute("src") == "icon/2_x.png")
                player_red.style.animation = "winerImg 1s linear infinite";
            else
                player_green.style.animation = "winerImg 1s linear infinite";
                audio.play();
                andGame = 1;
        }
        else if(image_player7_x.getAttribute("src")==image_player8_x.getAttribute("src") && image_player8_x.getAttribute("src")==image_player9_x.getAttribute("src") && (image_player9_x.getAttribute("src") != "n"))
        {
            party.style.visibility="visible";
            button.style.visibility="visible";
            winner8.style.animation="winer 0.5s linear forwards";
            if(image_player7_x.getAttribute("src") == "icon/2_x.png")
                player_red.style.animation = "winerImg 1s linear infinite";
            else
                player_green.style.animation = "winerImg 1s linear infinite";
                audio.play();
                andGame = 1;
        }   
        else if(image_player1_x.getAttribute("src")==image_player4_x.getAttribute("src") && image_player4_x.getAttribute("src")==image_player7_x.getAttribute("src") && (image_player4_x.getAttribute("src") != "n"))
        {
            party.style.visibility="visible";
            button.style.visibility="visible";
            winner1.style.animation="winer 0.5s linear forwards";
            if(image_player1_x.getAttribute("src") == "icon/2_x.png")
                player_red.style.animation = "winerImg 1s linear infinite";
            else
                player_green.style.animation = "winerImg 1s linear infinite";
                audio.play();
                andGame = 1;
        }
        else if(image_player2_x.getAttribute("src")==image_player5_x.getAttribute("src") && image_player5_x.getAttribute("src")==image_player8_x.getAttribute("src") && (image_player8_x.getAttribute("src") != "n"))
        {
            party.style.visibility="visible";
            button.style.visibility="visible";
            winner2.style.animation="winer 0.5s linear forwards";
            if(image_player2_x.getAttribute("src") == "icon/2_x.png")
                player_red.style.animation = "winerImg 1s linear infinite";
            else
                player_green.style.animation = "winerImg 1s linear infinite";
                audio.play();
                andGame = 1;
        }
        else if(image_player3_x.getAttribute("src")==image_player6_x.getAttribute("src") && image_player6_x.getAttribute("src")==image_player9_x.getAttribute("src") && (image_player9_x.getAttribute("src") != "n"))
        {
            party.style.visibility="visible";
            button.style.visibility="visible";
            winner3.style.animation="winer 0.5s linear forwards";
            if(image_player3_x.getAttribute("src") == "icon/2_x.png")
                player_red.style.animation = "winerImg 1s linear infinite";
            else
                player_green.style.animation = "winerImg 1s linear infinite";
                audio.play();
                andGame = 1;
        }
        else if(image_player1_x.getAttribute("src")==image_player5_x.getAttribute("src") && image_player5_x.getAttribute("src")==image_player9_x.getAttribute("src") && (image_player9_x.getAttribute("src") != "n"))
        {
            party.style.visibility="visible";
            button.style.visibility="visible";
            winner5.style.animation="winer 0.5s linear forwards";
            if(image_player1_x.getAttribute("src") == "icon/2_x.png")
                player_red.style.animation = "winerImg 1s linear infinite";
            else
                player_green.style.animation = "winerImg 1s linear infinite";
                audio.play();
                andGame = 1;
        }
        else if(image_player3_x.getAttribute("src")==image_player5_x.getAttribute("src") && image_player5_x.getAttribute("src")==image_player7_x.getAttribute("src") && (image_player7_x.getAttribute("src") != "n"))
        {
            button.style.visibility="visible";
            winner4.style.animation="winer 0.5s linear forwards";
            if(image_player3_x.getAttribute("src") == "icon/2_x.png")
                player_red.style.animation = "winerImg 1s linear infinite";
            else
                player_green.style.animation = "winerImg 1s linear infinite";
                audio.play();
                andGame = 1;
            party.style.visibility="visible";
        }
        else if((image_player1_x.getAttribute("src") != "n")&&(image_player2_x.getAttribute("src") != "n")&&(image_player3_x.getAttribute("src") != "n")&&
        (image_player4_x.getAttribute("src") != "n")&&(image_player5_x.getAttribute("src") != "n")&&(image_player6_x.getAttribute("src") != "n")&&
        (image_player7_x.getAttribute("src") != "n")&&(image_player8_x.getAttribute("src") != "n")&&(image_player9_x.getAttribute("src") != "n"))
            button.style.visibility="visible";
    }
}
function refrech(){
    player = 2;
    link();
    party.style.visibility="hidden";
    button.style.visibility="hidden";
    image_player1.style.visibility="";
    image_player1_x.setAttribute("src","n");
    image_player1_x.style.visibility="hidden";
    image_player2.style.visibility="";
    image_player2_x.setAttribute("src","n");
    image_player2_x.style.visibility="hidden";
    image_player3.style.visibility="";
    image_player3_x.setAttribute("src","n");
    image_player3_x.style.visibility="hidden";
    image_player4.style.visibility="";
    image_player4_x.setAttribute("src","n");
    image_player4_x.style.visibility="hidden";
    image_player5.style.visibility="";
    image_player5_x.setAttribute("src","n");
    image_player5_x.style.visibility="hidden";
    image_player6.style.visibility="";
    image_player6_x.setAttribute("src","n");
    image_player6_x.style.visibility="hidden";
    image_player7.style.visibility="";
    image_player7_x.setAttribute("src","n");
    image_player7_x.style.visibility="hidden";
    image_player8.style.visibility="";
    image_player8_x.setAttribute("src","n");
    image_player8_x.style.visibility="hidden";
    image_player9.style.visibility="";
    image_player9_x.setAttribute("src","n");
    image_player9_x.style.visibility="hidden";
    winner1.style.animation="testt 0.5s linear forwards";
    winner2.style.animation="testt 0.5s linear forwards";
    winner3.style.animation="testt 0.5s linear forwards";
    winner4.style.animation="testt 0.5s linear forwards";
    winner5.style.animation="testt 0.5s linear forwards";
    winner6.style.animation="testt 0.5s linear forwards";
    winner7.style.animation="testt 0.5s linear forwards";
    winner8.style.animation="testt 0.5s linear forwards";
    player_red.style.animation = "testt 1s linear infinite";
    player_green.style.animation = "testt 1s linear infinite";
    andGame = 0;
}
/*****************eys */
