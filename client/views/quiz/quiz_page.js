/**
 * Created by Jasper on 02/06/14.
 */
Template.quizPage.rendered = function() {
    previousAnswers = Session.get('previousAnswers') || [];
    Session.set('currentQuestion', UserData.findOne({'user': Meteor.user().username}).currentQuestions ||  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    $(".bar").css("width", "" + progressBar + "%")

}

Template.quizPage.helpers({
    question: function(){
       //this helper finds the currentquiz and returns the currentquestion to the template
        //currentQuestion array still has to be converted to MongoDb for scaleability
        var currentQuestion = Session.get('currentQuestion') || [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        currentquiz = this.quizid
        Session.set ('currentQuiz', currentquiz);
        currentquiz = Session.get ('currentQuiz')
        return Quizzes.findOne({'quizid': currentquiz}).quizquestions[currentQuestion[currentquiz]]
    },

    // displays the length of the quiz
    length: function (){
        Session.set ('questionLength',$(Quizzes.findOne({'quizid': currentquiz}).quizquestions).length);
        return Session.get ('questionLength');
    },

    answers: function(){
        //finds the answers for the quizz
        currentQuestion = Session.get('currentQuestion') ||  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

        correctAnswer = Quizzes.findOne({'quizid': currentquiz}).correctAnswers[currentQuestion[currentquiz]];
        return Quizzes.findOne({'quizid': currentquiz}).answers[currentQuestion[currentquiz]];

    },
    test: function() {
        currentQuestion = Session.get('currentQuestion')||  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        currentquiz = 1;
        var test = currentQuestion[currentquiz]+ 1 || 1;




    },

    questionsLeft: function() {

        currentQuestion = Session.get('currentQuestion') || [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

        currentquiz = this.quizid;

        Session.set ('currentQuestion', currentQuestion)


        Session.set ('questionLength',$(Quizzes.findOne({'quizid': currentquiz}).quizquestions).length);
        //Below functionaliy is purely for rendering the progressBarr

        questionsLeft =  Session.get ("questionLength") - currentQuestion[currentquiz];
        progressBar = 1 - questionsLeft/Session.get ('questionLength');
        progressBar *= 100;
        $(".bar").css("width", "" + progressBar + "%")


        return ((currentQuestion[currentquiz]) < (Session.get('questionLength')))
 ;
    }


});

Template.quizPage.events({
    'click .next-question': function(e) {

      //  Meteor.call( 'userUpsert', Meteor.users.findOne({})._id, 'user', Meteor.users.findOne({}) );




        //Displays the next question (if there are questions left)


        var num = currentQuestion[currentquiz] + 1 || 1;
        if (num <= Session.get('questionLength') && ($(".highlight")[0]) ) {
            currentQuestion[currentquiz] += 1;
            Session.set('currentQuestion', currentQuestion);
            if (($(".highlight").attr("id")) === correctAnswer) {
                currentScore = Session.get('score') ||  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                currentScore[currentquiz] += 1
                previousCorrect = true
                Session.set('score', currentScore);
            }
            else {
                previousCorrect = false
            }

        }
        else if (!$(".highlight")[0]){
            alert ('please select a answer')
        }




        if (Meteor.users.findOne({}) != undefined) {
            Meteor.call('sessionUpsert',
                Meteor.users.findOne({})._id,
                currentQuestion,
                Meteor.user().username,
                Session.get ('score')
            )

        }
        console.log(Session.get ('score'))

    },

    'click .answer': function(e){

        console.log (e.target.id)
        //highlights the most recently clicked answer.
        $('.highlight').toggleClass ("highlight", false, 500);
        $(e.target).closest(".answer").toggleClass( "highlight",true, 100, "easeOutSine", "false");

        //saves the index of the clicked target, +1 due to difference in .index counting and nth-child selector
        clickedQuestion = ($(".quiz").index(e.target)) + 1
        previousAnswers[currentQuestion[currentquiz]] = clickedQuestion;
        Session.set('previousAnswers', previousAnswers)




        var num = currentQuestion[currentquiz] + 1 || 1;



        if (num <= Session.get('questionLength')) {


            if (e.target.id === correctAnswer) {
                currentScore = Session.get('score') ||  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
                currentScore[currentquiz] += 1
                previousCorrect = true
                Session.set('score', currentScore);
            }

            else {
                previousCorrect = false
            }
            currentQuestion[currentquiz] += 1;
            Session.set('currentQuestion', currentQuestion);

        }





        if (Meteor.users.findOne({}) != undefined) {
            Meteor.call('sessionUpsert',
                Meteor.users.findOne({})._id,
                currentQuestion,
                Meteor.user().username,
                Session.get ('score')
            )

        }
        console.log(Session.get ('score'))

    },
    'click .previous-question': function(){
        if (currentQuestion[currentquiz] > 0) {
            currentQuestion[currentquiz] -= 1;
            Session.set('currentQuestion', currentQuestion);


            if (previousCorrect){

                currentScore[currentquiz] -= 1
                Session.set('score', currentScore)

            }
        }
    }



});


