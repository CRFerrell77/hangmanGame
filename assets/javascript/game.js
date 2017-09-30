var guesses = 0;
document.getElementById("guessBox").innerHTML = guesses;

var guessLeft = 7;
document.getElementById("guessLeftBox").innerHTML = guessLeft;

var wins = 0;
document.getElementById("winsBox").innerHTML = wins;

var losses = 0;
document.getElementById("loseBox").innerHTML = losses;

var winner = 0;

var ltr = "";

var shChLn = 0;

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
    "battlestar galactica",
    "planet express",
    "landspeeder",
    "heart of gold",
    "snowspeeder",
    "time machine",
    "bebop",
    "protector",
    "moonraker",
    "hyperion",
    "nemesis",
    "promethius",
    "icarus",
    "macross",
    "yamato",
    "viper",
    "nostromo",
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
    
    var shChLn = shipChopped.length;

    for (i = 0; i < shipChopped.length; i++) {

        //console.log(thisRndDiv);
        var btn = document.createElement("BUTTON");
        var t = document.createTextNode("_");
        btn.appendChild(t);
        document.body.appendChild(btn);    
        btn.setAttribute("ID", i + shipChopped[i]);
        btn.setAttribute("CLASS", "btn btn-lg shipBtns");
        document.getElementById("thisRndDiv").appendChild(btn);
        }
    
    console.log(thisRndDiv);
    console.log(shipChopped);

//Reset DOES NOT WORK
    document.getElementById("resetBtn").addEventListener("click", gameReset);
    
        function gameReset() {
            
            // console.log("loop removal count: " + shChLn); //how many childnren to remove
            // for (i = 0; i < shChLn; i++) { 
            //     var list = document.getElementById("thisRndDiv"); //turn list into the DOM
            //     list.removeChild(list.childNodes[i]);   //remove children/elements one at a time
            //};
            // this only partially works. I keep getting errors at random points: "Uncaught TypeError: Failed to execute 'removeChild' on 'Node': parameter 1 is not a type of 'Node'" - it would make more sense if the error occured on the same number each time.
                                
            document.getElementById("thisRndDiv").innerHTML = "";

            var guesses = 0;
            document.getElementById("guessBox").innerHTML = guesses;
            
            var guessLeft = 7;
            document.getElementById("guessLeftBox").innerHTML = guessLeft;
            
            var winner = 0;
            
            var ltr = "";
    
            var thisRndShip = "";
    
            var randomShip = 0;
    
            var shipChopped = "";
    
        };
    
//'space'
    for (i = 0; i < shipChopped.length; i++) {
        if (shipChopped[i] == " ") {
            document.getElementById(i+" ").innerHTML = shipChopped[i];
            //update number needed to win
            winner++;
            console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
        };
    };


    //Being my not-working event listener basics for all buttons as opposed to each one listed separatly 

    // document.body.addEventListener("click", function(event) {
    //     if (event.target.nodeName == "BUTTON")
    //         console.log("Clicked", event.target.textContent);
    //         console.log(event.target.id);
    //         var ltr = "";
    //         ltr = event.target.id;
    //         console.log(ltr + )
    //   });
    

//A
    document.getElementById("a").addEventListener("click", guessA);
    
        function guessA() {
            // need to compare the click action to the chopped-ship array
            var ifClicked = "a"

            guesses++;
            document.getElementById("guessBox").innerHTML = guesses;
             
            var found = false;

            for (i = 0; i < shipChopped.length; i++) {
                if (ifClicked == shipChopped[i]) {
                    //show "-a-" in console
                    console.log("-a-");
                    //update number needed to win
                    winner++;
                    console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                    //change the inside HTML of the button to show the letter
                    document.getElementById(i+"a").innerHTML = shipChopped[i];
                    //mark as found for guess counter
                    found = true; 
                };
            };

            //winner checker
            if (winner == shipChopped.length) {
                alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
                wins++;
                console.log("wins: " + wins);
                document.getElementById("winsBox").innerHTML = wins;
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
        
        document.getElementById("a").style.visibility="hidden";
            
        };

//B
    document.getElementById("b").addEventListener("click", guessB);

    function guessB() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "b"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-b-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"b").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("b").style.visibility="hidden";
        
    };

//C
    document.getElementById("c").addEventListener("click", guessC);

    function guessC() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "c"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-c-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"c").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("c").style.visibility="hidden";
        
    };

//D    
    document.getElementById("d").addEventListener("click", guessD);
        
    function guessD() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "d"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
        
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-d-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"d").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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

    document.getElementById("d").style.visibility="hidden";
        
    };

