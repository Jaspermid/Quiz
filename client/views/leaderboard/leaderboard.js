/**
 * Created by Jasper on 14/06/14.
 */


Template.leaderboard.helpers ({



    quizzes: function() {
    return Quizzes.find()
},


    quizzessorted: function(){
       return Score.find({'quiz': this.quizid}, {sort: {score: -1}})


        //return Score.find({});


    }




})

Template.leaderboard.events({

    'click .leaderboardquiz': function(e){
        $(e.target).nextUntil('.leaderboardquiz').slideToggle("slow");
    }


})