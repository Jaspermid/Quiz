/**
 * Created by Jasper on 27/07/14.
 */
Template.editQuiz.rendered = function() {

    console.log (this.data.quiztitle)

    //preload quiz title
    document.getElementById("quiztitleinput").value = this.data.quiztitle

    //preload category field
    document.getElementById('quizcategoryinput').value =this.data.category

    //preload quiz questions
    console.log (this.data.quizquestions)
    for (i=0; i<this.data.quizquestions.length; i++){
        document.getElementById("question"+ (i + 1)+ "").value = this.data.quizquestions[i]
    }

    //preload answers for each question
    for (i = 1; i < questiondummy.find().count() + 1; i++) {
        a = (this.data.answers[i -1])
        $("#" + i + ".questionForm").find(".Answer").each(function (index) {
            (this).value = a[index]
        });

    }

     // read the answers filled in on page
    answered= [[],[],[],[],[],[],[]]
    for (i=1; i<questiondummy.find().count() + 1; i++) {

        $("#"+i+".questionForm").find(".Answer").each(function (index) {
            answered[i - 1].push($(this).val())
        });

    }
    Session.set('answered', answered)



   //set the correctAnswers to previously filled in answers
    for (i=0; i<this.data.correctAnswers.length; i++){
        console.log (this.data.correctAnswers[i])
        document.getElementById("correctanswer"+ (i + 1)+ "").value = this.data.correctAnswers[i]
    }









}

