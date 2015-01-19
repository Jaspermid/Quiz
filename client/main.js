/**
 * Created by Jasper on 27/05/14.
 */



Meteor.subscribe('score');

Meteor.subscribe("userdata");

Meteor.subscribe("test");

if(Meteor.isClient) {
    window.fbAsyncInit = function() {
        FB.init({
            appId      : '676904182383819',
            status     : true,
            xfbml      : true
        });
    };

}