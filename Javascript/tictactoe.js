

var moveSlots = [
    document.querySelector("#row1column1"),
    document.querySelector("#row1column2"),
    document.querySelector("#row1column3"),
    document.querySelector("#row2column1"),
    document.querySelector("#row2column2"),
    document.querySelector("#row2column3"),
    document.querySelector("#row3column1"),
    document.querySelector("#row3column2"),
    document.querySelector("#row3column3")
]

var imageSrcArray = []
var images = moveSlots.map(slot => slot.querySelector("img"));

var nearWinConditionsArr = [
    {name: "horWinCon0", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[0]} , 
    {name: "horWinCon1", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[1]} , 
    {name: "horWinCon2", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[2]} ,
    {name: "horWinCon3", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[3]} ,
    {name: "horWinCon4", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[4]} ,
    {name: "horWinCon5", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[5]} ,
    {name: "horWinCon5", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[6]} ,
    {name: "horWinCon7", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[7]} ,
    {name: "horWinCon8", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[8]} ,
    
    {name: "verWinCon0", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[0]} ,
    {name: "verWinCon1", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[3]} ,
    {name: "verWinCon2", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[6]} ,
    {name: "verWinCon3", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[1]} ,
    {name: "verWinCon4", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[4]} ,
    {name: "verWinCon5", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[7]} ,
    {name: "verWinCon6", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[2]} ,
    {name: "verWinCon7", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[5]} ,
    {name: "verWinCon8", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[8]} ,
    
    {name: "diaWinCon0", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[0]} ,
    {name: "diaWinCon1", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[4]} ,
    {name: "diaWinCon3", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[8]} ,
    {name: "diaWinCon3", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[2]} ,
    {name: "diaWinCon4", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[4]} ,
    {name: "diaWinCon5", plyNearWin: false, foeNearWin: false, moveSlotPlay: images[6]} ,
    ]

// visual effects //
    function slotHoverEvents(slots) {
        // visiually demonstrates to the player what move slots are avaliable for them to click on //
        slots.addEventListener('mouseover', function() {
            var image = slots.querySelector("img");
            if (image.getAttribute("src") !== "") {
                slots.style.cursor = "default";
                slots.style.backgroundColor = "white";
            } else {
                slots.style.cursor = "pointer";
                slots.style.backgroundColor = "#e3e4e6";
            }
        });
        slots.addEventListener('mouseout', function() {
            slots.style.cursor = "default";
            slots.style.backgroundColor = "white";
        });
    }

    var restartButton = document.querySelector("#restartbutton")

    restartButton.addEventListener('click', function(){
        restartButton.style.color = 'white';
        restartButton.style.backgroundColor = "black";
        restartButton.style.borderBottom = "black";
    })

var whosTurn = "player"

