rand = (Math.floor((Math.random() * 4000)));
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
        myTama.name = $("#tamaNameInput").val();
        $("#tamaName").html("<h2 id='tamaAge'>" + myTama.name + "&nbsp;</h2>");
        myTama.ager = setInterval(ageUp,20000);
        myTama.noFood = setInterval(addHung, 2500);
        myTama.noSleep = setInterval(addTired, 7500);
        myTama.noFun = setInterval(addBored, (rand + 1000));
    }
}
$("#startButton").click(myTama.gameBegin);
ageUp = function ageUP() {
    $("#tamaAge").html("<h2 id='tamaAge'>" + (myTama.age+1) + "&nbsp;</h2>");
    myTama.age = myTama.age + 1;
    checkVitals();
}
addHung = function addHung() {
    $("#tamaHungies").html("<h2 id='tamaHungies'>" + (myTama.hunger+1) + "&nbsp;</h2>")
    myTama.hunger = myTama.hunger + 1;
    checkVitals();
}
addTired = function addTired() {
    $("#tamaSleepies").html("<h2 id='tamaSleepies'>" + (myTama.sleep+1) + "&nbsp;</h2>")
    myTama.sleep = myTama.sleep + 1;
    checkVitals();
}
addBored = function addBored() {
    $("#tamaBoredom").html("<h2 id='tamaBoredom'>" + (myTama.bored+1) + "&nbsp;</h2>")
    myTama.bored = myTama.bored + 1;
    checkVitals();
}
checkVitals = function checkVitals() {
    if (myTama.age>=60) {
        clearInterval(myTama.ager);
        clearInterval(myTama.noFood);
        clearInterval(myTama.noSleep);
        clearInterval(myTama.noFun);
        console.log("he like dead tho");
        $("#deadNotification").html(myTama.name + " died of old age. This is the best you could've hope for. More death. You 'win'")
        $(".display").html("<img src='https://preview.pixlr.com/images/800wm/100/1/1001519923.jpg' alt='Kitten Gif' id='displayDead'>")
    }
    else if (myTama.hunger>=10) {
        clearInterval(myTama.ager);
        clearInterval(myTama.noFood);
        clearInterval(myTama.noSleep);
        clearInterval(myTama.noFun);
        console.log("he like dead tho");
        $("#deadNotification").html(myTama.name + " died of starvation. <br>You've been arrested for neglect and animal abuse.")
        $(".display").html("<img src='https://preview.pixlr.com/images/800wm/100/1/1001519923.jpg' alt='Kitten Gif' id='displayDead'>")
    }
    else if (myTama.sleep>=10) {
        clearInterval(myTama.ager);
        clearInterval(myTama.noFood);
        clearInterval(myTama.noSleep);
        clearInterval(myTama.noFun);
        console.log("he like dead tho");
        $("#deadNotification").html(myTama.name + " died of exhaustion.<br> You should've let him sleep.")
        $(".display").html("<img src='https://preview.pixlr.com/images/800wm/100/1/1001519923.jpg' alt='Kitten Gif' id='displayDead'>")
    }
    else if (myTama.bored>=10) {
        clearInterval(myTama.ager);
        clearInterval(myTama.noFood);
        clearInterval(myTama.noSleep);
        clearInterval(myTama.noFun);
        console.log("he like dead tho");
        $("#deadNotification").html(myTama.name + "died of boredom. <br> You literally made " + myTama.name + "'s life so miserable he died.")
        $(".display").html("<img src='https://preview.pixlr.com/images/800wm/100/1/1001519923.jpg' alt='Kitten Gif' id='displayDead'>")
    }
}
clearHung = function clearHung() {
    myTama.hunger = 0;
    $("#tamaHungies").html("<h2 id='tamaHungies'>" + (myTama.hunger) + "&nbsp;</h2>")
}
clearTired = function clearTired() {
    myTama.sleep = 0;
    $("#tamaSleepies").html("<h2 id='tamaSleepies'>" + (myTama.sleep) + "&nbsp;</h2>")
}
clearBored = function clearBored() {
    myTama.bored = 0;
    $("#tamaBoredom").html("<h2 id='tamaBoredom'>" + (myTama.bored) + "&nbsp;</h2>")
}
$("#foodButton").click(clearHung);
$("#sleepButton").click(clearTired);
$("#playButton").click(clearBored);