
let myTama = {
    age: 1,
    hunger: 0,
    sleep: 0,
    bored: 0,
    ager: 0,
    gameBegin: function gameBegin() {
        myTama.ager = setInterval(ageUp,20000);
    }
}
ageUp = function ageUP() {
    $("#tamaAge").html("<h2>" + (myTama.age+1) + "</h2>");
    myTama.age = myTama.age + 1;
    checkAge();
}
checkAge = function checkAge() {
    if (myTama.age>=60) {
        clearInterval(myTama.ager);
        console.log("he like dead tho");
        $(".display").html("<img src='https://preview.pixlr.com/images/800wm/100/1/1001519923.jpg' alt='Kitten Gif' id='displayDead'>")
    }
}