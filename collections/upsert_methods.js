/**
 * Created by Jasper on 21/06/14.
 */
Meteor.methods({
    scoreupsert: function( id, quiz, score, user ){
        Score.upsert({
           // _id: id,
            quiz: quiz,
            user: user
        },
            {
                user: user,
                quiz: quiz,
                score: score
            }
        )

    },
    questionupsert: function(user){
        QuestionsAdded.upsert({
                // _id: id,

                user: user
            },
            {
                test: "test"
            }
        )

    },

    sessionUpsert: function( id, currentQuestions, user, score ){
        UserData.upsert({
                // _id: id,
                user: user
            },
            {
                user: user,
                currentQuestions: currentQuestions,
                score:score
            }
        )
    },

    answerDummyUpsert: function(id, answers) {
       questiondummy.upsert ({
           _id: id

       },
           {
               answerarray: answers
           }



       )



    },

    quizzesUpsert:function (quizid, quiztitle, category, user, quizquestions, answers, correctAnswers){
    Quizzes.upsert(
        {
            "_id": quizid
        },
    {
        "quiztitle": quiztitle,
        "category": category,
        "user": user,
        "quizquestions": quizquestions,
        //Below is dummy quizid, change use of quizid to use of _id
        "quizid":quizid,
        "answers": answers,
        "correctAnswers": correctAnswers,


    })

}

});