// score keeping //
    let record = {
        row1Col1: "", 
        row1Col2: "", 
        row1Col3: "", 
        row2Col1: "",
        row2Col2: "",
        row2Col3: "",
        row3Col1: "",
        row3Col2: "",
        row3Col3: ""
    };

    function moveRecord(){
        // popuplates global arrays //
        imageSrcArray = moveSlots.map(slot => slot.querySelector("img").getAttribute("src"));
        
        
        // documents all player and enemy moves //
        if (imageSrcArray[0].includes("GreenO")){
            record.row1Col1 = "O";
        }else if (imageSrcArray[0].includes("RedX")){
            record.row1Col1 = "X";
        }
        
        if (imageSrcArray[1].includes("GreenO")){
            record.row1Col2 = "O";
        }else if (imageSrcArray[1].includes("RedX")){
            record.row1Col2 = "X";
        }

        if (imageSrcArray[2].includes("GreenO")){
            record.row1Col3 = "O";
        }else if (imageSrcArray[2].includes("RedX")){
            record.row1Col3 = "X";
        }

        if (imageSrcArray[3].includes("GreenO")){
            record.row2Col1 = "O";
        }else if (imageSrcArray[3].includes("RedX")){
            record.row2Col1 = "X";
        }

        if (imageSrcArray[4].includes("GreenO")){
            record.row2Col2 = "O";
        }else if (imageSrcArray[4].includes("RedX")){
            record.row2Col2 = "X";
        }

        if (imageSrcArray[5].includes("GreenO")){
            record.row2Col3 = "O";
        }else if (imageSrcArray[5].includes("RedX")){
            record.row2Col3 = "X";
        }

        if (imageSrcArray[6].includes("GreenO")){
            record.row3Col1 = "O";
        }else if (imageSrcArray[6].includes("RedX")){
            record.row3Col1 = "X";
        }

        if (imageSrcArray[7].includes("GreenO")){
            record.row3Col2 = "O";
        }else if (imageSrcArray[7].includes("RedX")){
            record.row3Col2 = "X";
        }

        if (imageSrcArray[8].includes("GreenO")){
            record.row3Col3 = "O";
        }else if (imageSrcArray[8].includes("RedX")){
            record.row3Col3 = "X";
        }
        
    };

    var gameplayLoopOngoing = true

    function setGameLoop(){
        // determines who won the game and logs it //
        if (
            // player horizontal win //
            record.row1Col1 === "O" && record.row1Col2 === "O" && record.row1Col3 === "O" ||
            record.row2Col1 === "O" && record.row2Col2 === "O" && record.row2Col3 === "O" ||
            record.row3Col1 === "O" && record.row3Col2 === "O" && record.row3Col3 === "O" ||
            
            // player vertical win //
            record.row1Col1 === "O" && record.row2Col1 === "O" && record.row3Col1 === "O" ||
            record.row1Col2 === "O" && record.row2Col2 === "O" && record.row3Col2 === "O" ||
            record.row1Col3 === "O" && record.row2Col3 === "O" && record.row3Col3 === "O" ||
            
            // player diagonal win //
            record.row1Col1 === "O" && record.row2Col2 === "O" && record.row3Col3 === "O" ||
            record.row1Col3 === "O" && record.row2Col2 === "O" && record.row3Col1 === "O" 
            ){
                gameplayLoopOngoing = false
                console.log("Player Victory!")
                setTimeout(function() {
                    if(confirm("YOU WIN! Click 'OK' to restart.") == true) {
                        window.location.href = "../HTML/tictactoe.html";
                    }else if (confirm("Would you like to return to home? If so click 'OK'.") == true){
                        window.location.href = "../HTML/tictactoe_home.html" 
                    }
                }, 300);
            }else if (
                // enemy horizontal win //
            record.row1Col1 === "X" && record.row1Col2 === "X" && record.row1Col3 === "X" ||
            record.row2Col1 === "X" && record.row2Col2 === "X" && record.row2Col3 === "X" ||
            record.row3Col1 === "X" && record.row3Col2 === "X" && record.row3Col3 === "X" ||
            
            // enemy vertical win //
            record.row1Col1 === "X" && record.row2Col1 === "X" && record.row3Col1 === "X" ||
            record.row1Col2 === "X" && record.row2Col2 === "X" && record.row3Col2 === "X" ||
            record.row1Col3 === "X" && record.row2Col3 === "X" && record.row3Col3 === "X" ||
            
            // enemy diagonal win //
            record.row1Col1 === "X" && record.row2Col2 === "X" && record.row3Col3 === "X" ||
            record.row1Col3 === "X" && record.row2Col2 === "X" && record.row3Col1 === "X" 
            ){
                gameplayLoopOngoing = false
                console.log("Player has lost.")
                setTimeout(function(){
                    if(confirm("YOU LOOSE! Click 'OK' to restart.")){
                        window.location.href = "../HTML/tictactoe.html";
                    }else if (confirm("Would you like to return to home? If so click 'OK'.") == true){
                        window.location.href = "../HTML/tictactoe_home.html"
                    }
                }, 300);
            }else if (
            // no horizontal win //
            record.row1Col1 !== "" && record.row1Col2 !== "" && record.row1Col3 !== "" &&
            record.row2Col1 !== "" && record.row2Col2 !== "" && record.row2Col3 !== "" &&
            record.row3Col1 !== "" && record.row3Col2 !== "" && record.row3Col3 !== "" &&
        
            // no vertical win //
            record.row1Col1 !== "" && record.row2Col1 !== "" && record.row3Col1 !== "" &&
            record.row1Col2 !== "" && record.row2Col2 !== "" && record.row3Col2 !== "" &&
            record.row1Col3 !== "" && record.row2Col3 !== "" && record.row3Col3 !== "" &&
            
            // no diagonal win //
            record.row1Col1 !== "" && record.row2Col2 !== "" && record.row3Col3 !== "" &&
            record.row1Col3 !== "" && record.row2Col2 !== "" && record.row3Col1 !== "" 
            ){
                gameplayLoopOngoing = false
                setTimeout(function() {
                    if(confirm("Tie, Click 'OK' to restart.")){
                        window.location.href = "../HTML/tictactoe.html";
                    }else if (confirm("Would you like to return to home? If so click 'OK'.") == true){
                        window.location.href = "../HTML/tictactoe_home.html"
                    }
                }, 300);
            }
    };

