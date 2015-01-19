
number =0
n = 0;


Template.createQuiz.rendered = function(){
    //resets the order of the questionnumbers
    Meteor.call('resetNumber')
}

Template.createQuiz.helpers ({
    questionsAdded: function () {
        //returns teh number of questions the user has indicated he wants in the quiz.
        // Found in questiondummy are simple object that serve only to count the number of questions and answers
        return questiondummy.find()
    }
})

Template.createQuiz.events({

    'click .add-question': function () {
        //resets the order of the questionnumbers
        Meteor.call('resetNumber')

        //finds the questionnumber to add for a new question
        if (questiondummy.find().count() > 0){
            number =  questiondummy.findOne({}, {sort: {timestamp: -1}}).questionnumber + 1
        }
        else{
            number = 1;
        }

        //inserts the new question in the questiondummy
        questiondummy.insert({

            questionnumber: number,
            user: Meteor.user().username,
            //timestamp to sort the questions when needed
            timestamp: new Date().getTime(),
            //dummy answerarray to make sure four answers are added to a new question being added
            answerarray: ["1", "2", "3", "4"]

        })
    },


    'click .submit': function () {

        //reset all the various arrays, to be sure.
        questionArray = [];
        answerArray = [[],[],[],[],[],[]];
        thisanswerArray = [];
        correctAnswerArray = [];


        //goes through each questiontitle and pushes the value of that question to an array
        $(".questiontitleinput").each(function () {
            questionArray.push($(this).val());
        });

        //goes through each correctanswer and pushes the value of that question to an array
        $(".correctanswer").each(function () {
            correctAnswerArray.push($(this).val());
        });

        //goes throug hall questions and pushes an array of the answers to an array
        for (i = 1; i < questiondummy.find().count() + 1; i++) {
            $("#" + i + ".questionForm").find(".Answer").each(function (index) {
                answerArray[i - 1].push($(this).val())
            });

        }
        //quiziddummy to get the latest number and add a quizid to the quiz being added
        quiziddummy = Quizzes.find().count() + 1

        //gets the quiztitle and category and for inserting
        quiztitle = document.getElementById('quiztitleinput').value
        category = document.getElementById('quizcategoryinput').value,

        //username either from meteor-accounts or from facebook depending on the login type
        user = Meteor.user().username || Meteor.user().profile.name,

        //inserts all previous data into the database
        Meteor.call('quizzesUpsert', quiziddummy, quiztitle, category, user, questionArray, answerArray, correctAnswerArray)


    }



});




