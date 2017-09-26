var guesses = 0;
document.getElementById("guessBox").innerHTML = guesses;

var guessLeft = 7;
document.getElementById("guessLeftBox").innerHTML = guessLeft;

var wins = 0;
document.getElementById("winsBox").innerHTML = wins;

var losses = 0;
document.getElementById("loseBox").innerHTML = losses;

// all the ships in an array
var shipList = [ 
    // "enterprise",
    // "serenity",
    // "millenium falcon",
    // "tardis",
    // "delorian",
    // "bird of prey",
    // "voltron",
    "x wing"
];

document.getElementById("beginGame").addEventListener("click", gameStart);

function gameStart() {
    
    var thisRndShip = ""; //Blank out the ship selected for this round

    var randomShip = Math.floor (Math.random() * shipList.length);
    console.log (randomShip);

    //random number converts to ship string choice
    thisRndShip = shipList[randomShip];
    console.log(thisRndShip);

    var shipChopped = thisRndShip.split("");
    
    for (i = 0; i < shipChopped.length; i++) {
        // BELOW IS THE BLANK BOXES THAT I CAN'T SEEM TO ATTACH A GOD DAMNED ID TO
        console.log(thisRndDiv);
        var btn = document.createElement("BUTTON");
        var t = document.createTextNode("_");
        btn.appendChild(t);
        document.body.appendChild(btn);    
        btn.setAttribute("ID", shipChopped[i]);
        document.getElementById("thisRndDiv").appendChild(btn);
        }

//  document.getElementById("thisRndDiv").innerHTML = shipChopped;
    
    console.log(thisRndDiv);
    console.log(shipChopped);
    
    // how to populate this in the box, as dashes? Convert string to blanks function?


// DOUBLE "O" DOES NOT SHOW UP
// LOSS COUNTER NOT WORKING

//'space'
    for (i = 0; i < shipChopped.length; i++) {
        if (shipChopped[i] == " ") {
            document.getElementById(" ").innerHTML = shipChopped[i];
        }
    }

//A
    document.getElementById("aClk").addEventListener("click", guessA);
    
        function guessA() {
            // need to compare the click action to the chopped-ship array
            var ifClicked = "a"
            // console.log(guesses);
            guesses++;
            // console.log(guesses);        
            document.getElementById("guessBox").innerHTML = guesses;
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;
    
            for (i = 0; i < shipChopped.length; i++) {
                if (ifClicked == shipChopped[i]) {
                    console.log("-a-");
                    document.getElementById("a").innerHTML = shipChopped[i];
                    guessLeft = (guessLeft + 1);
                    document.getElementById("guessLeftBox").innerHTML = guessLeft;
                }
                else {
                    console.log("not a");
                }
            }
    
            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
            }
        
        document.getElementById("aClk").style.visibility="hidden";
            
        }
//B
    document.getElementById("bClk").addEventListener("click", guessB);
    
    function guessB() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "b"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-b-");
                document.getElementById("b").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not b");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }
        
    document.getElementById("bClk").style.visibility="hidden";
        
    }
        
//C
    document.getElementById("cClk").addEventListener("click", guessC);

    function guessC() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "c"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-c-");
                document.getElementById("c").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not c");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

    document.getElementById("cClk").style.visibility="hidden";
    
    }

//D
    document.getElementById("dClk").addEventListener("click", guessD);

    function guessD() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "d"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-d-");
                document.getElementById("d").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not d");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }
        document.getElementById("dClk").style.visibility="hidden";
        
    }

//E
    document.getElementById("eClk").addEventListener("click", guessE);

    function guessE() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "e"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-e-");
                document.getElementById("e").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not e");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

    document.getElementById("eClk").style.visibility="hidden";
        
    }

//F
    document.getElementById("fClk").addEventListener("click", guessF);

    function guessF() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "f"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-f-");
                document.getElementById("f").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not f");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

    document.getElementById("fClk").style.visibility="hidden";
        
    }

//G
    document.getElementById("gClk").addEventListener("click", guessG);

    function guessG() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "g"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-g-");
                document.getElementById("g").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not g");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

    document.getElementById("gClk").style.visibility="hidden";
        
    }

//H
    document.getElementById("hClk").addEventListener("click", guessH);

    function guessH() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "h"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-h-");
                document.getElementById("h").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not h");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

        document.getElementById("hClk").style.visibility="hidden";

    }

