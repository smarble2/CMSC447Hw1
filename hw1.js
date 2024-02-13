/*
Author: Shianne Marbley
File: hw1.js
*/
function myFunction() {
    //this for my pink homepage
    //shows messgaes and picture
    //change the background color of the body 
    document.body.style.backgroundColor = 'rgba(239,122,173,1)';
    //vars for each line of text
    var msg = document.getElementById("message");
    var msg2 = document.getElementById("message2");
    var msg3 = document.getElementById("message3");
    var msg4= document.getElementById("message4");
    var homeMsg = document.getElementById("homeMessage");
    //actual messages
    msg.innerText = "My name is Shianne Marbley!\n";
    msg2.innerText = "*Major: Computer Science \n *Graduation:Spring 2024\n";
    msg3.innerText = "*Favorite Color: Pink💖 and/or Purple💜";
    msg4.innerText = "*Favorite animal: Turtle𓆉";
    //deletes home message 
    homeMsg.innerText = "";
    
    var pic = document.getElementById("shianne-pic");
    pic.style.display = "block"; //causes the image to t show

    
}
function homeFunction() {
    //for my home page 
    //change the background color of the body 
    document.body.style.backgroundColor = 'rgba(173,216,230,1)';
    //var and message
    var homeMsg = document.getElementById("homeMessage");
    homeMsg.innerText = "Welcome to Shianne's 447 Homework!\n This is the Home Page🏠 \nPlease click About Me tab to learn more about me";
    //remove messages from about me page
    var msg = document.getElementById("message");
    var msg2 = document.getElementById("message2");
    var msg3 = document.getElementById("message3");
    var msg4= document.getElementById("message4");
    msg.innerText = "";
    msg2.innerText = "";
    msg3.innerText = "";
    msg4.innerText = "";

    //hides photo
    var pic = document.getElementById("shianne-pic");
    pic.style.display = "none"; //causes the image to not show


}

