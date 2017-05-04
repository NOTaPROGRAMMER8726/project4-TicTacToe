$(".board").hide()
$("body").append('<div class="screen screen-start" id="start"><header><h1>Tic Tac Toe</h1><a href="#" class="button">Start game</a></header></div>')
var clicks = 0;
var randomLi;
var playerOName;
var playerXName;
var scoreX = 0
var scoreO = 0

const winScreen1 = '<div class="screen screen-win screen-win-one" id="finish"><header><h1>Tic Tac Toe</h1><p class="message">Winner</p><a href="#" class="button">New game</a></header></div>'
const winScreen2 = '<div class="screen screen-win screen-win-two" id="finish"><header><h1>Tic Tac Toe</h1><p class="message">Winner</p><a href="#" class="button">New game</a></header></div>'
const tieScreen = '<div class="screen screen-win screen-win-tie" id="finish"><header><h1>Tic Tac Toe</h1><p class="message">It\'s a Tie</p><a href="#" class="button">New game</a></header></div>'

const getRandomLi = ()=>{
    for (var i = 0; i <= $("li.box").length; i++){
    randomLi =  $(`#${(Math.floor(Math.random() * i) + 1)}`)
    };
    return randomLi
};

$("li.box").attr("id", function(i) {
    return i+1
})


$(".button").click(function(e) {
    playerOName = prompt('Player-O, Enter your name.. If you click "cancel", The computer will play.')
    playerXName = prompt('Player-X, Enter your name.. If you click "cancel", The computer will play.')
    while (playerOName === null && playerXName === null ){
        alert("Who wants to see two Computers play each other? There Must be at least one human player")
        playerOName = prompt('Player-O, Enter your name.. If you click "cancel", The computer will play.')
        playerXName = prompt('Player-X, Enter your name.. If you click "cancel", The computer will play.')
    }
    if(playerOName === null){
        playerOName = "Computer";
    }
    if(playerXName === null){
        playerXName = "Computer"
    }

    $("#start").hide();
    $(".board").show();
    $("#player1").addClass('active')

    if($("#player1").hasClass('active') && playerOName === "Computer" && playerXName !== "Computer"){
        clicks++
        $("#player1").removeClass('active')
        $("#player2").addClass('active')
        getRandomLi().addClass('box-filled-1')
    } else if ($("#player2").hasClass('active') && playerXName === "Computer" && playerOName !== "Computer"){
        clicks++
        $("#player2").removeClass('active')
        $("#player1").addClass('active')
        getRandomLi().addClass('box-filled-2')
    }
$("#player1").prepend(`<span><strong>${playerOName}`)
$("#player2").prepend(`<span><strong>${playerXName}`)
$("#player1").append(`<span id="scoreO"><strong>Score: ${scoreO}`)
$("#player2").append(`<span id="scoreX"><strong>Score: ${scoreX}`)
});



$(".box").mouseover(function() {
    if(!$(event.target).is(".box-filled-1, .box-filled-2")){
        if ($("#player1").hasClass('active')){
            $(event.target).css('background-image', "url(img/o.svg)")
        } else if ($("#player2").hasClass('active')){
            $(event.target).css('background-image', "url(img/x.svg)")
        }
    $(this).mouseout(function(e) {
        $(event.target).css('background-image', '');
    });
}
});



$(".box").click(function() {
    if(!$(event.target).is(".box-filled-1, .box-filled-2")){
        if ($("#player1").hasClass('active') && playerOName !== "Computer"){
            clicks++
            $(event.target).addClass('box-filled-1')
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
                    if ($("#player2").hasClass('active') && playerXName === "Computer"){
                        clicks++
                        $("#player2").removeClass('active')
                        $("#player1").addClass('active')
                        getRandomLi().addClass('box-filled-2')
                    }
                });
            }
            $("#player1").removeClass('active')
            $("#player2").addClass('active')
        } else if ($("#player2").hasClass('active')  && playerXName !== "Computer"){
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
            if($("#player1").hasClass('active') && playerOName === "Computer" && $(".board").is(":visible") && clicks < 9){
                clicks++
                $("#player1").removeClass('active')
                var compXPick = getRandomLi();
                    while ($(compXPick).is(".box-filled-1, .box-filled-2")){
                        compXPick = getRandomLi()
                    }
                $(compXPick).addClass('box-filled-1')
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
            } else if ($("#player2").hasClass('active') && playerXName === "Computer" && $(".board").is(":visible") && clicks < 9){
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
            if(clicks === 9){
                $("li.box").removeClass('box-filled-1 box-filled-2');
                $(".board").hide()
                $("body").prepend(tieScreen)
                clicks = 0;
            $(".button").click(function() {
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
