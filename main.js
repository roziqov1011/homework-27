var hello = alert("Hush kelibsiz 😊");
var fistName = prompt("ismingizni kiriting").trim();
var sureName = prompt("familiyangizni kiriting" ,"Roziqov").trim();
var age = prompt("yoshingizni kiriting", "18").trim();
var tel = prompt("telni kiriting", "+998902060690").trim();
var end = alert("saytimizdan foydalanishingiz mumkin 😎");


if (fistName != null) {
    document.getElementById("ism").innerHTML =
        "Salom " + fistName + " davom etishingiz mumkin";
}

console.log(`alert: ${hello}\nismingiz: ${fistName}\nfamiliyangiz: ${sureName}\nyoshungiz: ${age}\ntel: ${tel}\nalert: ${end}`);



