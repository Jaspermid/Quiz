/**
 * Created by Jasper on 29/07/14.
 */


Template.answerForm.helpers ({
    'answer': function(){
        //returns the answerarray of the current question.
        // answerarray holds the number of answers the users has indicated he wantson the currentquestion
        return this.answerarray;
    }



});

Template.questionForm.events({

    //removes a specific answer from the answerarray and pdates the questiondummy collection with this array
    'click .remove-answer': function (event, template) {
        answerarraysmall = questiondummy.findOne({'_id': template.data._id}).answerarray
        var a = answerarraysmall.indexOf("" + this);
        answerarraysmall.splice(a, 1)
        questiondummy.update(template.data._id, {$set:{answerarray:answerarraysmall}});
    }

});
