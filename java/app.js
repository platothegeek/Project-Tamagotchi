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
        myTama.ager = setInterval(ageUp,20000);
        myTama.noFood = setInterval(addHung, 2500);
        myTama.noSleep = setInterval(addTired, 7500);
        myTama.noFun = setInterval(addBored, (rand + 1000));
    }
}
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
        
        $(".display").html("<img src='https://preview.pixlr.com/images/800wm/100/1/1001519923.jpg' alt='Kitten Gif' id='displayDead'>")
    }
    else if (myTama.hunger>=10) {
        clearInterval(myTama.ager);
        clearInterval(myTama.noFood);
        clearInterval(myTama.noSleep);
        clearInterval(myTama.noFun);
        console.log("he like dead tho");
        $("#deadNotification").html("died!")
        $(".display").html("<img src='https://preview.pixlr.com/images/800wm/100/1/1001519923.jpg' alt='Kitten Gif' id='displayDead'>")
    }
    else if (myTama.sleep>=10) {
        clearInterval(myTama.ager);
        clearInterval(myTama.noFood);
        clearInterval(myTama.noSleep);
        clearInterval(myTama.noFun);
        console.log("he like dead tho");
        $("#deadNotification").html("died!")
        $(".display").html("<img src='https://preview.pixlr.com/images/800wm/100/1/1001519923.jpg' alt='Kitten Gif' id='displayDead'>")
    }
    else if (myTama.bored>=10) {
        clearInterval(myTama.ager);
        clearInterval(myTama.noFood);
        clearInterval(myTama.noSleep);
        clearInterval(myTama.noFun);
        console.log("he like dead tho");
        $("#deadNotification").html("died!")
        $(".display").html("<img src='https://preview.pixlr.com/images/800wm/100/1/1001519923.jpg' alt='Kitten Gif' id='displayDead'>")
    }
}