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
    "enterprise",
    "serenity",
    "millenium falcon",
    "tardis",
    "delorian",
    "bird of prey",
    "voltron",
    "x wing",
    "orville",
    "tie fighter",
    "light cycle",
    "pod racer",
    "nautilus",
    "battlestart galactica",
    "planet express",
    "landspeeder",
    "heart of gold",
    "snowspeeder",
    "time machine",
    "bebop",
    "death star"
];

document.getElementById("beginGame").addEventListener("click", gameStart);

function gameStart() {
    // NEED A CLEAR FOR LAST ROUNDS WORD

    
    var thisRndShip = ""; //Blank out the ship selected for this round

    var randomShip = Math.floor (Math.random() * shipList.length);
    console.log (randomShip);

    //random number converts to ship string choice
    thisRndShip = shipList[randomShip];
    console.log(thisRndShip);
    //shipChopped is the Array for the letters
    var shipChopped = thisRndShip.split("");
    
    for (i = 0; i < shipChopped.length; i++) {

        //console.log(thisRndDiv);
        var btn = document.createElement("BUTTON");
        var t = document.createTextNode("_");
        btn.appendChild(t);
        document.body.appendChild(btn);    
        btn.setAttribute("ID", i + shipChopped[i]);
        document.getElementById("thisRndDiv").appendChild(btn);
        }
    
    console.log(thisRndDiv);
    console.log(shipChopped);
    
//'space'
    for (i = 0; i < shipChopped.length; i++) {
        if (shipChopped[i] == " ") {
            document.getElementById(i+" ").innerHTML = shipChopped[i];
        };
    };
//A
    document.getElementById("aClk").addEventListener("click", guessA);
    
        function guessA() {
            // need to compare the click action to the chopped-ship array
            var ifClicked = "a"
            // console.log(guesses);
            guesses++;
            // console.log(guesses);        
            document.getElementById("guessBox").innerHTML = guesses;
             
            var found = false;

            for (i = 0; i < shipChopped.length; i++) {
                if (ifClicked == shipChopped[i]) {
                    //show "-a-" in console
                    console.log("-a-");
                    //change the inside HTML of the button to show the letter
                    document.getElementById(i+"a").innerHTML = shipChopped[i];
                    //un-modify guesses remaining for correct answer
                    
                    found = true; 
                };
            };
        
            //found checker
            if (!found) {
                guessLeft = (guessLeft - 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;

                if (guessLeft == 0) {
                    alert("Game Over, Man! Game Over!");
                    losses++;
                    document.getElementById("loseBox").innerHTML = losses;
                };
            };
        
        document.getElementById("aClk").style.visibility="hidden";
            
        };
//B
    document.getElementById("bClk").addEventListener("click", guessB);

        function guessB() {
            // need to compare the click action to the chopped-ship array
            var ifClicked = "b"
            // console.log(guesses);
            guesses++;
            // console.log(guesses);        
            document.getElementById("guessBox").innerHTML = guesses;
            
            var found = false;

            for (i = 0; i < shipChopped.length; i++) {
                if (ifClicked == shipChopped[i]) {
                    //show "-a-" in console
                    console.log("-b-");
                    //change the inside HTML of the button to show the letter
                    document.getElementById(i+"b").innerHTML = shipChopped[i];
                    //un-modify guesses remaining for correct answer
                    
                    found = true; 
                };
            };
        
            //found checker
            if (!found) {
                guessLeft = (guessLeft - 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;

                if (guessLeft == 0) {
                    alert("Game Over, Man! Game Over!");
                    losses++;
                    document.getElementById("loseBox").innerHTML = losses;
                };
            };
        
        document.getElementById("bClk").style.visibility="hidden";
            
        };
//C
    document.getElementById("cClk").addEventListener("click", guessC);
    
        function guessC() {
            // need to compare the click action to the chopped-ship array
            var ifClicked = "c"
            // console.log(guesses);
            guesses++;
            // console.log(guesses);        
            document.getElementById("guessBox").innerHTML = guesses;
             
            var found = false;

            for (i = 0; i < shipChopped.length; i++) {
                if (ifClicked == shipChopped[i]) {
                    //show "-a-" in console
                    console.log("-c-");
                    //change the inside HTML of the button to show the letter
                    document.getElementById(i+"c").innerHTML = shipChopped[i];
                    //un-modify guesses remaining for correct answer
                    
                    found = true; 
                };
            };
        
            //found checker
            if (!found) {
                guessLeft = (guessLeft - 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;

                if (guessLeft == 0) {
                    alert("Game Over, Man! Game Over!");
                    losses++;
                    document.getElementById("loseBox").innerHTML = losses;
                };
            };
        
        document.getElementById("cClk").style.visibility="hidden";
            
        };
//D
    document.getElementById("dClk").addEventListener("click", guessD);

    function guessD() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "d"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-d-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"d").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("dClk").style.visibility="hidden";
        
    };

//E
    document.getElementById("eClk").addEventListener("click", guessE);

    function guessE() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "e"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-a-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"e").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("eClk").style.visibility="hidden";
        
    };

