//hide the tictactoe board
$(".board").hide()
//append the div provided for the "start" screen.
$("body").append('<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><a href="#" class="button">Start game</a></header></div>')
var clicks = 0; //"clicks" with 0 value to add 1++ each time a player plays. 9 "clicks" TIE
var randomLi; //a random ".box li" will be set for value. This will be used for when the computer plays
var playerOName; //value will be set when player O sets their name in the prompt
var playerXName; //"                                                            "
var scoreX = 0 //keep score for player 0. 1++ whenever that player wins
var scoreO = 0//"                                                       "

//set variables with the divs provided for when a player wins or game is tied. (different text and class names depending on results)
const winScreen1 = '<div class="screen screen-win screen-win-one" id="finish"><header><h1>Tic Tac Toe</h1><p class="message">Winner</p><a href="#" class="button">New game</a></header></div>'
const winScreen2 = '<div class="screen screen-win screen-win-two" id="finish"><header><h1>Tic Tac Toe</h1><p class="message">Winner</p><a href="#" class="button">New game</a></header></div>'
const tieScreen = '<div class="screen screen-win screen-win-tie" id="finish"><header><h1>Tic Tac Toe</h1><p class="message">It\'s a Tie</p><a href="#" class="button">New game</a></header></div>'

//function to returning the random "li.box" for when the "computer" plays
const getRandomLi = ()=>{
    for (var i = 0; i <= $("li.box").length; i++){
    randomLi =  $(`#${(Math.floor(Math.random() * i) + 1)}`)
    };
    return randomLi
};

//add an id to each "li.box" of 1 through 9. Just for simplicity of setting a "li.box" for the getRandomLi function
$("li.box").attr("id", function(i) {
    return i+1
})

//once player clicks "start" a promt will appear to enter their names. if player clicked "cancel" it'll set O or X to "Computer".
//if player clicks "cancel" for both, an alert will appear asking player to enter at least one human player.
//the "while" loop will assure the player enters at least one name or leave blank for no name but a human player.
$(".button").click(function(e) {
    playerOName = prompt('Player-O, Enter your name.. If you click "cancel", The computer will play.')
    playerXName = prompt('Player-X, Enter your name.. If you click "cancel", The computer will play.')
    while (playerOName === null && playerXName === null ){
        alert("Who wants to see two Computers play each other? There Must be at least one human player")
        playerOName = prompt('Player-O, Enter your name.. If you click "cancel", The computer will play.')
        playerXName = prompt('Player-X, Enter your name.. If you click "cancel", The computer will play.')
    }

//if player cliked "cancel"(null). name O or X "Computer"
    if(playerOName === null){
        playerOName = "Computer";
    }
    if(playerXName === null){
        playerXName = "Computer"
    }

//hide the "start" screen. and show the "tictactoe .board". Game will start with "player1" to play first. this will alternate depending on who wins and who went first when "tie"
    $("#start").hide();
    $(".board").show();
    $("#player1").addClass('active')

//if and else if checking to see if one of the players is a "computer".
//if player1 is active AND playerOName is Computer AND playerXName is NOT "computer"
    if($("#player1").hasClass('active') && playerOName === "Computer" && playerXName !== "Computer"){
        clicks++ //add one click
        $("#player1").removeClass('active') //remove .active class from "player1"
        $("#player2").addClass('active') //add .active class to "player2"
        getRandomLi().addClass('box-filled-1') //and set "box-filled-1" class to a random "li.box"
    } else if ($("#player2").hasClass('active') && playerXName === "Computer" && playerOName !== "Computer"){ //(same function as previous. but with "player2" as "Computer")
        clicks++
        $("#player2").removeClass('active')
        $("#player1").addClass('active')
        getRandomLi().addClass('box-filled-2')
    }
//prepend and append the players names and players starting scores
    $("#player1").prepend(`<span><strong>${playerOName}`)
    $("#player2").prepend(`<span><strong>${playerXName}`)
    $("#player1").append(`<span id="scoreO"><strong>Score: ${scoreO}`)
    $("#player2").append(`<span id="scoreX"><strong>Score: ${scoreX}`)
});



