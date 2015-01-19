




Template.questionForm.events({
    'click .add-answer': function(event, template) {
        //helper adds a single entry into the answer array, entry will always be 1 higher than the last entry to prevent duplication

       answerarraysmall2 = questiondummy.findOne({'_id': template.data._id}).answerarray
       idnewanswer = parseInt(answerarraysmall2.slice(-1)[0]) + 1
       answerarraysmall2.push ("" +idnewanswer)
       questiondummy.update(template.data._id, {$set:{answerarray:answerarraysmall2}});

    },

        //
        'click .correctAnswer':function(){

            //creates an array to be shown in the select box of correct answer
            answered= [[],[],[],[],[],[],[]]
            for (i=1; i<questiondummy.find().count() + 1; i++) {
                $("#"+i+".questionForm").find(".Answer").each(function (index) {
                    answered[i - 1].push($(this).val())
                });
            }
            Session.set('answered', answered)
        },

        'change .Answer': function(event) {
            //sets an array to be shown by the select box

            console.log ('test')
            answered= [[],[],[],[],[],[],[]]

            for (i=1; i<questiondummy.find().count() + 1; i++) {

                $("#"+i+".questionForm").find(".Answer").each(function (index) {
                    answered[i - 1].push($(this).val())
                });

            }
            Session.set('answered', answered)

        },

        'click .remove-this-question': function(){
            //removes a question
            questiondummy.remove((this)._id)
            Meteor.call('resetNumber')
        }
    }
)



Template.questionForm.helpers ({

    questiondummy:function(){
        return questiondummy.find()
    },

    answers: function(){
        return this.answerarray
    },

    questionanswered: function(parentContext){

        // finds eacht question that is answered to display in the seelct box.
        console.log(parentContext.questionnumber)
        a = (Session.get('answered')) || [[],[],[],[],[],[]]
        return a[parentContext.questionnumber -1]
},
})

