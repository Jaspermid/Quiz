/**
 * Created by Jasper on 26/05/14.
 */
Deps.autorun(function () {
    Meteor.subscribe("quizzes")});

Deps.autorun(function () {
    Meteor.subscribe("scores")});



Template.quizList.helpers({
    quiz: function() {
        return Quizzes.find();
    }
});

