/**
 * Created by Jasper on 27/05/14.
 */

Meteor.publish('scores', function() {
    return Score.find();
});

Meteor.publish('quizzes', function() {
    return Quizzes.find();
});



Meteor.publish('questionsAdded', function() {
    return QuestionsAdded.find();
});


Meteor.publish('test', function(){
    var user =  Meteor.users.findOne(this.userId);

    if (user)
        return questiondummy.find({user: user.username});

    this.ready();
});

Meteor.publish('userdata', function() {
    return UserData.find();
});


//Meteor.user().username

//Score.find({'quiz': 3}, {sort: {score: -1}})