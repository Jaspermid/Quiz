/**
 * Created by Jasper on 11/06/14.
 */


Template.quizResult.rendered = function ( ) {
    //highlights the previously selected answer
if (Meteor.users != null);
    {
        usernow = Meteor.user().username || Meteor.user().profile.name

        scorenow = currentScore[currentquiz];
        //alert (currentScore);
        if (Score.findOne({'quiz': currentquiz, user: usernow}) === undefined || scorenow > Score.findOne({'quiz': currentquiz, user: usernow}).score) {

            Meteor.call('scoreupsert',

                Meteor.users.findOne({})._id,
                currentquiz,
                scorenow,
                usernow
            )
        }

    }

   // alert (Session.get('score'))
    if (Session.get('score') === undefined){
        currentScore= UserData.findOne({user: usernow}).score
        Session.set('score',currentScore);

    }

}

Template.quizResult.helpers ({

    score: function() {
        currentScore = Session.get ('score') || [0,0,0,0];
        return currentScore[currentquiz] || 0
    }

})
Template.quizPage.events({
    'click .reset': function() {
        currentQuestion[currentquiz]= 0;
        Session.set ('currentQuestion', currentQuestion)
        currentScore[currentquiz]= 0


      Session.set('score', currentScore)

    }
})
