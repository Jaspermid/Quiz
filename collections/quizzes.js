/**
 * Created by Jasper on 27/05/14.
 */
Quizzes = new Meteor.Collection('quizzes');

Score = new Meteor.Collection('score');

UserData = new Meteor.Collection ('userdata');

QuestionsAdded = new Meteor.Collection ('questionsAdded');

questiondummy = new Meteor.Collection('questiondummy');


/*Score.allow({
    insert: function (userId, doc) {
        // the user must be logged in, and the document must be owned by the user
        return true;
    }
})*/

questiondummy.allow({
    insert: function (userId) {
        // the user must be logged in, and the document must be owned by the user
        return (userId != null);
    },

    remove: function (userId) {
        // the user must be logged in, and the document must be owned by the user
        return (userId != null);
    },

    update: function (userId) {
        // the user must be logged in, and the document must be owned by the user
        return (userId != null);
    }

})

Score.allow({
    insert: function (userId) {
        // the user must be logged in, and the document must be owned by the user
        return (userId != null);
    }

})
Quizzes.allow({
    insert: function (userId) {
        // the user must be logged in, and the document must be owned by the user
        return (userId != null);
    },
    remove: function (userId) {
        // the user must be logged in, and the document must be owned by the user
        return (userId != null);
    },
    update: function (userId) {
        // the user must be logged in, and the document must be owned by the user
        return (userId != null);
    },


})



QuestionsAdded.allow({
    insert: function (userId) {
        return (userId != null);
    }

})

UserData.allow({
    insert: function (userId) {
        // the user must be logged in, and the document must be owned by the user
        return (userId != null);
    },
    update: function (userId) {
        // the user must be logged in, and the document must be owned by the user
        return (userId != null);
    }


})

Meteor.methods({
    userUpsert: function( id, doc ){
        UserData.upsert( id, doc );
    }
});

Meteor.methods({
    userInsert: function( id, doc ){
        UserData.insert( {user: doc});
    }
});
;