//F
    document.getElementById("fClk").addEventListener("click", guessF);
    
        function guessF() {
            // need to compare the click action to the chopped-ship array
            var ifClicked = "f"
            // console.log(guesses);
            guesses++;
            // console.log(guesses);        
            document.getElementById("guessBox").innerHTML = guesses;
             
            var found = false;

            for (i = 0; i < shipChopped.length; i++) {
                if (ifClicked == shipChopped[i]) {
                    //show "-a-" in console
                    console.log("-f-");
                    //change the inside HTML of the button to show the letter
                    document.getElementById(i+"f").innerHTML = shipChopped[i];
                    //un-modify guesses remaining for correct answer
                    
                    found = true; 
                };
            };
        
            //found checker
            if (!found) {
                guessLeft = (guessLeft - 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;

                if (guessLeft == 0) {
                    alert("Game Over, Man! Game Over!");
                    losses++;
                    document.getElementById("loseBox").innerHTML = losses;
                };
            };
        
        document.getElementById("fClk").style.visibility="hidden";
            
        };
//G
    document.getElementById("gClk").addEventListener("click", guessG);

    function guessG() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "g"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-g-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"g").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("gClk").style.visibility="hidden";
        
    };

//H
    document.getElementById("hClk").addEventListener("click", guessH);

    function guessH() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "h"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-h-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"h").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("hClk").style.visibility="hidden";
        
    };

//I
    document.getElementById("iClk").addEventListener("click", guessI);
    
        function guessI() {
            // need to compare the click action to the chopped-ship array
            var ifClicked = "i"
            // console.log(guesses);
            guesses++;
            // console.log(guesses);        
            document.getElementById("guessBox").innerHTML = guesses;
             
            var found = false;

            for (i = 0; i < shipChopped.length; i++) {
                if (ifClicked == shipChopped[i]) {
                    //show "-a-" in console
                    console.log("-i-");
                    //change the inside HTML of the button to show the letter
                    document.getElementById(i+"i").innerHTML = shipChopped[i];
                    //un-modify guesses remaining for correct answer
                    
                    found = true; 
                };
            };
        
            //found checker
            if (!found) {
                guessLeft = (guessLeft - 1);
                document.getElementById("guessLeftBox").innerHTML = guessLeft;

                if (guessLeft == 0) {
                    alert("Game Over, Man! Game Over!");
                    losses++;
                    document.getElementById("loseBox").innerHTML = losses;
                };
            };
        
        document.getElementById("iClk").style.visibility="hidden";
            
        };
//J
    document.getElementById("jClk").addEventListener("click", guessJ);

    function guessJ() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "j"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-j-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"j").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("jClk").style.visibility="hidden";
        
    };
//K
    document.getElementById("kClk").addEventListener("click", guessK);

    function guessK() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "k"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-k-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"k").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("kClk").style.visibility="hidden";
        
    };
//L
    document.getElementById("lClk").addEventListener("click", guessL);

    function guessL() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "l"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-l-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"l").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("lClk").style.visibility="hidden";
        
    };
//M
    document.getElementById("mClk").addEventListener("click", guessM);

    function guessM() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "m"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-m-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"m").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("mClk").style.visibility="hidden";
        
    };
//N
    document.getElementById("nClk").addEventListener("click", guessN);

    function guessN() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "n"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-n-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"n").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("nClk").style.visibility="hidden";
        
    };
//O
    document.getElementById("oClk").addEventListener("click", guessO);

    function guessO() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "o"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-o-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"o").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("oClk").style.visibility="hidden";
        
    };
//P
    document.getElementById("pClk").addEventListener("click", guessP);

    function guessP() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "p"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-p-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"p").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("pClk").style.visibility="hidden";
        
    };
//Q
    document.getElementById("qClk").addEventListener("click", guessQ);

    function guessQ() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "q"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-q-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"q").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("qClk").style.visibility="hidden";
        
    };
//R
    document.getElementById("rClk").addEventListener("click", guessR);

    function guessR() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "r"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-r-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"r").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("rClk").style.visibility="hidden";
        
    };
//S
    document.getElementById("sClk").addEventListener("click", guessS);

    function guessS() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "s"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-s-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"s").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("sClk").style.visibility="hidden";
        
    };
//T
    document.getElementById("tClk").addEventListener("click", guessT);

    function guessT() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "t"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-t-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"t").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("tClk").style.visibility="hidden";
        
    };
//U
    document.getElementById("uClk").addEventListener("click", guessU);

    function guessU() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "u"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-u-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"u").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("uClk").style.visibility="hidden";
        
    };
//V
    document.getElementById("vClk").addEventListener("click", guessV);

    function guessV() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "v"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-v-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"v").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("vClk").style.visibility="hidden";
        
    };
//W
    document.getElementById("wClk").addEventListener("click", guessW);

    function guessW() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "w"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-w-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"w").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("wClk").style.visibility="hidden";
        
    };
//X
    document.getElementById("xClk").addEventListener("click", guessX);

    function guessX() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "x"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-x-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"x").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("xClk").style.visibility="hidden";
        
    };
//Y
    document.getElementById("yClk").addEventListener("click", guessY);

    function guessY() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "y"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-y-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"y").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("yClk").style.visibility="hidden";
        
    };
//Z
    document.getElementById("zClk").addEventListener("click", guessZ);

    function guessZ() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "z"
        // console.log(guesses);
        guesses++;
        // console.log(guesses);        
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-z-");
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"z").innerHTML = shipChopped[i];
                //un-modify guesses remaining for correct answer
                
                found = true; 
            };
        };
    
        //found checker
        if (!found) {
            guessLeft = (guessLeft - 1);
            document.getElementById("guessLeftBox").innerHTML = guessLeft;

            if (guessLeft == 0) {
                alert("Game Over, Man! Game Over!");
                losses++;
                document.getElementById("loseBox").innerHTML = losses;
            };
        };
    
    document.getElementById("zClk").style.visibility="hidden";
        
    };












};