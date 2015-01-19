/**
 * Created by Jasper on 30/05/14.
 */





Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
   waitOn: function() { return Meteor.subscribe('quizzes'); }
});

Router.map(function() { this.route('quizList', {path: '/quizzes'}),
    this.route('home', {path: '/'});
    this.route('userPage', { path: '/userPage'
    });
    this.route('createQuiz', { path: '/createQuiz'
    });
    { this.route('leaderboard');
    };
    { this.route('quizList', {path: '/quizzes'});
        this.route('quizPage', { path: '/quizzes/:_id',
            data: function() { return Quizzes.findOne(this.params._id); }
        }); }

        this.route('editQuiz', { path: '/quizzes/edit/:_id',
            data: function() { return Quizzes.findOne(this.params._id); }
        });

});

Router.onBeforeAction('loading');