//E
    document.getElementById("e").addEventListener("click", guessE);

    function guessE() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "e"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-e-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"e").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("e").style.visibility="hidden";
        
    };

//F
    document.getElementById("f").addEventListener("click", guessF);

    function guessF() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "f"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-f-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"f").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("f").style.visibility="hidden";
        
    };

//G
    document.getElementById("g").addEventListener("click", guessG);

    function guessG() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "g"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-g-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"g").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("g").style.visibility="hidden";
        
    };

//H
    document.getElementById("h").addEventListener("click", guessH);

    function guessH() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "h"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-h-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"h").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("h").style.visibility="hidden";
        
    };

//I
    document.getElementById("i").addEventListener("click", guessI);

    function guessI() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "i"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-i-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"i").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("i").style.visibility="hidden";
        
    };

//J
    document.getElementById("j").addEventListener("click", guessJ);

    function guessJ() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "j"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-j-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"j").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("j").style.visibility="hidden";
        
    };

//K    
    document.getElementById("k").addEventListener("click", guessK);
    
    function guessK() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "k"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
        
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-k-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"k").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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

        document.getElementById("k").style.visibility="hidden";
        
    };

//L
    document.getElementById("l").addEventListener("click", guessL);

    function guessL() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "l"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-l-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"l").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("l").style.visibility="hidden";
        
    };

//M
    document.getElementById("m").addEventListener("click", guessM);

    function guessM() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "m"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-m-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"m").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("m").style.visibility="hidden";
        
    };

//N
    document.getElementById("n").addEventListener("click", guessN);

    function guessN() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "n"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-n-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"n").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("n").style.visibility="hidden";
        
    };

//O
    document.getElementById("o").addEventListener("click", guessO);

    function guessO() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "o"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-o-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"o").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("o").style.visibility="hidden";
        
    };

//P
    document.getElementById("p").addEventListener("click", guessP);

    function guessP() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "p"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-p-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"p").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("p").style.visibility="hidden";
        
    };

//Q
    document.getElementById("q").addEventListener("click", guessQ);

    function guessQ() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "q"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-q-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"q").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("q").style.visibility="hidden";
        
    };

//R
    document.getElementById("r").addEventListener("click", guessR);

    function guessR() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "r"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-r-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"r").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("r").style.visibility="hidden";
        
    };

//S
    document.getElementById("s").addEventListener("click", guessS);

    function guessS() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "s"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-s-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"s").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("s").style.visibility="hidden";
        
    };

//T
    document.getElementById("t").addEventListener("click", guessT);

    function guessT() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "t"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-t-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"t").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("t").style.visibility="hidden";
        
    };

//U
    document.getElementById("u").addEventListener("click", guessU);

    function guessU() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "u"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-u-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"u").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("u").style.visibility="hidden";
        
    };

//V
    document.getElementById("v").addEventListener("click", guessV);

    function guessV() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "v"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-v-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"v").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("v").style.visibility="hidden";
        
    };

//W
    document.getElementById("w").addEventListener("click", guessW);

    function guessW() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "w"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-w-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"w").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("w").style.visibility="hidden";
        
    };

//X
    document.getElementById("x").addEventListener("click", guessX);

    function guessX() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "x"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-x-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"x").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("x").style.visibility="hidden";
        
    };

//Y
    document.getElementById("y").addEventListener("click", guessY);

    function guessY() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "y"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-y-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"y").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("y").style.visibility="hidden";
        
    };

//Z
    document.getElementById("z").addEventListener("click", guessZ);

    function guessZ() {
        // need to compare the click action to the chopped-ship array
        var ifClicked = "z"

        guesses++;
        document.getElementById("guessBox").innerHTML = guesses;
         
        var found = false;

        for (i = 0; i < shipChopped.length; i++) {
            if (ifClicked == shipChopped[i]) {
                //show "-a-" in console
                console.log("-z-");
                //update number needed to win
                winner++;
                console.log("'winner' count: " + winner + " :: total needed to win: " + shipChopped.length);
                //change the inside HTML of the button to show the letter
                document.getElementById(i+"z").innerHTML = shipChopped[i];
                //mark as found for guess counter
                found = true; 
            };
        };

        //winner checker
        if (winner == shipChopped.length) {
            alert("Holy Mole Bees! You're a regular idiot savant! YOU WIN!");
            wins++;
            document.getElementById("winsBox").innerHTML = wins;
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
    
    document.getElementById("z").style.visibility="hidden";
        
    };



};