var playerNearWin = false 
var enemyNearWin = false

// enemy move algorithm //
    function checkPlayerNearWin(){
        // checks for horizontal wins //
        if (record.row1Col1 === "" && record.row1Col2 === "O" && record.row1Col3 === "O") {
            nearWinConditionsArr[0].plyNearWin = true 
            playerNearWin = true

        }if (record.row1Col1 === "O" && record.row1Col2 === "" && record.row1Col3 === "O"){
            nearWinConditionsArr[1].plyNearWin = true
            playerNearWin = true
            

        }if (record.row1Col1 === "O" && record.row1Col2 === "O" && record.row1Col3 === ""){
            nearWinConditionsArr[2].plyNearWin = true
            playerNearWin = true
            

        }if (record.row2Col1 === "" && record.row2Col2 === "O" && record.row2Col3 === "O"){
            nearWinConditionsArr[3].plyNearWin = true
            playerNearWin = true
            

        }if (record.row2Col1 === "O" && record.row2Col2 === "" && record.row2Col3 === "O"){
            nearWinConditionsArr[4].plyNearWin = true
            playerNearWin = true
            

        }if (record.row2Col1 === "O" && record.row2Col2 === "O" && record.row2Col3 === ""){
            nearWinConditionsArr[5].plyNearWin = true
            playerNearWin = true
            

        }if (record.row3Col1 === "" && record.row3Col2 === "O" && record.row3Col3 === "O"){
            nearWinConditionsArr[6].plyNearWin = true
            playerNearWin = true
            
    
        }if (record.row3Col1 === "O" && record.row3Col2 === "" && record.row3Col3 === "O"){
            nearWinConditionsArr[7].plyNearWin = true
            playerNearWin = true
            

        }if (record.row3Col1 === "O" && record.row3Col2 === "O" && record.row3Col3 === ""){
            nearWinConditionsArr[8].plyNearWin = true
            playerNearWin = true
            

        // checks vertical wins //
        }if (record.row1Col1 === "" && record.row2Col1 === "O" && record.row3Col1 === "O"){
            nearWinConditionsArr[9].plyNearWin = true
            playerNearWin = true
            

        }if (record.row1Col1 === "O" && record.row2Col1 === "" && record.row3Col1 === "O"){
            nearWinConditionsArr[10].plyNearWin = true
            playerNearWin = true
            

        }if (record.row1Col1 === "O" && record.row2Col1 === "O" && record.row3Col1 === ""){
            nearWinConditionsArr[11].plyNearWin = true
            playerNearWin = true
            

        }if (record.row1Col2 === "" && record.row2Col2 === "O" && record.row3Col2 === "O"){
            nearWinConditionsArr[12].plyNearWin = true
            playerNearWin = true
            

        }if (record.row1Col2 === "O" && record.row2Col2 === "" && record.row3Col2 === "O"){
            nearWinConditionsArr[13].plyNearWin = true
            playerNearWin = true
            
    
        }if (record.row1Col2 === "O" && record.row2Col2 === "O" && record.row3Col2 === ""){
            nearWinConditionsArr[14].plyNearWin = true
            playerNearWin = true
            

        }if (record.row1Col3 === "" && record.row2Col3 === "O" && record.row3Col3 === "O"){
            nearWinConditionsArr[15].plyNearWin = true
            playerNearWin = true
            

        }if (record.row1Col3 === "O" && record.row2Col3 === "" && record.row3Col3 === "O"){
            nearWinConditionsArr[16].plyNearWin = true
            playerNearWin = true
            

        }if (record.row1Col3 === "O" && record.row2Col3 === "O" && record.row3Col3 === ""){
            nearWinConditionsArr[17].plyNearWin = true
            playerNearWin = true
            

        // checks diagonal wins //
        }if (record.row1Col1 === "" && record.row2Col2 === "O" && record.row3Col3 === "O"){
            nearWinConditionsArr[18].plyNearWin = true
            playerNearWin = true
            

        }if (record.row1Col1 === "O" && record.row2Col2 === "" && record.row3Col3 === "O"){
            nearWinConditionsArr[19].plyNearWin = true
            playerNearWin = true
            

        }if (record.row1Col1 === "O" && record.row2Col2 === "O" && record.row3Col3 === ""){
            nearWinConditionsArr[20].plyNearWin = true
            playerNearWin = true
            

        }if (record.row1Col3 === "" && record.row2Col2 === "O" && record.row3Col1 === "O"){
            nearWinConditionsArr[21].plyNearWin = true
            playerNearWin = true
            

        }if (record.row1Col3 === "O" && record.row2Col2 === "" && record.row3Col1 === "O"){
            nearWinConditionsArr[22].plyNearWin = true
            playerNearWin = true
            

        }if (record.row1Col3 === "O" && record.row2Col2 === "O" && record.row3Col1 === ""){
            nearWinConditionsArr[23].plyNearWin = true
            playerNearWin = true
            
        }
    }

    function checkEnemyNearWin(){
        // checks for horizontal wins //
        if (record.row1Col1 === "" && record.row1Col2 === "X" && record.row1Col3 === "X") {
            nearWinConditionsArr[0].foeNearWin = true 
            enemyNearWin = true

        }if (record.row1Col1 === "X" && record.row1Col2 === "" && record.row1Col3 === "X"){
            nearWinConditionsArr[1].foeNearWin = true
            enemyNearWin = true
            
        }if (record.row1Col1 === "X" && record.row1Col2 === "X" && record.row1Col3 === ""){
            nearWinConditionsArr[2].foeNearWin = true
            enemyNearWin = true
            
        }if (record.row2Col1 === "" && record.row2Col2 === "X" && record.row2Col3 === "X"){
            nearWinConditionsArr[3].foeNearWin = true
            enemyNearWin = true
            
        }if (record.row2Col1 === "X" && record.row2Col2 === "" && record.row2Col3 === "X"){
            nearWinConditionsArr[4].foeNearWin = true
            enemyNearWin = true
            
        }if (record.row2Col1 === "X" && record.row2Col2 === "X" && record.row2Col3 === ""){
            nearWinConditionsArr[5].foeNearWin = true
            enemyNearWin = true 

        }if (record.row3Col1 === "" && record.row3Col2 === "X" && record.row3Col3 === "X"){
            nearWinConditionsArr[6].foeNearWin = true
            enemyNearWin = true
    
        }if (record.row3Col1 === "X" && record.row3Col2 === "" && record.row3Col3 === "X"){
            nearWinConditionsArr[7].foeNearWin = true
            enemyNearWin = true

        }if (record.row3Col1 === "X" && record.row3Col2 === "X" && record.row3Col3 === ""){
            nearWinConditionsArr[8].foeNearWin = true
            enemyNearWin = true

        // checks vertical wins //
        }if (record.row1Col1 === "" && record.row2Col1 === "X" && record.row3Col1 === "X"){
            nearWinConditionsArr[9].foeNearWin = true
            enemyNearWin = true
            
        }if (record.row1Col1 === "X" && record.row2Col1 === "" && record.row3Col1 === "X"){
            nearWinConditionsArr[10].foeNearWin = true
            enemyNearWin = true
            
        }if (record.row1Col1 === "X" && record.row2Col1 === "X" && record.row3Col1 === ""){
            nearWinConditionsArr[11].foeNearWin = true
            enemyNearWin = true
            
        }if (record.row1Col2 === "" && record.row2Col2 === "X" && record.row3Col2 === "X"){
            nearWinConditionsArr[12].foeNearWin = true
            enemyNearWin = true
            
        }if (record.row1Col2 === "X" && record.row2Col2 === "" && record.row3Col2 === "X"){
            nearWinConditionsArr[13].foeNearWin = true
            enemyNearWin = true
            
        }if (record.row1Col2 === "X" && record.row2Col2 === "X" && record.row3Col2 === ""){
            nearWinConditionsArr[14].foeNearWin = true
            enemyNearWin = true
            
        }if (record.row1Col3 === "" && record.row2Col3 === "X" && record.row3Col3 === "X"){
            nearWinConditionsArr[15].foeNearWin = true
            enemyNearWin = true
            
        }if (record.row1Col3 === "X" && record.row2Col3 === "" && record.row3Col3 === "X"){
            nearWinConditionsArr[16].foeNearWin = true
            enemyNearWin = true
            
        }if (record.row1Col3 === "X" && record.row2Col3 === "X" && record.row3Col3 === ""){
            nearWinConditionsArr[17].foeNearWin = true
            enemyNearWin = true
            
        // checks diagonal wins //
        }if (record.row1Col1 === "" && record.row2Col2 === "X" && record.row3Col3 === "X"){
            nearWinConditionsArr[18].foeNearWin = true
            enemyNearWin = true
            
        }if (record.row1Col1 === "X" && record.row2Col2 === "" && record.row3Col3 === "X"){
            nearWinConditionsArr[19].foeNearWin = true
            enemyNearWin = true
            
        }if (record.row1Col1 === "X" && record.row2Col2 === "X" && record.row3Col3 === ""){
            nearWinConditionsArr[20].foeNearWin = true
            enemyNearWin = true
            
        }if (record.row1Col3 === "" && record.row2Col2 === "X" && record.row3Col1 === "X"){
            nearWinConditionsArr[21].foeNearWin = true
            enemyNearWin = true
            
        }if (record.row1Col3 === "X" && record.row2Col2 === "" && record.row3Col1 === "X"){
            nearWinConditionsArr[22].foeNearWin = true
            enemyNearWin = true
            
        }if (record.row1Col3 === "X" && record.row2Col2 === "X" && record.row3Col1 === ""){
            nearWinConditionsArr[23].foeNearWin = true
            enemyNearWin = true
        }
    }

    function preventWin(slots){
        
        /* 
        prioritizes enemy play to block player from making a winning move. 
        if multiple winning moves are present it selects at random 1 of the players winning plays to block 
        */
        
        var preventableWinMovesArr = nearWinConditionsArr.filter(plyWinCons => plyWinCons.plyNearWin === true)
        var enemyLooseConArrLength = preventableWinMovesArr.length

        var rand = Math.random()
        var randIndex = Math.floor(rand * enemyLooseConArrLength)

        preventableWinMovesArr[randIndex].moveSlotPlay.setAttribute("src", "../images/RedX.png")

    }

    function enemyWinMove(slots){
        
        /* 
        prioritizes enemy play to make the winning move. 
        if multiple winning moves are present it selects at random 1 of the winning plays to make 
        */
        
        var winMovesArr = nearWinConditionsArr.filter(foeWinCons => foeWinCons.foeNearWin === true)
        var enemyWinConArrLength = winMovesArr.length

        var rand = Math.random()
        var randIndex = Math.floor(rand * enemyWinConArrLength)

        winMovesArr[randIndex].moveSlotPlay.setAttribute("src", "../images/RedX.png")

    }

    function enemyRandMove(slots){
        // produces random enemy move //

        var avaliableSlots = images.filter(img => img && !img.getAttribute("src"));
        var emptyImageArrLength = avaliableSlots.length

        var rand = Math.random()
        var randIndex = Math.floor(rand * emptyImageArrLength)

        avaliableSlots[randIndex].setAttribute("src", "../images/RedX.png")
    }

    function enemyMoveEvents(slots) {
        // produces enemy moves //
        
        // highest priotiry: prevent player from making a winning move. (end-game defensive bias) //
        // second highest priority: make a the winning move. (end-game offensive secondary bias) //
        // third highest priority: randomize moves if none of the above are applicable. (early-game randomizer) //

        if(whosTurn === "enemy"){
            checkPlayerNearWin()
            checkEnemyNearWin()
            moveRecord()
            
            if(playerNearWin === true && enemyNearWin === true){
                enemyWinMove(slots)
                console.log("COUNTER DEFEAT!!!") 
            }else if (playerNearWin){
                preventWin(slots)
                console.log("COUNTER!!!")
            }else if (enemyNearWin){
                enemyWinMove(slots)
                console.log("DEFEAT!!!")
            }else {
                enemyRandMove(slots)
            }
        
        }
        moveRecord()
        setGameLoop()
        console.log(record)
        whosTurn = "player"
        console.log("Player's turn")
    }



