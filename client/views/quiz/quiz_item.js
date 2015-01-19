/**
 * Created by Jasper on 27/05/14.
 */



Template.quizItem.helpers({
    currentUserQuiz: function() {



       if (Meteor.userId  != null && Meteor.user().username === this.user || Meteor.user().profile.name === this.user){
            return true
        }
        else {
            return false
        }

    }


})

Template.quizItem.events({
    'click .remove': function() {
        id = this._id

        if (ownsDocument(Meteor.user().username, this.user)) {
            Quizzes.remove(id)
        }
    }
})
