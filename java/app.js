// The rand variable is used in the bored interval to add a level of randomness to the game
rand = (Math.floor((Math.random() * 400)));
let myTama = {
    // I could not use a boolean because I would automatically switch to true partway through, I could not find any code that could do this so I just switched it a string and that worked
    dog: "no",
    name: 0,
    age: 0,
    hunger: 0,
    sleep: 0,
    bored: 0,
    ager: 0,
    noFood: 0,
    noSleep: 0,
    noFun: 0,
    meow: 0,
    // gameBegin starts the game from the start button and ties the setIntervals to the last 5 variables so they can be cleared after the game ends.
    gameBegin: function gameBegin() {
        myTama.age=0;
        myTama.hunger=0;
        myTama.sleep=0;
        myTama.bored=0;
        myTama.name = $("#tamaNameInput").val();
        $("#tamaName").html("<h2 id='tamaName'>" + myTama.name + "&nbsp;</h2>");
        // The following 5 lines set the time frame to call each function, creating the increasing hunger, tiredness, and bored
        myTama.ager = setInterval(ageUp,20000);
        myTama.noFood = setInterval(addHung, 250);
        myTama.noSleep = setInterval(addTired, 750);
        myTama.noFun = setInterval(addBored, (rand + 100));
        myTama.meow = setInterval(playMeow, 70000);
    }
}
$("#startButton").click(myTama.gameBegin);
//The playMeow function is used to play a meow or "bark" (really a croak) itermittently
playMeow = function playMeow() {
    if (myTama.dog=="no") {
        let audio = document.getElementById("meow");
        audio.play(); 
        }
    else if (myTama.dog=="yes") {
        let audio = document.getElementById("bark");
        audio.play(); 
    }
}
//The following four functions increase they're respective variable in a similar fashion to each other.
ageUp = function ageUp() {
    $("#tamaAge").html("<h2 id='tamaAge'>" + (myTama.age+1) + "&nbsp;</h2>");
    $("#ageBar>div").width(myTama.age + "%");
    myTama.age = myTama.age + 1;
    checkVitals();
}
addHung = function addHung() {
    $("#tamaHungies").html("<h2 id='tamaHungies'>" + (myTama.hunger+1) + "&nbsp;</h2>");
    $("#hungerBar>div").width(myTama.hunger + "%");
    myTama.hunger = myTama.hunger + 1;
    checkVitals();
}
addTired = function addTired() {
    $("#tamaSleepies").html("<h2 id='tamaSleepies'>" + (myTama.sleep+1) + "&nbsp;</h2>")
    $("#sleepBar>div").width(myTama.sleep + "%");
    myTama.sleep = myTama.sleep + 1;
    checkVitals();
}
addBored = function addBored() {
    $("#tamaBoredom").html("<h2 id='tamaBoredom'>" + (myTama.bored+1) + "&nbsp;</h2>")
    $("#boredBar>div").width(myTama.bored + "%");
    myTama.bored = myTama.bored + 1;
    checkVitals();
}
// The check vitals function is used to effectively test for death as well as execute age-related events such as the switching of the display photo
checkVitals = function checkVitals() {
    if (myTama.age==50){
        $("#deadNotification").html(myTama.name + " is getting older.")
        $("#displayKitten").replaceWith("<img src='https://media4.giphy.com/media/7Cr71vflxfGFO/source.gif' alt='Kitten Gif' id='displayCat'>")
        $("#displayDog").replaceWith("<img src='https://cdnb.artstation.com/p/assets/images/images/024/686/413/original/christiana-james-baby-yoda-bounce.gif?1583213245' alt='Kitten Gif' id='displayOldDog'>")
    }
    else if(myTama.bored==85){
        $("#deadNotification").html(myTama.name + "'s boredom is dangerously high.")
    }
    else if(myTama.hunger==85){
        $("#deadNotification").html(myTama.name + " is dangerously close to starving.")
    }
    else if(myTama.sleep==85){
        $("#deadNotification").html(myTama.name + " is very tired, let him sleep.")
    }
    else if (myTama.age>=100) {
        clearInterval(myTama.ager);
        clearInterval(myTama.noFood);
        clearInterval(myTama.noSleep);
        clearInterval(myTama.noFun);
        console.log("he like dead tho");
        $("#deadNotification").html(myTama.name + " died of old age.<br>You 'win'.")
        $(".display").html("<img src='https://preview.pixlr.com/images/800wm/100/1/1001519923.jpg' alt='Kitten Gif' id='displayDead'>")
    }
    else if (myTama.hunger>=100) {
        clearInterval(myTama.ager);
        clearInterval(myTama.noFood);
        clearInterval(myTama.noSleep);
        clearInterval(myTama.noFun);
        console.log("he like dead tho");
        $("#deadNotification").html(myTama.name + " died of starvation. <br>You've been arrested for<br> animal cruelty.")
        $(".display").html("<img src='https://preview.pixlr.com/images/800wm/100/1/1001519923.jpg' alt='Kitten Gif' id='displayDead'>")
    }
    else if (myTama.sleep>=100) {
        clearInterval(myTama.ager);
        clearInterval(myTama.noFood);
        clearInterval(myTama.noSleep);
        clearInterval(myTama.noFun);
        console.log("he like dead tho");
        $("#deadNotification").html(myTama.name + " died of exhaustion.<br> You should've let him sleep.")
        $(".display").html("<img src='https://preview.pixlr.com/images/800wm/100/1/1001519923.jpg' alt='Kitten Gif' id='displayDead'>")
    }
    else if (myTama.bored>=100) {
        clearInterval(myTama.ager);
        clearInterval(myTama.noFood);
        clearInterval(myTama.noSleep);
        clearInterval(myTama.noFun);
        console.log("he like dead tho");
        $("#deadNotification").html(myTama.name + " literally died of boredom. <br> You  should've sent him to General Assembly.")
        $(".display").html("<img src='https://preview.pixlr.com/images/800wm/100/1/1001519923.jpg' alt='Kitten Gif' id='displayDead'>")
    }
}
// The following three functions are used to "feed" "put to sleep" "play with" the tamagotchi and reset the variables
clearHung = function clearHung() {
    myTama.hunger = 0;
    let audio = document.getElementById("munch");
    audio.play();
    $("#hungerBar").width(0);
    $("#tamaHungies").html("<h2 id='tamaHungies'>" + (myTama.hunger) + "&nbsp;</h2>")
}
clearTired = function clearTired() {
    myTama.sleep = 0;
    let audio = document.getElementById("yawn");
    audio.play();
    $("#sleepBar").width(0);
    $("#tamaSleepies").html("<h2 id='tamaSleepies'>" + (myTama.sleep) + "&nbsp;</h2>")
}
clearBored = function clearBored() {
    myTama.bored = 0;
    let audio = document.getElementById("yay");
    audio.play();
    $("#boredBar").width(0);
    $("#tamaBoredom").html("<h2 id='tamaBoredom'>" + (myTama.bored) + "&nbsp;</h2>")
}
// The Easter Egg isn't much, more of a thing I added on at the end for fun, you trigger it by pressing the very small button near the button of the page
easterEgg = function easterEgg() {
    myTama.dog="yes";
    $(".display").html("<img src='https://media0.giphy.com/media/fV2Tnvl2gULIA5qamy/giphy.gif' alt='Kitten Gif' id='displayDog'>")
}
// The following function is used to ensure that the page does not scroll on refresh, as with the overflow-x hidden it was impossible to scroll back. Inspired by and perhaps paraphrased from code found on stack overflow.
$(document).ready(function() {
    if (window.location.hash) { 
        $(document).scroll( function() {
            let hash = window.location.hash
            let hashID = hash.substring(1, hash.length);
            let element;
            if ($(hash).length != 0) {
                element = $(hash);
            }
            else if ($('a[name="' + hashID + '"]').length != 0)
            {
            element = $('a[name="' + hashID + '"]:first');
            }
            if (element != undefined) {
                window.scrollTo(0, element.position().top);
            }
            $(document).unbind("scroll");
        });
    }

});
$("#foodButton").click(clearHung);
$("#sleepButton").click(clearTired);
$("#playButton").click(clearBored);
$("#easterEggButton").click(easterEgg);