function MoveEvents (slots){
    // registers the moves of the player //
    
    slots.addEventListener('click', function(){
        var image = slots.querySelector("img");
        if (whosTurn === "player"){
            if (image.getAttribute("src") === ""){
                image.setAttribute("src", "../images/GreenO.png");
                image.classList.add('XorO');
                console.log("The player made a move.");
                moveRecord(slots)
                console.log(record)
                whosTurn = "enemy"
                console.log("Enemy's turn");
                setGameLoop()
            }else{
                console.log("Slot is taken!");
            }
        }setTimeout(function(){enemyMoveEvents(moveSlots)}, 2000)
    });
}

// game execution commands //
    
    // begin game //
    if (
        record.row1Col1 === "" && record.row1Col2 === "" && record.row1Col3 === "" &&
        record.row2Col1 === "" && record.row2Col2 === "" && record.row2Col3 === "" &&
        record.row3Col1 === "" && record.row3Col2 === "" && record.row3Col3 === ""
        ){
        gameplayLoopOngoing = true;
        executeGame();
        }

    // continue game //    
    function executeGame (){
        if (gameplayLoopOngoing === true){
                moveSlots.forEach(slotHoverEvents);
                moveSlots.forEach(MoveEvents);
                console.log("game ongoing")
        }else if (gameplayLoopOngoing === false){
            console.log("Game is over", )
        }
    }