//mouseover event to highligh the boxes with the given "background-image" depending on whos turn it is.
$(".box").mouseover(function() {
//if the target the mouse is hovering over DOES NOT have a ".box-filled-1" or ".box-filled-2" class, then add css to that target depending on which player has ".active" class
    if(!$(event.target).is(".box-filled-1, .box-filled-2")){
        if ($("#player1").hasClass('active')){
            $(event.target).css('background-image', "url(img/o.svg)")
        } else if ($("#player2").hasClass('active')){
            $(event.target).css('background-image', "url(img/x.svg)")
        }
//once mouse is off that target, set "background-image" with no value to remove the image
    $(this).mouseout(function(e) {
        $(event.target).css('background-image', '');
    });
}
});


//the fun part. click event for when a box is clicked
$(".box").click(function() {
//if that target does NOT have a .box-filled-1 or .box-filled-2 class, then we can proceed..
    if(!$(event.target).is(".box-filled-1, .box-filled-2")){
//if player1 is active and is NOT a computer...
        if ($("#player1").hasClass('active') && playerOName !== "Computer"){
            clicks++ //add a click
            $(event.target).addClass('box-filled-1')//add the .box-filled-1 class to the target clicked
//if statement checking to see if .box-filled-1 class is certain boxes to check if there 3 in a row. horizontally, vertically or diagonally.
            if ($("#1").hasClass('box-filled-1') && $("#2").hasClass('box-filled-1') && $("#3").hasClass('box-filled-1') ||
                $("#4").hasClass('box-filled-1') && $("#5").hasClass('box-filled-1') && $("#6").hasClass('box-filled-1') ||
                $("#7").hasClass('box-filled-1') && $("#8").hasClass('box-filled-1') && $("#9").hasClass('box-filled-1') ||
                $("#1").hasClass('box-filled-1') && $("#4").hasClass('box-filled-1') && $("#7").hasClass('box-filled-1') ||
                $("#2").hasClass('box-filled-1') && $("#5").hasClass('box-filled-1') && $("#8").hasClass('box-filled-1') ||
                $("#3").hasClass('box-filled-1') && $("#6").hasClass('box-filled-1') && $("#9").hasClass('box-filled-1') ||
                $("#1").hasClass('box-filled-1') && $("#5").hasClass('box-filled-1') && $("#9").hasClass('box-filled-1') ||
                $("#3").hasClass('box-filled-1') && $("#5").hasClass('box-filled-1') && $("#7").hasClass('box-filled-1') ) {
                    scoreO++ //add 1 to score
                    $("li.box").removeClass('box-filled-1 box-filled-2'); //remove all the box-filled classes from all the li.box
                    $(".board").hide() //hide the board
                    $("body").prepend(winScreen1)//add the div for player1 winner
                    $("#scoreO").html(`Score: ${scoreO}`)//change the score on the html
                    clicks = 0;// start clicked back at 0.
                $(".button").click(function() { //event for the "New Game" button
                    $("#finish").remove() //remove the "Winner" div
                    $(".board").show()//show "empty" board again
                    $("#player2").addClass('active')//add class to player2 since player one WON.
                    if ($("#player2").hasClass('active') && playerXName === "Computer"){ //if player2 is a computer though
                        clicks++ //add a click for the computer
                        $("#player2").removeClass('active') //remove the .active class from player2 (computer)
                        $("#player1").addClass('active') //add it to player1
                        getRandomLi().addClass('box-filled-2') //add ".box-filled-2" to a random "li.box"
                    }
                });
            }
            $("#player1").removeClass('active')//if player1 did NOT win after choosing the box though, remove the .active from player1
            $("#player2").addClass('active')//add it to player2
        } else if ($("#player2").hasClass('active')  && playerXName !== "Computer"){//"same, but for player2"
            clicks++
            $(event.target).addClass('box-filled-2')

            if ($("#1").hasClass('box-filled-2') && $("#2").hasClass('box-filled-2') && $("#3").hasClass('box-filled-2') ||
                $("#4").hasClass('box-filled-2') && $("#5").hasClass('box-filled-2') && $("#6").hasClass('box-filled-2') ||
                $("#7").hasClass('box-filled-2') && $("#8").hasClass('box-filled-2') && $("#9").hasClass('box-filled-2') ||
                $("#1").hasClass('box-filled-2') && $("#4").hasClass('box-filled-2') && $("#7").hasClass('box-filled-2') ||
                $("#2").hasClass('box-filled-2') && $("#5").hasClass('box-filled-2') && $("#8").hasClass('box-filled-2') ||
                $("#3").hasClass('box-filled-2') && $("#6").hasClass('box-filled-2') && $("#9").hasClass('box-filled-2') ||
                $("#1").hasClass('box-filled-2') && $("#5").hasClass('box-filled-2') && $("#9").hasClass('box-filled-2') ||
                $("#3").hasClass('box-filled-2') && $("#5").hasClass('box-filled-2') && $("#7").hasClass('box-filled-2') ) {
                    scoreX++
                    $("li.box").removeClass('box-filled-1 box-filled-2');
                    $(".board").hide()
                    $("body").prepend(winScreen2)
                    $("#scoreX").html(`Score: ${scoreX}`)
                    clicks = 0;
                $(".button").click(function() {
                    $("#finish").remove()
                    $(".board").show()
                    $("#player1").addClass('active')
                    if($("#player1").hasClass('active') && playerOName === "Computer"){
                        clicks++
                        $("#player1").removeClass('active')
                        $("#player2").addClass('active')
                        getRandomLi().addClass('box-filled-1')
                    }
                });
            }
                $("#player2").removeClass('active')
                $("#player1").addClass('active')
            }

        }
//check if player 1 is active and is a "computer" AND clicks are still less then 9(not a tie yet).
            if($("#player1").hasClass('active') && playerOName === "Computer" && $(".board").is(":visible") && clicks < 9){
                clicks++ //add a click for the computers play
                $("#player1").removeClass('active')//remove .active class
                var compXPick = getRandomLi(); //set a random "li.box" to a variable
                while ($(compXPick).is(".box-filled-1, .box-filled-2")){ //while loop checking if that random "li.box" has a .box-filled-1 or .box-filled-2 class
                    compXPick = getRandomLi() //if it does, keep chosing a new random "li.box" till it grabs one that doesnt have class
                }
                $(compXPick).addClass('box-filled-1')//set the .box-filled-1 class to that "li.box"
//check to see if computer player won using the same method as before and set the board and score same way also.
                if ($("#1").hasClass('box-filled-1') && $("#2").hasClass('box-filled-1') && $("#3").hasClass('box-filled-1') ||
                    $("#4").hasClass('box-filled-1') && $("#5").hasClass('box-filled-1') && $("#6").hasClass('box-filled-1') ||
                    $("#7").hasClass('box-filled-1') && $("#8").hasClass('box-filled-1') && $("#9").hasClass('box-filled-1') ||
                    $("#1").hasClass('box-filled-1') && $("#4").hasClass('box-filled-1') && $("#7").hasClass('box-filled-1') ||
                    $("#2").hasClass('box-filled-1') && $("#5").hasClass('box-filled-1') && $("#8").hasClass('box-filled-1') ||
                    $("#3").hasClass('box-filled-1') && $("#6").hasClass('box-filled-1') && $("#9").hasClass('box-filled-1') ||
                    $("#1").hasClass('box-filled-1') && $("#5").hasClass('box-filled-1') && $("#9").hasClass('box-filled-1') ||
                    $("#3").hasClass('box-filled-1') && $("#5").hasClass('box-filled-1') && $("#7").hasClass('box-filled-1') ) {
                        scoreO++
                        $("li.box").removeClass('box-filled-1 box-filled-2');
                        $(".board").hide()
                        $("body").prepend(winScreen1)
                        $("#scoreO").html(`Score: ${scoreO}`)
                        clicks = 0;
                    $(".button").click(function() {
                        $("#finish").remove()
                        $(".board").show()
                        $("#player2").addClass('active')
                        if($("#player1").hasClass('active') && playerOName === "Computer"){
                            clicks++
                            $("#player1").removeClass('active')
                            $("#player2").addClass('active')
                            getRandomLi().addClass('box-filled-1')
                        }
                    });
                }
                $("#player2").addClass('active')
            } else if ($("#player2").hasClass('active') && playerXName === "Computer" && $(".board").is(":visible") && clicks < 9){ //same as player1 computer
                clicks++
                $("#player2").removeClass('active')
                var compXPick = getRandomLi();
                while ($(compXPick).is(".box-filled-1, .box-filled-2")){
                    compXPick = getRandomLi()
                }
                $(compXPick).addClass('box-filled-2')
            if ($("#1").hasClass('box-filled-2') && $("#2").hasClass('box-filled-2') && $("#3").hasClass('box-filled-2') ||
                $("#4").hasClass('box-filled-2') && $("#5").hasClass('box-filled-2') && $("#6").hasClass('box-filled-2') ||
                $("#7").hasClass('box-filled-2') && $("#8").hasClass('box-filled-2') && $("#9").hasClass('box-filled-2') ||
                $("#1").hasClass('box-filled-2') && $("#4").hasClass('box-filled-2') && $("#7").hasClass('box-filled-2') ||
                $("#2").hasClass('box-filled-2') && $("#5").hasClass('box-filled-2') && $("#8").hasClass('box-filled-2') ||
                $("#3").hasClass('box-filled-2') && $("#6").hasClass('box-filled-2') && $("#9").hasClass('box-filled-2') ||
                $("#1").hasClass('box-filled-2') && $("#5").hasClass('box-filled-2') && $("#9").hasClass('box-filled-2') ||
                $("#3").hasClass('box-filled-2') && $("#5").hasClass('box-filled-2') && $("#7").hasClass('box-filled-2') ) {
                    scoreX++
                    $("li.box").removeClass('box-filled-1 box-filled-2');
                    $(".board").hide()
                    $("body").prepend(winScreen2)
                    $("#scoreX").html(`Score: ${scoreX}`)
                    clicks = 0;
                $(".button").click(function() {
                    $("#finish").remove()
                    $(".board").show()
                    $("#player1").addClass('active')
                    if($("#player1").hasClass('active') && playerOName === "Computer"){
                        click++
                        $("#player1").removeClass('active')
                        $("#player2").addClass('active')
                        getRandomLi().addClass('box-filled-1')
                    }
                });
            }
            $("#player1").addClass('active')
            }
//finally, check if clicks = 9. if yes, that can only mean it's a tie
            if(clicks === 9){
                $("li.box").removeClass('box-filled-1 box-filled-2'); //remove all box filled classes
                $(".board").hide()//hide board
                $("body").prepend(tieScreen)//append the provided "tie" div
                clicks = 0; //set clicks to 0
            $(".button").click(function() {//same event as above. 
                $("#finish").remove()
                $(".board").show()
                $("#player").addClass('active')
                if($("#player1").hasClass('active') && playerOName === "Computer"){
                    clicks++
                    $("#player1").removeClass('active')
                    $("#player2").addClass('active')
                    getRandomLi().addClass('box-filled-1')
                } else if ($("#player2").hasClass('active') && playerXName === "Computer"){
                    clicks++
                    $("#player2").removeClass('active')
                    $("#player1").addClass('active')
                    getRandomLi().addClass('box-filled-2')
                }
            });
        }

});
