/**
 * Created by Jasper on 01/08/14.
 */
Meteor.methods({
    resetNumber: function () {

        var questionnumbers = questiondummy.find({});
        var count = 1;
        questionnumbers.forEach(function (post) {
            questiondummy.update(post._id, {$set: {questionnumber: count}});

            console.log(this.questionnumber);
            count += 1;
        });
    }
})