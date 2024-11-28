function funksjon1() {
    var input1 = parseFloat(document.getElementById("input1").value);
    var svar1 = document.getElementById("svar1");

    if (input1 % 2 == 0) {
        svar1.innerHTML = "Partall"
    } else {
        svar1.innerHTML = "Oddetall"
    }   
}

function funksjon2() {
    let alder = parseInt(document.getElementById("input2").value);
    var svar2 = document.getElementById("svar2");

    if (alder >= 65) {
        svar2.innerHTML = "Pensjonist"
    }
    else if(alder >= 20) {
        svar2.innerHTML = "Voksen"
    }
    else if(alder >= 13) {
        svar2.innerHTML = "Tenåring"
    }
    else {
        svar2.innerHTML = "Barn"
    }
}

function funksjon3() {
    var riktigUserName = "admin";
    var riktigPassord = "admin";
    
    
    var userName = document.getElementById("input3").value;
    var passord = document.getElementById("input4").value;
    var svar3 = document.getElementById("svar3");

    if (passord == riktigPassord && userName == riktigUserName) {
        svar3.innerHTML = "Riktig!"
    } else {
        svar3.innerHTML = "Feil brukernavn eller passord"
    }
}

function funksjon4() {
    const måneder = ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"];
    var månedTall = parseInt(document.getElementById("input5").value);
    var svar4 = document.getElementById("svar4");

    var riktigMåned = måneder[månedTall-1]

    if (riktigMåned == "Desember" || riktigMåned =="Januar" || riktigMåned =="Februar") {
        var årstid = "vinter"
    }
    else if (riktigMåned == "Mars" || riktigMåned =="April" || riktigMåned =="Mai") {
        var årstid = "vår"
    }
    else if (riktigMåned == "Juni" || riktigMåned =="Juli" || riktigMåned =="August") {
        var årstid = "sommer"
    }
    else if (riktigMåned == "September" || riktigMåned =="Oktober" || riktigMåned =="November") {
        var årstid = "Høst"
    }
    svar4.innerHTML = "Måned " + månedTall + " er " + riktigMåned + " og er årstiden " + årstid
}

function funksjon5() {
    var vekt = parseFloat(document.getElementById("input6").value);
    var høyde = parseFloat(document.getElementById("input7").value);
    var svar5 = document.getElementById("svar5");

    var BMI = vekt / høyde**2;

    if (BMI <= 18.5) {
        var resultat = "Undervektig"
    }
    else if (BMI <= 24.9) {
        var resultat = "Normalvektig"
    }
    else if (BMI <= 29.9) {
        var resultat = "Overvektig"
    }
    else {
        var resultat = "Fedme"
    }

    var riktigBMI = BMI.toFixed(2)

    svar5.innerHTML = "Din BMI er " + riktigBMI + " og ditt resultat er " + resultat;   
}

function funksjon6() {
    var alder1 = parseInt(document.getElementById("input8").value);
    let svar6 = document.getElementById("svar6");

    if (alder1 <= 3) {
        var billettPris = 0;
        var billettAlder = "baby"
    }
    else if (alder1 <= 12) {
        var billettPris = 20;
        var billettAlder = "barn"
    }
    else if (alder1 <= 19) {
        var billettPris = 50;
        var billettAlder = "tenåring"
    }
    else if (alder1 <= 65) {
        var billettPris = 100;
        var billettAlder = "voksen"
    }
    else {
        var billettPris = 20;
        var billettAlder = "senior"
    }
    svar6.innerHTML = `Siden du er ${alder1} år, og derfor i gruppen ${billettAlder}, vil biletten din koste ${billettPris} kr`
}

function funksjon7() {
    var poengSum = parseInt(document.getElementById("input9").value);
    let svar7 = document.getElementById("svar7");

    if (poengSum <= 30) {
        var karakter = "F"
    } else if (poengSum <= 50) {
        var karakter = "D"
    } else if (poengSum <= 60) {
        var karakter = "C"
    } else if (poengSum <= 80) {
        var karakter = "B"
    } else {
        var karakter = "A"
    }

    svar7.innerHTML = `Poengsummen din er ${poengSum}, og karakteren din er ${karakter}`
}

