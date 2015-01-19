
var status = null
var statusDep = new Deps.Dependency();


Template.userPage.rendered = function() {
    try {
        FB.XFBML.parse();
    } catch (e) {
    }


    FB.init(
        {
            appId: 676904182383819,
            status: true, // check login status
            cookie: true, // enable cookies to allow the server to access the session
            xfbml: true  // parse XFBML
        });

    FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
            status = true;
            statusDep.changed();
        } else {
            status = false;
            statusDep.changed();
        }

    });

}

Template.userPage.helpers ({

    user: function(){
        return Meteor.user().username || Meteor.user().profile.name
    },

    facebookuser: function(){

        FB.getLoginStatus(function (response) {
            if (Meteor.user().profile.name != undefined) {
                UID2 = response.authResponse.userID
                Session.set ('UID', UID2)
            }
        });


        return Session.get("UID")

    },

    facebookuserloggedin: function(){
        if (Meteor.user().profile.name != undefined) {

            statusDep.depend();
            return status;
        }
        else{
            return false
        }
    },
    scoreit: function() {
        return Score.find({'quiz': 3}, {sort: {score: -1}})

    },

    quizone: function(){
        return Score.find({'quiz': 3})
    },

    quizzes: function() {
        return Quizzes.find()
    },

    createdQuizzes: function() {
      return Quizzes.find({'user': Meteor.user().username});
    },

    test: function(){

        user = Meteor.user().username || Meteor.user().profile.name

        return Score.find({'quiz': this.quizid, 'user': user}, {sort: {score: -1}})





    }




})



Template.userPage.events({

    'click .leaderboardquiz': function(e){
        //alert ('etest');
        //$(this).toggle("slow");

        // $(e.target).closest(".scores").hide();
        // $( ".scores" ).slideToggle( "slow")
        $(e.target).nextUntil('.leaderboardquiz').slideToggle("slow");
    },

    'click .connectFacebook' : function () {
        alert ("test")
        Meteor.connectWithFacebook(options, function () {
            console.log(arguments);
        });
    }



})