//I
    document.getElementById("iClk").addEventListener("click", guessI);

    function guessI() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "i"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-i-");
                document.getElementById("i").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not i");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

    document.getElementById("iClk").style.visibility="hidden";

    }

//J
    document.getElementById("jClk").addEventListener("click", guessJ);

    function guessJ() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "j"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-j-");
                document.getElementById("j").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not j");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

        document.getElementById("jClk").style.visibility="hidden";

    }

//K
    document.getElementById("kClk").addEventListener("click", guessK);

    function guessK() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "k"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-k-");
                document.getElementById("k").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not k");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

        document.getElementById("kClk").style.visibility="hidden";
    }

//L
    document.getElementById("lClk").addEventListener("click", guessL);

    function guessL() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "l"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-l-");
                document.getElementById("l").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not l");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

        document.getElementById("lClk").style.visibility="hidden";
    }

//M
    document.getElementById("mClk").addEventListener("click", guessM);

    function guessM() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "m"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-m-");
                document.getElementById("m").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not m");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

        document.getElementById("mClk").style.visibility="hidden";
    }

//N
    document.getElementById("nClk").addEventListener("click", guessN);

    function guessN() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "n"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-n-");
                document.getElementById("n").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not n");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

        document.getElementById("nClk").style.visibility="hidden";
    }

//O
    document.getElementById("oClk").addEventListener("click", guessO);

    function guessO() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "o"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-o-");
                document.getElementById("o").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not o");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

        document.getElementById("oClk").style.visibility="hidden";
    }

//P
    document.getElementById("pClk").addEventListener("click", guessP);

    function guessP() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "p"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-p-");
                document.getElementById("p").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not p");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

        document.getElementById("pClk").style.visibility="hidden";
    }

//Q
    document.getElementById("qClk").addEventListener("click", guessQ);

    function guessQ() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "q"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-q-");
                document.getElementById("q").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not q");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

        document.getElementById("qClk").style.visibility="hidden";

    }

//R
    document.getElementById("rClk").addEventListener("click", guessR);

    function guessR() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "r"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-r-");
                document.getElementById("r").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not r");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

        document.getElementById("rClk").style.visibility="hidden";
    }

//S
    document.getElementById("sClk").addEventListener("click", guessS);

    function guessS() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "s"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-s-");
                document.getElementById("s").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not s");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

        document.getElementById("sClk").style.visibility="hidden";
    }

//T
    document.getElementById("tClk").addEventListener("click", guessT);

    function guessT() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "t"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-t-");
                document.getElementById("t").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not t");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

        document.getElementById("tClk").style.visibility="hidden";

    }

//U
    document.getElementById("uClk").addEventListener("click", guessU);

    function guessU() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "u"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-u-");
                document.getElementById("u").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not u");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

        document.getElementById("uClk").style.visibility="hidden";

    }

//V
    document.getElementById("vClk").addEventListener("click", guessV);

    function guessV() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "v"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-v-");
                document.getElementById("v").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not v");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

        document.getElementById("vClk").style.visibility="hidden";

    }

//W
    document.getElementById("wClk").addEventListener("click", guessW);

    function guessW() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "w"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-w-");
                document.getElementById("w").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not w");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

        document.getElementById("wClk").style.visibility="hidden";

    }

//X
    document.getElementById("xClk").addEventListener("click", guessX);

    function guessX() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "x"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-x-");
                document.getElementById("x").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not x");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

        document.getElementById("xClk").style.visibility="hidden";

    }

//Y
    document.getElementById("yClk").addEventListener("click", guessY);

    function guessY() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "y"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-y-");
                document.getElementById("y").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not y");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

        document.getElementById("yClk").style.visibility="hidden";

    }

//Z
    document.getElementById("zClk").addEventListener("click", guessZ);

    function guessZ() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "z"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
        guessLeft = (guessLeft - 1);
        document.getElementById("guessLeftBox").innerHTML = guessLeft;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                console.log("-z-");
                document.getElementById("z").innerHTML = shipChopped[i];
                guessLeft = (guessLeft + 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;
            }
            else {
                console.log("not z");
            }
        }

        if (guessLeft == 0) {
            alert("Game Over, Man! Game Over!");
            losses++;
        }

        document.getElementById("zClk").style.visibility="hidden";

    }












};