rand = (Math.floor((Math.random() * 400)));
let screenWidth = window.outerWidth;

let myTama = {
    name: 0,
    age: 0,
    hunger: 0,
    sleep: 0,
    bored: 0,
    ager: 0,
    noFood: 0,
    noSleep: 0,
    noFun: 0,
    gameBegin: function gameBegin() {
        myTama.age=0;
        myTama.hunger=0;
        myTama.sleep=0;
        myTama.bored=0;
        myTama.name = $("#tamaNameInput").val();
        $("#tamaName").html("<h2 id='tamaName'>" + myTama.name + "&nbsp;</h2>");
        myTama.ager = setInterval(ageUp,200);
        myTama.noFood = setInterval(addHung, 250);
        myTama.noSleep = setInterval(addTired, 750);
        myTama.noFun = setInterval(addBored, (rand + 100));
    }
}
$("#startButton").click(myTama.gameBegin);
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
checkVitals = function checkVitals() {
    if (myTama.age==50){
        $("#deadNotification").html(myTama.name + " is getting older.")
        $("#displayKitten").replaceWith("<img src='https://media4.giphy.com/media/7Cr71vflxfGFO/source.gif' alt='Kitten Gif' id='displayCat'>")
        $("#displayDog").replaceWith("<img src='https://i.gifer.com/1LFX.gif' alt='Kitten Gif' id='displayOldDog'>")
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
        $("#deadNotification").html(myTama.name + " died of starvation. <br>You've been arrested for animal cruelty.")
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
resize = function resize() {
    $("body").width(screenWidth);
}
easterEgg = function easterEgg() {
    $(".display").html("<img src='https://data.whicdn.com/images/283530751/original.gif' alt='Kitten Gif' id='displayDog'>")
}
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
resize();