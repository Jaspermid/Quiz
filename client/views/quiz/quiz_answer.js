/**
 * Created by Jasper on 10/06/14.
 */


Template.quizAnswer.rendered = function ( ) {
    //highlights the previously selected answer
    $(".quiz:nth-child(" +previousAnswers[currentQuestion[currentquiz]] +")").toggleClass( "highlight",true, 500, "easeOutSine", "false");

}



